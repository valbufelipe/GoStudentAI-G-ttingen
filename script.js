function generarMensaje() {
  let name = document.getElementById("name").value.trim();
  let alter = document.getElementById("alter").value.trim();
  let studium = document.getElementById("studium").value.trim();
  let datum = document.getElementById("datum").value.trim();
  let budget = document.getElementById("budget").value.trim();
  let personality = document.getElementById("personality").value.trim();
  let language = document.getElementById("language").value;
  let tone = document.getElementById("tone").value;

  if (!name || !alter || !studium || !datum || !budget) {
    document.getElementById("resultado").innerText =
      "Bitte fülle alle wichtigen Felder aus. / Please fill in all required fields.";
    document.getElementById("output-status").innerText = "Error";
    return;
  }

  let cleanPersonality = personality || "freundlich, zuverlässig und respektvoll";
  let cleanPersonalityEN = personality || "friendly, responsible, and respectful";

  cleanPersonality = cleanPersonality
    .replaceAll("böse", "direkt, ehrlich und respektvoll")
    .replaceAll("Böse", "direkt, ehrlich und respektvoll")
    .replaceAll("party", "sozial und offen")
    .replaceAll("Party", "sozial und offen");

  cleanPersonalityEN = cleanPersonalityEN
    .replaceAll("böse", "direct, honest, and respectful")
    .replaceAll("Böse", "direct, honest, and respectful")
    .replaceAll("party", "social and open-minded")
    .replaceAll("Party", "social and open-minded");

  let deutsch =
`DE Deutsch

Hallo! Mein Name ist ${name}, ich bin ${alter} Jahre alt und studiere ${studium} in Göttingen.

Ich suche ein WG-Zimmer ab dem ${datum} mit einem Budget von ungefähr ${budget}. Ich würde mich als ${cleanPersonality} beschreiben.

Ein gutes und entspanntes Zusammenleben ist mir wichtig. Ich würde mich sehr freuen, euch kennenzulernen.

Viele Grüße
${name}`;

  let english =
`EN English

Hello! My name is ${name}, I am ${alter} years old and I study ${studium} in Göttingen.

I am looking for a shared apartment room starting from ${datum}, with a budget of around ${budget}. I would describe myself as ${cleanPersonalityEN}.

A good and relaxed living atmosphere is important to me. I would be very happy to get to know you.

Best regards
${name}`;

  if (tone === "formal") {
    deutsch = deutsch.replace("Hallo!", "Sehr geehrte Damen und Herren,");
    english = english.replace("Hello!", "Dear Sir or Madam,");
  }

  if (tone === "casual") {
    deutsch = deutsch.replace("Hallo!", "Hey!");
    english = english.replace("Hello!", "Hey!");
  }

  if (tone === "short") {
    deutsch =
`DE Deutsch

Hallo! Ich bin ${name}, ${alter} Jahre alt und studiere ${studium} in Göttingen.

Ich suche ab dem ${datum} ein WG-Zimmer bis ca. ${budget}. Ich bin ${cleanPersonality}.

Viele Grüße
${name}`;

    english =
`EN English

Hello! I’m ${name}, ${alter} years old and I study ${studium} in Göttingen.

I’m looking for a shared room from ${datum}, up to around ${budget}. I’m ${cleanPersonalityEN}.

Best regards
${name}`;
  }

  if (language === "de") {
    document.getElementById("resultado").innerText = deutsch;
  } else if (language === "en") {
    document.getElementById("resultado").innerText = english;
  } else {
    document.getElementById("resultado").innerText = deutsch + "\n\n" + english;
  }

  document.getElementById("output-title").innerText = "WG Nachricht";
  document.getElementById("output-status").innerText = "Generated";
}

function copiarMensaje() {
  let texto = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(texto);
  alert("Nachricht kopiert! ✅");
}

function limpiarFormulario() {
  document.getElementById("name").value = "";
  document.getElementById("alter").value = "";
  document.getElementById("studium").value = "";
  document.getElementById("datum").value = "";
  document.getElementById("budget").value = "";
  document.getElementById("personality").value = "";
  document.getElementById("language").value = "both";
  document.getElementById("tone").value = "friendly";

  document.getElementById("resultado").innerText =
    "Fülle das Formular aus und generiere deine Nachricht.";

  document.getElementById("output-title").innerText = "Deine Nachricht";
  document.getElementById("output-status").innerText = "Ready";
}

