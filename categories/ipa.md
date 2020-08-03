---
layout: category
title: IPAs (Pale Ales, APAs)
permalink: '/categories/ipa'
---

## Blog Posts

{% for post in collections['ipa'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
