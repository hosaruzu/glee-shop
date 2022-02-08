/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASSES": () => (/* binding */ CLASSES),
/* harmony export */   "CLASS_ACTIVE": () => (/* binding */ CLASS_ACTIVE),
/* harmony export */   "CLASS_ARROW": () => (/* binding */ CLASS_ARROW),
/* harmony export */   "CLASS_ARROWS": () => (/* binding */ CLASS_ARROWS),
/* harmony export */   "CLASS_ARROW_NEXT": () => (/* binding */ CLASS_ARROW_NEXT),
/* harmony export */   "CLASS_ARROW_PREV": () => (/* binding */ CLASS_ARROW_PREV),
/* harmony export */   "CLASS_AUTOPLAY": () => (/* binding */ CLASS_AUTOPLAY),
/* harmony export */   "CLASS_CLONE": () => (/* binding */ CLASS_CLONE),
/* harmony export */   "CLASS_CONTAINER": () => (/* binding */ CLASS_CONTAINER),
/* harmony export */   "CLASS_INITIALIZED": () => (/* binding */ CLASS_INITIALIZED),
/* harmony export */   "CLASS_LIST": () => (/* binding */ CLASS_LIST),
/* harmony export */   "CLASS_LOADING": () => (/* binding */ CLASS_LOADING),
/* harmony export */   "CLASS_NEXT": () => (/* binding */ CLASS_NEXT),
/* harmony export */   "CLASS_PAGINATION": () => (/* binding */ CLASS_PAGINATION),
/* harmony export */   "CLASS_PAGINATION_PAGE": () => (/* binding */ CLASS_PAGINATION_PAGE),
/* harmony export */   "CLASS_PAUSE": () => (/* binding */ CLASS_PAUSE),
/* harmony export */   "CLASS_PLAY": () => (/* binding */ CLASS_PLAY),
/* harmony export */   "CLASS_PREV": () => (/* binding */ CLASS_PREV),
/* harmony export */   "CLASS_PROGRESS": () => (/* binding */ CLASS_PROGRESS),
/* harmony export */   "CLASS_PROGRESS_BAR": () => (/* binding */ CLASS_PROGRESS_BAR),
/* harmony export */   "CLASS_ROOT": () => (/* binding */ CLASS_ROOT),
/* harmony export */   "CLASS_SLIDE": () => (/* binding */ CLASS_SLIDE),
/* harmony export */   "CLASS_SLIDER": () => (/* binding */ CLASS_SLIDER),
/* harmony export */   "CLASS_SPINNER": () => (/* binding */ CLASS_SPINNER),
/* harmony export */   "CLASS_TRACK": () => (/* binding */ CLASS_TRACK),
/* harmony export */   "CLASS_VISIBLE": () => (/* binding */ CLASS_VISIBLE),
/* harmony export */   "EVENT_ACTIVE": () => (/* binding */ EVENT_ACTIVE),
/* harmony export */   "EVENT_ARROWS_MOUNTED": () => (/* binding */ EVENT_ARROWS_MOUNTED),
/* harmony export */   "EVENT_ARROWS_UPDATED": () => (/* binding */ EVENT_ARROWS_UPDATED),
/* harmony export */   "EVENT_AUTOPLAY_PAUSE": () => (/* binding */ EVENT_AUTOPLAY_PAUSE),
/* harmony export */   "EVENT_AUTOPLAY_PLAY": () => (/* binding */ EVENT_AUTOPLAY_PLAY),
/* harmony export */   "EVENT_AUTOPLAY_PLAYING": () => (/* binding */ EVENT_AUTOPLAY_PLAYING),
/* harmony export */   "EVENT_CLICK": () => (/* binding */ EVENT_CLICK),
/* harmony export */   "EVENT_DESTROY": () => (/* binding */ EVENT_DESTROY),
/* harmony export */   "EVENT_DRAG": () => (/* binding */ EVENT_DRAG),
/* harmony export */   "EVENT_DRAGGED": () => (/* binding */ EVENT_DRAGGED),
/* harmony export */   "EVENT_DRAGGING": () => (/* binding */ EVENT_DRAGGING),
/* harmony export */   "EVENT_HIDDEN": () => (/* binding */ EVENT_HIDDEN),
/* harmony export */   "EVENT_INACTIVE": () => (/* binding */ EVENT_INACTIVE),
/* harmony export */   "EVENT_LAZYLOAD_LOADED": () => (/* binding */ EVENT_LAZYLOAD_LOADED),
/* harmony export */   "EVENT_MOUNTED": () => (/* binding */ EVENT_MOUNTED),
/* harmony export */   "EVENT_MOVE": () => (/* binding */ EVENT_MOVE),
/* harmony export */   "EVENT_MOVED": () => (/* binding */ EVENT_MOVED),
/* harmony export */   "EVENT_NAVIGATION_MOUNTED": () => (/* binding */ EVENT_NAVIGATION_MOUNTED),
/* harmony export */   "EVENT_PAGINATION_MOUNTED": () => (/* binding */ EVENT_PAGINATION_MOUNTED),
/* harmony export */   "EVENT_PAGINATION_UPDATED": () => (/* binding */ EVENT_PAGINATION_UPDATED),
/* harmony export */   "EVENT_READY": () => (/* binding */ EVENT_READY),
/* harmony export */   "EVENT_REFRESH": () => (/* binding */ EVENT_REFRESH),
/* harmony export */   "EVENT_REPOSITIONED": () => (/* binding */ EVENT_REPOSITIONED),
/* harmony export */   "EVENT_RESIZE": () => (/* binding */ EVENT_RESIZE),
/* harmony export */   "EVENT_RESIZED": () => (/* binding */ EVENT_RESIZED),
/* harmony export */   "EVENT_SCROLL": () => (/* binding */ EVENT_SCROLL),
/* harmony export */   "EVENT_SCROLLED": () => (/* binding */ EVENT_SCROLLED),
/* harmony export */   "EVENT_SHIFTED": () => (/* binding */ EVENT_SHIFTED),
/* harmony export */   "EVENT_SLIDE_KEYDOWN": () => (/* binding */ EVENT_SLIDE_KEYDOWN),
/* harmony export */   "EVENT_UPDATED": () => (/* binding */ EVENT_UPDATED),
/* harmony export */   "EVENT_VISIBLE": () => (/* binding */ EVENT_VISIBLE),
/* harmony export */   "EventBus": () => (/* binding */ EventBus),
/* harmony export */   "EventInterface": () => (/* binding */ EventInterface),
/* harmony export */   "RequestInterval": () => (/* binding */ RequestInterval),
/* harmony export */   "STATUS_CLASSES": () => (/* binding */ STATUS_CLASSES),
/* harmony export */   "Splide": () => (/* binding */ Splide),
/* harmony export */   "SplideRenderer": () => (/* binding */ SplideRenderer),
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "Throttle": () => (/* binding */ Throttle),
/* harmony export */   "default": () => (/* binding */ Splide)
/* harmony export */ });
/*!
 * Splide.js
 * Version  : 3.6.12
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
const PROJECT_CODE = "splide";
const DATA_ATTRIBUTE = `data-${PROJECT_CODE}`;

const CREATED = 1;
const MOUNTED = 2;
const IDLE = 3;
const MOVING = 4;
const DESTROYED = 5;
const STATES = {
  CREATED,
  MOUNTED,
  IDLE,
  MOVING,
  DESTROYED
};

const DEFAULT_EVENT_PRIORITY = 10;
const DEFAULT_USER_EVENT_PRIORITY = 20;

function empty(array) {
  array.length = 0;
}

function isObject(subject) {
  return !isNull(subject) && typeof subject === "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}
function isFunction(subject) {
  return typeof subject === "function";
}
function isString(subject) {
  return typeof subject === "string";
}
function isUndefined(subject) {
  return typeof subject === "undefined";
}
function isNull(subject) {
  return subject === null;
}
function isHTMLElement(subject) {
  return subject instanceof HTMLElement;
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push(...toArray(items));
  return array;
}

const arrayProto = Array.prototype;

function slice(arrayLike, start, end) {
  return arrayProto.slice.call(arrayLike, start, end);
}

function find(arrayLike, predicate) {
  return slice(arrayLike).filter(predicate)[0];
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, (name) => {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, (node) => {
    const parent = ref.parentNode;
    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  return parent ? slice(parent.children).filter((child) => matches(child, selector)) : [];
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

function forOwn(object, iteratee, right) {
  if (object) {
    let keys = Object.keys(object);
    keys = right ? keys.reverse() : keys;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}

function assign(object) {
  slice(arguments, 1).forEach((source) => {
    forOwn(source, (value, key) => {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object, source) {
  forOwn(source, (value, key) => {
    if (isArray(value)) {
      object[key] = value.slice();
    } else if (isObject(value)) {
      object[key] = merge(isObject(object[key]) ? object[key] : {}, value);
    } else {
      object[key] = value;
    }
  });
  return object;
}

function removeAttribute(elm, attrs) {
  if (elm) {
    forEach(attrs, (attr) => {
      elm.removeAttribute(attr);
    });
  }
}

function setAttribute(elm, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, (value2, name) => {
      setAttribute(elm, name, value2);
    });
  } else {
    isNull(value) ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
  }
}

function create(tag, attrs, parent) {
  const elm = document.createElement(tag);
  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }
  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }
  if (!isNull(value)) {
    const { style: style2 } = elm;
    value = `${value}`;
    if (style2[prop] !== value) {
      style2[prop] = value;
    }
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({ preventScroll: true });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, (node) => {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function measure(parent, value) {
  if (isString(value)) {
    const div = create("div", { style: `width: ${value}; position: absolute;` }, parent);
    value = rect(div).width;
    remove(div);
  }
  return value;
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();
  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return slice(parent.querySelectorAll(selector));
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function unit(value) {
  return isString(value) ? value : value ? `${value}px` : "";
}

function assert(condition, message = "") {
  if (!condition) {
    throw new Error(`[${PROJECT_CODE}] ${message}`);
  }
}

function nextTick(callback) {
  setTimeout(callback);
}

const noop = () => {
};

function raf(func) {
  return requestAnimationFrame(func);
}

const { min, max, floor, ceil, abs } = Math;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, minOrMax, maxOrMin, exclusive) {
  const minimum = min(minOrMax, maxOrMin);
  const maximum = max(minOrMax, maxOrMin);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  const minimum = min(x, y);
  const maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, (replacement) => {
    string = string.replace("%s", `${replacement}`);
  });
  return string;
}

function pad(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

const ids = {};
function uniqueId(prefix) {
  return `${prefix}${pad(ids[prefix] = (ids[prefix] || 0) + 1)}`;
}

function EventBus() {
  let handlers = {};
  function on(events, callback, key, priority = DEFAULT_EVENT_PRIORITY) {
    forEachEvent(events, (event, namespace) => {
      handlers[event] = handlers[event] || [];
      push(handlers[event], {
        _event: event,
        _callback: callback,
        _namespace: namespace,
        _priority: priority,
        _key: key
      }).sort((handler1, handler2) => handler1._priority - handler2._priority);
    });
  }
  function off(events, key) {
    forEachEvent(events, (event, namespace) => {
      const eventHandlers = handlers[event];
      handlers[event] = eventHandlers && eventHandlers.filter((handler) => {
        return handler._key ? handler._key !== key : key || handler._namespace !== namespace;
      });
    });
  }
  function offBy(key) {
    forOwn(handlers, (eventHandlers, event) => {
      off(event, key);
    });
  }
  function emit(event) {
    (handlers[event] || []).forEach((handler) => {
      handler._callback.apply(handler, slice(arguments, 1));
    });
  }
  function destroy() {
    handlers = {};
  }
  function forEachEvent(events, iteratee) {
    toArray(events).join(" ").split(" ").forEach((eventNS) => {
      const fragments = eventNS.split(".");
      iteratee(fragments[0], fragments[1]);
    });
  }
  return {
    on,
    off,
    offBy,
    emit,
    destroy
  };
}

const EVENT_MOUNTED = "mounted";
const EVENT_READY = "ready";
const EVENT_MOVE = "move";
const EVENT_MOVED = "moved";
const EVENT_SHIFTED = "shifted";
const EVENT_CLICK = "click";
const EVENT_ACTIVE = "active";
const EVENT_INACTIVE = "inactive";
const EVENT_VISIBLE = "visible";
const EVENT_HIDDEN = "hidden";
const EVENT_SLIDE_KEYDOWN = "slide:keydown";
const EVENT_REFRESH = "refresh";
const EVENT_UPDATED = "updated";
const EVENT_RESIZE = "resize";
const EVENT_RESIZED = "resized";
const EVENT_REPOSITIONED = "repositioned";
const EVENT_DRAG = "drag";
const EVENT_DRAGGING = "dragging";
const EVENT_DRAGGED = "dragged";
const EVENT_SCROLL = "scroll";
const EVENT_SCROLLED = "scrolled";
const EVENT_DESTROY = "destroy";
const EVENT_ARROWS_MOUNTED = "arrows:mounted";
const EVENT_ARROWS_UPDATED = "arrows:updated";
const EVENT_PAGINATION_MOUNTED = "pagination:mounted";
const EVENT_PAGINATION_UPDATED = "pagination:updated";
const EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
const EVENT_AUTOPLAY_PLAY = "autoplay:play";
const EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
const EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
const EVENT_LAZYLOAD_LOADED = "lazyload:loaded";

function EventInterface(Splide2) {
  const { event } = Splide2;
  const key = {};
  let listeners = [];
  function on(events, callback, priority) {
    event.on(events, callback, key, priority);
  }
  function off(events) {
    event.off(events, key);
  }
  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, (target, event2) => {
      listeners.push([target, event2, callback, options]);
      target.addEventListener(event2, callback, options);
    });
  }
  function unbind(targets, events, callback) {
    forEachEvent(targets, events, (target, event2) => {
      listeners = listeners.filter((listener) => {
        if (listener[0] === target && listener[1] === event2 && (!callback || listener[2] === callback)) {
          target.removeEventListener(event2, listener[2], listener[3]);
          return false;
        }
        return true;
      });
    });
  }
  function forEachEvent(targets, events, iteratee) {
    forEach(targets, (target) => {
      if (target) {
        events.split(" ").forEach(iteratee.bind(null, target));
      }
    });
  }
  function destroy() {
    listeners = listeners.filter((data) => unbind(data[0], data[1]));
    event.offBy(key);
  }
  event.on(EVENT_DESTROY, destroy, key);
  return {
    on,
    off,
    emit: event.emit,
    bind,
    unbind,
    destroy
  };
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  const { now } = Date;
  let startTime;
  let rate = 0;
  let id;
  let paused = true;
  let count = 0;
  function update() {
    if (!paused) {
      const elapsed = now() - startTime;
      if (elapsed >= interval) {
        rate = 1;
        startTime = now();
      } else {
        rate = elapsed / interval;
      }
      if (onUpdate) {
        onUpdate(rate);
      }
      if (rate === 1) {
        onInterval();
        if (limit && ++count >= limit) {
          return pause();
        }
      }
      raf(update);
    }
  }
  function start(resume) {
    !resume && cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    raf(update);
  }
  function pause() {
    paused = true;
  }
  function rewind() {
    startTime = now();
    rate = 0;
    if (onUpdate) {
      onUpdate(rate);
    }
  }
  function cancel() {
    cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }
  function set(time) {
    interval = time;
  }
  function isPaused() {
    return paused;
  }
  return {
    start,
    rewind,
    pause,
    cancel,
    set,
    isPaused
  };
}

function State(initialState) {
  let state = initialState;
  function set(value) {
    state = value;
  }
  function is(states) {
    return includes(toArray(states), state);
  }
  return { set, is };
}

function Throttle(func, duration) {
  let interval;
  function throttled() {
    if (!interval) {
      interval = RequestInterval(duration || 0, () => {
        func.apply(this, arguments);
        interval = null;
      }, null, 1);
      interval.start();
    }
  }
  return throttled;
}

function Options(Splide2, Components2, options) {
  const throttledObserve = Throttle(observe);
  let initialOptions;
  let points;
  let currPoint;
  function setup() {
    try {
      merge(options, JSON.parse(getAttribute(Splide2.root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, e.message);
    }
    initialOptions = merge({}, options);
    const { breakpoints } = options;
    if (breakpoints) {
      const isMin = options.mediaQuery === "min";
      points = Object.keys(breakpoints).sort((n, m) => isMin ? +m - +n : +n - +m).map((point) => [
        point,
        matchMedia(`(${isMin ? "min" : "max"}-width:${point}px)`)
      ]);
      observe();
    }
  }
  function mount() {
    if (points) {
      addEventListener("resize", throttledObserve);
    }
  }
  function destroy(completely) {
    if (completely) {
      removeEventListener("resize", throttledObserve);
    }
  }
  function observe() {
    const item = find(points, (item2) => item2[1].matches) || [];
    if (item[0] !== currPoint) {
      onMatch(currPoint = item[0]);
    }
  }
  function onMatch(point) {
    const newOptions = options.breakpoints[point] || initialOptions;
    if (newOptions.destroy) {
      Splide2.options = initialOptions;
      Splide2.destroy(newOptions.destroy === "completely");
    } else {
      if (Splide2.state.is(DESTROYED)) {
        destroy(true);
        Splide2.mount();
      }
      Splide2.options = newOptions;
    }
  }
  return {
    setup,
    mount,
    destroy
  };
}

const RTL = "rtl";
const TTB = "ttb";

const ORIENTATION_MAP = {
  marginRight: ["marginBottom", "marginLeft"],
  autoWidth: ["autoHeight"],
  fixedWidth: ["fixedHeight"],
  paddingLeft: ["paddingTop", "paddingRight"],
  paddingRight: ["paddingBottom", "paddingLeft"],
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: ["ArrowUp", "ArrowRight"],
  ArrowRight: ["ArrowDown", "ArrowLeft"]
};
function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly) {
    const { direction } = options;
    const index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop][index] || prop;
  }
  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }
  return {
    resolve,
    orient
  };
}

const CLASS_ROOT = PROJECT_CODE;
const CLASS_SLIDER = `${PROJECT_CODE}__slider`;
const CLASS_TRACK = `${PROJECT_CODE}__track`;
const CLASS_LIST = `${PROJECT_CODE}__list`;
const CLASS_SLIDE = `${PROJECT_CODE}__slide`;
const CLASS_CLONE = `${CLASS_SLIDE}--clone`;
const CLASS_CONTAINER = `${CLASS_SLIDE}__container`;
const CLASS_ARROWS = `${PROJECT_CODE}__arrows`;
const CLASS_ARROW = `${PROJECT_CODE}__arrow`;
const CLASS_ARROW_PREV = `${CLASS_ARROW}--prev`;
const CLASS_ARROW_NEXT = `${CLASS_ARROW}--next`;
const CLASS_PAGINATION = `${PROJECT_CODE}__pagination`;
const CLASS_PAGINATION_PAGE = `${CLASS_PAGINATION}__page`;
const CLASS_PROGRESS = `${PROJECT_CODE}__progress`;
const CLASS_PROGRESS_BAR = `${CLASS_PROGRESS}__bar`;
const CLASS_AUTOPLAY = `${PROJECT_CODE}__autoplay`;
const CLASS_PLAY = `${PROJECT_CODE}__play`;
const CLASS_PAUSE = `${PROJECT_CODE}__pause`;
const CLASS_SPINNER = `${PROJECT_CODE}__spinner`;
const CLASS_INITIALIZED = "is-initialized";
const CLASS_ACTIVE = "is-active";
const CLASS_PREV = "is-prev";
const CLASS_NEXT = "is-next";
const CLASS_VISIBLE = "is-visible";
const CLASS_LOADING = "is-loading";
const STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING];
const CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function Elements(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  const { root } = Splide2;
  const elements = {};
  const slides = [];
  let classes;
  let slider;
  let track;
  let list;
  function setup() {
    collect();
    identify();
    addClass(root, classes = getClasses());
  }
  function mount() {
    on(EVENT_REFRESH, refresh, DEFAULT_EVENT_PRIORITY - 2);
    on(EVENT_UPDATED, update);
  }
  function destroy() {
    [root, track, list].forEach((elm) => {
      removeAttribute(elm, "style");
    });
    empty(slides);
    removeClass(root, classes);
  }
  function refresh() {
    destroy();
    setup();
  }
  function update() {
    removeClass(root, classes);
    addClass(root, classes = getClasses());
  }
  function collect() {
    slider = child(root, `.${CLASS_SLIDER}`);
    track = query(root, `.${CLASS_TRACK}`);
    list = child(track, `.${CLASS_LIST}`);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, `.${CLASS_SLIDE}:not(.${CLASS_CLONE})`));
    const autoplay = find(`.${CLASS_AUTOPLAY}`);
    const arrows = find(`.${CLASS_ARROWS}`);
    assign(elements, {
      root,
      slider,
      track,
      list,
      slides,
      arrows,
      autoplay,
      prev: query(arrows, `.${CLASS_ARROW_PREV}`),
      next: query(arrows, `.${CLASS_ARROW_NEXT}`),
      bar: query(find(`.${CLASS_PROGRESS}`), `.${CLASS_PROGRESS_BAR}`),
      play: query(autoplay, `.${CLASS_PLAY}`),
      pause: query(autoplay, `.${CLASS_PAUSE}`)
    });
  }
  function identify() {
    const id = root.id || uniqueId(PROJECT_CODE);
    root.id = id;
    track.id = track.id || `${id}-track`;
    list.id = list.id || `${id}-list`;
  }
  function find(selector) {
    return child(root, selector) || child(slider, selector);
  }
  function getClasses() {
    return [
      `${CLASS_ROOT}--${options.type}`,
      `${CLASS_ROOT}--${options.direction}`,
      options.drag && `${CLASS_ROOT}--draggable`,
      options.isNavigation && `${CLASS_ROOT}--nav`,
      CLASS_ACTIVE
    ];
  }
  return assign(elements, {
    setup,
    mount,
    destroy
  });
}

const ROLE = "role";
const ARIA_CONTROLS = "aria-controls";
const ARIA_CURRENT = "aria-current";
const ARIA_LABEL = "aria-label";
const ARIA_HIDDEN = "aria-hidden";
const TAB_INDEX = "tabindex";
const DISABLED = "disabled";
const ARIA_ORIENTATION = "aria-orientation";
const ALL_ATTRIBUTES = [
  ROLE,
  ARIA_CONTROLS,
  ARIA_CURRENT,
  ARIA_LABEL,
  ARIA_HIDDEN,
  ARIA_ORIENTATION,
  TAB_INDEX,
  DISABLED
];

const SLIDE = "slide";
const LOOP = "loop";
const FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  const { on, emit, bind, destroy: destroyEvents } = EventInterface(Splide2);
  const { Components, root, options } = Splide2;
  const { isNavigation, updateOnMove } = options;
  const { resolve } = Components.Direction;
  const styles = getAttribute(slide, "style");
  const isClone = slideIndex > -1;
  const container = child(slide, `.${CLASS_CONTAINER}`);
  const focusableNodes = options.focusableNodes && queryAll(slide, options.focusableNodes);
  let destroyed;
  function mount() {
    if (!isClone) {
      slide.id = `${root.id}-slide${pad(index + 1)}`;
    }
    bind(slide, "click keydown", (e) => {
      emit(e.type === "click" ? EVENT_CLICK : EVENT_SLIDE_KEYDOWN, self, e);
    });
    on([EVENT_REFRESH, EVENT_REPOSITIONED, EVENT_SHIFTED, EVENT_MOVED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);
    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }
  function destroy() {
    destroyed = true;
    destroyEvents();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
  }
  function initNavigation() {
    const idx = isClone ? slideIndex : index;
    const label = format(options.i18n.slideX, idx + 1);
    const controls = Splide2.splides.map((target) => target.splide.root.id).join(" ");
    setAttribute(slide, ARIA_LABEL, label);
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, "menuitem");
    updateActivity(isActive());
  }
  function onMove() {
    if (!destroyed) {
      update();
    }
  }
  function update() {
    if (!destroyed) {
      const { index: currIndex } = Splide2;
      updateActivity(isActive());
      updateVisibility(isVisible());
      toggleClass(slide, CLASS_PREV, index === currIndex - 1);
      toggleClass(slide, CLASS_NEXT, index === currIndex + 1);
    }
  }
  function updateActivity(active) {
    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      if (isNavigation) {
        setAttribute(slide, ARIA_CURRENT, active || null);
      }
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }
  function updateVisibility(visible) {
    const hidden = !visible && (!isActive() || isClone);
    setAttribute(slide, ARIA_HIDDEN, hidden || null);
    setAttribute(slide, TAB_INDEX, !hidden && options.slideFocus ? 0 : null);
    if (focusableNodes) {
      focusableNodes.forEach((node) => {
        setAttribute(node, TAB_INDEX, hidden ? -1 : null);
      });
    }
    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }
  }
  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }
  function isActive() {
    const { index: curr } = Splide2;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }
  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }
    const trackRect = rect(Components.Elements.track);
    const slideRect = rect(slide);
    const left = resolve("left");
    const right = resolve("right");
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }
  function isWithin(from, distance) {
    let diff = abs(from - index);
    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }
    return diff <= distance;
  }
  const self = {
    index,
    slideIndex,
    slide,
    container,
    isClone,
    mount,
    destroy,
    update,
    style: style$1,
    isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  const { on, emit, bind } = EventInterface(Splide2);
  const { slides, list } = Components2.Elements;
  const Slides2 = [];
  function mount() {
    init();
    on(EVENT_REFRESH, refresh);
    on([EVENT_MOUNTED, EVENT_REFRESH], () => {
      Slides2.sort((Slide1, Slide2) => Slide1.index - Slide2.index);
    });
  }
  function init() {
    slides.forEach((slide, index) => {
      register(slide, index, -1);
    });
  }
  function destroy() {
    forEach$1((Slide2) => {
      Slide2.destroy();
    });
    empty(Slides2);
  }
  function refresh() {
    destroy();
    init();
  }
  function update() {
    forEach$1((Slide2) => {
      Slide2.update();
    });
  }
  function register(slide, index, slideIndex) {
    const object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
  }
  function get(excludeClones) {
    return excludeClones ? filter((Slide2) => !Slide2.isClone) : Slides2;
  }
  function getIn(page) {
    const { Controller } = Components2;
    const index = Controller.toIndex(page);
    const max = Controller.hasFocus() ? 1 : options.perPage;
    return filter((Slide2) => between(Slide2.index, index, index + max - 1));
  }
  function getAt(index) {
    return filter(index)[0];
  }
  function add(items, index) {
    forEach(items, (slide) => {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }
      if (isHTMLElement(slide)) {
        const ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, emit.bind(null, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }
  function remove$1(matcher) {
    remove(filter(matcher).map((Slide2) => Slide2.slide));
    emit(EVENT_REFRESH);
  }
  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }
  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : (Slide2) => isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index));
  }
  function style(prop, value, useContainer) {
    forEach$1((Slide2) => {
      Slide2.style(prop, value, useContainer);
    });
  }
  function observeImages(elm, callback) {
    const images = queryAll(elm, "img");
    let { length } = images;
    if (length) {
      images.forEach((img) => {
        bind(img, "load error", () => {
          if (!--length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }
  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }
  function isEnough() {
    return Slides2.length > options.perPage;
  }
  return {
    mount,
    destroy,
    update,
    register,
    get,
    getIn,
    getAt,
    add,
    remove: remove$1,
    forEach: forEach$1,
    filter,
    style,
    getLength,
    isEnough
  };
}

function Layout(Splide2, Components2, options) {
  const { on, bind, emit } = EventInterface(Splide2);
  const { Slides } = Components2;
  const { resolve } = Components2.Direction;
  const { root, track, list } = Components2.Elements;
  const { getAt } = Slides;
  let vertical;
  let rootRect;
  function mount() {
    init();
    bind(window, "resize load", Throttle(emit.bind(this, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }
  function init() {
    rootRect = null;
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize();
  }
  function resize() {
    const newRect = rect(root);
    if (!rootRect || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      Slides.style(resolve("marginRight"), unit(options.gap));
      Slides.style("width", cssSlideWidth() || null);
      setSlidesHeight();
      rootRect = newRect;
      emit(EVENT_RESIZED);
    }
  }
  function setSlidesHeight() {
    Slides.style("height", cssSlideHeight() || null, true);
  }
  function cssPadding(right) {
    const { padding } = options;
    const prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }
  function cssTrackHeight() {
    let height = "";
    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = `calc(${height} - ${cssPadding(false)} - ${cssPadding(true)})`;
    }
    return height;
  }
  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }
  function cssSlideWidth() {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }
  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? "" : cssSlideSize() : cssHeight());
  }
  function cssSlideSize() {
    const gap = unit(options.gap);
    return `calc((100%${gap && ` + ${gap}`})/${options.perPage || 1}${gap && ` - ${gap}`})`;
  }
  function listSize() {
    return rect(list)[resolve("width")];
  }
  function slideSize(index, withoutGap) {
    const Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }
  function totalSize(index, withoutGap) {
    const Slide = getAt(index);
    if (Slide) {
      const right = rect(Slide.slide)[resolve("right")];
      const left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }
    return 0;
  }
  function sliderSize() {
    return totalSize(Splide2.length - 1, true) - totalSize(-1, true);
  }
  function getGap() {
    const Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }
  function getPadding(right) {
    return parseFloat(style(track, resolve(`padding${right ? "Right" : "Left"}`))) || 0;
  }
  return {
    mount,
    listSize,
    slideSize,
    sliderSize,
    totalSize,
    getPadding
  };
}

function Clones(Splide2, Components2, options) {
  const { on, emit } = EventInterface(Splide2);
  const { Elements, Slides } = Components2;
  const { resolve } = Components2.Direction;
  const clones = [];
  let cloneCount;
  function mount() {
    init();
    on(EVENT_REFRESH, refresh);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
  }
  function init() {
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      emit(EVENT_RESIZE);
    }
  }
  function destroy() {
    remove(clones);
    empty(clones);
  }
  function refresh() {
    destroy();
    init();
  }
  function observe() {
    if (cloneCount < computeCloneCount()) {
      emit(EVENT_REFRESH);
    }
  }
  function generate(count) {
    const slides = Slides.get().slice();
    const { length } = slides;
    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }
      push(slides.slice(-count), slides.slice(0, count)).forEach((Slide, index) => {
        const isHead = index < count;
        const clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }
  function cloneDeep(elm, index) {
    const clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = `${Splide2.root.id}-clone${pad(index + 1)}`;
    return clone;
  }
  function computeCloneCount() {
    let { clones: clones2 } = options;
    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (!clones2) {
      const fixedSize = measure(Elements.list, options[resolve("fixedWidth")]);
      const fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      const baseCount = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage;
      clones2 = baseCount * (options.drag ? (options.flickMaxPages || 1) + 1 : 2);
    }
    return clones2;
  }
  return {
    mount,
    destroy
  };
}

function Move(Splide2, Components2, options) {
  const { on, emit } = EventInterface(Splide2);
  const { slideSize, getPadding, totalSize, listSize, sliderSize } = Components2.Layout;
  const { resolve, orient } = Components2.Direction;
  const { list, track } = Components2.Elements;
  let Transition;
  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }
  function destroy() {
    removeAttribute(list, "style");
  }
  function reposition() {
    if (!isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      emit(EVENT_REPOSITIONED);
    }
  }
  function move(dest, index, prev, callback) {
    if (!isBusy()) {
      const { set } = Splide2.state;
      const position = getPosition();
      if (dest !== index) {
        Transition.cancel();
        translate(shift(position, dest > index), true);
      }
      set(MOVING);
      emit(EVENT_MOVE, index, prev, dest);
      Transition.start(index, () => {
        set(IDLE);
        emit(EVENT_MOVED, index, prev, dest);
        if (options.trimSpace === "move" && dest !== prev && position === getPosition()) {
          Components2.Controller.go(dest > prev ? ">" : "<", false, callback);
        } else {
          callback && callback();
        }
      });
    }
  }
  function jump(index) {
    translate(toPosition(index, true));
  }
  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      const destination = preventLoop ? position : loop(position);
      list.style.transform = `translate${resolve("X")}(${destination}px)`;
      position !== destination && emit(EVENT_SHIFTED);
    }
  }
  function loop(position) {
    if (Splide2.is(LOOP)) {
      const diff = orient(position - getPosition());
      const exceededMin = exceededLimit(false, position) && diff < 0;
      const exceededMax = exceededLimit(true, position) && diff > 0;
      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }
    return position;
  }
  function shift(position, backwards) {
    const excess = position - getLimit(backwards);
    const size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }
  function cancel() {
    translate(getPosition());
    Transition.cancel();
  }
  function toIndex(position) {
    const Slides = Components2.Slides.get();
    let index = 0;
    let minDistance = Infinity;
    for (let i = 0; i < Slides.length; i++) {
      const slideIndex = Slides[i].index;
      const distance = abs(toPosition(slideIndex, true) - position);
      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }
    return index;
  }
  function toPosition(index, trimming) {
    const position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }
  function getPosition() {
    const left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }
  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize() - listSize()));
    }
    return position;
  }
  function offset(index) {
    const { focus } = options;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }
  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }
  function isBusy() {
    return Splide2.state.is(MOVING) && options.waitForTransition;
  }
  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    const exceededMin = max !== true && orient(position) < orient(getLimit(false));
    const exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }
  return {
    mount,
    destroy,
    move,
    jump,
    translate,
    shift,
    cancel,
    toIndex,
    toPosition,
    getPosition,
    getLimit,
    isBusy,
    exceededLimit
  };
}

function Controller(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  const { Move } = Components2;
  const { getPosition, getLimit } = Move;
  const { isEnough, getLength } = Components2.Slides;
  const isLoop = Splide2.is(LOOP);
  const isSlide = Splide2.is(SLIDE);
  let currIndex = options.start || 0;
  let prevIndex = currIndex;
  let slideCount;
  let perMove;
  let perPage;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH], init, DEFAULT_EVENT_PRIORITY - 1);
  }
  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    currIndex = clamp(currIndex, 0, slideCount - 1);
  }
  function go(control, allowSameIndex, callback) {
    const dest = parse(control);
    if (options.useScroll) {
      scroll(dest, true, true, options.speed, callback);
    } else {
      const index = loop(dest);
      if (index > -1 && !Move.isBusy() && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }
  function scroll(destination, useIndex, snap, duration, callback) {
    const dest = useIndex ? destination : toDest(destination);
    Components2.Scroll.scroll(useIndex || snap ? Move.toPosition(dest, true) : destination, duration, () => {
      setIndex(Move.toIndex(Move.getPosition()));
      callback && callback();
    });
  }
  function parse(control) {
    let index = currIndex;
    if (isString(control)) {
      const [, indicator, number] = control.match(/([+\-<>])(\d+)?/) || [];
      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +`${indicator}${+number || 1}`, currIndex, true);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, getEnd());
    }
    return index;
  }
  function getNext(destination) {
    return getAdjacent(false, destination);
  }
  function getPrev(destination) {
    return getAdjacent(true, destination);
  }
  function getAdjacent(prev, destination) {
    const number = perMove || (hasFocus() ? 1 : perPage);
    const dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex);
    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : getEnd();
      }
    }
    return destination ? dest : loop(dest);
  }
  function computeDestIndex(dest, from, incremental) {
    if (isEnough()) {
      const end = getEnd();
      if (dest < 0 || dest > end) {
        if (between(0, dest, from, true) || between(end, from, dest, true)) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = perMove || hasFocus() ? dest : dest < 0 ? -(slideCount % perPage || perPage) : slideCount;
          } else if (options.rewind) {
            dest = dest < 0 ? end : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (!incremental && dest !== from) {
          dest = perMove ? dest : toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }
    return dest;
  }
  function getEnd() {
    let end = slideCount - perPage;
    if (hasFocus() || isLoop && perMove) {
      end = slideCount - 1;
    }
    return max(end, 0);
  }
  function loop(index) {
    if (isLoop) {
      return isEnough() ? index % slideCount + (index < 0 ? slideCount : 0) : -1;
    }
    return index;
  }
  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, getEnd());
  }
  function toPage(index) {
    if (!hasFocus()) {
      index = between(index, slideCount - perPage, slideCount - 1) ? slideCount - 1 : index;
      index = floor(index / perPage);
    }
    return index;
  }
  function toDest(destination) {
    const closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, getEnd()) : closest;
  }
  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }
  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }
  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }
  return {
    mount,
    go,
    scroll,
    getNext,
    getPrev,
    getAdjacent,
    getEnd,
    setIndex,
    getIndex,
    toIndex,
    toPage,
    toDest,
    hasFocus
  };
}

const XML_NAME_SPACE = "http://www.w3.org/2000/svg";
const PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
const SIZE = 40;

function Arrows(Splide2, Components2, options) {
  const { on, bind, emit } = EventInterface(Splide2);
  const { classes, i18n } = options;
  const { Elements, Controller } = Components2;
  let wrapper = Elements.arrows;
  let prev = Elements.prev;
  let next = Elements.next;
  let created;
  const arrows = {};
  function mount() {
    init();
    on(EVENT_UPDATED, init);
  }
  function init() {
    if (options.arrows) {
      if (!prev || !next) {
        createArrows();
      }
    }
    if (prev && next) {
      if (!arrows.prev) {
        const { id } = Elements.track;
        setAttribute(prev, ARIA_CONTROLS, id);
        setAttribute(next, ARIA_CONTROLS, id);
        arrows.prev = prev;
        arrows.next = next;
        listen();
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      } else {
        display(wrapper, options.arrows === false ? "none" : "");
      }
    }
  }
  function destroy() {
    if (created) {
      remove(wrapper);
    } else {
      removeAttribute(prev, ALL_ATTRIBUTES);
      removeAttribute(next, ALL_ATTRIBUTES);
    }
  }
  function listen() {
    const { go } = Controller;
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_UPDATED, EVENT_REFRESH, EVENT_SCROLLED], update);
    bind(next, "click", () => {
      go(">", true);
    });
    bind(prev, "click", () => {
      go("<", true);
    });
  }
  function createArrows() {
    wrapper = create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    before(wrapper, child(options.arrows === "slider" && Elements.slider || Splide2.root));
  }
  function createArrow(prev2) {
    const arrow = `<button class="${classes.arrow} ${prev2 ? classes.prev : classes.next}" type="button"><svg xmlns="${XML_NAME_SPACE}" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}"><path d="${options.arrowPath || PATH}" />`;
    return parseHtml(arrow);
  }
  function update() {
    const index = Splide2.index;
    const prevIndex = Controller.getPrev();
    const nextIndex = Controller.getNext();
    const prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    const nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    prev.disabled = prevIndex < 0;
    next.disabled = nextIndex < 0;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
    emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
  }
  return {
    arrows,
    mount,
    destroy
  };
}

const INTERVAL_DATA_ATTRIBUTE = `${DATA_ATTRIBUTE}-interval`;

function Autoplay(Splide2, Components2, options) {
  const { on, bind, emit } = EventInterface(Splide2);
  const interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), update);
  const { isPaused } = interval;
  const { Elements } = Components2;
  let hovered;
  let focused;
  let paused;
  function mount() {
    const { autoplay } = options;
    if (autoplay) {
      initButton(true);
      initButton(false);
      listen();
      if (autoplay !== "pause") {
        play();
      }
    }
  }
  function initButton(forPause) {
    const prop = forPause ? "pause" : "play";
    const button = Elements[prop];
    if (button) {
      setAttribute(button, ARIA_CONTROLS, Elements.track.id);
      setAttribute(button, ARIA_LABEL, options.i18n[prop]);
      bind(button, "click", forPause ? pause : play);
    }
  }
  function listen() {
    const { root } = Elements;
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", (e) => {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }
    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", (e) => {
        focused = e.type === "focusin";
        autoToggle();
      });
    }
    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, updateInterval);
  }
  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = paused = false;
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }
  function pause(manual = true) {
    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
    paused = manual;
  }
  function autoToggle() {
    if (!paused) {
      if (!hovered && !focused) {
        play();
      } else {
        pause(false);
      }
    }
  }
  function update(rate) {
    const { bar } = Elements;
    bar && style(bar, "width", `${rate * 100}%`);
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }
  function updateInterval() {
    const Slide = Components2.Slides.getAt(Splide2.index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }
  return {
    mount,
    destroy: interval.cancel,
    play,
    pause,
    isPaused
  };
}

function Cover(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, (img, Slide) => {
        toggle(true, img, Slide);
      });
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply.bind(null, true));
    }
  }
  function destroy() {
    apply(false);
  }
  function apply(cover) {
    Components2.Slides.forEach((Slide) => {
      const img = child(Slide.container || Slide.slide, "img");
      if (img && img.src) {
        toggle(cover, img, Slide);
      }
    });
  }
  function toggle(cover, img, Slide) {
    Slide.style("background", cover ? `center/cover no-repeat url("${img.src}")` : "", true);
    display(img, cover ? "none" : "");
  }
  return {
    mount,
    destroy
  };
}

const BOUNCE_DIFF_THRESHOLD = 10;
const BOUNCE_DURATION = 600;
const FRICTION_FACTOR = 0.6;
const BASE_VELOCITY = 1.5;
const MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  const { on, emit } = EventInterface(Splide2);
  const { Move } = Components2;
  const { getPosition, getLimit, exceededLimit } = Move;
  let interval;
  let scrollCallback;
  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }
  function scroll(destination, duration, callback, suppressConstraint) {
    const start = getPosition();
    let friction = 1;
    duration = duration || computeDuration(abs(destination - start));
    scrollCallback = callback;
    clear();
    interval = RequestInterval(duration, onScrolled, (rate) => {
      const position = getPosition();
      const target = start + (destination - start) * easing(rate);
      const diff = (target - getPosition()) * friction;
      Move.translate(position + diff);
      if (Splide2.is(SLIDE) && !suppressConstraint && exceededLimit()) {
        friction *= FRICTION_FACTOR;
        if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
          bounce(exceededLimit(false));
        }
      }
    }, 1);
    emit(EVENT_SCROLL);
    interval.start();
  }
  function bounce(backwards) {
    scroll(getLimit(!backwards), BOUNCE_DURATION, null, true);
  }
  function onScrolled() {
    const position = getPosition();
    const index = Move.toIndex(position);
    if (!between(index, 0, Splide2.length - 1)) {
      Move.translate(Move.shift(position, index > 0), true);
    }
    scrollCallback && scrollCallback();
    emit(EVENT_SCROLLED);
  }
  function computeDuration(distance) {
    return max(distance / BASE_VELOCITY, MIN_DURATION);
  }
  function clear() {
    if (interval) {
      interval.cancel();
    }
  }
  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onScrolled();
    }
  }
  function easing(t) {
    const { easingFunc } = options;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }
  return {
    mount,
    destroy: clear,
    scroll,
    cancel
  };
}

const SCROLL_LISTENER_OPTIONS = { passive: false, capture: true };

const FRICTION = 5;
const LOG_INTERVAL = 200;
const POINTER_DOWN_EVENTS = "touchstart mousedown";
const POINTER_MOVE_EVENTS = "touchmove mousemove";
const POINTER_UP_EVENTS = "touchend touchcancel mouseup";

function Drag(Splide2, Components2, options) {
  const { on, emit, bind, unbind } = EventInterface(Splide2);
  const { Move, Scroll, Controller } = Components2;
  const { track } = Components2.Elements;
  const { resolve, orient } = Components2.Direction;
  const { getPosition, exceededLimit } = Move;
  let basePosition;
  let baseEvent;
  let prevBaseEvent;
  let lastEvent;
  let isFree;
  let dragging;
  let hasExceeded = false;
  let clickPrevented;
  let disabled;
  let target;
  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, { capture: true });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }
  function init() {
    const { drag } = options;
    disable(!drag);
    isFree = drag === "free";
  }
  function onPointerDown(e) {
    if (!disabled) {
      const { noDrag } = options;
      const isTouch = isTouchEvent(e);
      const isDraggable = !noDrag || !matches(e.target, noDrag);
      clickPrevented = false;
      if (isDraggable && (isTouch || !e.button)) {
        if (!Move.isBusy()) {
          target = isTouch ? track : window;
          prevBaseEvent = null;
          lastEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }
  function onPointerMove(e) {
    if (!lastEvent) {
      emit(EVENT_DRAG);
    }
    lastEvent = e;
    if (e.cancelable) {
      const diff = coordOf(e) - coordOf(baseEvent);
      if (dragging) {
        Move.translate(basePosition + constrain(diff));
        const expired = timeOf(e) - timeOf(baseEvent) > LOG_INTERVAL;
        const exceeded = hasExceeded !== (hasExceeded = exceededLimit());
        if (expired || exceeded) {
          save(e);
        }
        emit(EVENT_DRAGGING);
        clickPrevented = true;
        prevent(e);
      } else {
        let { dragMinThreshold: thresholds } = options;
        thresholds = isObject(thresholds) ? thresholds : { mouse: 0, touch: +thresholds || 10 };
        dragging = abs(diff) > (isTouchEvent(e) ? thresholds.touch : thresholds.mouse);
        if (isSliderDirection()) {
          prevent(e);
        }
      }
    }
  }
  function onPointerUp(e) {
    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    const { index } = Splide2;
    if (lastEvent) {
      if (dragging || e.cancelable && isSliderDirection()) {
        const velocity = computeVelocity(e);
        const destination = computeDestination(velocity);
        if (isFree) {
          Controller.scroll(destination);
        } else if (Splide2.is(FADE)) {
          Controller.go(index + orient(sign(velocity)));
        } else {
          Controller.go(Controller.toDest(destination), true);
        }
        prevent(e);
      }
      emit(EVENT_DRAGGED);
    } else {
      if (!isFree && getPosition() !== Move.toPosition(index)) {
        Controller.go(index, true);
      }
    }
    dragging = false;
  }
  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }
  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }
  function isSliderDirection() {
    const diffX = abs(coordOf(lastEvent) - coordOf(baseEvent));
    const diffY = abs(coordOf(lastEvent, true) - coordOf(baseEvent, true));
    return diffX > diffY;
  }
  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !hasExceeded) {
      const base = baseEvent === lastEvent && prevBaseEvent || baseEvent;
      const diffCoord = coordOf(lastEvent) - coordOf(base);
      const diffTime = timeOf(e) - timeOf(base);
      const isFlick = timeOf(e) - timeOf(lastEvent) < LOG_INTERVAL;
      if (diffTime && isFlick) {
        return diffCoord / diffTime;
      }
    }
    return 0;
  }
  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }
  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.touches[0] : e)[`page${resolve(orthogonal ? "Y" : "X")}`];
  }
  function timeOf(e) {
    return e.timeStamp;
  }
  function constrain(diff) {
    return diff / (hasExceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }
  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }
  function isDragging() {
    return dragging;
  }
  function disable(value) {
    disabled = value;
  }
  return {
    mount,
    disable,
    isDragging
  };
}

const IE_ARROW_KEYS = ["Left", "Right", "Up", "Down"];
const KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
  const { on, bind, unbind } = EventInterface(Splide2);
  const { root } = Splide2;
  const { resolve } = Components2.Direction;
  let target;
  let disabled;
  function mount() {
    init();
    on(EVENT_UPDATED, onUpdated);
    on(EVENT_MOVE, onMove);
  }
  function init() {
    const { keyboard } = options;
    if (keyboard) {
      if (keyboard === "focused") {
        target = root;
        setAttribute(root, TAB_INDEX, 0);
      } else {
        target = window;
      }
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }
  function destroy() {
    unbind(target, KEYBOARD_EVENT);
    if (isHTMLElement(target)) {
      removeAttribute(target, TAB_INDEX);
    }
  }
  function disable(value) {
    disabled = value;
  }
  function onMove() {
    const _disabled = disabled;
    disabled = true;
    nextTick(() => {
      disabled = _disabled;
    });
  }
  function onUpdated() {
    destroy();
    init();
  }
  function onKeydown(e) {
    if (!disabled) {
      const { key } = e;
      const normalizedKey = includes(IE_ARROW_KEYS, key) ? `Arrow${key}` : key;
      if (normalizedKey === resolve("ArrowLeft")) {
        Splide2.go("<");
      } else if (normalizedKey === resolve("ArrowRight")) {
        Splide2.go(">");
      }
    }
  }
  return {
    mount,
    destroy,
    disable
  };
}

const SRC_DATA_ATTRIBUTE = `${DATA_ATTRIBUTE}-lazy`;
const SRCSET_DATA_ATTRIBUTE = `${SRC_DATA_ATTRIBUTE}-srcset`;
const IMAGE_SELECTOR = `[${SRC_DATA_ATTRIBUTE}], [${SRCSET_DATA_ATTRIBUTE}]`;

function LazyLoad(Splide2, Components2, options) {
  const { on, off, bind, emit } = EventInterface(Splide2);
  const isSequential = options.lazyLoad === "sequential";
  let images = [];
  let index = 0;
  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, refresh);
      if (!isSequential) {
        on([EVENT_MOUNTED, EVENT_REFRESH, EVENT_MOVED, EVENT_SCROLLED], observe);
      }
    }
  }
  function refresh() {
    destroy();
    init();
  }
  function init() {
    Components2.Slides.forEach((_Slide) => {
      queryAll(_Slide.slide, IMAGE_SELECTOR).forEach((_img) => {
        const src = getAttribute(_img, SRC_DATA_ATTRIBUTE);
        const srcset = getAttribute(_img, SRCSET_DATA_ATTRIBUTE);
        if (src !== _img.src || srcset !== _img.srcset) {
          const className = options.classes.spinner;
          const parent = _img.parentElement;
          const _spinner = child(parent, `.${className}`) || create("span", className, parent);
          setAttribute(_spinner, ROLE, "presentation");
          images.push({ _img, _Slide, src, srcset, _spinner });
          !_img.src && display(_img, "none");
        }
      });
    });
    if (isSequential) {
      loadNext();
    }
  }
  function destroy() {
    index = 0;
    images = [];
  }
  function observe() {
    images = images.filter((data) => {
      const distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      if (data._Slide.isWithin(Splide2.index, distance)) {
        return load(data);
      }
      return true;
    });
    if (!images.length) {
      off(EVENT_MOVED);
    }
  }
  function load(data) {
    const { _img } = data;
    addClass(data._Slide.slide, CLASS_LOADING);
    bind(_img, "load error", (e) => {
      onLoad(data, e.type === "error");
    });
    ["srcset", "src"].forEach((name) => {
      if (data[name]) {
        setAttribute(_img, name, data[name]);
        removeAttribute(_img, name === "src" ? SRC_DATA_ATTRIBUTE : SRCSET_DATA_ATTRIBUTE);
      }
    });
  }
  function onLoad(data, error) {
    const { _Slide } = data;
    removeClass(_Slide.slide, CLASS_LOADING);
    if (!error) {
      remove(data._spinner);
      display(data._img, "");
      emit(EVENT_LAZYLOAD_LOADED, data._img, _Slide);
      emit(EVENT_RESIZE);
    }
    if (isSequential) {
      loadNext();
    }
  }
  function loadNext() {
    if (index < images.length) {
      load(images[index++]);
    }
  }
  return {
    mount,
    destroy
  };
}

function Pagination(Splide2, Components2, options) {
  const { on, emit, bind, unbind } = EventInterface(Splide2);
  const { Slides, Elements, Controller } = Components2;
  const { hasFocus, getIndex } = Controller;
  const items = [];
  let list;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on([EVENT_MOVE, EVENT_SCROLLED], update);
  }
  function init() {
    destroy();
    if (options.pagination && Slides.isEnough()) {
      createPagination();
      emit(EVENT_PAGINATION_MOUNTED, { list, items }, getAt(Splide2.index));
      update();
    }
  }
  function destroy() {
    if (list) {
      remove(list);
      items.forEach((item) => {
        unbind(item.button, "click");
      });
      empty(items);
      list = null;
    }
  }
  function createPagination() {
    const { length } = Splide2;
    const { classes, i18n, perPage } = options;
    const parent = options.pagination === "slider" && Elements.slider || Elements.root;
    const max = hasFocus() ? length : ceil(length / perPage);
    list = create("ul", classes.pagination, parent);
    for (let i = 0; i < max; i++) {
      const li = create("li", null, list);
      const button = create("button", { class: classes.page, type: "button" }, li);
      const controls = Slides.getIn(i).map((Slide) => Slide.slide.id);
      const text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", onClick.bind(null, i));
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      items.push({ li, button, page: i });
    }
  }
  function onClick(page) {
    Controller.go(`>${page}`, true, () => {
      const Slide = Slides.getAt(Controller.toIndex(page));
      Slide && focus(Slide.slide);
    });
  }
  function getAt(index) {
    return items[Controller.toPage(index)];
  }
  function update() {
    const prev = getAt(getIndex(true));
    const curr = getAt(getIndex());
    if (prev) {
      removeClass(prev.button, CLASS_ACTIVE);
      removeAttribute(prev.button, ARIA_CURRENT);
    }
    if (curr) {
      addClass(curr.button, CLASS_ACTIVE);
      setAttribute(curr.button, ARIA_CURRENT, true);
    }
    emit(EVENT_PAGINATION_UPDATED, { list, items }, prev, curr);
  }
  return {
    items,
    mount,
    destroy,
    getAt,
    update
  };
}

const TRIGGER_KEYS = [" ", "Enter", "Spacebar"];
function Sync(Splide2, Components2, options) {
  const { list } = Components2.Elements;
  const events = [];
  function mount() {
    Splide2.splides.forEach((target) => {
      !target.isParent && sync(target.splide);
    });
    if (options.isNavigation) {
      navigate();
    }
  }
  function destroy() {
    removeAttribute(list, ALL_ATTRIBUTES);
    events.forEach((event) => {
      event.destroy();
    });
    empty(events);
  }
  function remount() {
    destroy();
    mount();
  }
  function sync(splide) {
    [Splide2, splide].forEach((instance) => {
      const event = EventInterface(instance);
      const target = instance === Splide2 ? splide : Splide2;
      event.on(EVENT_MOVE, (index, prev, dest) => {
        target.go(target.is(LOOP) ? dest : index);
      });
      events.push(event);
    });
  }
  function navigate() {
    const event = EventInterface(Splide2);
    const { on } = event;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    setAttribute(list, ROLE, "menu");
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }
  function update() {
    setAttribute(list, ARIA_ORIENTATION, options.direction !== TTB ? "horizontal" : null);
  }
  function onClick(Slide) {
    Splide2.go(Slide.index);
  }
  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, e.key)) {
      onClick(Slide);
      prevent(e);
    }
  }
  return {
    mount,
    destroy,
    remount
  };
}

function Wheel(Splide2, Components2, options) {
  const { bind } = EventInterface(Splide2);
  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }
  function onWheel(e) {
    if (e.cancelable) {
      const { deltaY } = e;
      if (deltaY) {
        const backwards = deltaY < 0;
        Splide2.go(backwards ? "<" : ">");
        shouldPrevent(backwards) && prevent(e);
      }
    }
  }
  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }
  return {
    mount
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Options: Options,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel
});

const I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay"
};

const DEFAULTS = {
  type: "slide",
  speed: 400,
  waitForTransition: true,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  keyboard: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  slideFocus: true,
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  classes: CLASSES,
  i18n: I18N
};

function Fade(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  function mount() {
    on([EVENT_MOUNTED, EVENT_REFRESH], () => {
      nextTick(() => {
        Components2.Slides.style("transition", `opacity ${options.speed}ms ${options.easing}`);
      });
    });
  }
  function start(index, done) {
    const { track } = Components2.Elements;
    style(track, "height", unit(rect(track).height));
    nextTick(() => {
      done();
      style(track, "height", "");
    });
  }
  return {
    mount,
    start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  const { bind } = EventInterface(Splide2);
  const { Move, Controller } = Components2;
  const { list } = Components2.Elements;
  let endCallback;
  function mount() {
    bind(list, "transitionend", (e) => {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }
  function start(index, done) {
    const destination = Move.toPosition(index, true);
    const position = Move.getPosition();
    const speed = getSpeed(index);
    if (abs(destination - position) >= 1 && speed >= 1) {
      apply(`transform ${speed}ms ${options.easing}`);
      Move.translate(destination, true);
      endCallback = done;
    } else {
      Move.jump(index);
      done();
    }
  }
  function cancel() {
    apply("");
  }
  function getSpeed(index) {
    const { rewindSpeed } = options;
    if (Splide2.is(SLIDE) && rewindSpeed) {
      const prev = Controller.getIndex(true);
      const end = Controller.getEnd();
      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }
    return options.speed;
  }
  function apply(transition) {
    style(list, "transition", transition);
  }
  return {
    mount,
    start,
    cancel
  };
}

const _Splide = class {
  constructor(target, options) {
    this.event = EventBus();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._options = {};
    this._Extensions = {};
    const root = isString(target) ? query(document, target) : target;
    assert(root, `${root} is invalid.`);
    this.root = root;
    merge(DEFAULTS, _Splide.defaults);
    merge(merge(this._options, DEFAULTS), options || {});
  }
  mount(Extensions, Transition) {
    const { state, Components: Components2 } = this;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._Components = Components2;
    this._Transition = Transition || this._Transition || (this.is(FADE) ? Fade : Slide);
    this._Extensions = Extensions || this._Extensions;
    const Constructors = assign({}, ComponentConstructors, this._Extensions, { Transition: this._Transition });
    forOwn(Constructors, (Component, key) => {
      const component = Component(this, Components2, this._options);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, (component) => {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  }
  sync(splide) {
    this.splides.push({ splide });
    splide.splides.push({ splide: this, isParent: true });
    if (this.state.is(IDLE)) {
      this._Components.Sync.remount();
      splide.Components.Sync.remount();
    }
    return this;
  }
  go(control) {
    this._Components.Controller.go(control);
    return this;
  }
  on(events, callback) {
    this.event.on(events, callback, null, DEFAULT_USER_EVENT_PRIORITY);
    return this;
  }
  off(events) {
    this.event.off(events);
    return this;
  }
  emit(event) {
    this.event.emit(event, ...slice(arguments, 1));
    return this;
  }
  add(slides, index) {
    this._Components.Slides.add(slides, index);
    return this;
  }
  remove(matcher) {
    this._Components.Slides.remove(matcher);
    return this;
  }
  is(type) {
    return this._options.type === type;
  }
  refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  }
  destroy(completely = true) {
    const { event, state } = this;
    if (state.is(CREATED)) {
      event.on(EVENT_READY, this.destroy.bind(this, completely), this);
    } else {
      forOwn(this._Components, (component) => {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }
    return this;
  }
  get options() {
    return this._options;
  }
  set options(options) {
    const { _options } = this;
    merge(_options, options);
    if (!this.state.is(CREATED)) {
      this.emit(EVENT_UPDATED, _options);
    }
  }
  get length() {
    return this._Components.Slides.getLength(true);
  }
  get index() {
    return this._Components.Controller.getIndex();
  }
};
let Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;

const CLASS_RENDERED = "is-rendered";

const RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

class Style {
  constructor(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }
  rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    const selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    const styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  }
  build() {
    let css = "";
    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }
    Object.keys(this.styles).sort((n, m) => this.options.mediaQuery === "min" ? +n - +m : +m - +n).forEach((breakpoint) => {
      if (breakpoint !== "default") {
        css += `@media screen and (max-width: ${breakpoint}px) {`;
        css += this.buildSelectors(this.styles[breakpoint]);
        css += `}`;
      }
    });
    return css;
  }
  buildSelectors(selectors) {
    let css = "";
    forOwn(selectors, (styles, selector) => {
      selector = `#${this.id} ${selector}`.trim();
      css += `${selector} {`;
      forOwn(styles, (value, prop) => {
        if (value || value === 0) {
          css += `${prop}: ${value};`;
        }
      });
      css += "}";
    });
    return css;
  }
}

class SplideRenderer {
  constructor(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }
  static clean(splide) {
    const { on } = EventInterface(splide);
    const { root } = splide;
    const clones = queryAll(root, `.${CLASS_CLONE}`);
    on(EVENT_MOUNTED, () => {
      remove(child(root, "style"));
    });
    remove(clones);
  }
  init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  }
  initSlides() {
    push(this.slides, this.contents.map((content, index) => {
      content = isString(content) ? { html: content } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};
      this.cover(content);
      const classes = `${this.options.classes.slide} ${index === 0 ? CLASS_ACTIVE : ""}`;
      assign(content.attrs, {
        class: `${classes} ${content.attrs.class || ""}`.trim(),
        style: this.buildStyles(content.styles)
      });
      return content;
    }));
    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  }
  registerRootStyles() {
    this.breakpoints.forEach(([width, options]) => {
      this.Style.rule(" ", "max-width", unit(options.width), width);
    });
  }
  registerTrackStyles() {
    const { Style: Style2 } = this;
    const selector = `.${CLASS_TRACK}`;
    this.breakpoints.forEach(([width, options]) => {
      Style2.rule(selector, this.resolve("paddingLeft"), this.cssPadding(options, false), width);
      Style2.rule(selector, this.resolve("paddingRight"), this.cssPadding(options, true), width);
      Style2.rule(selector, "height", this.cssTrackHeight(options), width);
    });
  }
  registerListStyles() {
    const { Style: Style2 } = this;
    const selector = `.${CLASS_LIST}`;
    this.breakpoints.forEach(([width, options]) => {
      Style2.rule(selector, "transform", this.buildTranslate(options), width);
      if (!this.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", this.cssAspectRatio(options), width);
      }
    });
  }
  registerSlideStyles() {
    const { Style: Style2 } = this;
    const selector = `.${CLASS_SLIDE}`;
    this.breakpoints.forEach(([width, options]) => {
      Style2.rule(selector, "width", this.cssSlideWidth(options), width);
      Style2.rule(selector, "height", this.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, this.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(`${selector} > img`, "display", options.cover ? "none" : "inline", width);
    });
  }
  buildTranslate(options) {
    const { resolve, orient } = this.Direction;
    const values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));
    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push(...this.cssOffsetCenter(options));
    }
    return values.filter(Boolean).map((value) => `translate${resolve("X")}(${value})`).join(" ");
  }
  cssOffsetClones(options) {
    const { resolve, orient } = this.Direction;
    const cloneCount = this.getCloneCount();
    if (this.isFixedWidth(options)) {
      const { value, unit: unit2 } = this.parseCssValue(options[resolve("fixedWidth")]);
      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }
    const percent = 100 * cloneCount / options.perPage;
    return `${orient(percent)}%`;
  }
  cssOffsetCenter(options) {
    const { resolve, orient } = this.Direction;
    if (this.isFixedWidth(options)) {
      const { value, unit: unit2 } = this.parseCssValue(options[resolve("fixedWidth")]);
      return [this.buildCssValue(orient(value / 2), unit2)];
    }
    const values = [];
    const { perPage, gap } = options;
    values.push(`${orient(50 / perPage)}%`);
    if (gap) {
      const { value, unit: unit2 } = this.parseCssValue(gap);
      const gapOffset = (value / perPage - value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), unit2));
    }
    return values;
  }
  cssOffsetGaps(options) {
    const cloneCount = this.getCloneCount();
    if (cloneCount && options.gap) {
      const { orient } = this.Direction;
      const { value, unit: unit2 } = this.parseCssValue(options.gap);
      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }
      const { perPage } = options;
      const gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }
    return "";
  }
  resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  }
  cssPadding(options, right) {
    const { padding } = options;
    const prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }
  cssTrackHeight(options) {
    let height = "";
    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = `calc(${height} - ${this.cssPadding(options, false)} - ${this.cssPadding(options, true)})`;
    }
    return height;
  }
  cssHeight(options) {
    return unit(options.height);
  }
  cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  }
  cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  }
  cssSlideSize(options) {
    const gap = unit(options.gap);
    return `calc((100%${gap && ` + ${gap}`})/${options.perPage || 1}${gap && ` - ${gap}`})`;
  }
  cssAspectRatio(options) {
    const { heightRatio } = options;
    return heightRatio ? `${1 / heightRatio}` : "";
  }
  buildCssValue(value, unit2) {
    return `${value}${unit2}`;
  }
  parseCssValue(value) {
    if (isString(value)) {
      const number = parseFloat(value) || 0;
      const unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return { value: number, unit: unit2 };
    }
    return { value, unit: "px" };
  }
  parseBreakpoints() {
    const { breakpoints } = this.options;
    this.breakpoints.push(["default", this.options]);
    if (breakpoints) {
      forOwn(breakpoints, (options, width) => {
        this.breakpoints.push([width, merge(merge({}, this.options), options)]);
      });
    }
  }
  isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  }
  isLoop() {
    return this.options.type === LOOP;
  }
  isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }
      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }
    return false;
  }
  isVertical() {
    return this.options.direction === TTB;
  }
  buildClasses() {
    const { options } = this;
    return [
      CLASS_ROOT,
      `${CLASS_ROOT}--${options.type}`,
      `${CLASS_ROOT}--${options.direction}`,
      options.drag && `${CLASS_ROOT}--draggable`,
      options.isNavigation && `${CLASS_ROOT}--nav`,
      CLASS_ACTIVE,
      !this.config.hidden && CLASS_RENDERED
    ].filter(Boolean).join(" ");
  }
  buildAttrs(attrs) {
    let attr = "";
    forOwn(attrs, (value, key) => {
      attr += value ? ` ${camelToKebab(key)}="${value}"` : "";
    });
    return attr.trim();
  }
  buildStyles(styles) {
    let style = "";
    forOwn(styles, (value, key) => {
      style += ` ${camelToKebab(key)}:${value};`;
    });
    return style.trim();
  }
  renderSlides() {
    const { slideTag: tag } = this.config;
    return this.slides.map((content) => {
      return `<${tag} ${this.buildAttrs(content.attrs)}>${content.html || ""}</${tag}>`;
    }).join("");
  }
  cover(content) {
    const { styles, html = "" } = content;
    if (this.options.cover && !this.options.lazyLoad) {
      const src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
      if (src && src[2]) {
        styles.background = `center/cover no-repeat url('${src[2]}')`;
      }
    }
  }
  generateClones(contents) {
    const { classes } = this.options;
    const count = this.getCloneCount();
    const slides = contents.slice();
    while (slides.length < count) {
      push(slides, slides);
    }
    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach((content, index) => {
      const attrs = assign({}, content.attrs, { class: `${content.attrs.class} ${classes.clone}` });
      const clone = assign({}, content, { attrs });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  }
  getCloneCount() {
    if (this.isLoop()) {
      const { options } = this;
      if (options.clones) {
        return options.clones;
      }
      const perPage = max(...this.breakpoints.map(([, options2]) => options2.perPage));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }
    return 0;
  }
  renderArrows() {
    let html = "";
    html += `<div class="${this.options.classes.arrows}">`;
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += `</div>`;
    return html;
  }
  renderArrow(prev) {
    const { classes, i18n } = this.options;
    const attrs = {
      class: `${classes.arrow} ${prev ? classes.prev : classes.next}`,
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return `<button ${this.buildAttrs(attrs)}><svg xmlns="${XML_NAME_SPACE}" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}"><path d="${this.options.arrowPath || PATH}" /></svg></button>`;
  }
  html() {
    const { rootClass, listTag, arrows, beforeTrack, afterTrack, slider, beforeSlider, afterSlider } = this.config;
    let html = "";
    html += `<div id="${this.id}" class="${this.buildClasses()} ${rootClass || ""}">`;
    html += `<style>${this.Style.build()}</style>`;
    if (slider) {
      html += beforeSlider || "";
      html += `<div class="splide__slider">`;
    }
    html += beforeTrack || "";
    if (arrows) {
      html += this.renderArrows();
    }
    html += `<div class="splide__track">`;
    html += `<${listTag} class="splide__list">`;
    html += this.renderSlides();
    html += `</${listTag}>`;
    html += `</div>`;
    html += afterTrack || "";
    if (slider) {
      html += `</div>`;
      html += afterSlider || "";
    }
    html += `</div>`;
    return html;
  }
}




/***/ }),