function seleccionarTool(elemento, titulo) {
  let cards = document.querySelectorAll(".tool-card");

  cards.forEach(card => {
    card.classList.remove("active");
  });

  elemento.classList.add("active");

  let wgTool = document.getElementById("wg-tool");
  let cvTool = document.getElementById("cv-tool");
  let placeholderTool = document.getElementById("placeholder-tool");

  let placeholderTitle = document.getElementById("placeholder-title");
  let placeholderDescription = document.getElementById("placeholder-description");

  wgTool.style.display = "none";
  cvTool.style.display = "none";
  placeholderTool.style.display = "none";

  if (titulo === "WG Message Generator") {
    wgTool.style.display = "block";
    document.getElementById("resultado").innerText =
      "Fülle das Formular aus und generiere deine Nachricht.";
    document.getElementById("output-title").innerText = "WG Nachricht";
    document.getElementById("output-status").innerText = "Ready";
  }

  if (titulo === "CV Helper") {
    cvTool.style.display = "block";
    document.getElementById("resultado").innerText =
      "Fülle das CV-Formular aus und generiere dein Kurzprofil.";
    document.getElementById("output-title").innerText = "CV Profile";
    document.getElementById("output-status").innerText = "Ready";
  }

  if (titulo === "Mini Jobs Finder") {
    placeholderTool.style.display = "block";
    placeholderTitle.innerText = "Mini Jobs Finder";
    placeholderDescription.innerText =
      "Finde studentische Nebenjobs in Göttingen.";
    document.getElementById("resultado").innerText =
      "Mini Jobs Finder kommt bald.";
    document.getElementById("output-title").innerText = "Mini Jobs";
    document.getElementById("output-status").innerText = "Coming Soon";
  }

  if (titulo === "Events Radar") {
    placeholderTool.style.display = "block";
    placeholderTitle.innerText = "Events Radar";
    placeholderDescription.innerText =
      "Entdecke Partys, Events und Aktivitäten.";
    document.getElementById("resultado").innerText =
      "Events Radar kommt bald.";
    document.getElementById("output-title").innerText = "Events Radar";
    document.getElementById("output-status").innerText = "Coming Soon";
  }
}

function generarCV() {
  let name = document.getElementById("cv-name").value.trim();
  let study = document.getElementById("cv-study").value.trim();
  let skills = document.getElementById("cv-skills").value.trim();
  let experience = document.getElementById("cv-experience").value.trim();
  let language = document.getElementById("cv-language").value;

  if (!name || !study || !skills) {
    document.getElementById("resultado").innerText =
      "Bitte fülle Name, Studiengang und Skills aus. / Please fill in name, study program and skills.";
    document.getElementById("output-status").innerText = "Error";
    return;
  }

  let deutsch =
`DE Deutsch

Kurzprofil

Motivierte:r Student:in im Bereich ${study} mit Kenntnissen in ${skills}. ${experience ? "Erste praktische Erfahrungen wurden im Bereich " + experience + " gesammelt." : "Besonders interessiert an praktischen Erfahrungen und neuen Herausforderungen."}

Zuverlässig, lernbereit und kommunikativ. Auf der Suche nach Möglichkeiten, akademisches Wissen praktisch einzusetzen und weiterzuentwickeln.

Name: ${name}`;

  let english =
`EN English

Short Profile

Motivated student in the field of ${study} with skills in ${skills}. ${experience ? "First practical experience has been gained in " + experience + "." : "Especially interested in gaining practical experience and taking on new challenges."}

Reliable, eager to learn, and communicative. Looking for opportunities to apply and develop academic knowledge in a practical environment.

Name: ${name}`;

  if (language === "de") {
    document.getElementById("resultado").innerText = deutsch;
  } else if (language === "en") {
    document.getElementById("resultado").innerText = english;
  } else {
    document.getElementById("resultado").innerText = deutsch + "\n\n" + english;
  }

  document.getElementById("output-title").innerText = "CV Profile";
  document.getElementById("output-status").innerText = "Generated";
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;

  let doc = new jsPDF();

  let title = document.getElementById("output-title").innerText;
  let content = document.getElementById("resultado").innerText;

  content = content
    .replaceAll("🇩🇪", "Deutsch")
    .replaceAll("🇬🇧", "English")
    .replaceAll("😊", "")
    .replaceAll("✅", "");

  doc.setFont("helvetica");
  doc.setFontSize(20);
  doc.text(title, 20, 20);

  doc.setFontSize(12);
  let lines = doc.splitTextToSize(content, 170);
  doc.text(lines, 20, 40);

  doc.save(title + ".pdf");
}