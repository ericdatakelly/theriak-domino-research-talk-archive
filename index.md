---
layout: default
title: Forum Archive
---

<div class="archive-notice">
  This is a read-only archive of the <strong>Research-Talk</strong> forum, originally hosted at
  <a href="https://research-talk.org">research-talk.org</a>.
  The forum was a community space for users of the
  <a href="https://serc.carleton.edu/research_education/equilibria/theriak-domino.html">Theriak-Domino</a>
  thermodynamic calculation software.
</div>

<h1>Forum Archive</h1>

<ul class="forum-list">
  {% for forum in site.forums %}
  <li>
    <div class="forum-name"><a href="{{ '/' | append: forum.slug | append: '/' | relative_url }}">{{ forum.name }}</a></div>
    <div class="forum-desc">{{ forum.description }}</div>
  </li>
  {% endfor %}
</ul>
