# Projekte

<br><br>

### Bachelorarbeit: Interpretable Deepfake Voice Detection: A Hybrid Deep-Learning Model and Explanation Evaluation

Dieses Projekt, meine Bachelorarbeit, behandelt Explainable AI (XAI) in der Erkennung von
Audio-Deepfakes. Hierfür habe ich eine neue Modellarchitektur entwickelt, die besonders gut
dafür geeignet ist, Features mit vielfältigen Dimensionalitäten in eine Klassifikation zu
kombinieren und davon Erklärungen zu generieren. Außerdem führe ich im Rahmen der Arbeit zwei
neue Metriken ein, um die Qualität der Erklärungen aus dem Modell objektiv auszuwerten. Die
Arbeit wurde in der 2025 Explainable AI World Conference präsentiert und in den CEUR Workshop
[Proceedings](https://ceur-ws.org/Vol-4017/#paper_13) veröffentlicht. Außerdem wurde die Arbeit
unter den
[ausgewählten Abschlussarbeiten](https://www.wineme.uni-siegen.de/wp-content/uploads/2025/05/LaRock_Bachelorarbeit.pdf)
von der Universität Siegen veröffentlicht.<br>
Mehr Details sind in der folgenden Repository zu finden:
[Repository](https://github.com/jacoblarock/fake_voices_xai)

<br>

### Agent_CoT_Alignment - Erklärbare Evaluierung der Intentionen von KI-Agenten

Dieses Projekt untersucht die Verwendung von kleinen transformerbasierten Embedding-Modellen,
um zu bewerten, wie gut ein LLM Chain of Thought mit der Intention eines Prompts übereinstimmt.
Dabei werden zwei DistilBERT-basierte Modelle kombiniert, ein eingefrorener Embedder für den
Prompt und ein trainierbarer Evaluator für die Antwort, die mit einem kontrastiven
InfoNCE-ähnlichen Loss auf LLM-generierten aligned und misaligned CoT-Paaren trainiert werden.
Über die binäre Alignment-Klassifikation hinaus ermöglicht das Embedding-basierte Design eine
Token-level Explainability, indem Per-Token-Embeddings mit dem Prompt über Cosine-Similarity
verglichen und als farbcodierte HTML-Ansicht dargestellt werden. Im Vergleich zu
LLM-as-a-Judge-Methoden erlauben die kleinen Modelle eine schnellere, erklärbere, und günstigere
Bewertung, die auch weniger anfällig für Prompt Injection ist.
[Repository](https://github.com/jacoblarock/agent_cot_alignment)

<br>

### Transaction_Manager - REST-API zur Verwaltung gemeinsamer Gruppenausgaben

Dieses Projekt ist eine in Python mit Flask umgesetzte REST-API zur Verwaltung gemeinsamer
Ausgaben in Gruppen. Nutzer können Gruppen erstellen, anderen Nutzern über Invite-Tokens
beitreten, geteilte Transaktionen sowie direkte Zahlungen zwischen Mitgliedern erfassen und
sich die minimale Menge an Überweisungen berechnen lassen, die nötig ist, um die ausstehenden
Salden einer Gruppe auszugleichen. Die Persistenz erfolgt über PostgreSQL und als WSGI-Server
kommt waitress zum Einsatz. Das Deployment ist über Docker bzw. docker-compose abgedeckt
Repository (https://github.com/jacoblarock/transaction_manager)

<br>

### Erweiterung und Umbau des Reporting-Systems in LapID

Zur Automatisierung des Reportings in der LapID Service GmbH habe ich zusammen mit DevOps
Abfragen geschrieben und einen Data Lake eingerichtet, sodass die Auswertungen nicht mehr manuell
ausgeführt werden müssen und dadurch die Effizienz gesteigert werden konnte. Außerdem wurden durch
die Erweiterungen der Datenquellen mehrere Auswertungen ermöglicht, die zuvor nicht möglich
waren.

<br>

### Chroma_Llama

Eine Implementation einer Query-Pipeline für Dokumente in einer Vektordatenbank, um Fragen
anhand dieser zu beantworten. Die Datenbank ist ChromaDB und die LLM Integration erfolgt mit
Ollama. [Repository](https://github.com/jacoblarock/chroma_llama)

<br>

### Paper: A Comprehensive Review on Audio Deepfake Detection with an Emphasis on Explainability

Dieses Paper fokussiert sich auf den aktuellen Zustand von Erklärbarkeit der Erkennung
von Audio-Deepfakes und bietet einen umfassenden Überblick in den Bereich, mit dem Ergebnis,
dass XAI noch nicht ausreichend angewendet worden ist aber, dass das Potenzial durch eine Klasse
von Features besteht, die ich identifiziert habe, die von Menschen besser verstanden werden
können.<br>

<br>

### Marktanalyse inkl. Konkurrenz- und Kundenanalyse für die Webtron GbR

Dieses Projekt war ein Beratungsprojekt für die studentische Unternehmensberatung Study &
Consult eV und wurde 2023 zusammen mit zwei anderen Gruppenmitgliedern erfolgreich
abgeschlossen. Laut einer Standardumfrage am Ende des Projektes wurden die
Erwartungen des Kunden übertroffen und die Ergebnisse waren realistisch und brauchbar.

<br>

### Practice Cards

Practicecards ist eine einfache Webanwendung implementiert in Python und Flask für das
Backend und HTML und Bootstrap CSS kombiniert mit reinem Javascript für das Frontend.
Weitere Details sind in dieser
[Repository](https://github.com/jacoblarock/practicecards) zu finden.
