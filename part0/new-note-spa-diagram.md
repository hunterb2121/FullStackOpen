```mermaid
sequenceDiagram
    participant b as Browser
    participant s as Server

    b->>s: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate s
    s-->>b: Return the new note in JSON format for the browser to add to the notes
    deactivate s
```