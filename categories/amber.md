---
layout: category
title: Ambers
permalink: '/categories/amber'
---

## Blog Posts

{% for post in site.categories['amber'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
