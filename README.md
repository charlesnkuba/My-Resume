# HTML résumé website — prototype

A small HTML project by Charles Nkuba that presents education, technical interests and practical experience using semantic sections and multi-page links.

[Live résumé prototype](https://charlesnkuba.github.io/My-Resume/) · [Current portfolio](https://charlesnkuba.github.io/) · [LinkedIn](https://www.linkedin.com/in/nkubacharles8)

![HTML résumé homepage](docs/screenshots/resume.jpg)

## What it demonstrates

HTML document structure, headings, paragraphs, lists, links, page metadata and navigation. Content includes my IT department internship, Internet Fundamentals certificate and current prototype projects. Education is marked as in progress.

The project is an introductory prototype, not a formal application CV or a full web application. It has no backend, database or authentication.

## Run locally

Open `index.html` in a browser, or run:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000/`. No dependencies or build step are needed.

## Structure

- `index.html`: résumé prototype
- `Public/Contact Me.html`: professional contact links
- `Public/My Hobbies.html`: original interests page
- `docs/screenshots/resume.jpg`: captured live homepage preview

## Content maintenance

The old internship-seeking summary has been updated with current experience. A broken empty image was removed. Residential address, birth date, marital status and referee contact details are omitted from the current pages. Earlier commits can still contain historical content.

## Limitations and next work

The page intentionally uses simple HTML with browser-default presentation. Custom styling and detailed mobile/assistive-technology testing remain future work. Current application documents should be prepared separately for each role.
