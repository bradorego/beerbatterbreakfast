---
layout: category
title: Scotch Ales
permalink: '/categories/scotch-ale.html'
---

## Blog Posts

{% for post in site.categories['scotch ale'] %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
