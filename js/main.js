/* Anna Berger — kleine Helfer für alle Seiten */

(function () {
  "use strict";

  /* ---------- Mobiles Menü ---------- */

  var kopf = document.querySelector(".kopfzeile");
  var knopf = document.querySelector(".menue-knopf");

  if (kopf && knopf) {
    var wort = knopf.querySelector(".menue-wort");

    var setzeMenue = function (offen) {
      kopf.classList.toggle("offen", offen);
      knopf.setAttribute("aria-expanded", String(offen));
      if (wort) wort.textContent = offen ? "Schließen" : "Menü";
    };

    knopf.addEventListener("click", function () {
      setzeMenue(!kopf.classList.contains("offen"));
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && kopf.classList.contains("offen")) {
        setzeMenue(false);
        knopf.focus();
      }
    });

    kopf.querySelectorAll(".navigation a").forEach(function (link) {
      link.addEventListener("click", function () { setzeMenue(false); });
    });
  }

  /* ---------- Kontaktformular ----------
     Die Website hat keinen eigenen Server. Das Formular öffnet deshalb das
     E-Mail-Programm der Besucher mit einer fertig ausgefüllten Nachricht. */

  var formular = document.getElementById("anfrage");
  if (!formular) return;

  var empfaenger = formular.getAttribute("data-empfaenger");
  var hinweis = formular.querySelector(".formular-hinweis");

  function wert(id) {
    return document.getElementById(id).value.trim();
  }

  function datumDeutsch(iso) {
    var teile = iso.split("-");
    return teile.length === 3 ? teile[2] + "." + teile[1] + "." + teile[0] : iso;
  }

  // Anlass aus dem Link übernehmen, z. B. kontakt.html?anlass=Trauerfeier
  var anlassAusLink = new URLSearchParams(window.location.search).get("anlass");
  var auswahl = document.getElementById("f-anlass");
  if (anlassAusLink && auswahl) {
    Array.prototype.forEach.call(auswahl.options, function (option) {
      if (option.value === anlassAusLink) auswahl.value = option.value;
    });
  }

  formular.addEventListener("submit", function (e) {
    e.preventDefault();

    var anlass = auswahl.options[auswahl.selectedIndex].text;
    var datum = wert("f-datum") ? datumDeutsch(wert("f-datum")) : "";
    var betreff = "Anfrage: " + anlass + (datum ? " am " + datum : "");

    var text = [
      "Name: " + wert("f-name"),
      "E-Mail: " + (wert("f-mail") || "–"),
      "Telefon: " + (wert("f-tel") || "–"),
      "Anlass: " + anlass,
      "Datum: " + (datum || "noch offen"),
      "Ort: " + (wert("f-ort") || "–"),
      "",
      wert("f-nachricht")
    ].join("\r\n");

    window.location.href =
      "mailto:" + empfaenger +
      "?subject=" + encodeURIComponent(betreff) +
      "&body=" + encodeURIComponent(text);

    zeigeHinweis(betreff, text);
  });

  function zeigeHinweis(betreff, text) {
    hinweis.textContent = "";
    hinweis.append(
      "Ihr E-Mail-Programm öffnet sich jetzt mit der fertigen Nachricht — dort nur noch auf „Senden“ klicken. " +
      "Falls sich nichts öffnet, schreiben Sie direkt an "
    );

    var link = document.createElement("a");
    link.href = "mailto:" + empfaenger;
    link.textContent = empfaenger;
    hinweis.append(link, ". ");

    if (navigator.clipboard) {
      var kopieren = document.createElement("button");
      kopieren.type = "button";
      kopieren.className = "knopf-klein";
      kopieren.textContent = "Nachricht kopieren";
      kopieren.addEventListener("click", function () {
        navigator.clipboard.writeText("Betreff: " + betreff + "\n\n" + text).then(
          function () { kopieren.textContent = "Kopiert"; },
          function () { kopieren.textContent = "Kopieren nicht möglich"; }
        );
      });
      hinweis.append(kopieren);
    }
  }
})();