/***/ "./node_modules/@splidejs/splide/dist/js/splide.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.min.js ***!
  \*************************************************************/
/***/ (function(module) {

function At(n,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}
/*!
 * Splide.js
 * Version  : 3.6.12
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n,t;n=this,t=function(){"use strict";var m="splide",a="data-"+m,n={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5},R=10;function _(n){n.length=0}function I(n){return!u(n)&&"object"==typeof n}function r(n){return Array.isArray(n)}function D(n){return"string"==typeof n}function O(n){return void 0===n}function u(n){return null===n}function y(n){return n instanceof HTMLElement}function w(n){return r(n)?n:[n]}function b(n,t){w(n).forEach(t)}function x(n,t){return-1<n.indexOf(t)}function k(n,t){return n.push.apply(n,w(t)),n}var o=Array.prototype;function s(n,t,i){return o.slice.call(n,t,i)}function E(t,n,i){t&&b(n,function(n){n&&t.classList[i?"add":"remove"](n)})}function A(n,t){E(n,D(t)?t.split(" "):t,!0)}function L(n,t){b(t,n.appendChild.bind(n))}function S(n,i){b(n,function(n){var t=i.parentNode;t&&t.insertBefore(n,i)})}function W(n,t){return y(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function z(n,t){return n?s(n.children).filter(function(n){return W(n,t)}):[]}function P(n,t){return t?z(n,t)[0]:n.firstElementChild}function e(n,t,i){if(n)for(var r=Object.keys(n),r=i?r.reverse():r,u=0;u<r.length;u++){var o=r[u];if("__proto__"!==o&&!1===t(n[o],o))break}return n}function M(r){return s(arguments,1).forEach(function(i){e(i,function(n,t){r[t]=i[t]})}),r}function l(i,n){return e(n,function(n,t){r(n)?i[t]=n.slice():I(n)?i[t]=l(I(i[t])?i[t]:{},n):i[t]=n}),i}function T(t,n){t&&b(n,function(n){t.removeAttribute(n)})}function j(i,n,t){I(n)?e(n,function(n,t){j(i,t,n)}):u(t)?T(i,n):i.setAttribute(n,String(t))}function F(n,t,i){n=document.createElement(n);return t&&(D(t)?A:j)(n,t),i&&L(i,n),n}function C(n,t,i){if(O(i))return getComputedStyle(n)[t];u(i)||(n=n.style)[t]!==(i=""+i)&&(n[t]=i)}function N(n,t){C(n,"display",t)}function X(n,t){return n.getAttribute(t)}function B(n,t){return n&&n.classList.contains(t)}function G(n){return n.getBoundingClientRect()}function H(n){b(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function Y(n){return P((new DOMParser).parseFromString(n,"text/html").body)}function U(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function q(n,t){return n&&n.querySelector(t)}function J(n,t){return s(n.querySelectorAll(t))}function K(n,t){E(n,t,!1)}function V(n){return D(n)?n:n?n+"px":""}function Q(n,t){if(void 0===t&&(t=""),!n)throw new Error("["+m+"] "+t)}function g(n){setTimeout(n)}function Z(){}function v(n){return requestAnimationFrame(n)}var $=Math.min,nn=Math.max,tn=Math.floor,rn=Math.ceil,un=Math.abs;function on(n,t,i,r){var u=$(t,i),i=nn(t,i);return r?u<n&&n<i:u<=n&&n<=i}function en(n,t,i){var r=$(t,i),i=nn(t,i);return $(nn(r,n),i)}function cn(n){return(0<n)-(n<0)}function fn(t,n){return b(n,function(n){t=t.replace("%s",""+n)}),t}function an(n){return n<10?"0"+n:""+n}var sn={};function c(){var o={};function r(n,r){t(n,function(n,t){var i=o[n];o[n]=i&&i.filter(function(n){return n.n?n.n!==r:r||n.t!==t})})}function t(n,t){w(n).join(" ").split(" ").forEach(function(n){n=n.split(".");t(n[0],n[1])})}return{on:function(n,i,r,u){void 0===u&&(u=R),t(n,function(n,t){o[n]=o[n]||[],k(o[n],{i:n,r:i,t:t,u:u,n:r}).sort(function(n,t){return n.u-t.u})})},off:r,offBy:function(i){e(o,function(n,t){r(t,i)})},emit:function(n){var t=arguments;(o[n]||[]).forEach(function(n){n.r.apply(n,s(t,1))})},destroy:function(){o={}}}}var ln="mounted",dn="move",vn="moved",hn="shifted",pn="click",gn="active",mn="inactive",yn="visible",wn="hidden",_n="slide:keydown",bn="refresh",xn="updated",kn="resize",An="resized",Ln="repositioned",En="scrolled",f="destroy",Sn="navigation:mounted",zn="lazyload:loaded";function Pn(n){var r=n.event,u={},o=[];function t(n,t,r){e(n,t,function(t,i){o=o.filter(function(n){return!!(n[0]!==t||n[1]!==i||r&&n[2]!==r)||(t.removeEventListener(i,n[2],n[3]),!1)})})}function e(n,t,i){b(n,function(n){n&&t.split(" ").forEach(i.bind(null,n))})}function i(){o=o.filter(function(n){return t(n[0],n[1])}),r.offBy(u)}return r.on(f,i,u),{on:function(n,t,i){r.on(n,t,u,i)},off:function(n){r.off(n,u)},emit:r.emit,bind:function(n,t,i,r){e(n,t,function(n,t){o.push([n,t,i,r]),n.addEventListener(t,i,r)})},unbind:t,destroy:i}}function Rn(t,i,r,u){var o,n,e=Date.now,c=0,f=!0,a=0;function s(){if(!f){var n=e()-o;if(t<=n?(c=1,o=e()):c=n/t,r&&r(c),1===c&&(i(),u&&++a>=u))return l();v(s)}}function l(){f=!0}function d(){cancelAnimationFrame(n),f=!(n=c=0)}return{start:function(n){n||d(),o=e()-(n?c*t:0),f=!1,v(s)},rewind:function(){o=e(),c=0,r&&r(c)},pause:l,cancel:d,set:function(n){t=n},isPaused:function(){return f}}}function d(n){var t=n;return{set:function(n){t=n},is:function(n){return x(w(n),t)}}}function Dn(i,r){var u;return function(){var n=arguments,t=this;u||(u=Rn(r||0,function(){i.apply(t,n),u=null},null,1)).start()}}var h={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};var On=m,Mn=m+"__slider",Tn=m+"__track",jn=m+"__list",Fn=m+"__slide",In=Fn+"--clone",Wn=Fn+"__container",Cn=m+"__arrows",t=m+"__arrow",Nn=t+"--prev",Xn=t+"--next",i=m+"__pagination",Bn=m+"__progress",Gn=Bn+"__bar",Hn=m+"__autoplay",Yn=m+"__play",Un=m+"__pause",qn="is-active",Jn="is-prev",Kn="is-next",Vn="is-visible",Qn="is-loading",Zn=[qn,Vn,Jn,Kn,Qn];var $n="role",nt="aria-controls",tt="aria-current",it="aria-label",rt="aria-hidden",ut="tabindex",p="aria-orientation",ot=[$n,nt,tt,it,rt,p,ut,"disabled"],et="slide",ct="loop",ft="fade";function at(u,i,r,o){var t,n=Pn(u),e=n.on,c=n.emit,f=n.bind,a=n.destroy,s=u.Components,l=u.root,d=u.options,v=d.isNavigation,h=d.updateOnMove,p=s.Direction.resolve,g=X(o,"style"),m=-1<r,y=P(o,"."+Wn),w=d.focusableNodes&&J(o,d.focusableNodes);function _(){var n=m?r:i,t=fn(d.i18n.slideX,n+1),n=u.splides.map(function(n){return n.splide.root.id}).join(" ");j(o,it,t),j(o,nt,n),j(o,$n,"menuitem"),k(A())}function b(){t||x()}function x(){var n;t||(n=u.index,k(A()),function(n){var t=!n&&(!A()||m);j(o,rt,t||null),j(o,ut,!t&&d.slideFocus?0:null),w&&w.forEach(function(n){j(n,ut,t?-1:null)});n!==B(o,Vn)&&(E(o,Vn,n),c(n?yn:wn,L))}(function(){if(u.is(ft))return A();var n=G(s.Elements.track),t=G(o),i=p("left"),r=p("right");return tn(n[i])<=rn(t[i])&&tn(t[r])<=rn(n[r])}()),E(o,Jn,i===n-1),E(o,Kn,i===n+1))}function k(n){n!==B(o,qn)&&(E(o,qn,n),v&&j(o,tt,n||null),c(n?gn:mn,L))}function A(){var n=u.index;return n===i||d.cloneStatus&&n===r}var L={index:i,slideIndex:r,slide:o,container:y,isClone:m,mount:function(){m||(o.id=l.id+"-slide"+an(i+1)),f(o,"click keydown",function(n){c("click"===n.type?pn:_n,L,n)}),e([bn,Ln,hn,vn,En],x),e(Sn,_),h&&e(dn,b)},destroy:function(){t=!0,a(),K(o,Zn),T(o,ot),j(o,"style",g)},update:x,style:function(n,t,i){C(i&&y||o,n,t)},isWithin:function(n,t){return n=un(n-i),(n=!m&&(d.rewind||u.is(ct))?$(n,u.length-n):n)<=t}};return L}var st=a+"-interval";var lt={passive:!1,capture:!0},dt="touchmove mousemove",vt="touchend touchcancel mouseup";var ht=["Left","Right","Up","Down"],pt="keydown";var gt=a+"-lazy",mt=gt+"-srcset",yt="["+gt+"], ["+mt+"]";var wt=[" ","Enter","Spacebar"];var _t=Object.freeze({__proto__:null,Options:function(t,n,r){var u,o,i,e=Dn(f);function c(n){n&&removeEventListener("resize",e)}function f(){var n=(n=function(n){return n[1].matches},s(o).filter(n)[0]||[]);n[0]!==i&&function(n){n=r.breakpoints[n]||u;n.destroy?(t.options=u,t.destroy("completely"===n.destroy)):(t.state.is(5)&&(c(!0),t.mount()),t.options=n)}(i=n[0])}return{setup:function(){try{l(r,JSON.parse(X(t.root,a)))}catch(n){Q(!1,n.message)}u=l({},r);var i,n=r.breakpoints;n&&(i="min"===r.mediaQuery,o=Object.keys(n).sort(function(n,t){return i?+t-+n:+n-+t}).map(function(n){return[n,matchMedia("("+(i?"min":"max")+"-width:"+n+"px)")]}),f())},mount:function(){o&&addEventListener("resize",e)},destroy:c}},Direction:function(n,t,r){return{resolve:function(n,t){var i=r.direction;return h[n]["rtl"!==i||t?"ttb"===i?0:-1:1]||n},orient:function(n){return n*("rtl"===r.direction?1:-1)}}},Elements:function(n,t,i){var r,u,o,e,c=Pn(n).on,f=n.root,a={},s=[];function l(){var n;!function(){u=P(f,"."+Mn),o=q(f,"."+Tn),e=P(o,"."+jn),Q(o&&e,"A track/list element is missing."),k(s,z(e,"."+Fn+":not(."+In+")"));var n=p("."+Hn),t=p("."+Cn);M(a,{root:f,slider:u,track:o,list:e,slides:s,arrows:t,autoplay:n,prev:q(t,"."+Nn),next:q(t,"."+Xn),bar:q(p("."+Bn),"."+Gn),play:q(n,"."+Yn),pause:q(n,"."+Un)})}(),n=f.id||function(n){return""+n+an(sn[n]=(sn[n]||0)+1)}(m),f.id=n,o.id=o.id||n+"-track",e.id=e.id||n+"-list",A(f,r=g())}function d(){[f,o,e].forEach(function(n){T(n,"style")}),_(s),K(f,r)}function v(){d(),l()}function h(){K(f,r),A(f,r=g())}function p(n){return P(f,n)||P(u,n)}function g(){return[On+"--"+i.type,On+"--"+i.direction,i.drag&&On+"--draggable",i.isNavigation&&On+"--nav",qn]}return M(a,{setup:l,mount:function(){c(bn,v,R-2),c(xn,h)},destroy:d})},Slides:function(r,u,o){var n=Pn(r),t=n.on,e=n.emit,c=n.bind,f=(n=u.Elements).slides,a=n.list,s=[];function i(){f.forEach(function(n,t){v(n,t,-1)})}function l(){p(function(n){n.destroy()}),_(s)}function d(){l(),i()}function v(n,t,i){n=at(r,t,i,n);n.mount(),s.push(n)}function h(n){return n?g(function(n){return!n.isClone}):s}function p(n,t){h(t).forEach(n)}function g(t){return s.filter("function"==typeof t?t:function(n){return D(t)?W(n.slide,t):x(w(t),n.index)})}return{mount:function(){i(),t(bn,d),t([ln,bn],function(){s.sort(function(n,t){return n.index-t.index})})},destroy:l,update:function(){p(function(n){n.update()})},register:v,get:h,getIn:function(n){var t=u.Controller,i=t.toIndex(n),r=t.hasFocus()?1:o.perPage;return g(function(n){return on(n.index,i,i+r-1)})},getAt:function(n){return g(n)[0]},add:function(n,u){b(n,function(n){var t,i,r;y(n=D(n)?Y(n):n)&&((t=f[u])?S(n,t):L(a,n),A(n,o.classes.slide),n=n,i=e.bind(null,kn),n=J(n,"img"),(r=n.length)?n.forEach(function(n){c(n,"load error",function(){--r||i()})}):i())}),e(bn)},remove:function(n){H(g(n).map(function(n){return n.slide})),e(bn)},forEach:p,filter:g,style:function(t,i,r){p(function(n){n.style(t,i,r)})},getLength:function(n){return(n?f:s).length},isEnough:function(){return s.length>o.perPage}}},Layout:function(n,t,i){var r,u,o=Pn(n),e=o.on,c=o.bind,f=o.emit,a=t.Slides,s=t.Direction.resolve,l=(t=t.Elements).root,d=t.track,v=t.list,h=a.getAt;function p(){u=null,r="ttb"===i.direction,C(l,"maxWidth",V(i.width)),C(d,s("paddingLeft"),m(!1)),C(d,s("paddingRight"),m(!0)),g()}function g(){var n=G(l);u&&u.width===n.width&&u.height===n.height||(C(d,"height",function(){var n="";r&&(Q(n=y(),"height or heightRatio is missing."),n="calc("+n+" - "+m(!1)+" - "+m(!0)+")");return n}()),a.style(s("marginRight"),V(i.gap)),a.style("width",(i.autoWidth?"":V(i.fixedWidth)||(r?"":w()))||null),a.style("height",V(i.fixedHeight)||(r?i.autoHeight?"":w():y())||null,!0),u=n,f(An))}function m(n){var t=i.padding,n=s(n?"right":"left");return t&&V(t[n]||(I(t)?0:t))||"0px"}function y(){return V(i.height||G(v).width*i.heightRatio)}function w(){var n=V(i.gap);return"calc((100%"+(n&&" + "+n)+")/"+(i.perPage||1)+(n&&" - "+n)+")"}function _(n,t){var i=h(n);if(i){n=G(i.slide)[s("right")],i=G(v)[s("left")];return un(n-i)+(t?0:b())}return 0}function b(){var n=h(0);return n&&parseFloat(C(n.slide,s("marginRight")))||0}return{mount:function(){p(),c(window,"resize load",Dn(f.bind(this,kn))),e([xn,bn],p),e(kn,g)},listSize:function(){return G(v)[s("width")]},slideSize:function(n,t){return(n=h(n||0))?G(n.slide)[s("width")]+(t?0:b()):0},sliderSize:function(){return _(n.length-1,!0)-_(-1,!0)},totalSize:_,getPadding:function(n){return parseFloat(C(d,s("padding"+(n?"Right":"Left"))))||0}}},Clones:function(c,n,f){var t,i=Pn(c),r=i.on,u=i.emit,a=n.Elements,s=n.Slides,o=n.Direction.resolve,l=[];function e(){(t=p())&&(function(u){var o=s.get().slice(),e=o.length;if(e){for(;o.length<u;)k(o,o);k(o.slice(-u),o.slice(0,u)).forEach(function(n,t){var i=t<u,r=function(n,t){n=n.cloneNode(!0);return A(n,f.classes.clone),n.id=c.root.id+"-clone"+an(t+1),n}(n.slide,t);i?S(r,o[0].slide):L(a.list,r),k(l,r),s.register(r,t-u+(i?0:e),n.index)})}}(t),u(kn))}function d(){H(l),_(l)}function v(){d(),e()}function h(){t<p()&&u(bn)}function p(){var n,t,i=f.clones;return c.is(ct)?i||(n=a.list,D(t=f[o("fixedWidth")])&&(t=G(n=F("div",{style:"width: "+t+"; position: absolute;"},n)).width,H(n)),i=((t=t)&&rn(G(a.track)[o("width")]/t)||f[o("autoWidth")]&&c.length||f.perPage)*(f.drag?(f.flickMaxPages||1)+1:2)):i=0,i}return{mount:function(){e(),r(bn,v),r([xn,kn],h)},destroy:d}},Move:function(e,c,f){var a,n=Pn(e),t=n.on,s=n.emit,r=(n=c.Layout).slideSize,i=n.getPadding,u=n.totalSize,o=n.listSize,l=n.sliderSize,d=(n=c.Direction).resolve,v=n.orient,h=(n=c.Elements).list,p=n.track;function g(){k()||(c.Scroll.cancel(),m(e.index),s(Ln))}function m(n){y(_(n,!0))}function y(n,t){e.is(ft)||(t=t?n:function(n){{var t,i;e.is(ct)&&(i=v(n-b()),t=A(!1,n)&&i<0,i=A(!0,n)&&0<i,(t||i)&&(n=w(n,i)))}return n}(n),h.style.transform="translate"+d("X")+"("+t+"px)",n!==t&&s(hn))}function w(n,t){var i=n-x(t),r=l();return n-=v(r*(rn(un(i)/r)||1))*(t?1:-1)}function _(n,t){var i=v(u(n-1)-(i=n,"center"===(n=f.focus)?(o()-r(i,!0))/2:+n*r(i)||0));return t?function(n){f.trimSpace&&e.is(et)&&(n=en(n,0,v(l()-o())));return n}(i):i}function b(){var n=d("left");return G(h)[n]-G(p)[n]+v(i(!1))}function x(n){return _(n?c.Controller.getEnd():0,!!f.trimSpace)}function k(){return e.state.is(4)&&f.waitForTransition}function A(n,t){t=O(t)?b():t;var i=!0!==n&&v(t)<v(x(!1)),t=!1!==n&&v(t)>v(x(!0));return i||t}return{mount:function(){a=c.Transition,t([ln,An,xn,bn],g)},destroy:function(){T(h,"style")},move:function(n,t,i,r){var u,o;k()||(u=e.state.set,o=b(),n!==t&&(a.cancel(),y(w(o,t<n),!0)),u(4),s(dn,t,i,n),a.start(t,function(){u(3),s(vn,t,i,n),"move"===f.trimSpace&&n!==i&&o===b()?c.Controller.go(i<n?">":"<",!1,r):r&&r()}))},jump:m,translate:y,shift:w,cancel:function(){y(b()),a.cancel()},toIndex:function(n){for(var t=c.Slides.get(),i=0,r=1/0,u=0;u<t.length;u++){var o=t[u].index,e=un(_(o,!0)-n);if(!(e<=r))break;r=e,i=o}return i},toPosition:_,getPosition:b,getLimit:x,isBusy:k,exceededLimit:A}},Controller:function(n,e,u){var o,c,f,t=Pn(n).on,a=e.Move,s=a.getPosition,l=a.getLimit,i=e.Slides,d=i.isEnough,r=i.getLength,v=n.is(ct),h=n.is(et),p=u.start||0,g=p;function m(){o=r(!0),c=u.perMove,f=u.perPage,p=en(p,0,o-1)}function y(n,t,i,r,u){var o=t?n:S(n);e.Scroll.scroll(t||i?a.toPosition(o,!0):n,r,function(){z(a.toIndex(a.getPosition())),u&&u()})}function w(n){return b(!1,n)}function _(n){return b(!0,n)}function b(n,t){var i,r,u=c||(P()?1:f),o=x(p+u*(n?-1:1),p);return-1!==o||!h||(i=s(),r=l(!n),u=1,un(i-r)<u)?t?o:A(o):n?0:k()}function x(n,t,i){var r;return d()?(r=k(),n<0||r<n?n=on(0,n,t,!0)||on(r,t,n,!0)?L(E(n)):v?c||P()?n:n<0?-(o%f||f):o:u.rewind?n<0?r:0:-1:i||n===t||(n=c?n:L(E(t)+(n<t?-1:1)))):n=-1,n}function k(){var n=o-f;return(P()||v&&c)&&(n=o-1),nn(n,0)}function A(n){return v?d()?n%o+(n<0?o:0):-1:n}function L(n){return en(P()?n:f*n,0,k())}function E(n){return P()||(n=on(n,o-f,o-1)?o-1:n,n=tn(n/f)),n}function S(n){n=a.toIndex(n);return h?en(n,0,k()):n}function z(n){n!==p&&(g=p,p=n)}function P(){return!O(u.focus)||u.isNavigation}return{mount:function(){m(),t([xn,bn],m,R-1)},go:function(n,t,i){var r=function(n){var t=p;{var i,r;D(n)?(r=n.match(/([+\-<>])(\d+)?/)||[],i=r[1],r=r[2],"+"===i||"-"===i?t=x(p+ +(""+i+(+r||1)),p,!0):">"===i?t=r?L(+r):w(!0):"<"===i&&(t=_(!0))):t=v?n:en(n,0,k())}return t}(n);u.useScroll?y(r,!0,!0,u.speed,i):-1<(n=A(r))&&!a.isBusy()&&(t||n!==p)&&(z(n),a.move(r,n,g,i))},scroll:y,getNext:w,getPrev:_,getAdjacent:b,getEnd:k,setIndex:z,getIndex:function(n){return n?g:p},toIndex:L,toPage:E,toDest:S,hasFocus:P}},Arrows:function(u,n,i){var r,t=Pn(u),o=t.on,e=t.bind,c=t.emit,f=i.classes,a=i.i18n,s=n.Elements,l=n.Controller,d=s.arrows,v=s.prev,h=s.next,p={};function g(){var n,t;i.arrows&&(v&&h||(d=F("div",f.arrows),v=m(!0),h=m(!1),r=!0,L(d,[v,h]),S(d,P("slider"===i.arrows&&s.slider||u.root)))),v&&h&&(p.prev?N(d,!1===i.arrows?"none":""):(n=s.track.id,j(v,nt,n),j(h,nt,n),p.prev=v,p.next=h,t=l.go,o([ln,vn,xn,bn,En],y),e(h,"click",function(){t(">",!0)}),e(v,"click",function(){t("<",!0)}),c("arrows:mounted",v,h)))}function m(n){return Y('<button class="'+f.arrow+" "+(n?f.prev:f.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="'+(i.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function y(){var n=u.index,t=l.getPrev(),i=l.getNext(),r=-1<t&&n<t?a.last:a.prev,n=-1<i&&i<n?a.first:a.next;v.disabled=t<0,h.disabled=i<0,j(v,it,r),j(h,it,n),c("arrows:updated",v,h,t,i)}return{arrows:p,mount:function(){g(),o(xn,g)},destroy:function(){r?H(d):(T(v,ot),T(h,ot))}}},Autoplay:function(t,i,r){var u,o,e,n=Pn(t),c=n.on,f=n.bind,a=n.emit,s=Rn(r.interval,t.go.bind(t,">"),function(n){var t=d.bar;t&&C(t,"width",100*n+"%"),a("autoplay:playing",n)}),l=s.isPaused,d=i.Elements;function v(n){var t=n?"pause":"play",i=d[t];i&&(j(i,nt,d.track.id),j(i,it,r.i18n[t]),f(i,"click",n?p:h))}function h(){l()&&i.Slides.isEnough()&&(s.start(!r.resetProgress),o=u=e=!1,a("autoplay:play"))}function p(n){void 0===n&&(n=!0),l()||(s.pause(),a("autoplay:pause")),e=n}function g(){e||(u||o?p(!1):h())}function m(){var n=i.Slides.getAt(t.index);s.set(n&&+X(n.slide,st)||r.interval)}return{mount:function(){var n=r.autoplay;n&&(v(!0),v(!1),function(){var n=d.root;r.pauseOnHover&&f(n,"mouseenter mouseleave",function(n){u="mouseenter"===n.type,g()});r.pauseOnFocus&&f(n,"focusin focusout",function(n){o="focusin"===n.type,g()});c([dn,"scroll",bn],s.rewind),c(dn,m)}(),"pause"!==n&&h())},destroy:s.cancel,play:h,pause:p,isPaused:l}},Cover:function(n,t,i){var r=Pn(n).on;function u(i){t.Slides.forEach(function(n){var t=P(n.container||n.slide,"img");t&&t.src&&o(i,t,n)})}function o(n,t,i){i.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),N(t,n?"none":"")}return{mount:function(){i.cover&&(r(zn,function(n,t){o(!0,n,t)}),r([ln,xn,bn],u.bind(null,!0)))},destroy:function(){u(!1)}}},Scroll:function(c,n,f){var a,s,t=Pn(c),i=t.on,l=t.emit,d=n.Move,v=d.getPosition,h=d.getLimit,p=d.exceededLimit;function g(r,n,t,u){var i,o=v(),e=1;n=n||(i=un(r-o),nn(i/1.5,800)),s=t,y(),a=Rn(n,m,function(n){var t=v(),i=(o+(r-o)*(i=n,(n=f.easingFunc)?n(i):1-Math.pow(1-i,4))-v())*e;d.translate(t+i),c.is(et)&&!u&&p()&&(e*=.6,un(i)<10&&(i=p(!1),g(h(!i),600,null,!0)))},1),l("scroll"),a.start()}function m(){var n=v(),t=d.toIndex(n);on(t,0,c.length-1)||d.translate(d.shift(n,0<t),!0),s&&s(),l(En)}function y(){a&&a.cancel()}function r(){a&&!a.isPaused()&&(y(),m())}return{mount:function(){i(dn,y),i([xn,bn],r)},destroy:y,scroll:g,cancel:r}},Drag:function(u,o,e){var c,f,a,s,l,d,v,r,h,n=Pn(u),t=n.on,p=n.emit,g=n.bind,m=n.unbind,y=o.Move,w=o.Scroll,_=o.Controller,b=o.Elements.track,i=(n=o.Direction).resolve,x=n.orient,k=y.getPosition,A=y.exceededLimit,L=!1;function E(){var n=e.drag;F(!n),l="free"===n}function S(n){var t,i;r||(i=e.noDrag,t=j(n),i=!i||!W(n.target,i),v=!1,!i||!t&&n.button||(y.isBusy()?U(n,!0):(h=t?b:window,s=a=null,g(h,dt,z,lt),g(h,vt,P,lt),y.cancel(),w.cancel(),R(n))))}function z(n){var t,i,r;s||p("drag"),(s=n).cancelable&&(t=M(n)-M(f),d?(y.translate(c+t/(L&&u.is(et)?5:1)),i=200<T(n)-T(f),r=L!==(L=A()),(i||r)&&R(n),p("dragging"),v=!0,U(n)):(r=I(r=e.dragMinThreshold)?r:{mouse:0,touch:+r||10},d=un(t)>(j(n)?r.touch:r.mouse),O()&&U(n)))}function P(n){m(h,dt,z),m(h,vt,P);var t,i,r=u.index;s?((d||n.cancelable&&O())&&(t=function(n){if(u.is(ct)||!L){var t=f===s&&a||f,i=M(s)-M(t),t=T(n)-T(t),n=T(n)-T(s)<200;if(t&&n)return i/t}return 0}(n),i=t,i=k()+cn(i)*$(un(i)*(e.flickPower||600),l?1/0:o.Layout.listSize()*(e.flickMaxPages||1)),l?_.scroll(i):u.is(ft)?_.go(r+x(cn(t))):_.go(_.toDest(i),!0),U(n)),p("dragged")):l||k()===y.toPosition(r)||_.go(r,!0),d=!1}function R(n){a=f,f=n,c=k()}function D(n){!r&&v&&U(n,!0)}function O(){var n=un(M(s)-M(f));return un(M(s,!0)-M(f,!0))<n}function M(n,t){return(j(n)?n.touches[0]:n)["page"+i(t?"Y":"X")]}function T(n){return n.timeStamp}function j(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function F(n){r=n}return{mount:function(){g(b,dt,Z,lt),g(b,vt,Z,lt),g(b,"touchstart mousedown",S,lt),g(b,"click",D,{capture:!0}),g(b,"dragstart",U),t([ln,xn],E)},disable:F,isDragging:function(){return d}}},Keyboard:function(t,n,i){var r,u,o=Pn(t),e=o.on,c=o.bind,f=o.unbind,a=t.root,s=n.Direction.resolve;function l(){var n=i.keyboard;n&&("focused"===n?j(r=a,ut,0):r=window,c(r,pt,p))}function d(){f(r,pt),y(r)&&T(r,ut)}function v(){var n=u;u=!0,g(function(){u=n})}function h(){d(),l()}function p(n){u||(n=n.key,(n=x(ht,n)?"Arrow"+n:n)===s("ArrowLeft")?t.go("<"):n===s("ArrowRight")&&t.go(">"))}return{mount:function(){l(),e(xn,h),e(dn,v)},destroy:d,disable:function(n){u=n}}},LazyLoad:function(i,n,e){var t=Pn(i),r=t.on,u=t.off,o=t.bind,c=t.emit,f="sequential"===e.lazyLoad,a=[],s=0;function l(){v(),d()}function d(){n.Slides.forEach(function(o){J(o.slide,yt).forEach(function(n){var t,i,r=X(n,gt),u=X(n,mt);r===n.src&&u===n.srcset||(t=e.classes.spinner,j(i=P(i=n.parentElement,"."+t)||F("span",t,i),$n,"presentation"),a.push({o:n,e:o,src:r,srcset:u,c:i}),n.src||N(n,"none"))})}),f&&g()}function v(){s=0,a=[]}function h(){(a=a.filter(function(n){var t=e.perPage*((e.preloadPages||1)+1)-1;return!n.e.isWithin(i.index,t)||p(n)})).length||u(vn)}function p(t){var i=t.o;A(t.e.slide,Qn),o(i,"load error",function(n){!function(n,t){var i=n.e;K(i.slide,Qn),t||(H(n.c),N(n.o,""),c(zn,n.o,i),c(kn));f&&g()}(t,"error"===n.type)}),["srcset","src"].forEach(function(n){t[n]&&(j(i,n,t[n]),T(i,"src"===n?gt:mt))})}function g(){s<a.length&&p(a[s++])}return{mount:function(){e.lazyLoad&&(d(),r(bn,l),f||r([ln,bn,vn,En],h))},destroy:v}},Pagination:function(l,n,d){var v,t=Pn(l),i=t.on,r=t.emit,h=t.bind,u=t.unbind,p=n.Slides,g=n.Elements,o=n.Controller,m=o.hasFocus,e=o.getIndex,y=[];function c(){f(),d.pagination&&p.isEnough()&&(function(){var n=l.length,t=d.classes,i=d.i18n,r=d.perPage,u="slider"===d.pagination&&g.slider||g.root,o=m()?n:rn(n/r);v=F("ul",t.pagination,u);for(var e=0;e<o;e++){var c=F("li",null,v),f=F("button",{class:t.page,type:"button"},c),a=p.getIn(e).map(function(n){return n.slide.id}),s=!m()&&1<r?i.pageX:i.slideX;h(f,"click",w.bind(null,e)),j(f,nt,a.join(" ")),j(f,it,fn(s,e+1)),y.push({li:c,button:f,page:e})}}(),r("pagination:mounted",{list:v,items:y},a(l.index)),s())}function f(){v&&(H(v),y.forEach(function(n){u(n.button,"click")}),_(y),v=null)}function w(t){o.go(">"+t,!0,function(){var n=p.getAt(o.toIndex(t));n&&((n=n.slide).setActive&&n.setActive()||n.focus({preventScroll:!0}))})}function a(n){return y[o.toPage(n)]}function s(){var n=a(e(!0)),t=a(e());n&&(K(n.button,qn),T(n.button,tt)),t&&(A(t.button,qn),j(t.button,tt,!0)),r("pagination:updated",{list:v,items:y},n,t)}return{items:y,mount:function(){c(),i([xn,bn],c),i([dn,En],s)},destroy:f,getAt:a,update:s}},Sync:function(u,n,i){var r=n.Elements.list,o=[];function t(){var n,t;u.splides.forEach(function(n){var i;n.isParent||(i=n.splide,[u,i].forEach(function(n){var t=Pn(n),r=n===u?i:u;t.on(dn,function(n,t,i){r.go(r.is(ct)?i:n)}),o.push(t)}))}),i.isNavigation&&(n=Pn(u),(t=n.on)(pn,f),t(_n,a),t([ln,xn],c),j(r,$n,"menu"),o.push(n),n.emit(Sn,u.splides))}function e(){T(r,ot),o.forEach(function(n){n.destroy()}),_(o)}function c(){j(r,p,"ttb"!==i.direction?"horizontal":null)}function f(n){u.go(n.index)}function a(n,t){x(wt,t.key)&&(f(n),U(t))}return{mount:t,destroy:e,remount:function(){e(),t()}}},Wheel:function(i,r,u){var n=Pn(i).bind;function t(n){var t;!n.cancelable||(t=n.deltaY)&&(i.go((t=t<0)?"<":">"),t=t,u.releaseWheel&&!i.state.is(4)&&-1===r.Controller.getAdjacent(t)||U(n))}return{mount:function(){u.wheel&&n(r.Elements.track,"wheel",t,lt)}}}}),bt={type:"slide",speed:400,waitForTransition:!0,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,keyboard:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:{slide:Fn,clone:In,arrows:Cn,arrow:t,prev:Nn,next:Xn,pagination:i,page:i+"__page",spinner:m+"__spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function xt(n,r,t){var i=Pn(n).on;return{mount:function(){i([ln,bn],function(){g(function(){r.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})},start:function(n,t){var i=r.Elements.track;C(i,"height",V(G(i).height)),g(function(){t(),C(i,"height","")})},cancel:Z}}function kt(o,n,e){var c,t=Pn(o).bind,f=n.Move,a=n.Controller,i=n.Elements.list;function r(){s("")}function s(n){C(i,"transition",n)}return{mount:function(){t(i,"transitionend",function(n){n.target===i&&c&&(r(),c())})},start:function(n,t){var i=f.toPosition(n,!0),r=f.getPosition(),u=function(n){var t=e.rewindSpeed;if(o.is(et)&&t){var i=a.getIndex(!0),r=a.getEnd();if(0===i&&r<=n||r<=i&&0===n)return t}return e.speed}(n);1<=un(i-r)&&1<=u?(s("transform "+u+"ms "+e.easing),f.translate(i,!0),c=t):(f.jump(n),t())},cancel:r}}i=function(){function i(n,t){this.event=c(),this.Components={},this.state=d(1),this.splides=[],this.f={},this.a={};n=D(n)?q(document,n):n;Q(n,n+" is invalid."),this.root=n,l(bt,i.defaults),l(l(this.f,bt),t||{})}var n,t,r=i.prototype;return r.mount=function(n,t){var i=this,r=this.state,u=this.Components;return Q(r.is([1,5]),"Already mounted!"),r.set(1),this.s=u,this.l=t||this.l||(this.is(ft)?xt:kt),this.a=n||this.a,e(M({},_t,this.a,{Transition:this.l}),function(n,t){n=n(i,u,i.f);(u[t]=n).setup&&n.setup()}),e(u,function(n){n.mount&&n.mount()}),this.emit(ln),A(this.root,"is-initialized"),r.set(3),this.emit("ready"),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this.s.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this.s.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t,null,20),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(s(arguments,1))),this},r.add=function(n,t){return this.s.Slides.add(n,t),this},r.remove=function(n){return this.s.Slides.remove(n),this},r.is=function(n){return this.f.type===n},r.refresh=function(){return this.emit(bn),this},r.destroy=function(t){void 0===t&&(t=!0);var n=this.event,i=this.state;return i.is(1)?n.on("ready",this.destroy.bind(this,t),this):(e(this.s,function(n){n.destroy&&n.destroy(t)},!0),n.emit(f),n.destroy(),t&&_(this.splides),i.set(5)),this},n=i,(r=[{key:"options",get:function(){return this.f},set:function(n){var t=this.f;l(t,n),this.state.is(1)||this.emit(xn,t)}},{key:"length",get:function(){return this.s.Slides.getLength(!0)}},{key:"index",get:function(){return this.s.Controller.getIndex()}}])&&At(n.prototype,r),t&&At(n,t),Object.defineProperty(n,"prototype",{writable:!1}),i}();return i.defaults={},i.STATES=n,i}, true?module.exports=t():0;


/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_top_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/top-slider */ "./src/js/components/top-slider.js");
/* harmony import */ var _components_product_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-tabs */ "./src/js/components/product-tabs.js");
/* harmony import */ var _components_design_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/design-tabs */ "./src/js/components/design-tabs.js");
/* harmony import */ var _components_lightgallery_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lightgallery-video */ "./src/js/components/lightgallery-video.js");
/* harmony import */ var _components_lightgallery_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_lightgallery_video__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)()); // Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню
// import { burger } from './functions/burger';
// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';
// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('[data-att]');
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_splidejs_splide_dist_js_splide_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@splidejs/splide/dist/js/splide.min.js */ "./node_modules/@splidejs/splide/dist/js/splide.min.js");
/* harmony import */ var _node_modules_splidejs_splide_dist_js_splide_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_splidejs_splide_dist_js_splide_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_bigpicture_dist_BigPicture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/bigpicture/dist/BigPicture.js */ "./node_modules/bigpicture/dist/BigPicture.js");
/* harmony import */ var _node_modules_bigpicture_dist_BigPicture_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bigpicture_dist_BigPicture_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/components/design-tabs.js":
/*!******************************************!*\
  !*** ./src/js/components/design-tabs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graph_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-tabs */ "./node_modules/graph-tabs/src/graph-tabs.js");

