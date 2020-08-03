---
layout: category
title: Bocks
permalink: '/categories/bock'
---

## Blog Posts

{% for post in collections['bock'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
