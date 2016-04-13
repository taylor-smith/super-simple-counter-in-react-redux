'use strict';

import { createStore } from 'redux';
import counter from './reducers/reducers.js';

const store = createStore(counter);