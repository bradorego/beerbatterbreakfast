---
layout: category
title: Scotch Ales
permalink: '/categories/scotch-ale.html'
---

## Blog Posts

{% for post in site.categories['scotch ale'] %}
  * {{ balanced | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