var tabs = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('design');

/***/ }),

/***/ "./src/js/components/lightgallery-video.js":
/*!*************************************************!*\
  !*** ./src/js/components/lightgallery-video.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (root, factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  "use strict";

  var MediaBox = function MediaBox(element) {
    if (!this || !(this instanceof MediaBox)) {
      return new MediaBox(element);
    }

    this.selector = document.querySelectorAll(element);
    this.root = document.querySelector('body');
    this.run();
  };

  MediaBox.prototype = {
    run: function run() {
      Array.prototype.forEach.call(this.selector, function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          var link = this.parseUrl(el.getAttribute('href'));
          this.render(link);
          this.close();
        }.bind(this), false);
      }.bind(this));
    },
    template: function template(s, d) {
      var p;

      for (p in d) {
        if (d.hasOwnProperty(p)) {
          s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
        }
      }

      return s;
    },
    parseUrl: function parseUrl(url) {
      var service = {},
          matches;

      if (matches = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) {
        service.provider = "youtube";
        service.id = matches[2];
      } else if (matches = url.match(/https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/)) {
        service.provider = "vimeo";
        service.id = matches[3];
      } else {
        service.provider = "Unknown";
        service.id = '';
      }

      return service;
    },
    render: function render(service) {
      var embedLink, lightbox;

      if (service.provider === 'youtube') {
        embedLink = 'https://www.youtube.com/embed/' + service.id;
      } else if (service.provider === 'vimeo') {
        embedLink = 'https://player.vimeo.com/video/' + service.id;
      } else {
        throw new Error("Invalid video URL");
      }

      lightbox = this.template('<div class="mediabox-wrap"><div class="mediabox-content"><span class="mediabox-close"></span><iframe src="{embed}?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>', {
        embed: embedLink
      });
      this.root.insertAdjacentHTML('beforeend', lightbox);
    },
    close: function close() {
      var wrapper = document.querySelector('.mediabox-wrap');
      wrapper.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'SPAN' && e.target.className === 'mediabox-close') {
          wrapper.classList.add('mediabox-hide');
          setTimeout(function () {
            this.root.removeChild(wrapper);
          }.bind(this), 500);
        }
      }.bind(this), false);
    }
  };
  return MediaBox;
}); //Initialize the MediaBox.


MediaBox('.mediabox');

/***/ }),

