---
layout: category
title: Oktoberfests (Marzen)
permalink: '/categories/oktoberfest.html'
---

## Blog Posts

{% for post in site.categories['oktoberfest'] %}
  * {{ balanced | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
