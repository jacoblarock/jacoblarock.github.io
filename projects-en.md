# Projects

<br><br>

### Thesis: Interpretable Deepfake Voice Detection: A Hybrid Deep-Learning Model and Explanation Evaluation

This project, my bachelor thesis, focuses on explainable AI (XAI) in the space of audio
deepfake detection. I developed a novel model architecture that is especially capable of
combining features of diverse dimensionalities into a single end-classification and generating
feature-based explanations. Aside from that, I also introduce two new metrics in this work, in
order to evaluate the quality of the metrics produced by the model in an objective and
mathematical manner. The work was presented at the 2025 Explainable AI World Conference and was
published in the CEUR Workshop [Proceedings](https://ceur-ws.org/Vol-4017/#paper_13).
Additionally, the work was published under the
[selected theses](https://www.wineme.uni-siegen.de/wp-content/uploads/2025/05/LaRock_Bachelorarbeit.pdf)
by the University of Siegen.<br>
For more details, see the repository on
[Repository](https://github.com/jacoblarock/fake_voices_xai).

<br>

### Agent_CoT_Alignment - Explainably Evaluating the Intentions of AI Agents

This is a project exploring the use of small transformer-based embedding models to assess how
well an LLM chain of thought aligns with the intention of a given prompt. Two DistilBERT-based
models are combined, a frozen embedder for the prompt and a trainable evaluator for the response,
trained with a contrastive InfoNCE-style loss on LLM-generated aligned and misaligned CoT pairs.
Aside from binary alignment classification, the embedding-based design enables token-level
explainability by comparing per-token embeddings to the prompt via cosine similarity, rendered as
a color-coded HTML view. Compared to LLM-as-a-judge methods, the small models allow for faster,
more explainable lower-cost evaluation that is also less vulnerable to prompt injection.
[Repository](https://github.com/jacoblarock/agent_cot_alignment)

<br>

**Transaction_Manager – REST‑API for Managing Shared Group Expenses**

This project is a REST‑API implemented in Python with Flask for managing shared expenses within
groups. Users can create groups, join other users via invite tokens, record shared transactions as
well as direct payments between members, and have the minimal number of transfers calculated that
is necessary to settle the outstanding balances of a group. Persistence is handled through
PostgreSQL, and the WSGI server used is **waitress**. Deployment is covered by Docker and
docker‑compose. Repository: <https://github.com/jacoblarock/transaction_manager>

<br>

### Expansion and Rebuild of the Reporting System at LapID

For the purpose of automation of the reporting at LapID Service GmbH, I worked together with the
DevOps to rewrite and expand export queries and establish a data lake for the internal reporting
such that evaluations and report generation no longer had to be done manually, leading to an
increase in efficiency. Aside from that, the expansions to the data available made new
evaluations possible that were not possible before.

<br>

### Chroma_Llama

A simple implementation of a query pipeline to answer questions based on documents stored in a
vector database. Makes use of the vector database ChromaDB and the LLM library Ollama.
[Repository](https://github.com/jacoblarock/chroma_llama)

<br>

### Paper: A Comprehensive Review on Audio Deepfake Detection with an Emphasis on Explainability

This paper focuses on assessing the current state of explainability in the area of audio
deepfake detection and provides a comprehensive view into the domain, with the result that
explainability is not yet implemented as much as it should be and is not yet mature, but that
the potential exists through features that I identified in the paper that could possibly be
understood better by people.<br>

<br>

### Market analysis including customer and competition analysis for Webtron GbR

This project was completed as a consulting project for the Study & Consult eV, completed with
two other members in 2023. According to a survey performed at the end of the project, the
customer's expectations were exceeded, and the results were realistic and usable.

<br>

### Practice Cards

This is a simple web-app written with Python using Flask in addition to HTML and CSS paired with
Bootstrap as well as pure JavaScript. See the
[repository](https://github.com/jacoblarock/practicecards) for more.