/***/ "./src/js/components/product-tabs.js":
/*!*******************************************!*\
  !*** ./src/js/components/product-tabs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graph_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-tabs */ "./node_modules/graph-tabs/src/graph-tabs.js");

var tabs = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('products');

/***/ }),

/***/ "./src/js/components/top-slider.js":
/*!*****************************************!*\
  !*** ./src/js/components/top-slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");

_splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"].defaults = {
  type: 'slide',
  arrows: false,
  autoplay: false,
  rewind: true
};
var splide = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"]('.splide');
splide.on('pagination:mounted', function (data) {
  data.list.classList.add('splide__pagination--custom');
  data.items.forEach(function (item) {
    item.button.textContent = String(item.page + 1);
  });
});
splide.mount();

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var mobileCheck = function mobileCheck() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./node_modules/bigpicture/dist/BigPicture.js":
/*!****************************************************!*\
  !*** ./node_modules/bigpicture/dist/BigPicture.js ***!
  \****************************************************/
/***/ (() => {

var BigPicture = (function () {
	// BigPicture.js | license MIT | henrygd.me/bigpicture

	// trigger element used to open popup
	var el;

	// set to true after first interaction
	var initialized;

	// container element holding html needed for script
	var container;

	// currently active display element (image, video, youtube / vimeo iframe container)
	var displayElement;

	// popup image element
	var displayImage;

	// popup video element
	var displayVideo;

	// popup audio element
	var displayAudio;

	// container element to hold youtube / vimeo iframe
	var iframeContainer;

	// iframe to hold youtube / vimeo player
	var iframeSiteVid;

	// store requested image source
	var imgSrc;

	// button that closes the container
	var closeButton;

	// youtube / vimeo video id
	var siteVidID;

	// keeps track of loading icon display state
	var isLoading;

	// timeout to check video status while loading
	var checkMediaTimeout;

	// loading icon element
	var loadingIcon;

	// caption element
	var caption;

	// caption content element
	var captionText;

	// store caption content
	var captionContent;

	// hide caption button element
	var captionHideButton;

	// open state for container element
	var isOpen;

	// gallery open state
	var galleryOpen;

	// used during close animation to avoid triggering timeout twice
	var isClosing;

	// array of prev viewed image urls to check if cached before showing loading icon
	var imgCache = [];

	// store whether image requested is remote or local
	var remoteImage;

	// store animation opening callbacks
	var animationStart;
	var animationEnd;

	// store changeGalleryImage callback
	var onChangeImage;

	// gallery left / right icons
	var rightArrowBtn;

	var leftArrowBtn;

	// position of gallery
	var galleryPosition;

	// hold active gallery els / image src
	var galleryEls;

	// counter element
	var galleryCounter;

	// store images in gallery that are being loaded
	var preloadedImages = {};

	// whether device supports touch events
	var supportsTouch;

	// options object
	var opts;

	// Save bytes in the minified version
	var appendEl = 'appendChild';
	var createEl = 'createElement';
	var removeEl = 'removeChild';

	function BigPicture (options) {
		// initialize called on initial open to create elements / style / event handlers
		initialized || initialize();

		// clear currently loading stuff
		if (isLoading) {
			clearTimeout(checkMediaTimeout);
			removeContainer();
		}

		opts = options;

		// store video id if youtube / vimeo video is requested
		siteVidID = options.ytSrc || options.vimeoSrc;

		// store optional callbacks
		animationStart = options.animationStart;
		animationEnd = options.animationEnd;
		onChangeImage = options.onChangeImage;

		// set trigger element
		el = options.el;

		// wipe existing remoteImage state
		remoteImage = false;

		// set caption if provided
		captionContent = el.getAttribute('data-caption');

		if (options.gallery) {
			makeGallery(options.gallery, options.position);
		} else if (siteVidID || options.iframeSrc) {
			// if vimeo, youtube, or iframe video
			// toggleLoadingIcon(true)
			displayElement = iframeContainer;
			createIframe();
		} else if (options.imgSrc) {
			// if remote image
			remoteImage = true;
			imgSrc = options.imgSrc;
			!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
			displayElement = displayImage;
			displayElement.src = imgSrc;
		} else if (options.audio) {
			// if direct video link
			toggleLoadingIcon(true);
			displayElement = displayAudio;
			displayElement.src = options.audio;
			checkMedia('audio file');
		} else if (options.vidSrc) {
			// if direct video link
			toggleLoadingIcon(true);
			if (options.dimensions) {
				changeCSS(displayVideo, ("width:" + (options.dimensions[0]) + "px"));
			}
			makeVidSrc(options.vidSrc);
			checkMedia('video');
		} else {
			// local image / background image already loaded on page
			displayElement = displayImage;
			// get img source or element background image
			displayElement.src =
				el.tagName === 'IMG'
					? el.src
					: window
							.getComputedStyle(el)
							.backgroundImage.replace(/^url|[(|)|'|"]/g, '');
		}

		// add container to page
		container[appendEl](displayElement);
		document.body[appendEl](container);
		return {
			close: close,
			opts: opts,
			updateDimensions: updateDimensions,
			display: displayElement,
			next: function () { return updateGallery(1); },
			prev: function () { return updateGallery(-1); },
		}
	}

	// create all needed methods / store dom elements on first use
	function initialize() {
		var startX, isPinch;
		// return close button elements
		function createCloseButton(className) {
			var el = document[createEl]('button');
			el.className = className;
			el.innerHTML =
				'<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>';
			return el
		}

		function createArrowSymbol(direction, style) {
			var el = document[createEl]('button');
			el.className = 'bp-lr';
			el.innerHTML =
				'<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>';
			changeCSS(el, style);
			el.onclick = function (e) {
				e.stopPropagation();
				updateGallery(direction);
			};
			return el
		}

		// add style - if you want to tweak, run through beautifier
		var style = document[createEl]('STYLE');
		style.innerHTML =
			'#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}';
		document.head[appendEl](style);

		// create container element
		container = document[createEl]('DIV');
		container.id = 'bp_container';
		container.onclick = close;
		closeButton = createCloseButton('bp-x');
		container[appendEl](closeButton);
		// gallery touch listeners
		if ('ontouchend' in window && window.visualViewport) {
			supportsTouch = true;
			container.ontouchstart = function (ref) {
				var touches = ref.touches;
				var changedTouches = ref.changedTouches;

				isPinch = touches.length > 1;
				startX = changedTouches[0].pageX;
			};
			container.ontouchend = function (ref) {
				var changedTouches = ref.changedTouches;

				if (galleryOpen && !isPinch && window.visualViewport.scale <= 1) {
					var distX = changedTouches[0].pageX - startX;
					// swipe right
					distX < -30 && updateGallery(1);
					// swipe left
					distX > 30 && updateGallery(-1);
				}
			};
		}

		// create display image element
		displayImage = document[createEl]('IMG');

		// create display video element
		displayVideo = document[createEl]('VIDEO');
		displayVideo.id = 'bp_vid';
		displayVideo.setAttribute('playsinline', true);
		displayVideo.controls = true;
		displayVideo.loop = true;

		// create audio element
		displayAudio = document[createEl]('audio');
		displayAudio.id = 'bp_aud';
		displayAudio.controls = true;
		displayAudio.loop = true;

		// create gallery counter
		galleryCounter = document[createEl]('span');
		galleryCounter.id = 'bp_count';

		// create caption elements
		caption = document[createEl]('DIV');
		caption.id = 'bp_caption';
		captionHideButton = createCloseButton('bp-xc');
		captionHideButton.onclick = toggleCaption.bind(null, false);
		caption[appendEl](captionHideButton);
		captionText = document[createEl]('SPAN');
		caption[appendEl](captionText);
		container[appendEl](caption);

		// left / right arrow icons
		rightArrowBtn = createArrowSymbol(1, 'transform:scalex(-1)');
		leftArrowBtn = createArrowSymbol(-1, 'left:0;right:auto');

		// create loading icon element
		loadingIcon = document[createEl]('DIV');
		loadingIcon.id = 'bp_loader';
		loadingIcon.innerHTML =
			'<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>';
		// create youtube / vimeo container
		iframeContainer = document[createEl]('DIV');
		iframeContainer.id = 'bp_sv';

		// create iframe to hold youtube / vimeo player
		iframeSiteVid = document[createEl]('IFRAME');
		iframeSiteVid.setAttribute('allowfullscreen', true);
		iframeSiteVid.allow = 'autoplay; fullscreen';
		iframeSiteVid.onload = function () { return iframeContainer[removeEl](loadingIcon); };
		changeCSS(
			iframeSiteVid,
			'border:0;position:absolute;height:100%;width:100%;left:0;top:0'
		);
		iframeContainer[appendEl](iframeSiteVid);

		// display image bindings for image load and error
		displayImage.onload = open;
		displayImage.onerror = open.bind(null, 'image');

		window.addEventListener('resize', function () {
			// adjust loader position on window resize
			galleryOpen || (isLoading && toggleLoadingIcon(true));
			// adjust iframe dimensions
			displayElement === iframeContainer && updateDimensions();
		});

		// close container on escape key press and arrow buttons for gallery
		document.addEventListener('keyup', function (ref) {
			var keyCode = ref.keyCode;

			keyCode === 27 && isOpen && close();
			if (galleryOpen) {
				keyCode === 39 && updateGallery(1);
				keyCode === 37 && updateGallery(-1);
				keyCode === 38 && updateGallery(10);
				keyCode === 40 && updateGallery(-10);
			}
		});
		// prevent scrolling with arrow keys if gallery open
		document.addEventListener('keydown', function (e) {
			var usedKeys = [37, 38, 39, 40];
			if (galleryOpen && ~usedKeys.indexOf(e.keyCode)) {
				e.preventDefault();
			}
		});

		// trap focus within conainer while open
		document.addEventListener(
			'focus',
			function (e) {
				if (isOpen && !container.contains(e.target)) {
					e.stopPropagation();
					closeButton.focus();
				}
			},
			true
		);

		// all done
		initialized = true;
	}

	// return transform style to make full size display el match trigger el size
	function getRect() {
		var ref = el.getBoundingClientRect();
		var top = ref.top;
		var left = ref.left;
		var width = ref.width;
		var height = ref.height;
		var leftOffset = left - (container.clientWidth - width) / 2;
		var centerTop = top - (container.clientHeight - height) / 2;
		var scaleWidth = el.clientWidth / displayElement.clientWidth;
		var scaleHeight = el.clientHeight / displayElement.clientHeight;
		return ("transform:translate3D(" + leftOffset + "px, " + centerTop + "px, 0) scale3D(" + scaleWidth + ", " + scaleHeight + ", 0)")
	}

	function makeVidSrc(source) {
		if (Array.isArray(source)) {
			displayElement = displayVideo.cloneNode();
			source.forEach(function (src) {
				var source = document[createEl]('SOURCE');
				source.src = src;
				source.type = "video/" + (src.match(/.(\w+)$/)[1]);
				displayElement[appendEl](source);
			});
		} else {
			displayElement = displayVideo;
			displayElement.src = source;
		}
	}

	function makeGallery(gallery, position) {
		var galleryAttribute = opts.galleryAttribute || 'data-bp';
		if (Array.isArray(gallery)) {
			// is array of images
			galleryPosition = position || 0;
			galleryEls = gallery;
			captionContent = gallery[galleryPosition].caption;
		} else {
			// is element selector or nodelist
			galleryEls = [].slice.call(
				typeof gallery === 'string'
					? document.querySelectorAll((gallery + " [" + galleryAttribute + "]"))
					: gallery
			);
			// find initial gallery position
			var elIndex = galleryEls.indexOf(el);
			galleryPosition =
				position === 0 || position ? position : elIndex !== -1 ? elIndex : 0;
			// make gallery object w/ els / src / caption
			galleryEls = galleryEls.map(function (el) { return ({
				el: el,
				src: el.getAttribute(galleryAttribute),
				caption: el.getAttribute('data-caption'),
			}); });
		}
		// show loading icon if needed
		remoteImage = true;
		// set initial src to imgSrc so it will be cached in open func
		imgSrc = galleryEls[galleryPosition].src;
		!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
		if (galleryEls.length > 1) {
			// if length is greater than one, add gallery stuff
			container[appendEl](galleryCounter);
			galleryCounter.innerHTML = (galleryPosition + 1) + "/" + (galleryEls.length);
			if (!supportsTouch) {
				// add arrows if device doesn't support touch
				container[appendEl](rightArrowBtn);
				container[appendEl](leftArrowBtn);
			}
		} else {
			// gallery is one, just show without clutter
			galleryEls = false;
		}
		displayElement = displayImage;
		// set initial image src
		displayElement.src = imgSrc;
	}

	function updateGallery(movement) {
		var galleryLength = galleryEls.length - 1;

		// only allow one change at a time
		if (isLoading) {
			return
		}

		// return if requesting out of range image
		var isEnd =
			(movement > 0 && galleryPosition === galleryLength) ||
			(movement < 0 && !galleryPosition);
		if (isEnd) {
			// if beginning or end of gallery, run end animation
			if (!opts.loop) {
				changeCSS(displayImage, '');
				setTimeout(
					changeCSS,
					9,
					displayImage,
					("animation:" + (movement > 0 ? 'bpl' : 'bpf') + " .3s;transition:transform .35s")
				);
				return
			}
			// if gallery is looped, adjust position to beginning / end
			galleryPosition = movement > 0 ? -1 : galleryLength + 1;
		}

		// normalize position
		galleryPosition = Math.max(
			0,
			Math.min(galleryPosition + movement, galleryLength)
		)

		// load images before and after for quicker scrolling through pictures
		;[galleryPosition - 1, galleryPosition, galleryPosition + 1].forEach(
			function (position) {
				// normalize position
				position = Math.max(0, Math.min(position, galleryLength));
				// cancel if image has already been preloaded
				if (preloadedImages[position]) { return }
				var src = galleryEls[position].src;
				// create image for preloadedImages
				var img = document[createEl]('IMG');
				img.addEventListener('load', addToImgCache.bind(null, src));
				img.src = src;
				preloadedImages[position] = img;
			}
		);
		// if image is loaded, show it
		if (preloadedImages[galleryPosition].complete) {
			return changeGalleryImage(movement)
		}
		// if not, show loading icon and change when loaded
		isLoading = true;
		changeCSS(loadingIcon, 'opacity:.4;');
		container[appendEl](loadingIcon);
		preloadedImages[galleryPosition].onload = function () {
			galleryOpen && changeGalleryImage(movement);
		};
		// if error, store error object in el array
		preloadedImages[galleryPosition].onerror = function () {
			galleryEls[galleryPosition] = {
				error: 'Error loading image',
			};
			galleryOpen && changeGalleryImage(movement);
		};
	}

	function changeGalleryImage(movement) {
		if (isLoading) {
			container[removeEl](loadingIcon);
			isLoading = false;
		}
		var activeEl = galleryEls[galleryPosition];
		if (activeEl.error) {
			// show alert if error
			alert(activeEl.error);
		} else {
			// add new image, animate images in and out w/ css animation
			var oldimg = container.querySelector('img:last-of-type');
			displayImage = displayElement = preloadedImages[galleryPosition];
			changeCSS(
				displayImage,
				("animation:" + (movement > 0 ? 'bpfl' : 'bpfr') + " .35s;transition:transform .35s")
			);
			changeCSS(oldimg, ("animation:" + (movement > 0 ? 'bpfol' : 'bpfor') + " .35s both"));
			container[appendEl](displayImage);
			// update el for closing animation
			if (activeEl.el) {
				el = activeEl.el;
			}
		}
		// update counter
		galleryCounter.innerHTML = (galleryPosition + 1) + "/" + (galleryEls.length);
		// show / hide caption
		toggleCaption(galleryEls[galleryPosition].caption);
		// execute onChangeImage callback
		onChangeImage && onChangeImage([displayImage, galleryEls[galleryPosition]]);
	}

	// create video iframe
	function createIframe() {
		var url;
		var prefix = 'https://';
		var suffix = 'autoplay=1';

		// create appropriate url
		if (opts.ytSrc) {
			url = prefix + "www.youtube" + (opts.ytNoCookie ? '-nocookie' : '') + ".com/embed/" + siteVidID + "?html5=1&rel=0&playsinline=1&" + suffix;
		} else if (opts.vimeoSrc) {
			url = prefix + "player.vimeo.com/video/" + siteVidID + "?" + suffix;
		} else if (opts.iframeSrc) {
			url = opts.iframeSrc;
		}

		// add loading spinner to iframe container
		changeCSS(loadingIcon, '');
		iframeContainer[appendEl](loadingIcon);

		// set iframe src to url
		iframeSiteVid.src = url;

		updateDimensions();

		setTimeout(open, 9);
	}

	function updateDimensions() {
		var height;
		var width;

		// handle height / width / aspect / max width for iframe
		var windowHeight = window.innerHeight * 0.95;
		var windowWidth = window.innerWidth * 0.95;
		var windowAspect = windowHeight / windowWidth;

		var ref = opts.dimensions || [1920, 1080];
		var dimensionWidth = ref[0];
		var dimensionHeight = ref[1];

		var iframeAspect = dimensionHeight / dimensionWidth;

		if (iframeAspect > windowAspect) {
			height = Math.min(dimensionHeight, windowHeight);
			width = height / iframeAspect;
		} else {
			width = Math.min(dimensionWidth, windowWidth);
			height = width * iframeAspect;
		}

		iframeContainer.style.cssText += "width:" + width + "px;height:" + height + "px;";
	}

	// timeout to check video status while loading
	function checkMedia(errMsg) {
		if (~[1, 4].indexOf(displayElement.readyState)) {
			open();
			// short timeout to to make sure controls show in safari 11
			setTimeout(function () {
				displayElement.play();
			}, 99);
		} else if (displayElement.error) {
			open(errMsg);
		} else {
			checkMediaTimeout = setTimeout(checkMedia, 35, errMsg);
		}
	}

	// hide / show loading icon
	function toggleLoadingIcon(bool) {
		// don't show loading icon if noLoader is specified
		if (opts.noLoader) {
			return
		}
		// bool is true if we want to show icon, false if we want to remove
		// change style to match trigger element dimensions if we want to show
		bool &&
			changeCSS(
				loadingIcon,
				("top:" + (el.offsetTop) + "px;left:" + (el.offsetLeft) + "px;height:" + (el.clientHeight) + "px;width:" + (el.clientWidth) + "px")
			);
		// add or remove loader from DOM
		el.parentElement[bool ? appendEl : removeEl](loadingIcon);
		isLoading = bool;
	}

	// hide & show caption
	function toggleCaption(captionContent) {
		if (captionContent) {
			captionText.innerHTML = captionContent;
		}
		changeCSS(
			caption,
			("opacity:" + (captionContent ? "1;pointer-events:auto" : '0'))
		);
	}

	function addToImgCache(url) {
		!~imgCache.indexOf(url) && imgCache.push(url);
	}

	// animate open of image / video; display caption if needed
	function open(err) {
		// hide loading spinner
		isLoading && toggleLoadingIcon();

		// execute animationStart callback
		animationStart && animationStart();

		// check if we have an error string instead of normal event
		if (typeof err === 'string') {
			removeContainer();
			return opts.onError
				? opts.onError()
				: alert(("Error: The requested " + err + " could not be loaded."))
		}

		// if remote image is loaded, add url to imgCache array
		remoteImage && addToImgCache(imgSrc);

		// transform displayEl to match trigger el
		displayElement.style.cssText += getRect();

		// fade in container
		changeCSS(container, "opacity:1;pointer-events:auto");

		// set animationEnd callback to run after animation ends (cleared if container closed)
		if (animationEnd) {
			animationEnd = setTimeout(animationEnd, 410);
		}

		isOpen = true;

		galleryOpen = !!galleryEls;

		// enlarge displayEl, fade in caption if hasCaption
		setTimeout(function () {
			displayElement.style.cssText += 'transition:transform .35s;transform:none';
			captionContent && setTimeout(toggleCaption, 250, captionContent);
		}, 60);
	}

	// close active display element
	function close(e) {
		var target = e ? e.target : container;
		var clickEls = [
			caption,
			captionHideButton,
			displayVideo,
			displayAudio,
			captionText,
			leftArrowBtn,
			rightArrowBtn,
			loadingIcon ];

		// blur to hide close button focus style
		target.blur();

		// don't close if one of the clickEls was clicked or container is already closing
		if (isClosing || ~clickEls.indexOf(target)) {
			return
		}

		// animate closing
		displayElement.style.cssText += getRect();
		changeCSS(container, 'pointer-events:auto');

		// timeout to remove els from dom; use variable to avoid calling more than once
		setTimeout(removeContainer, 350);

		// clear animationEnd timeout
		clearTimeout(animationEnd);

		isOpen = false;
		isClosing = true;
	}

	// remove container / display element from the DOM
	function removeContainer() {
		// clear src of displayElement (or iframe if display el is iframe container)
		// needs to be done before removing container in IE
		var srcEl =
			displayElement === iframeContainer ? iframeSiteVid : displayElement;
		srcEl.removeAttribute('src');

		// remove container from DOM & clear inline style
		document.body[removeEl](container);
		container[removeEl](displayElement);
		changeCSS(container, '');
		changeCSS(displayElement, '');

		// remove caption
		toggleCaption(false);

		if (galleryOpen) {
			// remove all gallery stuff
			var images = container.querySelectorAll('img');
			for (var i = 0; i < images.length; i++) {
				container[removeEl](images[i]);
			}
			isLoading && container[removeEl](loadingIcon);
			container[removeEl](galleryCounter);
			galleryOpen = galleryEls = false;
			preloadedImages = {};
			supportsTouch || container[removeEl](rightArrowBtn);
			supportsTouch || container[removeEl](leftArrowBtn);
			// in case displayimage changed, we need to update event listeners
			displayImage.onload = open;
			displayImage.onerror = open.bind(null, 'image');
		}

		// run close callback
		opts.onClose && opts.onClose();

		isClosing = isLoading = false;
	}

	// style helper functions
	function changeCSS(ref, newStyle) {
		var style = ref.style;

		style.cssText = newStyle;
	}

	return BigPicture;

}());


/***/ }),

/***/ "./node_modules/graph-tabs/src/graph-tabs.js":
/*!***************************************************!*\
  !*** ./node_modules/graph-tabs/src/graph-tabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphTabs)
/* harmony export */ });
class GraphTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {}
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector('.tabs__nav');
      this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
      this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
    } else {
      console.error('Селектор data-tabs не существует!');
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('Количество элементов с одинаковым data-tabs больше одного!');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('Количество кнопок и элементов табов не совпадает!');
      return;
    }
  }

  init() {
    this.tabList.setAttribute('role', 'tablist');

    this.tabsBtns.forEach((el, i) => {
      el.setAttribute('role', 'tab');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('id', `${this.selector}${i + 1}`);
      el.classList.remove('tabs__nav-btn--active');
    });

    this.tabsPanels.forEach((el, i) => {
      el.setAttribute('role', 'tabpanel');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
      el.classList.remove('tabs__panel--active');
    });

    this.tabsBtns[0].classList.add('tabs__nav-btn--active');
    this.tabsBtns[0].removeAttribute('tabindex');
    this.tabsBtns[0].setAttribute('aria-selected', 'true');
    this.tabsPanels[0].classList.add('tabs__panel--active');
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        let currentTab = this.tabList.querySelector('[aria-selected]');

        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });

      el.addEventListener('keydown', (e) => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = 'down';
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === 'down') {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab = this.tabs.querySelector('[aria-selected]')) {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');

    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
    this.tabsPanels[index].classList.add('tabs__panel--active');

    this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
    this.tabsBtns[index].classList.add('tabs__nav-btn--active');

    this.options.isChanged(this);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map