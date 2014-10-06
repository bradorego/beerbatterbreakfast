---
layout: category
title: Stouts (Porters)
permalink: '/categories/stout.html'
---

## Blog Posts

{% for post in site.categories['stout'] %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
