---
layout: category
title: Oktoberfests (Marzen)
permalink: '/categories/oktoberfest.html'
---

## Blog Posts

{% for post in site.categories['oktoberfest'] %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
