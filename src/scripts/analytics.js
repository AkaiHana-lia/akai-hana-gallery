(function () {
  const PROJECT_TOKEN = "phc_v2qhkjwDERmScyqLwFwWwKuLSNXoFDrkLuUG3y2rZFjZ";
  const API_HOST = "https://eu.i.posthog.com";
  const UI_HOST = "https://eu.posthog.com";
  const localHosts = new Set(["", "localhost", "127.0.0.1", "::1"]);

  if (window.__AKAI_HANA_POSTHOG_INITIALIZED__) return;
  if (window.location.protocol === "file:" || localHosts.has(window.location.hostname)) return;

  window.__AKAI_HANA_POSTHOG_INITIALIZED__ = true;

  !function (t, e) {
    var o, n, p, r;
    e.__SV || (window.posthog = e, e._i = [], e.init = function (i, s, a) {
      function g(t, e) {
        var o = e.split(".");
        2 == o.length && (t = t[o[0]], e = o[1]);
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }
      (p = t.createElement("script")).type = "text/javascript";
      p.crossOrigin = "anonymous";
      p.async = true;
      p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js";
      (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
      var u = e;
      for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function (t) {
        var e = "posthog";
        return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
      }, u.people.toString = function () {
        return u.toString(1) + ".people (stub)";
      }, o = "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureException captureTraceFeedback captureTraceMetric".split(" "), n = 0; n < o.length; n++) g(u, o[n]);
      e._i.push([i, s, a]);
    }, e.__SV = 1);
  }(document, window.posthog || []);

  let lastPageviewUrl = "";

  function getCurrentSection() {
    const hash = window.location.hash.replace("#", "");
    if (!hash || hash === "home") return "home";
    if (hash === "gallery") return "gallery";
    if (hash === "stories") return "stories";
    if (hash === "pop-culture") return "pop-culture";
    if (hash === "services-contact" || hash === "custom-design-form") return "services-contact";
    return "home";
  }

  function capturePageview(client) {
    const posthogClient = client || window.posthog;
    const currentUrl = window.location.href;

    if (!posthogClient || typeof posthogClient.capture !== "function" || currentUrl === lastPageviewUrl) return;

    lastPageviewUrl = currentUrl;
    posthogClient.capture("$pageview", {
      $current_url: currentUrl,
      akaihana_section: getCurrentSection()
    });
  }

  function queuePageview() {
    window.setTimeout(() => capturePageview(), 0);
  }

  function eventTouchesForm(event) {
    const chain = String(event?.properties?.$elements_chain || "");
    return /\b(form|input|textarea|select)\b/i.test(chain);
  }

  window.posthog.init(PROJECT_TOKEN, {
    api_host: API_HOST,
    ui_host: UI_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
    disable_session_recording: true,
    enable_recording_console_log: false,
    capture_dead_clicks: false,
    autocapture: {
      dom_event_allowlist: ["click"],
      element_allowlist: ["a", "button"],
      css_selector_ignorelist: [".ph-no-autocapture", "[data-ph-no-autocapture]", "form", "form *"],
      capture_copied_text: false
    },
    property_denylist: ["email", "name", "message", "references", "meaning"],
    before_send: function (event) {
      return eventTouchesForm(event) ? null : event;
    },
    loaded: function (posthogClient) {
      capturePageview(posthogClient);
    }
  });

  window.addEventListener("hashchange", queuePageview);
  window.addEventListener("popstate", queuePageview);
})();
