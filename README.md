## valorant-api.ts

A Typescript library prepared according to the documentation of the Valorant-API.com website.

### Usage
You can review the examples below to use the valorant-api.ts library in your project:

```javascript
import { ValorantApi } from 'valorant-api.ts';

const api = new ValorantApi();

// examples
const agents = await api.agents.getAgents();
const buddies = await api.buddies.getBuddies();
// and so on for other classes.
```

[![npm version](https://badge.fury.io/js/valorant-api.ts.svg)](https://badge.fury.io/js/valorant-api.ts)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)