Array.prototype.id = function (id) {
    var l = this.length;
    for (var i = 0; i < l; ++i)
        if (this[i].id == id)
            return this[i];
    return null;
};

Array.prototype.where = function (property, value) {
    var l = this.length;
    var res = [];
    for (var i = 0; i < l; ++i)
        if (this[i][property] == value)
            res.push(this[i]);
    return res;
};

Array.prototype.pushUnique = function (value) {
    if (this.indexOf(value) >= 0)
        return false;
    this.push(value);
    return true;
};

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    };
}

Array.prototype.equals = function (b) {
    if (!this && !b)
        return true;
    if (!this && b)
        return false;
    if (this && !b)
        return false;

    if (this.length != b.length)
        return false;

    var l = this.length;
    for (var i = 0; i < l; ++i) {
        if (b.indexOf(this[i]) < 0)
            return false;
    }
    return true;
};

Array.prototype.remove = function (value) {
    var idx = this.indexOf(value);
    if (idx < 0)
        return;
    this.splice(idx, 1);
};

//Fix for IE when no console if available (its created when the debug-console opens)
if (!window.console)
    window["console"] = { log: function () {
        }, warn: function () {
        } };
var e5;
(function (e5) {
    (function (core) {
        var Caps = (function () {
            function Caps() {
            }
            Caps.resolve = function () {
                if (/MSIE\s([\d.]+)/.test(navigator.userAgent)) {
                    Caps.isMSIE = true;
                    Caps.msieVersion = parseFloat(RegExp.$1);
                }

                //is ios operation system
                this.isIOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

                this.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                this.isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                this.isWebkit = (window["webkitURL"] != null);

                //canvas support
                var elem = document.createElement('canvas');
                Caps.canvasSupported = Boolean(elem.getContext && elem.getContext('2d'));

                //touch support
                Caps.touchSupported = 'ontouchstart' in document.documentElement;

                //worker support
                Caps.workerSupported = typeof (Worker) !== "undefined";

                //pixel ratio
                Caps.pixelRatio = window["devicePixelRatio"] ? window["devicePixelRatio"] : 1;

                Caps.formDataSupported = !(window["FormData"] === undefined);

                //is mobile envirionment
                //SOURCE MODIFIED: http://stackoverflow.com/questions/11381673/javascript-solution-to-detect-mobile-browser
                var a = navigator.appVersion;
                Caps.isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
            };
            Caps.pixelRatio = 1;
            Caps.touchSupported = false;
            Caps.canvasSupported = false;
            Caps.workerSupported = false;
            Caps.formDataSupported = false;
            Caps.isMSIE = false;
            Caps.isIOS = false;
            Caps.isMobile = false;
            Caps.msieVersion = 0;
            Caps.isWebkit = false;
            Caps.isChrome = false;
            Caps.isSafari = false;
            return Caps;
        })();
        core.Caps = Caps;

        Caps.resolve();
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
(function ($) {
    //::: sortElements plugin :::
    jQuery.fn.sortElements = (function () {
        var sort = [].sort;
        return function (comparator, getSortable) {
            getSortable = getSortable || function () {
                return this;
            };
            var placements = this.map(function () {
                var sortElement = getSortable.call(this), parentNode = sortElement.parentNode, nextSibling = parentNode.insertBefore(document.createTextNode(''), sortElement.nextSibling);

                return function () {
                    if (parentNode === this) {
                        throw new Error("You can't sort elements if any one is a descendant of another.");
                    }

                    // Insert before flag:
                    parentNode.insertBefore(this, nextSibling);

                    // Remove flag:
                    parentNode.removeChild(nextSibling);
                };
            });

            return sort.call(this, comparator).each(function (i) {
                placements[i].call(getSortable.call(this));
            });
        };
    })();

    //::: ajax-progress plugin :::
    var originalXhr = $.ajaxSettings.xhr;
    $.ajaxSetup({
        progress: function () {
        },
        xhr: function () {
            var req = originalXhr(), that = this;
            if (req) {
                if (typeof req.addEventListener == "function") {
                    req.addEventListener("progress", function (evt) {
                        that.progress(evt);
                    }, false);
                }
            }
            return req;
        }
    });
})(jQuery);
var e5;
(function (e5) {
    (function (math) {
        var Calc = (function () {
            function Calc() {
            }
            Calc.clamp = function (value, min, max) {
                if (min > max) {
                    var tmp = max;
                    max = min;
                    min = tmp;
                }
                return (value < min) ? min : ((value > max) ? max : value);
            };

            Calc.clampAvg = function (value, min, max, ratio) {
                if (typeof ratio === "undefined") { ratio = 0.5; }
                if (min > max)
                    return max + (min - max) * ratio;
                return (value < min) ? min : ((value > max) ? max : value);
            };

            Calc.clampMin = function (value, min) {
                return (value < min) ? min : value;
            };

            Calc.clampMax = function (value, max) {
                return (value > max) ? max : value;
            };

            Calc.roundTo = function (value, mod) {
                var r = value % mod;
                return (r < (mod * 0.5)) ? value - r : value + (mod - r);
            };

            Calc.floorTo = function (value, mod) {
                return value - value % mod;
            };

            Calc.ceilTo = function (value, mod) {
                return value + (mod - value % mod);
            };

            Calc.valueFromCss = function (value, referenceSize) {
                return value.indexOf("%") > 0 ? (parseFloat(value.replace("%", "")) / 100) * referenceSize : parseFloat(value.replace("px", ""));
            };

            Calc.averageAngle = function (angles) {
                var avgX = 0;
                var avgY = 0;
                var l = angles.length;
                if (l == 0)
                    return 0;
                var ang = angles[0];
                for (var i = 1; i < l; ++i)
                    ang += Calc.shortRotation(ang, angles[i]) * 0.5;
                return ang;
            };

            Calc.shortRotation = function (startRotation, endRotation) {
                var dif = (endRotation - startRotation) % 360;
                if (dif != dif % 180)
                    dif = (dif < 0) ? dif + 360 : dif - 360;
                return dif;
            };
            Calc.TO_DEG = 180 / Math.PI;
            Calc.TO_RAD = Math.PI / 180;

            Calc.YEAR_MILLISECONDS = 31536000000;

            Calc.DAY_MILLISECONDS = 86400000;
            return Calc;
        })();
        math.Calc = Calc;
    })(e5.math || (e5.math = {}));
    var math = e5.math;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (math) {
        var Point = (function () {
            function Point(x, y) {
                if (typeof x === "undefined") { x = 0; }
                if (typeof y === "undefined") { y = 0; }
                this.x = x;
                this.y = y;
            }
            Point.prototype.length = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };

            Point.distance = function (a, b) {
                var dx = a.x - b.x;
                var dy = a.y - b.y;
                return Math.sqrt(dx * dx + dy * dy);
            };
            Point.origin = new Point(0, 0);
            return Point;
        })();
        math.Point = Point;

        var Geom = (function () {
            function Geom() {
            }
            Geom.localToGlobal = function (element, x, y, target) {
                if (typeof target === "undefined") { target = new e5.math.Point(); }
                var cr = element.getBoundingClientRect();
                target.x = cr.left + x;
                target.y = cr.top + y;
                return target;
            };

            Geom.globalToLocal = function (element, x, y, target) {
                if (typeof target === "undefined") { target = new e5.math.Point(); }
                target.x = Math.floor(x - element.offsetLeft);
                target.y = Math.floor(y - element.offsetTop);
                return target;
            };

            Geom.latLngToTexture = function (lat, lon, textureWidth, textureHeight) {
                return new Point(((lon + 180) * (textureWidth / 360)) % textureWidth, (((lat * -1) + 90) * (textureHeight / 180)) % textureHeight);
            };

            Geom.textureToLatLng = function (pointX, pointY, textureWidth, textureHeight) {
                var m = (pointX / textureWidth) * 180 / Math.PI;

                //            console.log(m * 1.7639164489511259);
                //
                //            pointX /= 600;
                //            pointY /= 600;
                //
                pointX *= 6378137;

                //            pointY *= 6378137;
                pointX = pointX / textureWidth;
                pointY = pointY / textureHeight;
                var lat = 2 * Math.atan(Math.pow(Math.E, pointY)) - .5 * Math.PI;
                var lon = pointX;
                lat = lat * 180 / Math.PI;
                lon = lon * 180 / Math.PI;

                //            console.log(lat, lon);
                return new Point(lat, lon);

                var lng = (pointX) / textureWidth;
                var latRadians = (pointY) / -textureHeight;
                var lat = ((2 * Math.atan(Math.exp(latRadians)) * Math.PI / 180) - Math.PI / 2);
                return new e5.math.Point(lat, lng);
            };

            //SOURCE (modified): http://stackoverflow.com/questions/8935117/how-can-i-convert-curveto-to-a-list-of-points
            Geom.interpolateQuadraticCurve = function (u, originX, originY, cpx, cpy, x, y) {
                var B1 = (1 - u) * (1 - u);
                var B2 = 2 * u * (1 - u);
                var B3 = u * u;
                var x = originX * B1 + cpx * B2 + x * B3;
                var y = originY * B1 + cpy * B2 + y * B3;
                return { x: x, y: y };
            };

            Geom.sizePolygon = function (poly) {
                var area = 0.0;
                var l = poly.length - 1;
                for (var k = 0; k < l; k++) {
                    var xDiff = poly[k + 1].x - poly[k].x;
                    var yDiff = poly[k + 1].y - poly[k].y;
                    area = area + poly[k].x * yDiff - poly[k].y * xDiff;
                }
                return 0.5 * area;
            };
            return Geom;
        })();
        math.Geom = Geom;
    })(e5.math || (e5.math = {}));
    var math = e5.math;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (core) {
        var Slot = (function () {
            function Slot(signal, listener, context) {
                this.once = false;
                this._enabled = true;
                this._signal = signal;
                this._listener = listener;
                this._context = context;
            }
            Slot.prototype.getEnabled = function () {
                return this._enabled;
            };

            Slot.prototype.setEnabled = function (value) {
                this._enabled = value;
            };

            Slot.prototype.getListener = function () {
                return this._listener;
            };

            Slot.prototype.execute = function (target, args) {
                var val = this._listener.apply(this._context, args);
                if (val instanceof Boolean)
                    return Boolean(val);
                return true;
            };

            Slot.prototype.remove = function () {
                this._signal.remove(this._listener);
            };

            Slot.prototype.dispose = function () {
                this._listener = null;
                this._signal = null;
            };
            return Slot;
        })();
        core.Slot = Slot;
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (core) {
        var Signal = (function () {
            function Signal() {
                this._enabled = true;
                this._slots = [];
                this._dispatched = false;
            }
            Signal.prototype.getDispatched = function () {
                return this._dispatched;
            };

            Signal.prototype.getEnabled = function () {
                return this._enabled;
            };

            Signal.prototype.setEnabled = function (value) {
                this._enabled = value;
            };

            Signal.prototype.getLength = function () {
                return this._slots.length;
            };

            Signal.prototype.dispatch = function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                if (!this.getEnabled()) {
                    return;
                }

                this._dispatched = true;

                var l = this._slots.length;
                var slot;
                for (var i = 0; i < l; ++i) {
                    slot = this._slots[i];
                    if (!slot.getEnabled())
                        continue;
                    var res = slot.execute(this, args);
                    if (slot.once) {
                        this._slots.splice(i, 1);
                        --l;
                        --i;
                    }
                }
            };

            Signal.prototype.once = function (listener, context) {
                if (typeof context === "undefined") { context = null; }
                var sl = this.add(listener);
                sl.once = true;
                return sl;
            };

            Signal.prototype.add = function (listener, context) {
                if (typeof context === "undefined") { context = null; }
                var sl = this.retrieveSlot(listener);
                if (sl) {
                    //bring to end (like removing the old listener and setting a new one)
                    var idx = this._slots.indexOf(sl);
                    this._slots.splice(idx, 1);
                    this._slots.push(sl);
                    return sl;
                }

                sl = new e5.core.Slot(this, listener, context);
                this._slots.push(sl);
                return sl;
            };

            Signal.prototype.remove = function (listener) {
                var sl = this.retrieveSlot(listener);
                if (!sl)
                    return null;
                var idx = this._slots.indexOf(sl);
                this._slots.splice(idx, 1);
                sl.dispose();
                return sl;
            };

            Signal.prototype.clear = function () {
                var l = this._slots.length;
                for (var i = 0; i < l; ++i) {
                    this._slots[i].dispose();
                }
                this._slots.splice(0, this._slots.length);
                //this._dispatched = false;
            };

            Signal.prototype.retrieveSlot = function (listener) {
                var l = this._slots.length;
                for (var i = 0; i < l; ++i) {
                    if (this._slots[i].getListener() == listener)
                        return this._slots[i];
                }
                return null;
            };

            Signal.prototype.dispose = function () {
                this.clear();
            };
            return Signal;
        })();
        core.Signal = Signal;
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (core) {
        var Player = (function () {
            function Player() {
            }
            Player.getEnabled = function () {
                return Ticker.getEnabled();
            };

            Player.setEnabled = function (value) {
                Ticker.setEnabled(value);
            };
            Player.onTick = new e5.core.Signal();
            Player.tickCount = 0;
            return Player;
        })();
        core.Player = Player;

        var Ticker = (function () {
            function Ticker() {
            }
            Ticker.getEnabled = function () {
                return this._enabled;
            };

            Ticker.setEnabled = function (value) {
                if (Ticker._enabled == value)
                    return;
                Ticker._enabled = value;

                if (!Ticker._created)
                    Ticker.create();

                if (Ticker._enabled) {
                    Ticker._enabled = true;
                    Ticker.handleTick();
                } else {
                    window.cancelAnimationFrame(Ticker._handle);
                }
            };

            Ticker.handleTick = function () {
                Player.tickCount++;
                Ticker._handle = window.requestAnimationFrame(Ticker.handleTick);
                e5.core.Player.onTick.dispatch();
            };

            //source: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            Ticker.create = function () {
                var lastTime = 0;
                var vendors = ['webkit', 'moz'];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function (callback) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };

                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function (id) {
                        clearTimeout(id);
                    };
            };
            Ticker._enabled = false;
            Ticker._created = false;
            return Ticker;
        })();
    })(e5.core || (e5.core = {}));
    var core = e5.core;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (model) {
        var FormManager = (function () {
            function FormManager(form, validator, toast) {
                if (typeof toast === "undefined") { toast = null; }
                var _this = this;
                this.onSubmit = new e5.core.Signal();
                this.onSuccess = new e5.core.Signal();
                this._valid = false;
                this._form = form;
                this._validator = validator;
                this._toast = toast;

                //bind listeners
                this._form.submit(function (e) {
                    return _this.handleSubmit(e);
                });
                this._form.on("change keyup select", function () {
                    return _this.validate();
                });
            }
            FormManager.prototype.submit = function () {
                var _this = this;
                if (!this._valid) {
                    if (this._toast)
                        e5.display.Toast.show({ message: this._toast });
                    return;
                }

                var formData = e5.core.Caps.formDataSupported ? new window.FormData(this._form[0]) : this._form.serialize();

                var url = this._form.attr("action");
                var settings = {};
                settings.url = url;
                settings.type = "POST";
                settings.data = formData;
                settings.contentType = false;
                settings.processData = false;
                settings.success = function (data) {
                    return _this.handleAjaxSuccess(data);
                };

                this.onSubmit.dispatch(formData, settings);

                $.ajax(settings);
            };

            FormManager.prototype.validate = function () {
                this._valid = this._validator();
            };

            FormManager.prototype.handleSubmit = function (e) {
                e.preventDefault();
                this.submit();
                return false;
            };

            FormManager.prototype.handleAjaxSuccess = function (data) {
                this.onSuccess.dispatch(data);
            };
            return FormManager;
        })();
        model.FormManager = FormManager;
    })(e5.model || (e5.model = {}));
    var model = e5.model;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (_text) {
        var Text = (function () {
            function Text() {
            }
            Text.ext = function (filename) {
                var dotIndex = filename.lastIndexOf(".");
                return filename.substr(dotIndex + 1).toLowerCase();
            };

            Text.month = function (month) {
                return Text.MONTH_EN[e5.math.Calc.clamp(month, 0, 11)];
            };

            Text.toDate = function (str) {
                var year = parseInt(str.substr(0, 4));
                var month = parseInt(str.substr(5, 2)) - 1;
                var date = parseInt(str.substr(8, 2));
                if (str.length <= 10)
                    return new Date(year, month, date);
                var hours = parseInt(str.substr(11, 2));
                var minutes = parseInt(str.substr(14, 2));
                var seconds = parseInt(str.substr(17, 2));
                return new Date(year, month, date, hours, minutes, seconds);
            };

            Text.randomString = function (length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < length; ++i)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            };

            Text.fill = function (text, maxLength, fillChar) {
                if (text.length >= maxLength)
                    return text;

                for (var j = text.length; j < maxLength; ++j)
                    text += fillChar.charAt(0);
                return text;
            };

            Text.fillHead = function (text, maxLength, fillChar) {
                if (text.length >= maxLength)
                    return text;

                for (var i = text.length; i < maxLength; ++i)
                    text = fillChar.charAt(0) + text;
                return text;
            };

            Text.clamp = function (text, maxLength, ending, minLength, separators) {
                if (typeof ending === "undefined") { ending = "..."; }
                if (typeof minLength === "undefined") { minLength = 3; }
                if (typeof separators === "undefined") { separators = " -+,._;/\\"; }
                if (text.length < maxLength)
                    return text;

                var t = text.substr(0, maxLength);
                var l = t.length;
                var m = separators.length;
                var breaked = false;
                for (var j = l - 3; j >= 0; j--) {
                    var char = t.charAt(j);
                    for (var i = 0; i < l; ++i) {
                        if (separators.charAt(i) == char) {
                            breaked = true;
                            break;
                        }
                    }
                    if (breaked)
                        break;
                }
                if (!breaked)
                    return t.substr(0, maxLength - 3) + ending;
                return text.substr(0, ++j) + ending;
            };
            Text.MONTH_EN = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"];
            return Text;
        })();
        _text.Text = Text;
    })(e5.text || (e5.text = {}));
    var text = e5.text;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (control) {
        var History = (function () {
            function History() {
                this.onHashChange = new e5.core.Signal();
                this._hash = "";
                this.init();
            }
            History.prototype.init = function () {
                var _this = this;
                this._hash = window.location.hash.substring(1);
                $(window).bind('hashchange', function () {
                    return _this.handleHashChange();
                });
            };

            History.prototype.handleHashChange = function () {
                var newHash = window.location.hash;
                newHash = newHash.substring(1);

                var changed = newHash != this._hash;
                this.setHash(newHash);
                if (changed)
                    this.onHashChange.dispatch(this._hash);
            };

            History.prototype.getHash = function () {
                return this._hash;
            };

            History.prototype.setHash = function (value) {
                if (this._hash == value)
                    return;
                this._hash = value;
                window.location.hash = "#" + this._hash;
            };

            History.prototype.clear = function () {
                window.location.hash = null;
            };
            return History;
        })();
        control.History = History;
    })(e5.control || (e5.control = {}));
    var control = e5.control;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (input) {
        var Interactor = (function () {
            function Interactor(target, actionArea) {
                if (typeof actionArea === "undefined") { actionArea = null; }
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionBegin = new e5.core.Signal();
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionMove = new e5.core.Signal();
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionEnd = new e5.core.Signal();
                /**
                * callback: (interactor:input.Interactor, target:any, currentTarget:any):void
                */
                this.onActionTap = new e5.core.Signal();
                /**
                * callback: (delta:number, evt:any):void
                */
                this.onMouseWheel = new e5.core.Signal();
                this.preventMouseDown = false;
                this.preventMouseMove = false;
                this.preventTouchDown = false;
                this.preventTouchMove = true;
                this.preventSelection = false;
                this._mouseWheelEnabled = false;
                this._mouseEnabled = false;
                this._touchEnabled = false;
                this._timestamp = 0;
                this._pageX = 0;
                this._pageY = 0;
                this._deltaX = 0;
                this._deltaY = 0;
                this._originX = 0;
                this._originY = 0;
                this._localOriginX = 0;
                this._localOriginY = 0;
                this.namespace = e5.text.Text.randomString(6);
                this._target = target;
                this._actionArea = actionArea;
            }
            Interactor.prototype.getActionArea = function () {
                return this._actionArea ? this._actionArea : this._target;
            };

            Interactor.prototype.setActionArea = function (actionArea) {
                if (this._actionArea == actionArea)
                    return;

                var te = this._touchEnabled;
                var me = this._mouseEnabled;
                this.setTouchEnabled(false);
                this.setMouseEnabled(false);
                this._actionArea = actionArea;
                this.setTouchEnabled(te);
                this.setMouseEnabled(me);
            };

            Interactor.prototype.getTarget = function () {
                return this._target;
            };

            Interactor.prototype.setTarget = function (target) {
                if (this._target == target)
                    return;

                var te = this._touchEnabled;
                var me = this._mouseEnabled;
                this.setTouchEnabled(false);
                this.setMouseEnabled(false);
                this._target = target;
                this.setTouchEnabled(te);
                this.setMouseEnabled(me);
            };

            Interactor.prototype.getOriginX = function () {
                return this._originX;
            };

            Interactor.prototype.getOriginY = function () {
                return this._originY;
            };

            Interactor.prototype.getLocalOriginX = function () {
                return this._localOriginX;
            };

            Interactor.prototype.getLocalOriginY = function () {
                return this._localOriginY;
            };

            Interactor.prototype.getDeltaX = function () {
                return this._deltaX;
            };

            Interactor.prototype.getDeltaY = function () {
                return this._deltaY;
            };

            Interactor.prototype.getPageX = function () {
                return this._pageX;
            };

            Interactor.prototype.getPageY = function () {
                return this._pageY;
            };

            Interactor.prototype.getMouseEnabled = function () {
                return this._mouseEnabled;
            };

            Interactor.prototype.setMouseEnabled = function (value) {
                var _this = this;
                if (this._mouseEnabled == value)
                    return;
                this._mouseEnabled = value;
                if (this._mouseEnabled)
                    this.getActionArea().bind("mousedown", function (e) {
                        _this.handleMouseDown(e);
                    });
                else
                    this.getActionArea().unbind("mousedown");
            };

            Interactor.prototype.getMouseWheelEnabled = function () {
                return this._mouseWheelEnabled;
            };

            Interactor.prototype.setMouseWheelEnabled = function (value) {
                var _this = this;
                if (this._mouseWheelEnabled == value)
                    return;
                this._mouseWheelEnabled = value;
                if (this._mouseWheelEnabled)
                    this.getActionArea().bind("mousewheel DOMMouseScroll", function (e) {
                        _this.handleMouseWheel(e);
                    });
                else
                    this.getActionArea().unbind("mousewheel DOMMouseScroll");
            };

            Interactor.prototype.getTouchEnabled = function () {
                return this._touchEnabled;
            };

            Interactor.prototype.setTouchEnabled = function (value) {
                var _this = this;
                if (this._touchEnabled == value)
                    return;
                this._touchEnabled = value;
                if (this._touchEnabled) {
                    this.getActionArea().bind("touchstart." + this.namespace, function (e) {
                        return _this.handleTouchStart(e);
                    });
                    this.getActionArea().bind("touchmove." + this.namespace, function (e) {
                        return _this.handleTouchMove(e);
                    });
                    this.getActionArea().bind("touchend." + this.namespace + " touchleave." + this.namespace, function (e) {
                        return _this.handleTouchEnd(e);
                    });
                } else {
                    this.getActionArea().unbind("touchstart." + this.namespace + " touchmove." + this.namespace + " touchend." + this.namespace + " touchleave." + this.namespace);
                }
            };

            Interactor.prototype.handleMouseDown = function (e) {
                var _this = this;
                if (this.preventMouseDown)
                    e.originalEvent.preventDefault();
                this._handleActionBegin(e.pageX, e.pageY, e.target, e.currentTarget);
                $(window).bind("mousemove." + this.namespace, function (e) {
                    return _this.handleMouseMove(e);
                });
                $(window).one("mouseup." + this.namespace, function (e) {
                    return _this.handleMouseUp(e);
                }); //mouseleave
            };

            Interactor.prototype.handleMouseMove = function (e) {
                if (this.preventMouseMove)
                    e.originalEvent.preventDefault();
                this._handleActionMove(e.pageX, e.pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleMouseUp = function (e) {
                $(window).unbind("mousemove." + this.namespace); // mouseup blur, mouseleave
                this._handleActionEnd(this._pageX, this._pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleTouchStart = function (e) {
                if (this.preventTouchDown)
                    e.originalEvent.preventDefault();
                var p = e.originalEvent.touches[0];
                this._handleActionBegin(p.pageX, p.pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleTouchMove = function (e) {
                if (this.preventTouchMove)
                    e.originalEvent.preventDefault();
                var p = e.originalEvent.touches[0];
                this._handleActionMove(p.pageX, p.pageY, e.target, e.currentTarget);
            };

            Interactor.prototype.handleTouchEnd = function (e) {
                if (e.originalEvent.touches.length > 0) {
                    var p = e.originalEvent.touches[0];
                    this._deltaX = 0;
                    this._deltaY = 0;
                    this._pageX = p.pageX;
                    this._pageX = p.pageY;
                    return;
                }
                this._handleActionEnd(this._pageX, this._pageY, e.target, e.currentTarget);
            };

            Interactor.prototype._handleActionBegin = function (pageX, pageY, target, currentTarget) {
                this._originX = pageX;
                this._originY = pageY;
                this._pageX = pageX;
                this._pageY = pageY;

                var off = this.getTarget().offset();
                this._localOriginX = off.left - this._originX;
                this._localOriginY = off.top - this._originY;

                this._timestamp = new Date().getTime();

                this.onActionBegin.dispatch(this, target, currentTarget);

                if (this.preventSelection)
                    $("html").addClass("prevent-selection");
            };

            Interactor.prototype._handleActionMove = function (pageX, pageY, target, currentTarget) {
                this._deltaX = pageX - this._pageX;
                this._deltaY = pageY - this._pageY;
                this._pageX = pageX;
                this._pageY = pageY;

                this.onActionMove.dispatch(this, target, currentTarget);
            };

            Interactor.prototype._handleActionEnd = function (pageX, pageY, target, currentTarget) {
                this._pageX = pageX;
                this._pageY = pageY;

                this.onActionEnd.dispatch(this, target, currentTarget);

                var time = new Date().getTime();
                var tapTime = time - this._timestamp;
                var dx = this._pageX - this._originX;
                var dy = this._pageY - this._originY;
                var dist = Math.sqrt(dx * dx + dy + dy);
                if (dist < e5.input.Interactor.MAX_TAP_DISTANCE && tapTime < e5.input.Interactor.MAX_TAP_TIME)
                    this.onActionTap.dispatch(this, target, currentTarget);

                if (this.preventSelection)
                    $("html").removeClass("prevent-selection");
            };

            Interactor.prototype.handleMouseWheel = function (e) {
                if (!this._mouseWheelEnabled)
                    return;

                var delta = e.originalEvent.detail;
                if (!delta)
                    delta = e.originalEvent.wheelDelta / -40;
                this.onMouseWheel.dispatch(delta, e);
            };

            Interactor.prototype.dispose = function () {
                this.onActionBegin.dispose();
                this.onActionMove.dispose();
                this.onActionEnd.dispose();
                this.onActionTap.dispose();
                this.onMouseWheel.dispose();
                this.setMouseEnabled(false);
                this.setTouchEnabled(false);

                this.onActionBegin = null;
                this.onActionMove = null;
                this.onActionEnd = null;
                this.onActionTap = null;
                this._target = null;
                this._actionArea = null;
            };
            Interactor.MAX_TAP_TIME = 300;
            Interactor.MAX_TAP_DISTANCE = 10;
            return Interactor;
        })();
        input.Interactor = Interactor;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var e5;
(function (e5) {
    (function (input) {
        var Dragger = (function (_super) {
            __extends(Dragger, _super);
            function Dragger(target, vertical, horizontal) {
                if (typeof vertical === "undefined") { vertical = false; }
                if (typeof horizontal === "undefined") { horizontal = false; }
                _super.call(this, target);
                this.onChange = new e5.core.Signal();
                this.onChangeEnd = new e5.core.Signal();
                this._minLocalX = NaN;
                this._maxLocalX = NaN;
                this._minLocalY = NaN;
                this._maxLocalY = NaN;
                this._vertical = true;
                this._horizontal = true;
                this._keepInBounds = false;

                this.setMouseEnabled(true);
                this.setTouchEnabled(true);
                this.setVertical(vertical);
                this.setHorizontal(horizontal);

                this.onActionBegin.add(this.handleActionBegin, this);
                this.onActionMove.add(this.handleActionMove, this);
                this.onActionEnd.add(this.handleActionEnd, this);
            }
            Dragger.prototype.setVertical = function (value) {
                if (this._vertical == value)
                    return;
                this._vertical = value;
            };

            Dragger.prototype.getVertical = function () {
                return this._vertical;
            };

            Dragger.prototype.setKeepInBounds = function (value) {
                if (this._keepInBounds == value)
                    return;
                this._keepInBounds = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getKeepInBounds = function () {
                return this._keepInBounds;
            };

            Dragger.prototype.setHorizontal = function (value) {
                if (this._horizontal == value)
                    return;
                this._horizontal = value;
            };

            Dragger.prototype.getHorizontal = function () {
                return this._horizontal;
            };

            Dragger.prototype.setMinLocalX = function (value) {
                if (this._minLocalX == value)
                    return;
                this._minLocalX = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMinLocalX = function () {
                if (isNaN(this._minLocalX)) {
                    if (this._keepInBounds)
                        return 0;
                    else
                        return -10000000;
                }
                return this._minLocalX;
            };

            Dragger.prototype.setMaxLocalX = function (value) {
                if (this._maxLocalX == value)
                    return;
                this._maxLocalX = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMaxLocalX = function () {
                if (isNaN(this._maxLocalX)) {
                    if (this._keepInBounds) {
                        if (this.getTarget().parent()) {
                            return this.getTarget().parent().width() - this.getTarget().outerWidth();
                        } else
                            return 0;
                    } else
                        return 10000000;
                }
                return this._maxLocalX;
            };

            Dragger.prototype.setMinLocalY = function (value) {
                if (this._minLocalY == value)
                    return;
                this._minLocalY = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMinLocalY = function () {
                if (isNaN(this._minLocalY)) {
                    if (this._keepInBounds)
                        return 0;
                    else
                        return -10000000;
                }
                return this._minLocalY;
            };

            Dragger.prototype.setMaxLocalY = function (value) {
                if (this._maxLocalY == value)
                    return;
                this._maxLocalY = value;
                this.refreshExtrema();
            };

            Dragger.prototype.getMaxLocalY = function () {
                if (isNaN(this._maxLocalY)) {
                    if (this._keepInBounds) {
                        if (this.getTarget().parent()) {
                            return this.getTarget().parent().height() - this.getTarget().outerHeight();
                        } else
                            return 0;
                    } else
                        return 10000000;
                }
                return this._maxLocalY;
            };

            Dragger.prototype.setLocalX = function (value) {
                value = e5.math.Calc.clamp(Math.round(value), this.getMinLocalX(), this.getMaxLocalX());
                this.getTarget().css("left", value + "px");
            };

            Dragger.prototype.getLocalX = function () {
                return this.getTarget().position().left;
            };

            Dragger.prototype.setLocalY = function (value) {
                value = e5.math.Calc.clamp(Math.round(value), this.getMinLocalY(), this.getMaxLocalY());
                this.getTarget().css("top", value + "px");
            };

            Dragger.prototype.getLocalY = function () {
                return this.getTarget().position().top;
            };

            Dragger.prototype.refreshExtrema = function () {
                //TODO: keep target in min/max bounds
            };

            Dragger.prototype.handleActionBegin = function () {
                this.getTarget().addClass("dragging");
            };

            Dragger.prototype.handleActionMove = function () {
                var pos = this.getTarget().position();
                if (this.getHorizontal())
                    this.setLocalX(pos.left + this.getDeltaX());
                if (this.getVertical())
                    this.setLocalY(pos.top + this.getDeltaY());
                this.onChange.dispatch();
            };

            Dragger.prototype.handleActionEnd = function () {
                this.getTarget().removeClass("dragging");
                this.onChangeEnd.dispatch();
            };
            return Dragger;
        })(e5.input.Interactor);
        input.Dragger = Dragger;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (input) {
        var ScrollerSetting = (function () {
            function ScrollerSetting() {
                this.scrollerMode = e5.input.ScrollerModes.SCROLL;
                this.mouseEnabled = false;
                this.touchEnabled = false;
                this.mouseWheelEnabled = false;
                this.mouseWheelSpeed = 16;
                this.mouseWheelTime = 0.5;
                this.horizontal = false;
                this.vertical = false;
                this.contentWidth = NaN;
                this.contentHeight = NaN;
                this.clamping = true;
                this.centering = false;
                this.preventMouseWheel = false;
            }
            return ScrollerSetting;
        })();
        input.ScrollerSetting = ScrollerSetting;

        var Scroller = (function (_super) {
            __extends(Scroller, _super);
            function Scroller(wrapper, holder, setting) {
                _super.call(this, wrapper);
                /**
                * callback: ():void
                */
                this.onResized = new e5.core.Signal();
                /**
                * callback: (newScrollLeft:number, oldScrollLeft:number):void
                */
                this.onScrollLeft = new e5.core.Signal();
                /**
                * callback: (newScrollTop:number, oldScrollTop:number):void
                */
                this.onScrollTop = new e5.core.Signal();
                this._enabled = true;
                this._lastMouseWheelDelta = 0;
                this._mouseWheelTimeoutHandle = 0;
                this._mouseWheelTime = 0.5;
                this._scrollerMode = null;
                this._vertical = true;
                this._horizontal = false;
                this._contentHeight = NaN;
                this._contentWidth = NaN;
                this._clamping = true;
                this._minScrollTop = 0;
                this._minScrollLeft = 0;
                this._centering = false;
                this._preventMouseWheel = false;
                this._holder = holder;
                this._scrollTop = holder ? holder.position().top : 0;
                this._lastScrollTop = this._scrollTop;
                this._scrollLeft = holder ? holder.position().left : 0;
                this._lastScrollLeft = this._scrollLeft;
                this.onActionMove.add(this.moveDrag, this);

                if (setting)
                    this.setSetting(setting);
            }
            Scroller.prototype.setSetting = function (setting) {
                this.setClamping(setting.clamping);
                this.setCentering(setting.centering);
                this._contentWidth = setting.contentWidth;
                this._contentHeight = setting.contentHeight;
                this.refreshMaxima();

                this._preventMouseWheel = setting.preventMouseWheel;
                this._mouseWheelTime = setting.mouseWheelTime;
                this.setScrollerMode(setting.scrollerMode);
                this.setVertical(setting.vertical);
                this.setHorizontal(setting.horizontal);
                this.setMouseEnabled(setting.mouseEnabled);
                this.setMouseWheelSpeed(setting.mouseWheelSpeed);
                this.setTouchEnabled(setting.touchEnabled);
                this.setMouseWheelEnabled(setting.mouseWheelEnabled);
            };

            Scroller.prototype.setContentWidth = function (value) {
                if (this._contentWidth == value)
                    return;
                this._contentWidth = value;
                this.refreshMaxima();
            };

            Scroller.prototype.setContentHeight = function (value) {
                if (this._contentHeight == value)
                    return;
                this._contentHeight = value;
                this.refreshMaxima();
            };

            Scroller.prototype.scrollIntoView = function (element, top, time) {
                if (typeof time === "undefined") { time = 0; }
                //very simple implementation
                var ele = $(element);
                var tar = this.getTarget();
                var pos = ele.offset();
                var hei = ele.outerHeight();
                var availHei = tar.outerHeight();
                var pgY = pos.top - tar.offset().top;
                var resTop = this._scrollTop;
                if (pgY < 0)
                    resTop = element.offsetTop - tar.position().top;
                else if (pgY + hei > availHei)
                    resTop = element.offsetTop - (availHei - hei + tar.position().top);
                this.tweenToTop(resTop, time);
                //TO-DO: correct the calculations
                //var gl = math.Geom.localToGlobal(element, 0, 0);
                //var st = math.Geom.globalToLocal(this.getTarget()[0], gl.x, gl.y);
                //this.setScrollTop(st.y - this.getTarget()[0].scrollTop);
                //ARRRGHHHH IE renders immadiately, but resolves position later
                //var topPos = this._scrollTop;
                //var leftPos = this._scrollLeft;
                //element.scrollIntoView(top);
                //var newLeft: number = this.getScrollerMode().getScrollLeft(this);
                //this._scrollerMode.scrollLeft(this, leftPos);
                //this.tweenToLeft(newLeft, time);
                //var newTop: number = this.getScrollerMode().getScrollTop(this);
                //this._scrollerMode.scrollTop(this, topPos);
                //this.tweenToTop(newTop, time);
            };

            //resets the scroll values by the
            //real values of the dom element
            //through the current ScrollMode.
            //e.g. in ScrollMode.SCROLL its retrieves
            //the native scrollTop() and scrollLeft() values
            //as numbers
            Scroller.prototype.refresh = function () {
                if (this._vertical)
                    this.setScrollTop(this._scrollerMode.getScrollTop(this));
                if (this._horizontal)
                    this.setScrollLeft(this._scrollerMode.getScrollLeft(this));
            };

            Scroller.prototype.resize = function () {
                this.refreshMaxima();
                if (this._vertical)
                    this.setScrollTop(this._scrollTop);
                if (this._horizontal)
                    this.setScrollLeft(this._scrollLeft);
                this.onResized.dispatch();
            };

            Scroller.prototype.getContentWidth = function () {
                if (this._holder)
                    return isNaN(this._contentWidth) ? this._holder.width() : this._contentWidth;
                return isNaN(this._contentWidth) ? this.getTarget()[0].scrollWidth : this._contentWidth;
                //return isNaN(this._contentWidth) ? this.getTarget().innerWidth() : this._contentWidth;
            };

            Scroller.prototype.getContentHeight = function () {
                if (this._holder)
                    return isNaN(this._contentHeight) ? this._holder.height() : this._contentHeight;
                return isNaN(this._contentHeight) ? this.getTarget()[0].scrollHeight : this._contentHeight;
                //return isNaN(this._contentHeight) ? this.getTarget().innerHeight() : this._contentHeight;
            };

            Scroller.prototype.refreshMaxima = function () {
                var cw = this.getContentWidth();
                var ch = this.getContentHeight();
                var tw = this.getTarget().width();
                var th = this.getTarget().height();
                this._maxScrollLeft = cw - tw;
                this._maxScrollTop = ch - th;
                this._minScrollLeft = 0;
                this._minScrollTop = 0;

                if (this._maxScrollLeft < 0) {
                    if (this._centering) {
                        this._maxScrollLeft = -0.5 * (tw - cw);
                        this._minScrollLeft = this._maxScrollLeft;
                    } else
                        this._maxScrollLeft = 0;
                }
                if (this._maxScrollTop < 0) {
                    if (this._centering) {
                        this._maxScrollTop = -0.5 * (th - ch);
                        this._minScrollTop = this._maxScrollTop;
                    } else
                        this._maxScrollTop = 0;
                }
            };

            Scroller.prototype.getHolder = function () {
                return this._holder;
            };

            Scroller.prototype.getHorizontal = function () {
                return this._horizontal;
            };

            Scroller.prototype.setHorizontal = function (value) {
                this._horizontal = value;
            };

            Scroller.prototype.getVertical = function () {
                return this._vertical;
            };

            Scroller.prototype.setVertical = function (value) {
                this._vertical = value;
            };

            Scroller.prototype.getEnabled = function () {
                return this._enabled;
            };

            Scroller.prototype.setEnabled = function (value) {
                this._enabled = value;
            };

            Scroller.prototype.getCentering = function () {
                return this._centering;
            };

            Scroller.prototype.setCentering = function (value) {
                this._centering = value;
            };

            Scroller.prototype.getClamping = function () {
                return this._clamping;
            };

            Scroller.prototype.setClamping = function (value) {
                this._clamping = value;
            };

            Scroller.prototype.getLastMouseWheelDelta = function () {
                return this._lastMouseWheelDelta;
            };

            Scroller.prototype.getScrollTopMin = function () {
                return this._minScrollTop;
            };

            Scroller.prototype.getScrollTopMax = function () {
                return this._maxScrollTop;
            };

            Scroller.prototype.getScrollLeftMin = function () {
                return this._minScrollLeft;
            };

            Scroller.prototype.getScrollLeftMax = function () {
                return this._maxScrollLeft;
            };

            Scroller.prototype.getScrollLeft = function () {
                return this._scrollLeft;
            };

            Scroller.prototype.setScrollLeft = function (value) {
                if (this.getClamping())
                    value = e5.math.Calc.clamp(value, this.getScrollLeftMin(), this.getScrollLeftMax());
                if (this._scrollLeft == value)
                    return;
                var lastValue = this._scrollLeft;
                this._scrollLeft = value;

                //if (this._horizontal && this._scrollerMode)
                if (this._scrollerMode)
                    this._scrollerMode.scrollLeft(this, this._scrollLeft);
                this.onScrollLeft.dispatch(this._scrollLeft, lastValue);
            };

            Scroller.prototype.getScrollTop = function () {
                return this._scrollTop;
            };

            Scroller.prototype.setScrollTop = function (value) {
                if (this.getClamping())
                    value = e5.math.Calc.clamp(value, this.getScrollTopMin(), this.getScrollTopMax());
                if (this._scrollTop == value)
                    return;
                var lastValue = this._scrollTop;
                this._scrollTop = value;

                //if (this._vertical && this._scrollerMode)
                if (this._scrollerMode)
                    this._scrollerMode.scrollTop(this, this._scrollTop);
                this.onScrollTop.dispatch(this._scrollTop, lastValue);
            };

            Scroller.prototype.getMouseWheelSpeed = function () {
                return this._mouseWheelSpeed;
            };

            Scroller.prototype.setMouseWheelSpeed = function (value) {
                this._mouseWheelSpeed = value;
            };

            Scroller.prototype.getScrollerMode = function () {
                return this._scrollerMode;
            };

            Scroller.prototype.setScrollerMode = function (value) {
                if (this._scrollerMode == value)
                    return;
                if (this._scrollerMode)
                    this._scrollerMode.exit(this);
                this._scrollerMode = value;
                if (this._scrollerMode)
                    this._scrollerMode.enter(this);
            };

            Scroller.prototype.handleMouseWheelEnd = function () {
            };

            Scroller.prototype.mouseWheel = function (delta, evt) {
                var _this = this;
                if (!this._enabled)
                    return;

                this._lastMouseWheelDelta = delta;

                clearTimeout(this._mouseWheelTimeoutHandle);
                this._mouseWheelTimeoutHandle = setTimeout(function () {
                    _this.handleMouseWheelEnd();
                }, 500);

                if (this._preventMouseWheel)
                    evt.preventDefault();

                var minDiff = 0;
                if (delta > 0) {
                    if (this._vertical) {
                        if (Math.abs(this._scrollTop - this._maxScrollTop) > minDiff)
                            evt.preventDefault();
                    }
                    if (this._horizontal) {
                        if (Math.abs(this._scrollLeft - this._maxScrollLeft) > minDiff)
                            evt.preventDefault();
                    }
                } else if (!this._preventMouseWheel) {
                    if (this._vertical) {
                        if (Math.abs(this._scrollTop - this._minScrollTop) > minDiff)
                            evt.preventDefault();
                    }
                    if (this._horizontal) {
                        if (Math.abs(this._scrollLeft - this._minScrollLeft) > minDiff)
                            evt.preventDefault();
                    }
                }

                if (this._vertical)
                    this.tweenToTop(this._scrollTop + delta * this.getMouseWheelSpeed(), this._mouseWheelTime);
                else if (this._horizontal)
                    this.tweenToLeft(this._scrollLeft + delta * this.getMouseWheelSpeed(), this._mouseWheelTime);
            };

            Scroller.prototype.tweenToTop = function (top, time) {
                if (this.getClamping())
                    top = e5.math.Calc.clamp(top, this.getScrollTopMin(), this.getScrollTopMax());
                TweenMax.to(this, time, { setScrollTop: top });
            };

            Scroller.prototype.tweenToLeft = function (left, time) {
                if (this.getClamping())
                    left = e5.math.Calc.clamp(left, this.getScrollLeftMin(), this.getScrollLeftMax());
                TweenMax.to(this, time, { setScrollLeft: left });
            };

            Scroller.prototype.moveDrag = function (pageX, pageY) {
                if (this._horizontal)
                    this.setScrollLeft(this.getScrollLeft() - this.getDeltaX());
                if (this._vertical)
                    this.setScrollTop(this.getScrollTop() - this.getDeltaY());
            };

            Scroller.prototype.dispose = function () {
                this.setMouseEnabled(false);
                this.setTouchEnabled(false);
                this.setMouseWheelEnabled(false);
                this.onScrollLeft.dispose();
                this.onScrollTop.dispose();
                this.onScrollLeft = null;
                this.onScrollTop = null;
                this._holder = null;

                _super.prototype.dispose.call(this);
            };
            return Scroller;
        })(input.Interactor);
        input.Scroller = Scroller;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (input) {
        var BaseMode = (function () {
            function BaseMode() {
            }
            BaseMode.prototype.enter = function (scroller) {
                if (scroller.getVertical())
                    this.scrollTop(scroller, scroller.getScrollTop());
                if (scroller.getHorizontal())
                    this.scrollLeft(scroller, scroller.getScrollLeft());
            };
            BaseMode.prototype.exit = function (scroller) {
                if (scroller.getHorizontal())
                    this.scrollLeft(scroller, 0);
                if (scroller.getVertical())
                    this.scrollTop(scroller, 0);
            };
            BaseMode.prototype.scrollLeft = function (scroller, value) {
            };
            BaseMode.prototype.scrollTop = function (scroller, value) {
            };

            BaseMode.prototype.getScrollLeft = function (scroller) {
                return 0;
            };

            BaseMode.prototype.getScrollTop = function (scroller) {
                return 0;
            };
            return BaseMode;
        })();

        var ModeTranslate = (function (_super) {
            __extends(ModeTranslate, _super);
            function ModeTranslate() {
                _super.apply(this, arguments);
            }
            ModeTranslate.prototype.scrollLeft = function (scroller, value) {
                scroller.getHolder().css("transform", "translateX(" + -Math.round(value) + "px)");
            };
            ModeTranslate.prototype.scrollTop = function (scroller, value) {
                scroller.getHolder().css("transform", "translateY(" + -Math.round(value) + "px)");
            };

            ModeTranslate.prototype.exit = function (scroller) {
                _super.prototype.exit.call(this, scroller);
                if (scroller.getHorizontal() || scroller.getVertical())
                    scroller.getHolder().css("transform", "");
            };

            ModeTranslate.prototype.getScrollLeft = function (scroller) {
                return 0;
            };

            ModeTranslate.prototype.getScrollTop = function (scroller) {
                return 0;
            };
            return ModeTranslate;
        })(BaseMode);

        var ModeBackgroundTranslate = (function (_super) {
            __extends(ModeBackgroundTranslate, _super);
            function ModeBackgroundTranslate() {
                _super.apply(this, arguments);
            }
            ModeBackgroundTranslate.prototype.scrollLeft = function (scroller, value) {
                scroller.getTarget().css("background-position", -Math.round(value) + "px center");
            };
            ModeBackgroundTranslate.prototype.scrollTop = function (scroller, value) {
                scroller.getTarget().css("background-position", "center" + -Math.round(value) + "px");
            };

            ModeBackgroundTranslate.prototype.exit = function (scroller) {
                _super.prototype.exit.call(this, scroller);
                if (scroller.getHorizontal() || scroller.getVertical())
                    scroller.getTarget().css("background-position", "");
            };

            ModeBackgroundTranslate.prototype.getScrollLeft = function (scroller) {
                var backgroundPos = scroller.getTarget().css('backgroundPosition').split(" ");
                return parseInt(backgroundPos[0]);
            };

            ModeBackgroundTranslate.prototype.getScrollTop = function (scroller) {
                var backgroundPos = scroller.getTarget().css('backgroundPosition').split(" ");
                return parseInt(backgroundPos[1]);
            };
            return ModeBackgroundTranslate;
        })(BaseMode);

        var ModeTopLeft = (function (_super) {
            __extends(ModeTopLeft, _super);
            function ModeTopLeft() {
                _super.apply(this, arguments);
            }
            ModeTopLeft.prototype.scrollLeft = function (scroller, value) {
                scroller.getHolder().css("left", -Math.round(value) + "px");
            };
            ModeTopLeft.prototype.scrollTop = function (scroller, value) {
                scroller.getHolder().css("top", -Math.round(value) + "px");
            };

            ModeTopLeft.prototype.exit = function (scroller) {
                _super.prototype.exit.call(this, scroller);
                if (scroller.getHorizontal())
                    scroller.getHolder().css("left", "");
                if (scroller.getVertical())
                    scroller.getHolder().css("top", "");
            };

            ModeTopLeft.prototype.getScrollLeft = function (scroller) {
                return parseInt(scroller.getHolder().css('left'), 10);
            };

            ModeTopLeft.prototype.getScrollTop = function (scroller) {
                return parseInt(scroller.getHolder().css('top'), 10);
            };
            return ModeTopLeft;
        })(BaseMode);

        var ModeScroll = (function (_super) {
            __extends(ModeScroll, _super);
            function ModeScroll() {
                _super.apply(this, arguments);
            }
            ModeScroll.prototype.scrollLeft = function (scroller, value) {
                scroller.getTarget().scrollLeft(Math.round(value));
            };
            ModeScroll.prototype.scrollTop = function (scroller, value) {
                scroller.getTarget().scrollTop(Math.round(value));
            };

            ModeScroll.prototype.getScrollLeft = function (scroller) {
                return scroller.getTarget().scrollLeft();
            };

            ModeScroll.prototype.getScrollTop = function (scroller) {
                return scroller.getTarget().scrollTop();
            };
            return ModeScroll;
        })(BaseMode);

        var ScrollerModes = (function () {
            function ScrollerModes() {
            }
            ScrollerModes.BACKGROUND_TRANSLATE = new ModeBackgroundTranslate();
            ScrollerModes.TRANSLATE = new ModeTranslate();
            ScrollerModes.TOP_LEFT = new ModeTopLeft();
            ScrollerModes.SCROLL = new ModeScroll();
            return ScrollerModes;
        })();
        input.ScrollerModes = ScrollerModes;
    })(e5.input || (e5.input = {}));
    var input = e5.input;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (display) {
        var Slider = (function () {
            function Slider(wrapper, value, min, max) {
                var _this = this;
                this.onChange = new e5.core.Signal();
                this._stepSize = 1;
                this._inverted = false;
                this._vertical = true;
                this._paddingBegin = 6;
                this._paddingEnd = 6;
                this._min = min;
                this._max = max;
                this._range = this._max - this._min;

                this.create();
                wrapper.append(this._widget);

                this._dragger = new e5.input.Dragger(this._thumb, true);
                this._dragger.preventTouchMove = true;
                this._dragger.preventMouseMove = true;
                this.resize();
                this.setValue(value);

                this._increase.click(function () {
                    return _this.handleClickIncrease();
                });
                this._decrease.click(function () {
                    return _this.handleClickDecrease();
                });
                this._trackLine.click(function (evt) {
                    return _this.handleClickTrackLine(evt);
                });
                this._dragger.onChangeEnd.add(this.handleChangeEndSlider, this);
            }
            Slider.prototype.resize = function () {
                if (this._vertical) {
                    var halfHeight = this._dragger.getTarget().height() * 0.5;
                    this._dragger.setMinLocalY(this._paddingBegin + halfHeight);
                    this._dragger.setMaxLocalY(this._track.height() - this._paddingEnd - halfHeight);
                } else {
                    var halfWidth = this._dragger.getTarget().width() * 0.5;
                    this._dragger.setMinLocalX(this._paddingBegin + halfWidth);
                    this._dragger.setMaxLocalX(this._track.width() - this._paddingEnd - halfWidth);
                }
            };

            Slider.prototype.getValue = function () {
                return this._value;
            };

            Slider.prototype.setValue = function (value) {
                value = e5.math.Calc.clamp(value, this._min, this._max);
                if (this._value == value)
                    return;
                this._value = value;
                this.update();
            };

            Slider.prototype.getInverted = function () {
                return this._inverted;
            };

            Slider.prototype.setInverted = function (value) {
                if (this._inverted == value)
                    return;
                this._inverted = value;
                this.update();
            };

            Slider.prototype.update = function () {
                var perc = this._inverted ? 1 - this.getPercentage() : this.getPercentage();
                this._dragger.setLocalY(this.getDraggerMin() + perc * this.getDraggerRange());
                this._decrease.toggleClass("disabled", this._value >= this._max);
                this._increase.toggleClass("disabled", this._value <= this._min);
            };

            Slider.prototype.getDraggerMin = function () {
                return this._vertical ? this._dragger.getMinLocalY() : this._dragger.getMinLocalX();
            };

            Slider.prototype.getDraggerMax = function () {
                return this._vertical ? this._dragger.getMaxLocalY() : this._dragger.getMaxLocalX();
            };

            Slider.prototype.getDraggerRange = function () {
                return this.getDraggerMax() - this.getDraggerMin();
            };

            Slider.prototype.getDraggerPosition = function () {
                return this._vertical ? this._thumb.position().top : this._thumb.position().left;
            };

            Slider.prototype.setPercentage = function (value) {
                this.setValue(this._min + value * this._range);
            };

            Slider.prototype.getPercentage = function () {
                return (this._value - this._min) / this._range;
            };

            Slider.prototype.setValueInternal = function (value) {
                if (this._value == value)
                    return;
                this.setValue(value);
                this.onChange.dispatch(this._value);
            };

            Slider.prototype.setPercentageInternal = function (value) {
                this.setValueInternal(this._min + value * this._range);
            };

            Slider.prototype.handleClickIncrease = function () {
                var off = this._inverted ? -this._stepSize : this._stepSize;
                this.setValueInternal(this.getValue() + off);
            };

            Slider.prototype.handleClickDecrease = function () {
                var off = this._inverted ? this._stepSize : -this._stepSize;
                this.setValueInternal(this.getValue() + off);
            };

            Slider.prototype.handleChangeEndSlider = function () {
                var perc = (this.getDraggerPosition() - this.getDraggerMin()) / this.getDraggerRange();
                if (this._inverted)
                    perc = 1 - perc;
                this.setPercentageInternal(perc);
            };

            Slider.prototype.handleClickTrackLine = function (evt) {
                var perc = (Math.round(evt.pageY - this._track.offset().top) - this.getDraggerMin()) / this.getDraggerRange();
                if (this._inverted)
                    perc = 1 - perc;
                this.setPercentageInternal(perc);
            };

            Slider.prototype.create = function () {
                this._widget = $("<div class='e5-slider' tabindex='10'></div>");
                this._track = $("<div class='e5-slider-track'></div>");
                this._widget.append(this._track);
                this._trackLine = $("<div class='e5-slider-track-line'></div>");
                this._track.append(this._trackLine);
                this._thumb = $("<div class='e5-slider-thumb'></div>");
                this._track.append(this._thumb);
                this._increase = $("<div class='e5-slider-button decrease'>-</div>");
                this._widget.append(this._increase);
                this._decrease = $("<div class='e5-slider-button zoom increase'>+</div>");
                this._widget.append(this._decrease);
            };
            return Slider;
        })();
        display.Slider = Slider;
    })(e5.display || (e5.display = {}));
    var display = e5.display;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (display) {
        var Slideshow = (function () {
            function Slideshow(wrapper) {
                var _this = this;
                this.wrapper = wrapper;
                this.items = [];
                this._current = null;
                this._index = -1;
                this._state = "init";
                this._containerPadding = 5;
                this.minContainerWidth = 200;
                this.minContainerHeight = 200;
                this._hideTime = 0.3;
                this._showTime = 0.3;
                this._layoutTime = 0.3;
                this._appendToBody = false;
                this._holder = null;
                this._displayState = "normal";
                this.wrapper.addClass("e5_slideshow");
                this.wrapper.attr("tabindex", 0);
                this.create();
                this.resize();

                //this.displayState("fullscreen");
                this.wrapper.on("keydown", function (evt) {
                    return _this.handleKeyUp(evt);
                });
                $(window).bind("resize", function () {
                    return _this.resize();
                });
                this._prevBtn.click(function () {
                    return _this.prev();
                });
                this._nextBtn.click(function () {
                    return _this.next();
                });
                this._toggler.click(function () {
                    return _this.toggleFullscreen();
                });
                this._background.click(function () {
                    return _this.displayState("normal");
                });
            }
            Slideshow.prototype.create = function () {
                this._background = $("<div class='e5_slideshow_background'></div>");
                this.wrapper.append(this._background);

                this._container = $("<div class='e5_slideshow_container'></div>");
                this.wrapper.append(this._container);

                this._content = $("<div class='e5_slideshow_content'></div>");
                this._container.append(this._content);

                this._footer = $("<div class='e5_slideshow_footer'></div>");
                this._container.append(this._footer);

                this._mediaTitle = $("<div class='e5_slideshow_media_title'></div>");
                this._footer.append(this._mediaTitle);

                this._pageText = $("<div class='e5_slideshow_page_text'></div>");
                this._footer.append(this._pageText);

                this._toggler = $("<div class='e5_slideshow_control toggler'></div>");
                this._footer.append(this._toggler);

                this._prevBtn = $("<div class='e5_slideshow_control prev'></div>");
                this._container.append(this._prevBtn);

                this._nextBtn = $("<div class='e5_slideshow_control next'></div>");
                this._container.append(this._nextBtn);
            };

            Slideshow.prototype.resize = function () {
                this.layout(0);
            };

            Slideshow.prototype.updateSizes = function () {
                this.frameWidth = Math.min(this.wrapper.width(), $(window).width() - (this._containerPadding * 2));
                this.frameHeight = Math.min(this.wrapper.height(), Math.max($(window).height() - 60, 0));

                var maxContentWidth = this.frameWidth - (this._containerPadding * 2);
                var maxContentHeight = this.frameHeight - (this._containerPadding * 2);

                var contentScale = 1;
                this.contentWidth = this._current ? this._current.contentWidth : 100;
                if (this.contentWidth > maxContentWidth) {
                    contentScale = maxContentWidth / this.contentWidth;
                    this.contentWidth = maxContentWidth;
                }

                this.contentHeight = this._current ? this._current.contentHeight : 100;
                this.contentHeight *= contentScale;
                if (this.contentHeight > maxContentHeight)
                    this.contentHeight = maxContentHeight;

                this.containerWidth = this.contentWidth + this._containerPadding * 2;
                if (this.containerWidth < this.minContainerWidth)
                    this.containerWidth = this.minContainerWidth;

                this.containerHeight = this.contentHeight + this._containerPadding * 2;
                if (this.containerHeight < this.minContainerHeight)
                    this.containerHeight = this.minContainerHeight;
            };

            Slideshow.prototype.handleKeyUp = function (evt) {
                if (evt.keyCode == 37)
                    this.prev();
                else if (evt.keyCode == 39)
                    this.next();
                else if (evt.keyCode == 27)
                    this.displayState("normal");
            };

            Slideshow.prototype.toggleFullscreen = function () {
                if (this._displayState == "fullscreen")
                    this.displayState("normal");
                else
                    this.displayState("fullscreen");
            };

            Slideshow.prototype.displayState = function (state) {
                if (arguments.length == 0)
                    return this._displayState;
                if (this._displayState == state)
                    return;
                this._displayState = state;
                this.refreshDisplayState();
            };

            Slideshow.prototype.refreshDisplayState = function () {
                if (this._displayState == "fullscreen") {
                    this._holder = this.wrapper.parent();
                    if (this._appendToBody) {
                        $("body").append(this.wrapper);
                    }
                    $("body").addClass("e5slideshow_kill_overflow");
                    this.wrapper.addClass("full");
                    this.resize();
                } else if (this._displayState == "normal") {
                    $("body").removeClass("e5slideshow_kill_overflow");
                    this.wrapper.removeClass("full");
                    if (this._appendToBody && this._holder) {
                        this._holder.prepend(this.wrapper);
                    }
                    this.resize();
                }
            };

            Slideshow.prototype.next = function () {
                this.index(this._index + 1);
            };

            Slideshow.prototype.prev = function () {
                this.index(this._index - 1);
            };

            Slideshow.prototype.index = function (value) {
                if (arguments.length == 0)
                    return this._index;

                var l = this.items.length;
                if (l == 0) {
                    this._index = -1;
                    return;
                }

                if (value < 0)
                    value = l - 1;
                else if (value > (l - 1))
                    value = 0;
                this._index = value;

                this.openMedia(this.items[this._index]);
            };

            Slideshow.prototype.load = function (resources) {
                this.clear();
                var l = resources.length;

                this.wrapper.toggleClass("single_page", l == 1);
                for (var i = 0; i < l; ++i)
                    this.items.push(e5.display.MediaFactory.create(resources[i]));

                //this.items.push(e5.ui.MediaFactory.create({ path: "", type: "map" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "http://videos-cdn.mozilla.net/brand/Mozilla_Firefox_Manifesto_v0.2_640.mp4", type: "video" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/para_navi_next_hover.png", type: "image" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/ie8_message.jpg", type: "image" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/website_icon_default.png", type: "image" }));
                //this.items.push(e5.ui.MediaFactory.create({ path: "/assets/para_navi_next_hover.png", type: "image" }));
                this.index(0);
            };

            Slideshow.prototype.setContainerPadding = function (value) {
                this._containerPadding = value;
                this.resize();
            };
            Slideshow.prototype.openMedia = function (item) {
                var _this = this;
                if (this._current == item)
                    return;
                if (this._current)
                    this._current.onReady.clear();

                this._pageText.html("image " + (this._index + 1) + " of " + this.items.length + "");

                //this._mediaTitle.html("Dasdfasdf asdf asdf asdf");
                this._current = item;
                if (this._current && !this._current.created) {
                    this._current.create();
                    this._current.created = true;
                }

                this.hide(function () {
                    return _this.onCompleteHide();
                });
                this.wrapper.focus();
            };

            Slideshow.prototype.onCompleteHide = function () {
                if (this._current.onReady.getDispatched())
                    this.onReadyItem();
                else
                    this._current.onReady.add(this.onReadyItem, this);
            };

            Slideshow.prototype.onReadyItem = function () {
                var _this = this;
                this._content.empty();
                this._content.append(this._current.element);
                this.layout(this._layoutTime, function () {
                    return _this.show();
                });
            };

            Slideshow.prototype.layout = function (time, onComplete) {
                this.updateSizes();
                this._content.css({
                    width: this.contentWidth + "px",
                    height: this.contentHeight + "px",
                    top: Math.round((this.containerHeight - this.contentHeight) * 0.5) - this._containerPadding + "px"
                });
                var top = (this.frameHeight - this.containerHeight) * 0.5;
                var tween = {
                    css: {
                        width: this.containerWidth + "px",
                        height: this.containerHeight + "px",
                        top: top + "px"
                    }
                };
                if (arguments.length > 0)
                    tween.onComplete = onComplete;
                TweenMax.to(this._container, time, tween);
                if (this._current)
                    this._current.resize();
            };

            Slideshow.prototype.appendToBody = function (append) {
                if (arguments.length == 0)
                    return this._appendToBody;
                if (this._appendToBody == append)
                    return;
                this._appendToBody = append;
                this.refreshDisplayState();
            };

            Slideshow.prototype.show = function (onComplete) {
                this.wrapper.removeClass("progress");
                var tween = { css: { opacity: 1 } };
                if (arguments.length > 0)
                    tween.onComplete = onComplete;
                TweenMax.to(this._content, this._showTime, tween);
            };

            Slideshow.prototype.hide = function (onComplete) {
                this.wrapper.addClass("progress");
                var tween = { css: { opacity: 0 } };
                if (arguments.length > 0)
                    tween.onComplete = onComplete;
                TweenMax.to(this._content, this._hideTime, tween);
            };

            Slideshow.prototype.clear = function () {
                var l = this.items.length;
                if (l == 0)
                    return;
                for (var i = 0; i < l; ++i)
                    this.items[i].dispose();
                this.items.splice(0, l);
                this._content.empty();
            };
            return Slideshow;
        })();
        display.Slideshow = Slideshow;

        var MediaFactory = (function () {
            function MediaFactory() {
            }
            MediaFactory.create = function (resource) {
                var cls = e5.display.MediaFactory._typeClasses[resource.type];
                if (!cls) {
                    console.log("NO MEDIA CLASS FOUND FOR TYPE:", resource.type);
                    return;
                }
                return new cls(resource);
            };

            MediaFactory.addClass = function (type, cls) {
                e5.display.MediaFactory._typeClasses[type] = cls;
            };

            MediaFactory.removeClass = function (type) {
                delete e5.display.MediaFactory._typeClasses[type];
            };
            MediaFactory._typeClasses = {};
            return MediaFactory;
        })();
        display.MediaFactory = MediaFactory;

        var MediaElement = (function () {
            function MediaElement(resource) {
                this.resource = resource;
                this.onReady = new e5.core.Signal();
                this.contentWidth = 0;
                this.contentHeight = 0;
                this.created = false;
            }
            MediaElement.prototype.create = function () {
            };

            MediaElement.prototype.resize = function () {
            };

            MediaElement.prototype.dispose = function () {
                if (this.element) {
                    this.element.remove();
                    this.element = null;
                }
                this.onReady.dispose();
            };
            return MediaElement;
        })();
        display.MediaElement = MediaElement;

        var ImageElement = (function (_super) {
            __extends(ImageElement, _super);
            function ImageElement(resource) {
                _super.call(this, resource);
                this.create();
                this.created = true;
            }
            ImageElement.prototype.create = function () {
                var _this = this;
                this.element = $("<img src='" + this.resource.path + "'></img>");
                this.element.addClass("e5_slideshow_media");
                this.element.bind("load", function (evt) {
                    return _this.handleImageLoaded(evt);
                });
                this.image = this.element[0];
            };

            ImageElement.prototype.handleImageLoaded = function (evt) {
                if (e5.core.Caps.isMSIE)
                    $("body").append(this.element);
                this.contentWidth = this.image.width;
                this.contentHeight = this.image.height;
                $(this.image).remove();
                this.onReady.dispatch();
            };
            return ImageElement;
        })(e5.display.MediaElement);
        display.ImageElement = ImageElement;
        e5.display.MediaFactory.addClass("image", e5.display.ImageElement);

        var VideoElement = (function (_super) {
            __extends(VideoElement, _super);
            function VideoElement(resource) {
                _super.call(this, resource);
            }
            VideoElement.prototype.create = function () {
                var _this = this;
                var sources = "";
                var fileNames = this.resource.path.split(";");
                var l = fileNames.length;
                for (var i = 0; i < l; ++i) {
                    var path = fileNames[i];
                    if (!path)
                        continue;
                    var extension = e5.text.Text.ext(path);
                    var type = "video/";
                    if (extension == "mp4")
                        type += "mp4";
                    else if (extension == "webm")
                        type += "webm";
                    else if (extension == "ogg")
                        type += "ogg";
                    else
                        continue;
                    sources += "<source src='" + path + "' type='" + type + "' />";
                }
                this.element = $("<video controls='controls'>" + sources + "</video>");
                this.element.addClass("e5_slideshow_media");
                this.element.bind("loadedmetadata", function (evt) {
                    return _this.handleVideoLoaded(evt);
                });
                this.video = this.element[0];
            };

            VideoElement.prototype.handleVideoLoaded = function (evt) {
                this.contentWidth = this.video.videoWidth;
                this.contentHeight = this.video.videoHeight;
                this.onReady.dispatch();
            };
            return VideoElement;
        })(e5.display.MediaElement);
        display.VideoElement = VideoElement;
        e5.display.MediaFactory.addClass("video", e5.display.VideoElement);
    })(e5.display || (e5.display = {}));
    var display = e5.display;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (display) {
        var IToastLayout = (function () {
            function IToastLayout() {
                this.top = "top";
                this.bottom = "bottom";
                this.center = "center";
            }
            return IToastLayout;
        })();
        display.IToastLayout = IToastLayout;

        var Toast = (function () {
            function Toast() {
                var _this = this;
                this._timeoutId = 0;
                this.element = $("<div class='e5_toast'></div>");
                this.element.css("visibility", "hidden");
                this.element.css("opacity", "0");
                $("body").append(this.element);

                this.element.bind("click", function (evt) {
                    return _this.handleClick(evt);
                });
            }
            Toast.prototype.handleClick = function (evt) {
                if (this.setting.allowClose) {
                    this.hide();
                }
            };

            //        public static showText(message:String, duration:number): void {
            //            e5.ui.Toast.show({message:message, duration:duration});
            //        }
            Toast.show = function (setting) {
                //skip if no message defined
                if (!setting.message)
                    return;

                if (!Toast._target) {
                    Toast._target = new Toast();
                }

                if (Toast._running) {
                    if (setting.key) {
                        if (this._target.setting && this._target.setting.key == setting.key)
                            return;
                        var l = this._queue.length;
                        for (var i = 0; i < l; ++i) {
                            if (this._queue[i].key == setting.key) {
                                return;
                            }
                        }
                    }
                    Toast._queue.push(setting);
                    return;
                }

                Toast._running = true;
                Toast._target.apply(setting);
                Toast._target.show();
            };

            Toast.prototype.apply = function (setting) {
                var _this = this;
                this.setting = setting;

                this.element.attr("class", "e5_toast");

                this.element.empty();
                this.element.text(setting.message);

                if (setting.htmlContent)
                    this.element.append(setting.htmlContent);

                if (setting.styleClass)
                    this.element.addClass(setting.styleClass);

                this.element.css("margin-left", -Math.round(this.element.outerWidth(false) * 0.5) + "px");

                var dur = setting.duration ? setting.duration : 3000;
                this._timeoutId = setTimeout(function () {
                    return _this.hide();
                }, dur);
            };

            Toast.prototype.show = function () {
                TweenMax.to(this.element, 0.5, { autoAlpha: 1 });
            };

            Toast.prototype.hide = function () {
                clearTimeout(this._timeoutId);
                TweenMax.to(this.element, 0.5, { autoAlpha: 0, onComplete: this.onHideComplete });
            };

            Toast.prototype.onHideComplete = function () {
                Toast.handleToastComplete();
            };

            Toast.handleToastComplete = function () {
                if (Toast._queue.length > 0) {
                    var setting = Toast._queue.shift();
                    Toast._target.apply(setting);
                    Toast._target.show();
                } else {
                    Toast._running = false;
                }
            };
            Toast._queue = [];
            Toast._target = null;
            Toast._running = false;
            return Toast;
        })();
        display.Toast = Toast;
    })(e5.display || (e5.display = {}));
    var display = e5.display;
})(e5 || (e5 = {}));
var e5;
(function (e5) {
    (function (display) {
        var Painter = (function () {
            function Painter() {
            }
            Painter.draw = function (text, fillStyle, fontSize, fontFamily, paddingLeft, paddingRight, height) {
                height = height ? height : Math.ceil(fontSize * 1.2);
                paddingLeft = paddingLeft ? paddingLeft : 0;
                paddingRight = paddingRight ? paddingRight : 0;
                var width = Painter.measureText(text, fontSize, fontFamily);
                width += paddingLeft + paddingRight;

                var ca = document.createElement("canvas");
                ca.width = width;
                ca.height = height;

                var ctx = ca.getContext("2d");
                ctx.textBaseline = "middle";
                ctx.fillStyle = fillStyle;
                ctx.font = fontSize + "px " + fontFamily;
                ctx.fillText(text, paddingLeft, height * 0.5);

                return ca;
            };

            Painter.measureText = function (text, fontSize, fontFamily) {
                var can = $("<canvas width='512' height='512'></canvas>");
                var ctx = can[0].getContext("2d");
                ctx.font = fontSize + "px " + fontFamily;
                var mes = ctx.measureText(text);
                return mes.width;
            };
            return Painter;
        })();
        display.Painter = Painter;
    })(e5.display || (e5.display = {}));
    var display = e5.display;
})(e5 || (e5 = {}));
/// <reference path='ts/definitions/jquery-1.10.2.d.ts' />
/// <reference path='ts/definitions/TweenMax.d.ts' />
/// <reference path='ts/e5/core/Core.ts' />
/// <reference path='ts/e5/core/Caps.ts' />
/// <reference path='ts/e5/core/Extensions.ts' />
/// <reference path='ts/e5/math/Calc.ts' />
/// <reference path='ts/e5/math/Geom.ts' />
/// <reference path='ts/e5/core/Slot.ts' />
/// <reference path='ts/e5/core/Signal.ts' />
/// <reference path='ts/e5/core/Player.ts' />
/// <reference path='ts/e5/model/FormManager.ts' />
/// <reference path='ts/e5/text/Text.ts' />
/// <reference path='ts/e5/control/History.ts' />
/// <reference path='ts/e5/input/Interactor.ts' />
/// <reference path='ts/e5/input/Dragger.ts' />
/// <reference path='ts/e5/input/Scroller.ts' />
/// <reference path='ts/e5/input/ScrollerModes.ts' />
/// <reference path='ts/e5/display/Slider.ts' />
/// <reference path='ts/e5/display/Slideshow.ts' />
/// <reference path='ts/e5/display/Toast.ts' />
/// <reference path='ts/e5/display/Painter.ts' />
var engage;
(function (engage) {
    var CameraUtil = (function () {
        function CameraUtil() {
            this.onUploadSuccess = new e5.core.Signal();
            this.onUploadError = new e5.core.Signal();
            this.onCaptureSuccess = new e5.core.Signal();
            this.onCaptureError = new e5.core.Signal();
            this.image = null;
            this.imageURI = null;
            this._errorTimeout = 0;
            this._options = {};
            this._options.quality = 100;
            this._options.targetWidth = 1024;
            this._options.targetHeight = 768;
            this._options.saveToPhotoAlbum = false;
            this._options.correctOrientation = true;
            this._options.cameraDirection = 1; //navigator.camera.Direction.FRONT;
        }
        CameraUtil.prototype.capture = function () {
            var _this = this;
            if (!navigator.camera) {
                e5.display.Toast.show({ message: "Camera not found", key: "camera_not_found" });
                return;
            }

            this._options.sourceType = navigator.camera.PictureSourceType.CAMERA;
            this._options.destinationType = navigator.camera.DestinationType.FILE_URI;
            this._options.encodingType = navigator.camera.EncodingType.JPEG;

            navigator.camera.getPicture(function (img) {
                return _this.handleCaptureSuccess(img);
            }, function (msg) {
                return _this.handleCaptureFailed(msg);
            }, this._options);
        };

        CameraUtil.prototype.handleCaptureSuccess = function (imageURI) {
            this.imageURI = imageURI;
            this.onCaptureSuccess.dispatch();
        };

        CameraUtil.prototype.handleCaptureFailed = function (message) {
            var _this = this;
            this.onCaptureError.dispatch(this.imageURI, message);

            //            e5.display.Toast.show({ message: "Try to capture again..." });
            setTimeout(function () {
                return _this.capture();
            }, 1000);
            //this.capture();
        };

        CameraUtil.prototype.upload = function (name, comment, latitude, longitude) {
            var _this = this;
            e5.display.Toast.show({ message: "Upload data... please wait", duration: 2000 });

            //"/eventfive/web/engage-app/php/upload.php"
            //"http://192.168.1.26/eventfive/web/engage-app/php/upload.php"
            //"http://engage-interreg.eu/engage-app/upload.php";
            var url = "http://engage-interreg.eu/engage-app/upload.php";//"http://192.168.1.26/eventfive/web/engage-app/php/upload.php";
            var imageURI = this.imageURI;

            var params = new Object();
            params.name = name;
            params.comment = comment;
            params.latitude = latitude;
            params.longitude = longitude;

            //            alert(FileUploadOptions);
            //            return;
            var options = new FileUploadOptions();
            options.params = params;
            options.fileKey = "file";
            options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            options.mimeType = "image/jpeg";
            options.chunkedMode = false;
            options.headers = {
                Connection: "close"
            };

            clearTimeout(this._errorTimeout);
            this._errorTimeout = setTimeout(function () {
                return _this.handleUploadFailedByMaxTime();
            }, 10000); //10 seconds

            var ft = new FileTransfer();

            //            ft.upload('', encodeURI(url), null, null, null);
            ft.onprogress = function (e) {
                return _this.onProgress(e);
            };
            ft.upload(imageURI, encodeURI(url), null, function (r) {
                return _this.handleUploadFailed(r);
            }, options);
            //            e5.display.Toast.show({ message: "File ready..." });
        };

        CameraUtil.prototype.onProgress = function (e) {
            //e5.display.Toast.show({ message: "Progress: " + e.loaded + " " + e.total });
            clearTimeout(this._errorTimeout);
            if (e.loaded == e.total) {
                this.handleUploadSuccess(null);
            }
        };

        CameraUtil.prototype.handleUploadSuccess = function (r) {
            e5.display.Toast.show({ message: "Your image is successfully uploaded" });
            this.onUploadSuccess.dispatch();
        };

        CameraUtil.prototype.handleUploadFailed = function (r) {
            e5.display.Toast.show({ message: "Your image could not be uploaded", duration: 8000 });
            this.onUploadError.dispatch(this.imageURI, r.response);
        };

        CameraUtil.prototype.handleUploadFailedByMaxTime = function () {
            e5.display.Toast.show({ message: "Your image could not be uploaded", duration: 8000 });
            this.onUploadError.dispatch(this.imageURI, "");
        };
        return CameraUtil;
    })();
    engage.CameraUtil = CameraUtil;
})(engage || (engage = {}));
var engage;
(function (engage) {
    var EngageConferenceApp = (function () {
        function EngageConferenceApp() {
            var _this = this;
            this._camera = new engage.CameraUtil();

            $("#user-form").submit(function (e) {
                return _this.handleClickSubmit(e);
            });
            this._camera.onUploadSuccess.add(this.handleUploadSuccess, this);
            this._camera.onUploadError.add(this.handleUploadError, this);
            this._camera.onCaptureSuccess.add(this.handleCaptureSuccess, this);
            document["ontouchmov" + "e"] = function (e) {
                e.preventDefault();
            };

            //            //open camera after device is ready
            //            var w: any = window;
            //            if (w.isDeviceReady) {
            //                this._camera.capture();
            //            }
            //            else {
            //                windistener("deviceready", () => this._camera.capture());
            //            }
            setTimeout(function () {
                return _this._camera.capture();
            }, 2000);

            //            $("body").addClass("progress");
            $("#button-cancel").click(function (e) {
                return _this.cancel();
            });
        }
        EngageConferenceApp.prototype.cancel = function () {
            $("#input-name").val("");
            $("#input-comment").val("");
            $("body").removeClass("progress");
            this._camera.capture();
        };

        EngageConferenceApp.prototype.handleCaptureSuccess = function () {
            $("#input-name").focus();
        };

        EngageConferenceApp.prototype.handleUploadSuccess = function () {
            var _this = this;
            $("#input-name").val("");
            $("#input-comment").val("");
            setTimeout(function () {
                return _this.restartCapture();
            }, 5000);
        };

        EngageConferenceApp.prototype.restartCapture = function () {
            $("body").removeClass("progress");
            this._camera.capture();
        };

        EngageConferenceApp.prototype.handleUploadError = function () {
            $("body").removeClass("progress");
        };

        EngageConferenceApp.prototype.handleClickSubmit = function (e) {
            e.preventDefault();

            $("body").addClass("progress");

            var latOfSlo = 0;
            var lngOfSlo = 0;
            this._camera.upload($("#input-name").val(), $("#input-comment").val(), latOfSlo, lngOfSlo);

            //FOR TEST ONLY
            //            this._camera.capture();
            return false;
        };
        return EngageConferenceApp;
    })();
    engage.EngageConferenceApp = EngageConferenceApp;
})(engage || (engage = {}));

$(window).ready(function () {
    new engage.EngageConferenceApp();
});
/// <reference path='../framework/references.ts' />
/// <reference path='../engage-app/ts/definitions/phonegap.d.ts' />
/// <reference path='ts/engage/CameraUtil.ts' />
/// <reference path='ts/engage/EngageConferenceApp.ts' />
