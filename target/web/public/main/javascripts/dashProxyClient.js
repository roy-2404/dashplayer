/**
 * Created by abroy240484 on 3/23/16.
 */
!function b(a, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)return i(g, !0);
                if (f)return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            a[g][0].call(k.exports, function (b) {
                var c = a[g][1][b];
                return e(c ? c : b)
            }, k, k.exports, b, a, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
    return e
}({
    1: [function (b, c, d) {
        "use strict";
        var e = {};
        e.encode = function (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a.charCodeAt(c);
                128 > d ? b.push(d) : 2048 > d ? (b.push(192 | d >> 6), b.push(128 | 63 & d)) : 65536 > d ? (b.push(224 | d >> 12), b.push(128 | 63 & d >> 6), b.push(128 | 63 & d)) : (b.push(240 | d >> 18), b.push(128 | 63 & d >> 12), b.push(128 | 63 & d >> 6), b.push(128 | 63 & d))
            }
            return b
        }, e.decode = function (a) {
            for (var b = [], c = 0; c < a.length;) {
                var d = a[c++];
                128 > d || (224 > d ? (d = (31 & d) << 6, d |= 63 & a[c++]) : 240 > d ? (d = (15 & d) << 12, d |= (63 & a[c++]) << 6, d |= 63 & a[c++]) : (d = (7 & d) << 18, d |= (63 & a[c++]) << 12, d |= (63 & a[c++]) << 6, d |= 63 & a[c++])), b.push(String.fromCharCode(d))
            }
            return b.join("")
        };
        var f = {};
        if (function (b) {
                var c = function (a) {
                    for (var c = 0, d = [], e = 0 | a.length / 3; 0 < e--;) {
                        var f = (a[c] << 16) + (a[c + 1] << 8) + a[c + 2];
                        c += 3, d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push(b.charAt(63 & f >> 6)), d.push(b.charAt(63 & f))
                    }
                    if (2 == a.length - c) {
                        var f = (a[c] << 16) + (a[c + 1] << 8);
                        d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push(b.charAt(63 & f >> 6)), d.push("=")
                    } else if (1 == a.length - c) {
                        var f = a[c] << 16;
                        d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push("==")
                    }
                    return d.join("")
                }, d = function () {
                    for (var a = [], c = 0; c < b.length; ++c)a[b.charCodeAt(c)] = c;
                    return a["=".charCodeAt(0)] = 0, a
                }(), g = function (a) {
                    for (var b = 0, c = [], e = 0 | a.length / 4; 0 < e--;) {
                        var f = (d[a.charCodeAt(b)] << 18) + (d[a.charCodeAt(b + 1)] << 12) + (d[a.charCodeAt(b + 2)] << 6) + d[a.charCodeAt(b + 3)];
                        c.push(255 & f >> 16), c.push(255 & f >> 8), c.push(255 & f), b += 4
                    }
                    return c && ("=" == a.charAt(b - 2) ? (c.pop(), c.pop()) : "=" == a.charAt(b - 1) && c.pop()), c
                }, h = {};
                h.encode = function (a) {
                    for (var b = [], c = 0; c < a.length; ++c)b.push(a.charCodeAt(c));
                    return b
                }, h.decode = function (b) {
                    for (var c = 0; c < s.length; ++c)a[c] = String.fromCharCode(a[c]);
                    return a.join("")
                }, f.decodeArray = function (a) {
                    var b = g(a);
                    return new Uint8Array(b)
                }, f.encodeASCII = function (a) {
                    var b = h.encode(a);
                    return c(b)
                }, f.decodeASCII = function (a) {
                    var b = g(a);
                    return h.decode(b)
                }, f.encode = function (a) {
                    var b = e.encode(a);
                    return c(b)
                }, f.decode = function (a) {
                    var b = g(a);
                    return e.decode(b)
                }
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), void 0 === g)var g = f.encode;
        if (void 0 === h)var h = f.decode;
        "undefined" != typeof d && (d.decode = f.decode, d.decodeArray = f.decodeArray)
    }, {}],
    2: [function (a, b, c) {
        "use strict";
        !function (a) {
            var b = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }, c = function (a) {
                var c = a;
                return b.hasOwnProperty(a) && (c = b[a]), String.fromCharCode(c)
            }, d = 15, e = 32, f = {17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14}, g = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            }, h = {25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14}, i = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            }, j = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], k = {
                verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0
                }, time: null, verboseLevel: 0, setTime: function (a) {
                    this.time = a
                }, log: function (a, b) {
                    var c = this.verboseFilter[a];
                    this.verboseLevel >= c && console.log(this.time + " [" + a + "] " + b)
                }
            }, l = function (a) {
                for (var b = [], c = 0; c < a.length; c++)b.push(a[c].toString(16));
                return b
            }, m = function (a, b, c, d, e) {
                this.foreground = a || "white", this.underline = b || !1, this.italics = c || !1, this.background = d || "black", this.flash = e || !1
            };
            m.prototype = {
                reset: function () {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }, setStyles: function (a) {
                    for (var b = ["foreground", "underline", "italics", "background", "flash"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        a.hasOwnProperty(d) && (this[d] = a[d])
                    }
                }, isDefault: function () {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }, equals: function (a) {
                    return this.foreground === a.foreground && this.underline === a.underline && this.italics === a.italics && this.background === a.background && this.flash === a.flash
                }, copy: function (a) {
                    this.foreground = a.foreground, this.underline = a.underline, this.italics = a.italics, this.background = a.background, this.flash = a.flash
                }, toString: function () {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }
            };
            var n = function (a, b, c, d, e, f) {
                this.uchar = a || " ", this.penState = new m(b, c, d, e, f)
            };
            n.prototype = {
                reset: function () {
                    this.uchar = " ", this.penState.reset()
                }, setChar: function (a, b) {
                    this.uchar = a, this.penState.copy(b)
                }, setPenState: function (a) {
                    this.penState.copy(a)
                }, equals: function (a) {
                    return this.uchar === a.uchar && this.penState.equals(a.penState)
                }, copy: function (a) {
                    this.uchar = a.uchar, this.penState.copy(a.penState)
                }, isEmpty: function () {
                    return " " === this.uchar && this.penState.isDefault()
                }
            };
            var o = function () {
                this.chars = [];
                for (var a = 0; e > a; a++)this.chars.push(new n);
                this.pos = 0, this.currPenState = new m
            };
            o.prototype = {
                equals: function (a) {
                    for (var b = !0, c = 0; e > c; c++)if (!this.chars[c].equals(a.chars[c])) {
                        b = !1;
                        break
                    }
                    return b
                }, copy: function (a) {
                    for (var b = 0; e > b; b++)this.chars[b].copy(a.chars[b])
                }, isEmpty: function () {
                    for (var a = !0, b = 0; e > b; b++)if (!this.chars[b].isEmpty()) {
                        a = !1;
                        break
                    }
                    return a
                }, setCursor: function (a) {
                    this.pos !== a && (this.pos = a), this.pos < 0 ? (k.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > e && (k.log("ERROR", "Too large cursor position " + this.pos), this.pos = e)
                }, moveCursor: function (a) {
                    var b = this.pos + a;
                    if (a > 1)for (var c = this.pos + 1; b + 1 > c; c++)this.chars[c].setPenState(this.currPenState);
                    this.setCursor(b)
                }, backSpace: function () {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, insertChar: function (a) {
                    a >= 144 && this.backSpace();
                    var b = c(a);
                    return this.pos >= e ? void k.log("ERROR", "Cannot insert " + a.toString(16) + " (" + b + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(b, this.currPenState), void this.moveCursor(1))
                }, clearFromPos: function (a) {
                    var b;
                    for (b = a; e > b; b++)this.chars[b].reset()
                }, clear: function () {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, clearToEndOfRow: function () {
                    this.clearFromPos(this.pos)
                }, getTextString: function () {
                    for (var a = [], b = !0, c = 0; e > c; c++) {
                        var d = this.chars[c].uchar;
                        " " !== d && (b = !1), a.push(d)
                    }
                    return b ? "" : a.join("")
                }, setPenStyles: function (a) {
                    this.currPenState.setStyles(a);
                    var b = this.chars[this.pos];
                    b.setPenState(this.currPenState)
                }
            };
            var p = function () {
                this.rows = [];
                for (var a = 0; d > a; a++)this.rows.push(new o);
                this.currRow = d - 1, this.nrRollUpRows = null, this.reset()
            };
            p.prototype = {
                reset: function () {
                    for (var a = 0; d > a; a++)this.rows[a].clear();
                    this.currRow = d - 1
                }, equals: function (a) {
                    for (var b = !0, c = 0; d > c; c++)if (!this.rows[c].equals(a.rows[c])) {
                        b = !1;
                        break
                    }
                    return b
                }, copy: function (a) {
                    for (var b = 0; d > b; b++)this.rows[b].copy(a.rows[b])
                }, isEmpty: function () {
                    for (var a = !0, b = 0; d > b; b++)if (!this.rows[b].isEmpty()) {
                        a = !1;
                        break
                    }
                    return a
                }, backSpace: function () {
                    var a = this.rows[this.currRow];
                    a.backSpace()
                }, clearToEndOfRow: function () {
                    var a = this.rows[this.currRow];
                    a.clearToEndOfRow()
                }, insertChar: function (a) {
                    var b = this.rows[this.currRow];
                    b.insertChar(a)
                }, setPen: function (a) {
                    var b = this.rows[this.currRow];
                    b.setPenStyles(a)
                }, moveCursor: function (a) {
                    var b = this.rows[this.currRow];
                    b.moveCursor(a)
                }, setCursor: function (a) {
                    k.log("INFO", "setCursor: " + a);
                    var b = this.rows[this.currRow];
                    b.setCursor(a)
                }, setPAC: function (a) {
                    k.log("INFO", "pacData = " + JSON.stringify(a));
                    var b = a.row - 1;
                    this.nrRollUpRows && b < this.nrRollUpRows - 1 && (b = this.nrRollUpRows - 1), this.currRow = b;
                    var c = this.rows[this.currRow];
                    if (null !== a.indent) {
                        var d = a.indent, e = Math.max(d - 1, 0);
                        c.setCursor(a.indent), a.color = c.chars[e].penState.foreground
                    }
                    var f = {
                        foreground: a.color,
                        underline: a.underline,
                        italics: a.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(f)
                }, setBkgData: function (a) {
                    k.log("INFO", "bkgData = " + JSON.stringify(a)), this.backSpace(), this.setPen(a), this.insertChar(32)
                }, setRollUpRows: function (a) {
                    this.nrRollUpRows = a
                }, rollUp: function () {
                    if (null === this.nrRollUpRows)return void k.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                    k.log("TEXT", this.getDisplayText());
                    var a = this.currRow + 1 - this.nrRollUpRows, b = this.rows.splice(a, 1)[0];
                    b.clear(), this.rows.splice(this.currRow, 0, b), k.log("INFO", "Rolling up")
                }, getDisplayText: function (a) {
                    a = a || !1;
                    for (var b = [], c = "", e = -1, f = 0; d > f; f++) {
                        var g = this.rows[f].getTextString();
                        g && (e = f + 1, a ? b.push("Row " + e + ': "' + g + '"') : b.push(g.trim()))
                    }
                    return b.length > 0 && (c = a ? "[" + b.join(" | ") + "]" : b.join("\n")), c
                }, getTextAndFormat: function () {
                    return this.rows
                }
            };
            var q = function (a, b) {
                this.chNr = a, this.outputFilter = b, this.mode = null, this.verbose = 0, this.displayedMemory = new p, this.nonDisplayedMemory = new p, this.lastOutputScreen = new p, this.currRollUpRow = this.displayedMemory.rows[d - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
            };
            q.prototype = {
                modes: ["MODE_ROLL-UP", "MODE_POP-ON", "MODE_PAINT-ON", "MODE_TEXT"], reset: function () {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[d - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                }, getHandler: function () {
                    return this.outputFilter
                }, setHandler: function (a) {
                    this.outputFilter = a
                }, setPAC: function (a) {
                    this.writeScreen.setPAC(a)
                }, setBkgData: function (a) {
                    this.writeScreen.setBkgData(a)
                }, setMode: function (a) {
                    a !== this.mode && (this.mode = a, k.log("INFO", "MODE=" + a), "MODE_POP-ON" == this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = a)
                }, insertChars: function (a) {
                    for (var b = 0; b < a.length; b++)this.writeScreen.insertChar(a[b]);
                    var c = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    k.log("INFO", c + ": " + this.writeScreen.getDisplayText(!0)), ("MODE_PAINT-ON" === this.mode || "MODE_ROLL-UP" === this.mode) && (k.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }, cc_RCL: function () {
                    k.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }, cc_BS: function () {
                    k.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, cc_AOF: function () {
                }, cc_AON: function () {
                }, cc_DER: function () {
                    k.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }, cc_RU: function (a) {
                    k.log("INFO", "RU(" + a + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(a)
                }, cc_FON: function () {
                    k.log("INFO", "FON - Flash On"), this.writeScreen.setPen({flash: !0})
                }, cc_RDC: function () {
                    k.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }, cc_TR: function () {
                    k.log("INFO", "TR"), this.setMode("MODE_TEXT")
                }, cc_RTD: function () {
                    k.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                }, cc_EDM: function () {
                    k.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate()
                }, cc_CR: function () {
                    k.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate()
                }, cc_ENM: function () {
                    k.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }, cc_EOC: function () {
                    if (k.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var a = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = a, this.writeScreen = this.nonDisplayedMemory, k.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate()
                }, cc_TO: function (a) {
                    k.log("INFO", "TO(" + a + ") - Tab Offset"), this.writeScreen.moveCursor(a)
                }, cc_MIDROW: function (a) {
                    var b = {flash: !1};
                    if (b.underline = a % 2 === 1, b.italics = a >= 46, b.italics)b.foreground = "white"; else {
                        var c = Math.floor(a / 2) - 16, d = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                        b.foreground = d[c]
                    }
                    k.log("INFO", "MIDROW: " + JSON.stringify(b)), this.writeScreen.setPen(b)
                }, outputDataUpdate: function () {
                    var a = k.time;
                    null !== a && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(a, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, a, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : a) : this.cueStartTime = a, this.lastOutputScreen.copy(this.displayedMemory))
                }, cueSplitAtTime: function (a) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, a, this.displayedMemory), this.cueStartTime = a))
                }
            };
            var r = function (a, b, c) {
                this.field = a || 1, this.outputs = [b, c], this.channels = [new q(1, b), new q(2, c)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                    padding: 0,
                    "char": 0,
                    cmd: 0,
                    other: 0
                }
            };
            r.prototype = {
                getHandler: function (a) {
                    return this.channels[a].getHandler()
                }, setHandler: function (a, b) {
                    this.channels[a].setHandler(b)
                }, addData: function (a, b) {
                    var c, d, e, f = !1;
                    this.lastTime = a, k.setTime(a);
                    for (var g = 0; g < b.length; g += 2)if (d = 127 & b[g], e = 127 & b[g + 1], 0 !== d || 0 !== e) {
                        if (k.log("DATA", "[" + l([b[g], b[g + 1]]) + "] -> (" + l([d, e]) + ")"), c = this.parseCmd(d, e), c || (c = this.parseMidrow(d, e)), c || (c = this.parsePAC(d, e)), c || (c = this.parseBackgroundAttributes(d, e)), !c && (f = this.parseChars(d, e)))if (this.currChNr && this.currChNr >= 0) {
                            var h = this.channels[this.currChNr - 1];
                            h.insertChars(f)
                        } else k.log("WARNING", "No channel found yet. TEXT-MODE?");
                        c ? this.dataCounters.cmd += 2 : f ? this.dataCounters["char"] += 2 : (this.dataCounters.other += 2, k.log("WARNING", "Couldn't parse cleaned data " + l([d, e]) + " orig: " + l([b[g], b[g + 1]])))
                    } else this.dataCounters.padding += 2
                }, parseCmd: function (a, b) {
                    var c = null, d = (20 === a || 28 === a) && b >= 32 && 47 >= b, e = (23 === a || 31 === a) && b >= 33 && 35 >= b;
                    if (!d && !e)return !1;
                    if (a === this.lastCmdA && b === this.lastCmdB)return this.lastCmdA = null, this.lastCmdB = null, k.log("DEBUG", "Repeated command (" + l([a, b]) + ") is dropped"), !0;
                    c = 20 === a || 23 === a ? 1 : 2;
                    var f = this.channels[c - 1];
                    return 20 === a || 28 === a ? 32 === b ? f.cc_RCL() : 33 === b ? f.cc_BS() : 34 === b ? f.cc_AOF() : 35 === b ? f.cc_AON() : 36 === b ? f.cc_DER() : 37 === b ? f.cc_RU(2) : 38 === b ? f.cc_RU(3) : 39 === b ? f.cc_RU(4) : 40 === b ? f.cc_FON() : 41 === b ? f.cc_RDC() : 42 === b ? f.cc_TR() : 43 === b ? f.cc_RTD() : 44 === b ? f.cc_EDM() : 45 === b ? f.cc_CR() : 46 === b ? f.cc_ENM() : 47 === b && f.cc_EOC() : f.cc_TO(b - 32), this.lastCmdA = a, this.lastCmdB = b, this.currChNr = c, !0
                }, parseMidrow: function (a, b) {
                    var c = null;
                    if ((17 === a || 25 === a) && b >= 32 && 47 >= b) {
                        if (c = 17 === a ? 1 : 2, c !== this.currChNr)return k.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                        var d = this.channels[c - 1];
                        return d.cc_MIDROW(b), k.log("DEBUG", "MIDROW (" + l([a, b]) + ")"), !0
                    }
                    return !1
                }, parsePAC: function (a, b) {
                    var c = null, d = null, e = (a >= 17 && 23 >= a || a >= 25 && 31 >= a) && b >= 64 && 127 >= b, j = (16 === a || 24 === a) && b >= 64 && 95 >= b;
                    if (!e && !j)return !1;
                    if (a === this.lastCmdA && b === this.lastCmdB)return this.lastCmdA = null, this.lastCmdB = null, !0;
                    c = 23 >= a ? 1 : 2, d = b >= 64 && 95 >= b ? 1 === c ? f[a] : h[a] : 1 === c ? g[a] : i[a];
                    var k = this.interpretPAC(d, b), l = this.channels[c - 1];
                    return l.setPAC(k), this.lastCmdA = a, this.lastCmdB = b, this.currChNr = c, !0
                }, interpretPAC: function (a, b) {
                    var c = b, d = {color: null, italics: !1, indent: null, underline: !1, row: a};
                    return c = b > 95 ? b - 96 : b - 64, d.underline = 1 === (1 & c), 13 >= c ? d.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(c / 2)] : 15 >= c ? (d.italics = !0, d.color = "white") : d.indent = 4 * Math.floor((c - 16) / 2), d
                }, parseChars: function (a, b) {
                    var d = null, e = null, f = null;
                    if (a >= 25 ? (d = 2, f = a - 8) : (d = 1, f = a), f >= 17 && 19 >= f) {
                        var g = b;
                        g = 17 === f ? b + 80 : 18 === f ? b + 112 : b + 144, k.log("INFO", "Special char '" + c(g) + "' in channel " + d), e = [g]
                    } else a >= 32 && 127 >= a && (e = 0 === b ? [a] : [a, b]);
                    if (e) {
                        var h = l(e);
                        k.log("DEBUG", "Char codes =  " + h.join(",")), this.lastCmdA = null, this.lastCmdB = null
                    }
                    return e
                }, parseBackgroundAttributes: function (a, b) {
                    var c, d, e, f, g = (16 === a || 24 === a) && b >= 32 && 47 >= b, h = (23 === a || 31 === a) && b >= 45 && 47 >= b;
                    return g || h ? (c = {}, 16 === a || 24 === a ? (d = Math.floor((b - 32) / 2), c.background = j[d], b % 2 === 1 && (c.background = c.background + "_semi")) : 45 === b ? c.background = "transparent" : (c.foreground = "black", 47 === b && (c.underline = !0)), e = 24 > a ? 1 : 2, f = this.channels[e - 1], f.setBkgData(c), this.lastCmdA = null, this.lastCmdB = null, !0) : !1
                }, reset: function () {
                    for (var a = 0; a < this.channels.length; a++)this.channels[a] && this.channels[a].reset();
                    this.lastCmdA = null, this.lastCmdB = null
                }, cueSplitAtTime: function (a) {
                    for (var b = 0; b < this.channels.length; b++)this.channels[b] && this.channels[b].cueSplitAtTime(a)
                }
            };
            var s = function (a, b, c) {
                for (var d = 0, e = b, f = 0, g = [], h = function (a, b, c, d) {
                    if (4 !== a || 8 > b)return null;
                    var e = c.getUint8(d), f = c.getUint16(d + 1), g = c.getUint32(d + 3), h = c.getUint8(d + 7);
                    return 181 == e && 49 == f && 1195456820 == g && 3 == h
                }; b + c > e;) {
                    if (d = a.getUint32(e), f = 31 & a.getUint8(e + 4), 6 === f)for (var i = e + 5, j = -1; e + 4 + d - 1 > i;) {
                        j = 0;
                        for (var k = 255; 255 === k;)k = a.getUint8(i), j += k, i++;
                        var l = 0;
                        for (k = 255; 255 === k;)k = a.getUint8(i), l += k, i++;
                        h(j, l, a, i) && g.push([i, l]), i += l
                    }
                    e += d + 4
                }
                return g
            }, t = function (a, b) {
                var c = b[0], d = [[], []];
                c += 8;
                var e = 31 & a.getUint8(c);
                c += 2;
                for (var f = 0; e > f; f++) {
                    var g = a.getUint8(c), h = 4 & g, i = 3 & g;
                    c++;
                    var j = a.getUint8(c);
                    c++;
                    var k = a.getUint8(c);
                    c++, h && (127 & j) + (127 & k) !== 0 && (0 === i ? (d[0].push(j), d[0].push(k)) : 1 === i && (d[1].push(j), d[1].push(k)))
                }
                return d
            };
            a.logger = k, a.PenState = m, a.CaptionScreen = p, a.Cea608Parser = r, a.findCea608Nalus = s, a.extractCea608DataFromRange = t
        }("undefined" == typeof c ? (void 0).cea608parser = {} : c)
    }, {}],
    3: [function (a, b, c) {
        "use strict";
        function d(a) {
            var b, c, d;
            for (b = [], d = 0, c = a.length; c > d; d += 1)a[d].isRoot ? b.push("root") : b.push(a[d].name);
            var e = function (a, b) {
                var c;
                if (null !== a && null !== b)for (c in a)a.hasOwnProperty(c) && (b.hasOwnProperty(c) || (b[c] = a[c]))
            }, f = function (a, b, c) {
                var d, f, g, h, i;
                if (null !== a && 0 !== a.length)for (d = 0, f = a.length; f > d; d += 1)g = a[d], b.hasOwnProperty(g.name) && (c.hasOwnProperty(g.name) ? g.merge && (h = b[g.name], i = c[g.name], "object" == typeof h && "object" == typeof i ? e(h, i) : null != g.mergeFunction ? c[g.name] = g.mergeFunction(h, i) : c[g.name] = h + i) : c[g.name] = b[g.name])
            }, g = function i(a, b) {
                var c, d, e, g, h, j, k, l = a;
                if (null !== l.children && 0 !== l.children.length)for (c = 0, d = l.children.length; d > c; c += 1)if (j = l.children[c], b.hasOwnProperty(j.name))if (j.isArray)for (h = b[j.name + "_asArray"], e = 0, g = h.length; g > e; e += 1)k = h[e], f(l.properties, b, k), i(j, k); else k = b[j.name], f(l.properties, b, k), i(j, k)
            }, h = function j(c) {
                var d, e, f, h, i, k, l;
                if (null === c)return c;
                if ("object" != typeof c)return c;
                for (d = 0, e = b.length; e > d; d += 1)"root" === b[d] && (i = a[d], k = c, g(i, k));
                for (h in c)if (c.hasOwnProperty(h) && "__children" != h) {
                    if (f = b.indexOf(h), -1 !== f)if (i = a[f], i.isArray)for (l = c[h + "_asArray"], d = 0, e = l.length; e > d; d += 1)k = l[d], g(i, k); else k = c[h], g(i, k);
                    j(c[h])
                }
                return c
            };
            return {run: h}
        }

        Object.defineProperty(c, "__esModule", {value: !0}), c["default"] = d, b.exports = c["default"]
    }, {}],
    4: [function (a, b, c) {
        "use strict";
        function d(a, b, c) {
            function d(a) {
                var b = a.localName;
                return null == b && (b = a.baseName), (null == b || "" == b) && (b = a.nodeName), b
            }

            function e(a) {
                return a.prefix
            }

            function f(a) {
                return "string" == typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : a
            }

            function g(a) {
                return a.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/")
            }

            function h(f) {
                if (f.nodeType == u.DOCUMENT_NODE) {
                    var i, j, k, l = f.firstChild;
                    for (j = 0, k = f.childNodes.length; k > j; j += 1)if (f.childNodes[j].nodeType !== u.COMMENT_NODE) {
                        l = f.childNodes[j];
                        break
                    }
                    if (c)i = h(l); else {
                        i = {};
                        var m = d(l);
                        i[m] = h(l)
                    }
                    return i
                }
                if (f.nodeType == u.ELEMENT_NODE) {
                    var i = new Object;
                    i.__cnt = 0;
                    for (var n = [], o = f.childNodes, p = 0; p < o.length; p++) {
                        var l = o.item(p), m = d(l);
                        if (i.__cnt++, null == i[m]) {
                            var q = h(l);
                            if ("#text" != m || /[^\s]/.test(q)) {
                                var r = {};
                                r[m] = q, n.push(r)
                            }
                            i[m] = q, i[m + "_asArray"] = new Array(1), i[m + "_asArray"][0] = i[m]
                        } else {
                            if (null != i[m] && !(i[m]instanceof Array)) {
                                var s = i[m];
                                i[m] = new Array, i[m][0] = s, i[m + "_asArray"] = i[m]
                            }
                            for (var v = 0; null != i[m][v];)v++;
                            var q = h(l);
                            if ("#text" != m || /[^\s]/.test(q)) {
                                var r = {};
                                r[m] = q, n.push(r)
                            }
                            i[m][v] = q
                        }
                    }
                    i.__children = n;
                    for (var w = 0; w < f.attributes.length; w++) {
                        var x = f.attributes.item(w);
                        i.__cnt++;
                        for (var y = x.value, z = 0, A = a.length; A > z; z++) {
                            var B = a[z];
                            B.test.call(this, x) && (y = B.converter.call(this, x.value))
                        }
                        i[b + x.name] = y
                    }
                    var C = e(f);
                    return null != C && "" != C && (i.__cnt++, i.__prefix = C), 1 == i.__cnt && null != i["#text"] && (i = i["#text"]), null != i["#text"] && (i.__text = i["#text"], t && (i.__text = g(i.__text)), delete i["#text"], delete i["#text_asArray"]), null != i["#cdata-section"] && (i.__cdata = i["#cdata-section"], delete i["#cdata-section"], delete i["#cdata-section_asArray"]), (null != i.__text || null != i.__cdata) && (i.toString = function () {
                        return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
                    }), i
                }
                return f.nodeType == u.TEXT_NODE || f.nodeType == u.CDATA_SECTION_NODE ? f.nodeValue : f.nodeType == u.COMMENT_NODE ? null : void 0
            }

            function i(a, b, c, d) {
                var e = "<" + (null != a && null != a.__prefix ? a.__prefix + ":" : "") + b;
                if (null != c)for (var f = 0; f < c.length; f++) {
                    var g = c[f], h = a[g];
                    e += " " + g.substr(1) + "='" + h + "'"
                }
                return e += d ? "/>" : ">"
            }

            function j(a, b) {
                return "</" + (null != a.__prefix ? a.__prefix + ":" : "") + b + ">"
            }

            function k(a, b) {
                return -1 !== a.indexOf(b, a.length - b.length)
            }

            function l(a, b) {
                return k(b.toString(), "_asArray") || 0 == b.toString().indexOf("_") || a[b]instanceof Function ? !0 : !1
            }

            function m(a) {
                var b = 0;
                if (a instanceof Object)for (var c in a)l(a, c) || b++;
                return b
            }

            function n(a) {
                var b = [];
                if (a instanceof Object)for (var c in a)-1 == c.toString().indexOf("__") && 0 == c.toString().indexOf("_") && b.push(c);
                return b
            }

            function o(a) {
                var b = "";
                return null != a.__cdata && (b += "<![CDATA[" + a.__cdata + "]]>"), null != a.__text && (b += t ? f(a.__text) : a.__text), b
            }

            function p(a) {
                var b = "";
                return a instanceof Object ? b += o(a) : null != a && (b += t ? f(a) : a), b
            }

            function q(a, b, c) {
                var d = "";
                if (0 == a.length)d += i(a, b, c, !0); else for (var e = 0; e < a.length; e++)d += i(a[e], b, n(a[e]), !1), d += r(a[e]), d += j(a[e], b);
                return d
            }

            function r(a) {
                var b = "", c = m(a);
                if (c > 0)for (var d in a)if (!l(a, d)) {
                    var e = a[d], f = n(e);
                    if (null == e || void 0 == e)b += i(e, d, f, !0); else if (e instanceof Object)if (e instanceof Array)b += q(e, d, f); else {
                        var g = m(e);
                        g > 0 || null != e.__text || null != e.__cdata ? (b += i(e, d, f, !1), b += r(e), b += j(e, d)) : b += i(e, d, f, !0)
                    } else b += i(e, d, f, !1), b += p(e), b += j(e, d)
                }
                return b += p(a)
            }

            (null === b || void 0 === b) && (b = "_"), (null === c || void 0 === c) && (c = !1);
            var s = "1.0.11", t = !1, u = {
                ELEMENT_NODE: 1,
                TEXT_NODE: 3,
                CDATA_SECTION_NODE: 4,
                COMMENT_NODE: 8,
                DOCUMENT_NODE: 9
            };
            this.parseXmlString = function (a) {
                var b, c, d;
                if (window.DOMParser) {
                    c = new window.DOMParser;
                    try {
                        d = c.parseFromString("<", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI
                    } catch (e) {
                    }
                    try {
                        b = c.parseFromString(a, "text/xml"), d && b.getElementsByTagNameNS(d, "parsererror").length && (b = void 0)
                    } catch (e) {
                    }
                } else 0 == a.indexOf("<?") && (a = a.substr(a.indexOf("?>") + 2)), b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a);
                return b
            }, this.xml2json = function (a) {
                return h(a)
            }, this.xml_str2json = function (a) {
                var b = this.parseXmlString(a);
                return b ? this.xml2json(b) : void 0
            }, this.json2xml_str = function (a) {
                return r(a)
            }, this.json2xml = function (a) {
                var b = this.json2xml_str(a);
                return this.parseXmlString(b)
            }, this.getVersion = function () {
                return s
            }, this.escapeMode = function (a) {
                t = a
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0}), c["default"] = d, b.exports = c["default"]
    }, {}],
    5: [function (a, b, c) {
        (function (b) {
            "use strict";
            function d(a) {
                return a && a.__esModule ? a : {"default": a}
            }

            Object.defineProperty(c, "__esModule", {value: !0});
            var e = a("./src/streaming/MediaPlayer.js"), f = d(e), g = a("./src/streaming/protection/Protection.js"), h = d(g), i = a("./src/streaming/metrics/MetricsReporting.js"), j = d(i), k = a("./src/streaming/MediaPlayerFactory.js"), l = d(k), m = window || b, n = m.dashjs;
            n || (n = m.dashjs = {}), n.MediaPlayer = f["default"], n.Protection = h["default"], n.MetricsReporting = j["default"], n.MediaPlayerFactory = l["default"], c["default"] = n, c.MediaPlayer = f["default"], c.Protection = h["default"], c.MetricsReporting = j["default"], c.MediaPlayerFactory = l["default"]
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./src/streaming/MediaPlayer.js": 33,
        "./src/streaming/MediaPlayerFactory.js": 35,
        "./src/streaming/metrics/MetricsReporting.js": 55,
        "./src/streaming/protection/Protection.js": 85
    }],
    6: [function (a, b, c) {/*! codem-isoboxer v0.2.2 https://github.com/madebyhiro/codem-isoboxer/blob/master/LICENSE.txt */
        var d = {};
        d.parseBuffer = function (a) {
            return new e(a).parse()
        }, d.Utils = {}, d.Utils.dataViewToString = function (a, b) {
            var c = b || "utf-8";
            if ("undefined" != typeof TextDecoder)return new TextDecoder(c).decode(a);
            var d = [], e = 0;
            if ("utf-8" === c)for (; e < a.byteLength;) {
                var f = a.getUint8(e++);
                128 > f || (224 > f ? (f = (31 & f) << 6, f |= 63 & a.getUint8(e++)) : 240 > f ? (f = (15 & f) << 12, f |= (63 & a.getUint8(e++)) << 6, f |= 63 & a.getUint8(e++)) : (f = (7 & f) << 18, f |= (63 & a.getUint8(e++)) << 12, f |= (63 & a.getUint8(e++)) << 6, f |= 63 & a.getUint8(e++))), d.push(String.fromCharCode(f))
            } else for (; e < a.byteLength;)d.push(String.fromCharCode(a.getUint8(e++)));
            return d.join("")
        }, "undefined" != typeof c && (c.parseBuffer = d.parseBuffer, c.Utils = d.Utils), d.Cursor = function (a) {
            this.offset = "undefined" == typeof a ? 0 : a
        };
        var e = function (a) {
            this._raw = new DataView(a), this._cursor = new d.Cursor, this.boxes = []
        };
        e.prototype.fetch = function (a) {
            var b = this.fetchAll(a, !0);
            return b.length ? b[0] : null
        }, e.prototype.fetchAll = function (a, b) {
            var c = [];
            return e._sweep.call(this, a, c, b), c
        }, e.prototype.parse = function () {
            for (this._cursor.offset = 0, this.boxes = []; this._cursor.offset < this._raw.byteLength;) {
                var a = f.parse(this);
                if ("undefined" == typeof a.type)break;
                this.boxes.push(a)
            }
            return this
        }, e._sweep = function (a, b, c) {
            this.type && this.type == a && b.push(this);
            for (var d in this.boxes) {
                if (b.length && c)return;
                e._sweep.call(this.boxes[d], a, b, c)
            }
        };
        var f = function () {
            this._cursor = new d.Cursor
        };
        f.parse = function (a) {
            var b = new f;
            return b._offset = a._cursor.offset, b._root = a._root ? a._root : a, b._raw = a._raw, b._parent = a, b._parseBox(), a._cursor.offset = b._raw.byteOffset + b._raw.byteLength, b
        }, f.prototype._readInt = function (a) {
            var b = null;
            switch (a) {
                case 8:
                    b = this._raw.getInt8(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 16:
                    b = this._raw.getInt16(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 32:
                    b = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 64:
                    var c = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset), d = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset + 4);
                    b = c * Math.pow(2, 32) + d
            }
            return this._cursor.offset += a >> 3, b
        }, f.prototype._readUint = function (a) {
            var b = null;
            switch (a) {
                case 8:
                    b = this._raw.getUint8(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 16:
                    b = this._raw.getUint16(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 24:
                    var c = this._raw.getUint16(this._cursor.offset - this._raw.byteOffset), d = this._raw.getUint8(this._cursor.offset - this._raw.byteOffset + 2);
                    b = (c << 8) + d;
                    break;
                case 32:
                    b = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 64:
                    var c = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset), d = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset + 4);
                    b = c * Math.pow(2, 32) + d
            }
            return this._cursor.offset += a >> 3, b
        }, f.prototype._readString = function (a) {
            for (var b = "", c = 0; a > c; c++) {
                var d = this._readUint(8);
                b += String.fromCharCode(d)
            }
            return b
        }, f.prototype._readTerminatedString = function () {
            for (var a = ""; ;) {
                var b = this._readUint(8);
                if (0 == b)break;
                a += String.fromCharCode(b)
            }
            return a
        }, f.prototype._readTemplate = function (a) {
            var b = this._readUint(a / 2), c = this._readUint(a / 2);
            return b + c / Math.pow(2, a / 2)
        }, f.prototype._parseBox = function () {
            if (this._cursor.offset = this._offset, this._offset + 8 > this._raw.buffer.byteLength)return void(this._root._incomplete = !0);
            switch (this.size = this._readUint(32), this.type = this._readString(4), 1 == this.size && (this.largesize = this._readUint(64)), "uuid" == this.type && (this.usertype = this._readString(16)), this.size) {
                case 0:
                    this._raw = new DataView(this._raw.buffer, this._offset, this._raw.byteLength - this._cursor.offset);
                    break;
                case 1:
                    this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.largesize);
                    break;
                default:
                    this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.size)
            }
            !this._incomplete && this._boxParsers[this.type] && this._boxParsers[this.type].call(this)
        }, f.prototype._parseFullBox = function () {
            this.version = this._readUint(8), this.flags = this._readUint(24)
        }, f.prototype._boxParsers = {}, ["moov", "trak", "tref", "mdia", "minf", "stbl", "edts", "dinf", "mvex", "moof", "traf", "mfra", "udta", "meco", "strk", "vttc"].forEach(function (a) {
            f.prototype._boxParsers[a] = function () {
                for (this.boxes = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;)this.boxes.push(f.parse(this))
            }
        }), f.prototype._boxParsers.elst = function () {
            this._parseFullBox(), this.entry_count = this._readUint(32), this.entries = [];
            for (var a = 1; a <= this.entry_count; a++) {
                var b = {};
                1 == this.version ? (b.segment_duration = this._readUint(64), b.media_time = this._readInt(64)) : (b.segment_duration = this._readUint(32), b.media_time = this._readInt(32)), b.media_rate_integer = this._readInt(16), b.media_rate_fraction = this._readInt(16), this.entries.push(b)
            }
        }, f.prototype._boxParsers.emsg = function () {
            this._parseFullBox(), this.scheme_id_uri = this._readTerminatedString(), this.value = this._readTerminatedString(), this.timescale = this._readUint(32), this.presentation_time_delta = this._readUint(32), this.event_duration = this._readUint(32), this.id = this._readUint(32), this.message_data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
        }, f.prototype._boxParsers.free = f.prototype._boxParsers.skip = function () {
            this.data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
        }, f.prototype._boxParsers.ftyp = f.prototype._boxParsers.styp = function () {
            for (this.major_brand = this._readString(4), this.minor_versions = this._readUint(32), this.compatible_brands = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;)this.compatible_brands.push(this._readString(4))
        }, f.prototype._boxParsers.hdlr = function () {
            this._parseFullBox(), this.pre_defined = this._readUint(32), this.handler_type = this._readString(4), this.reserved = [this._readUint(32), this._readUint(32), this._readUint(32)], this.name = this._readTerminatedString()
        }, f.prototype._boxParsers.mdat = function () {
            this.data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
        }, f.prototype._boxParsers.mdhd = function () {
            this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.timescale = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.timescale = this._readUint(32), this.duration = this._readUint(32));
            var a = this._readUint(16);
            this.pad = a >> 15, this.language = String.fromCharCode((a >> 10 & 31) + 96, (a >> 5 & 31) + 96, (31 & a) + 96), this.pre_defined = this._readUint(16)
        }, f.prototype._boxParsers.mfhd = function () {
            this._parseFullBox(), this.sequence_number = this._readUint(32)
        }, f.prototype._boxParsers.mvhd = function () {
            this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.timescale = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.timescale = this._readUint(32), this.duration = this._readUint(32)), this.rate = this._readTemplate(32), this.volume = this._readTemplate(16), this.reserved1 = this._readUint(16), this.reserved2 = [this._readUint(32), this._readUint(32)], this.matrix = [];
            for (var a = 0; 9 > a; a++)this.matrix.push(this._readTemplate(32));
            this.pre_defined = [];
            for (var a = 0; 6 > a; a++)this.pre_defined.push(this._readUint(32));
            this.next_track_ID = this._readUint(32)
        }, f.prototype._boxParsers.payl = function () {
            var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
            this.cue_text = d.Utils.dataViewToString(a)
        }, f.prototype._boxParsers.sidx = function () {
            this._parseFullBox(), this.reference_ID = this._readUint(32), this.timescale = this._readUint(32), 0 == this.version ? (this.earliest_presentation_time = this._readUint(32), this.first_offset = this._readUint(32)) : (this.earliest_presentation_time = this._readUint(64), this.first_offset = this._readUint(64)), this.reserved = this._readUint(16), this.reference_count = this._readUint(16), this.references = [];
            for (var a = 0; a < this.reference_count; a++) {
                var b = {}, c = this._readUint(32);
                b.reference_type = c >> 31 & 1, b.referenced_size = 2147483647 & c, b.subsegment_duration = this._readUint(32);
                var d = this._readUint(32);
                b.starts_with_SAP = d >> 31 & 1, b.SAP_type = d >> 28 & 7, b.SAP_delta_time = 268435455 & d, this.references.push(b)
            }
        }, f.prototype._boxParsers.ssix = function () {
            this._parseFullBox(), this.subsegment_count = this._readUint(32), this.subsegments = [];
            for (var a = 0; a < this.subsegment_count; a++) {
                var b = {};
                b.ranges_count = this._readUint(32), b.ranges = [];
                for (var c = 0; c < b.ranges_count; c++) {
                    var d = {};
                    d.level = this._readUint(8), d.range_size = this._readUint(24), b.ranges.push(d)
                }
                this.subsegments.push(b)
            }
        }, f.prototype._boxParsers.tfdt = function () {
            this._parseFullBox(), 1 == this.version ? this.baseMediaDecodeTime = this._readUint(64) : this.baseMediaDecodeTime = this._readUint(32)
        }, f.prototype._boxParsers.tfhd = function () {
            this._parseFullBox(), this.track_ID = this._readUint(32), 1 & this.flags && (this.base_data_offset = this._readUint(64)), 2 & this.flags && (this.sample_description_offset = this._readUint(32)), 8 & this.flags && (this.default_sample_duration = this._readUint(32)), 16 & this.flags && (this.default_sample_size = this._readUint(32)), 32 & this.flags && (this.default_sample_flags = this._readUint(32))
        }, f.prototype._boxParsers.tkhd = function () {
            this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.track_ID = this._readUint(32), this.reserved1 = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.track_ID = this._readUint(32), this.reserved1 = this._readUint(32), this.duration = this._readUint(32)), this.reserved2 = [this._readUint(32), this._readUint(32)], this.layer = this._readUint(16), this.alternate_group = this._readUint(16), this.volume = this._readTemplate(16), this.reserved3 = this._readUint(16), this.matrix = [];
            for (var a = 0; 9 > a; a++)this.matrix.push(this._readTemplate(32));
            this.width = this._readUint(32), this.height = this._readUint(32)
        }, f.prototype._boxParsers.trun = function () {
            this._parseFullBox(), this.sample_count = this._readUint(32), 1 & this.flags && (this.data_offset = this._readInt(32)), 4 & this.flags && (this.first_sample_flags = this._readUint(32)), this.samples = [];
            for (var a = 0; a < this.sample_count; a++) {
                var b = {};
                256 & this.flags && (b.sample_duration = this._readUint(32)), 512 & this.flags && (b.sample_size = this._readUint(32)), 1024 & this.flags && (b.sample_flags = this._readUint(32)), 2048 & this.flags && (0 == this.version ? b.sample_composition_time_offset = this._readUint(32) : b.sample_composition_time_offset = this._readInt(32)), this.samples.push(b)
            }
        }, f.prototype._boxParsers.vlab = function () {
            var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
            this.source_label = d.Utils.dataViewToString(a)
        }, f.prototype._boxParsers.vttC = function () {
            var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
            this.config = d.Utils.dataViewToString(a)
        }, f.prototype._boxParsers.vtte = function () {
        }
    }, {}],
    7: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                k = !0, l = !0, m = (new Date).getTime()
            }

            function b(a) {
                l = a
            }

            function c(a) {
                k = a
            }

            function d() {
                return k
            }

            function e() {
                var a = "", b = null;
                l && (b = (new Date).getTime(), a += "[" + (b - m) + "]"), a.length > 0 && (a += " "), Array.apply(null, arguments).forEach(function (b) {
                    a += b + " "
                }), k && console.log(a), h.trigger(i["default"].LOG, {message: a})
            }

            var f = this.context, h = (0, g["default"])(f).getInstance(), j = void 0, k = void 0, l = void 0, m = void 0;
            return j = {log: e, setLogTimestampVisible: b, setLogToBrowserConsole: c, getLogToBrowserConsole: d}, a(), j
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./EventBus.js"), g = d(f), h = a("./events/Events.js"), i = d(h), j = a("./FactoryMaker.js"), k = d(j);
        e.__dashjs_factory_name = "Debug", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"./EventBus.js": 8, "./FactoryMaker.js": 9, "./events/Events.js": 11}],
    8: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b, c) {
                if (!a)throw new Error("event type cannot be null or undefined");
                if (!b || "function" != typeof b)throw new Error("listener must be a function: " + b);
                if (!(e(a, b, c) >= 0)) {
                    var d = {callback: b, scope: c};
                    g[a] = g[a] || [], g[a].push(d)
                }
            }

            function b(a, b, c) {
                if (a && b && g[a]) {
                    var d = e(a, b, c);
                    0 > d || g[a].splice(d, 1)
                }
            }

            function c(a, b) {
                if (a && g[a]) {
                    if (b = b || {}, b.hasOwnProperty("type"))throw new Error("'type' is a reserved word for event dispatching");
                    b.type = a, g[a].forEach(function (a) {
                        a.callback.call(a.scope, b)
                    })
                }
            }

            function d() {
                g = {}
            }

            function e(a, b, c) {
                var d = g[a], e = -1;
                if (!d || 0 === d.length)return e;
                for (var f = 0; f < d.length; f++)if (d[f].callback === b && (!c || c === d[f].scope))return f;
                return e
            }

            var f = void 0, g = {};
            return f = {on: a, off: b, trigger: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "EventBus", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"./FactoryMaker.js": 9}],
    9: [function (a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {value: !0});
        var d = function () {
            function a(a, b, c, d) {
                var e = g(d);
                !e[a] && b && (e[a] = {instance: b, override: c})
            }

            function b(a, b) {
                for (var c in j) {
                    var d = j[c];
                    if (d.context === a && d.name === b)return d.instance
                }
                return null
            }

            function c(a, b, c) {
                for (var d in j) {
                    var e = j[d];
                    if (e.context === a && e.name === b)return void(j[d].instance = c)
                }
                j.push({name: b, context: a, instance: c})
            }

            function d(a) {
                return function (b) {
                    return void 0 === b && (b = {}), {
                        create: function () {
                            return f(a.__dashjs_factory_name, a.apply({context: b}, arguments), b, arguments)
                        }
                    }
                }
            }

            function e(a) {
                return function (c) {
                    var d = void 0;
                    return void 0 === c && (c = {}), {
                        getInstance: function () {
                            return d || (d = b(c, a.__dashjs_factory_name)), d || (d = f(a.__dashjs_factory_name, a.apply({context: c}, arguments), c, arguments), j.push({
                                name: a.__dashjs_factory_name,
                                context: c,
                                instance: d
                            })), d
                        }
                    }
                }
            }

            function f(a, b, c, d) {
                var e = g(c), f = e[a];
                if (f) {
                    var i = f.instance;
                    if (!f.override)return i.apply({context: c, factory: h}, d);
                    i = i.apply({context: c, factory: h, parent: b}, d);
                    for (var j in i)b.hasOwnProperty(j) && (b[j] = i[j])
                }
                return b
            }

            function g(a) {
                var b = void 0;
                return i.forEach(function (c) {
                    c === a && (b = c)
                }), b || (b = i.push(a)), b
            }

            var h = void 0, i = [], j = [];
            return h = {
                extend: a,
                getSingletonInstance: b,
                setSingletonInstance: c,
                getSingletonFactory: e,
                getClassFactory: d
            }
        }();
        c["default"] = d, b.exports = c["default"]
    }, {}],
    10: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value"in h)return h.value;
                    var i = h.get;
                    if (void 0 === i)return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j)return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a("./EventsBase.js"), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.AST_IN_FUTURE = "astinfuture", this.BUFFERING_COMPLETED = "bufferingCompleted", this.BUFFER_CLEARED = "bufferCleared", this.BUFFER_LEVEL_STATE_CHANGED = "bufferStateChanged", this.BUFFER_LEVEL_UPDATED = "bufferLevelUpdated", this.BYTES_APPENDED = "bytesAppended", this.CHECK_FOR_EXISTENCE_COMPLETED = "checkForExistenceCompleted", this.CHUNK_APPENDED = "chunkAppended", this.CURRENT_TRACK_CHANGED = "currenttrackchanged", this.DATA_UPDATE_COMPLETED = "dataUpdateCompleted", this.DATA_UPDATE_STARTED = "dataUpdateStarted", this.FRAGMENT_LOADING_COMPLETED = "fragmentLoadingCompleted", this.FRAGMENT_LOADING_STARTED = "fragmentLoadingStarted", this.INITIALIZATION_LOADED = "initializationLoaded", this.INIT_FRAGMENT_LOADED = "initFragmentLoaded", this.INIT_REQUESTED = "initRequested", this.INTERNAL_MANIFEST_LOADED = "manifestLoaded", this.LIVE_EDGE_SEARCH_COMPLETED = "liveEdgeSearchCompleted", this.LOADING_COMPLETED = "loadingCompleted", this.LOADING_PROGRESS = "loadingProgress", this.MANIFEST_UPDATED = "manifestUpdated", this.MEDIA_FRAGMENT_LOADED = "mediaFragmentLoaded", this.QUALITY_CHANGED = "qualityChanged", this.QUOTA_EXCEEDED = "quotaExceeded", this.REPRESENTATION_UPDATED = "representationUpdated", this.SEGMENTS_LOADED = "segmentsLoaded", this.SOURCEBUFFER_APPEND_COMPLETED = "sourceBufferAppendCompleted", this.SOURCEBUFFER_REMOVE_COMPLETED = "sourceBufferRemoveCompleted", this.STREAMS_COMPOSED = "streamsComposed", this.STREAM_BUFFERING_COMPLETED = "streamBufferingCompleted", this.STREAM_COMPLETED = "streamCompleted", this.STREAM_INITIALIZED = "streaminitialized", this.STREAM_TEARDOWN_COMPLETE = "streamTeardownComplete", this.TIMED_TEXT_REQUESTED = "timedTextRequested", this.TIME_SYNCHRONIZATION_COMPLETED = "timeSynchronizationComplete", this.WALLCLOCK_TIME_UPDATED = "wallclockTimeUpdated", this.XLINK_ALL_ELEMENTS_LOADED = "xlinkAllElementsLoaded", this.XLINK_ELEMENT_LOADED = "xlinkElementLoaded", this.XLINK_READY = "xlinkReady"
            }

            return f(b, a), b
        }(i["default"]);
        c["default"] = j, b.exports = c["default"]
    }, {"./EventsBase.js": 12}],
    11: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value"in h)return h.value;
                    var i = h.get;
                    if (void 0 === i)return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j)return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a("./CoreEvents.js"), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).apply(this, arguments)
            }

            return f(b, a), b
        }(i["default"]), k = new j;
        c["default"] = k, b.exports = c["default"]
    }, {"./CoreEvents.js": 10}],
    12: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value"in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), f = function () {
            function a() {
                d(this, a)
            }

            return e(a, [{
                key: "extend", value: function (a, b) {
                    if (a) {
                        var c = b ? b.override : !1, d = b ? b.publicOnly : !1;
                        for (var e in a)!a.hasOwnProperty(e) || this[e] && !c || d && -1 === a[e].indexOf("public_") || (this[e] = a[e])
                    }
                }
            }]), a
        }();
        c["default"] = f, b.exports = c["default"]
    }, {}],
    13: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                a && a.dashManifestModel && (I = a.dashManifestModel)
            }

            function b() {
                J = [], K = {}
            }

            function c(a, b) {
                return b.getRepresentationForQuality(a.quality)
            }

            function d(a) {
                return K[a.streamInfo.id][a.index]
            }

            function e(a) {
                for (var b = J.length, c = 0; b > c; c++) {
                    var d = J[c];
                    if (a.id === d.id)return d
                }
                return null
            }

            function f(a, b) {
                var c = new g["default"], d = b.adaptation.period.mpd.manifest.Period_asArray[b.adaptation.period.index].AdaptationSet_asArray[b.adaptation.index], e = I.getRepresentationFor(b.index, d);
                return c.id = b.id, c.quality = b.index, c.bandwidth = I.getBandwidth(e), c.DVRWindow = b.segmentAvailabilityRange, c.fragmentDuration = b.segmentDuration || (b.segments && b.segments.length > 0 ? b.segments[0].duration : NaN), c.MSETimeOffset = b.MSETimeOffset, c.useCalculatedLiveEdgeTime = b.useCalculatedLiveEdgeTime, c.mediaInfo = h(a, b.adaptation), c
            }

            function h(a, b) {
                var c, d = new i["default"], e = b.period.mpd.manifest.Period_asArray[b.period.index].AdaptationSet_asArray[b.index];
                return d.id = b.id, d.index = b.index, d.type = b.type, d.streamInfo = l(a, b.period), d.representationCount = I.getRepresentationCount(e), d.lang = I.getLanguageForAdaptation(e), c = I.getViewpointForAdaptation(e), d.viewpoint = c ? c.value : void 0, d.accessibility = I.getAccessibilityForAdaptation(e).map(function (a) {
                    var b = a.value, c = b;
                    return a.schemeIdUri && a.schemeIdUri.search("cea-608") >= 0 && "undefined" != typeof s["default"] && (c = b ? "cea-608:" + b : "cea-608", d.embeddedCaptions = !0), c
                }), d.audioChannelConfiguration = I.getAudioChannelConfigurationForAdaptation(e).map(function (a) {
                    return a.value
                }), d.roles = I.getRolesForAdaptation(e).map(function (a) {
                    return a.value
                }), d.codec = I.getCodec(e), d.mimeType = I.getMimeType(e), d.contentProtection = I.getContentProtectionData(e), d.bitrateList = I.getBitrateListForAdaptation(e), d.contentProtection && d.contentProtection.forEach(function (a) {
                    a.KID = I.getKID(a)
                }), d.isText = I.getIsTextTrack(d.mimeType), d
            }

            function j(a, b, c) {
                a.id = b, a.index = 100 + parseInt(b.substring(2, 3)), a.type = "embeddedText", a.codec = "cea-608-in-SEI", a.isText = !0, a.isEmbedded = !0, a.lang = b + " " + c, a.roles = ["caption"]
            }

            function l(a, b) {
                var c = new k["default"], d = 1;
                return c.id = b.id, c.index = b.index, c.start = b.start, c.duration = b.duration, c.manifestInfo = n(a, b.mpd), c.isLast = 1 === a.Period_asArray.length || Math.abs(c.start + c.duration - c.manifestInfo.duration) < d, c
            }

            function n(a, b) {
                var c = new m["default"];
                return c.DVRWindowSize = b.timeShiftBufferDepth, c.loadedTime = b.manifest.loadedTime, c.availableFrom = b.availabilityStartTime, c.minBufferTime = b.manifest.minBufferTime, c.maxFragmentDuration = b.maxSegmentDuration, c.duration = I.getDuration(a), c.isDynamic = I.getIsDynamic(a), c
            }

            function p(a, b, c) {
                var d, f = e(b), g = f.id, i = I.getAdaptationForType(a, b.index, c);
                return i ? (d = I.getIndexForAdaptation(i, a, b.index), K[g] = K[g] || I.getAdaptationsForPeriod(a, f), h(a, K[g][d])) : null
            }

            function q(a, b, c) {
                var d, f, g, i, k, l, m = e(b), n = m.id, o = I.getAdaptationsForType(a, b.index, "embeddedText" !== c ? c : "video"), p = [];
                if (!o)return p;
                for (K[n] = K[n] || I.getAdaptationsForPeriod(a, m), i = 0, l = o.length; l > i; i++) {
                    if (d = o[i], g = I.getIndexForAdaptation(d, a, b.index), f = h(a, K[n][g]), "embeddedText" === c) {
                        var q = f.accessibility.length;
                        for (k = 0; q > k; k++)if (f) {
                            var r = f.accessibility[k];
                            if (0 === r.indexOf("cea-608:")) {
                                var s = r.substring(8), t = s.split(";");
                                if ("CC" === t[0].substring(0, 2))for (k = 0; k < t.length; k++)f || (f = h.call(this, a, K[n][g])), j(f, t[k].substring(0, 3), t[k].substring(4)), p.push(f), f = null; else for (k = 0; k < t.length; k++)f || (f = h.call(this, a, K[n][g])), j(f, "CC" + (k + 1), t[k]), p.push(f), f = null
                            } else 0 === r.indexOf("cea-608") && (j(f, "CC1", "eng"), p.push(f), f = null)
                        }
                    }
                    f && "embeddedText" !== c && p.push(f)
                }
                return p
            }

            function r(a) {
                var b, c, d, e = [];
                if (!a)return null;
                for (b = I.getMpd(a), J = I.getRegularPeriods(a, b), b.checkTime = I.getCheckTime(a, J[0]), K = {}, c = J.length, d = 0; c > d; d++)e.push(l(a, J[d]));
                return e
            }

            function u(a) {
                var b = I.getMpd(a);
                return n(a, b)
            }

            function v(a, b) {
                var c = a.getRepresentationController().getRepresentationForQuality(b);
                return a.getIndexHandler().getInitRequest(c)
            }

            function w(a, b) {
                var d = c(b, a.getRepresentationController());
                return a.getIndexHandler().getNextSegmentRequest(d)
            }

            function x(a, b, d, e) {
                var f = c(b, a.getRepresentationController());
                return a.getIndexHandler().getSegmentRequestForTime(f, d, e)
            }

            function y(a, b, d) {
                var e = c(b, a.getRepresentationController());
                return a.getIndexHandler().generateSegmentRequestForTime(e, d)
            }

            function z(a) {
                return a.getIndexHandler().getCurrentTime()
            }

            function A(a, b) {
                return a.getIndexHandler().setCurrentTime(b)
            }

            function B(a, b) {
                var c, f, g = e(b.getStreamInfo()), h = b.getMediaInfo(), i = d(h), j = b.getType();
                c = h.id, f = c ? I.getAdaptationForId(c, a, g.index) : I.getAdaptationForIndex(h.index, a, g.index), b.getRepresentationController().updateData(f, i, j)
            }

            function C(a, b, c) {
                var d = b.getRepresentationForQuality(c);
                return d ? f(a, d) : null
            }

            function D(a, b) {
                var c = b.getCurrentRepresentation();
                return c ? f(a, c) : null
            }

            function E(a, b, c) {
                var d = new o["default"], e = a.scheme_id_uri, f = a.value, g = a.timescale, h = a.presentation_time_delta, i = a.event_duration, j = a.id, k = a.message_data, l = c * g + h;
                return b[e] ? (d.eventStream = b[e], d.eventStream.value = f, d.eventStream.timescale = g, d.duration = i, d.id = j, d.presentationTime = l, d.messageData = k, d.presentationTimeDelta = h, d) : null
            }

            function F(a, b, f) {
                var h = [];
                return b instanceof k["default"] ? h = I.getEventsForPeriod(a, e(b)) : b instanceof i["default"] ? h = I.getEventStreamForAdaptationSet(a, d(b)) : b instanceof g["default"] && (h = I.getEventStreamForRepresentation(a, c(b, f.getRepresentationController()))), h
            }

            function G() {
                J = [], K = {}
            }

            var H = void 0, I = void 0, J = void 0, K = void 0;
            return H = {
                initialize: b,
                convertDataToTrack: f,
                convertDataToMedia: h,
                convertDataToStream: l,
                getDataForTrack: c,
                getDataForMedia: d,
                getDataForStream: e,
                getStreamsInfo: r,
                getManifestInfo: u,
                getMediaInfoForType: p,
                getAllMediaInfoForType: q,
                getCurrentRepresentationInfo: D,
                getRepresentationInfoForQuality: C,
                updateData: B,
                getInitRequest: v,
                getNextFragmentRequest: w,
                getFragmentRequestForTime: x,
                generateFragmentRequestForTime: y,
                getIndexHandlerTime: z,
                setIndexHandlerTime: A,
                getEventsFor: F,
                getEvent: E,
                setConfig: a,
                reset: G,
                metricsList: t
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../streaming/vo/TrackInfo.js"), g = d(f), h = a("../streaming/vo/MediaInfo.js"), i = d(h), j = a("../streaming/vo/StreamInfo.js"), k = d(j), l = a("../streaming/vo/ManifestInfo.js"), m = d(l), n = a("./vo/Event.js"), o = d(n), p = a("../core/FactoryMaker.js"), q = d(p), r = a("../../externals/cea608-parser.js"), s = d(r), t = {
            TCP_CONNECTION: "TcpList",
            HTTP_REQUEST: "HttpList",
            TRACK_SWITCH: "RepSwitchList",
            BUFFER_LEVEL: "BufferLevel",
            BUFFER_STATE: "BufferState",
            DVR_INFO: "DVRInfo",
            DROPPED_FRAMES: "DroppedFrames",
            SCHEDULING_INFO: "SchedulingInfo",
            REQUESTS_QUEUE: "RequestsQueue",
            MANIFEST_UPDATE: "ManifestUpdate",
            MANIFEST_UPDATE_STREAM_INFO: "ManifestUpdatePeriodInfo",
            MANIFEST_UPDATE_TRACK_INFO: "ManifestUpdateRepresentationInfo",
            PLAY_LIST: "PlayList",
            DVB_ERRORS: "DVBErrors"
        };
        e.__dashjs_factory_name = "DashAdapter", c["default"] = q["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../externals/cea608-parser.js": 2,
        "../core/FactoryMaker.js": 9,
        "../streaming/vo/ManifestInfo.js": 138,
        "../streaming/vo/MediaInfo.js": 139,
        "../streaming/vo/StreamInfo.js": 141,
        "../streaming/vo/TrackInfo.js": 143,
        "./vo/Event.js": 23
    }],
    14: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                _ = -1, da = 0, ea = new RegExp("^(?:(?:[a-z]+:)?/)?/", "i"), V.on(o["default"].INITIALIZATION_LOADED, R, $), V.on(o["default"].SEGMENTS_LOADED, S, $)
            }

            function c(a) {
                fa = a, ca = fa.getType(), ba = fa.isDynamic()
            }

            function d() {
                return fa
            }

            function e(a) {
                da = a
            }

            function f() {
                return da
            }

            function h() {
                return _
            }

            function j() {
                da = 0, aa = NaN, _ = -1, ba = null, ca = null, fa = null, V.off(o["default"].INITIALIZATION_LOADED, R, $), V.off(o["default"].SEGMENTS_LOADED, S, $)
            }

            function l(a, b) {
                for (; a.length < b;)a = "0" + a;
                return a
            }

            function n(a, b, c) {
                for (var d, e, f, g, h, i, j = "%0", k = b.length, m = j.length; ;) {
                    if (d = a.indexOf("$" + b), 0 > d)return a;
                    if (e = a.indexOf("$", d + k), 0 > e)return a;
                    if (f = a.indexOf(j, d + k), f > d && e > f)switch (g = a.charAt(e - 1), h = parseInt(a.substring(f + m, e - 1), 10), g) {
                        case"d":
                        case"i":
                        case"u":
                            i = l(c.toString(), h);
                            break;
                        case"x":
                            i = l(c.toString(16), h);
                            break;
                        case"X":
                            i = l(c.toString(16), h).toUpperCase();
                            break;
                        case"o":
                            i = l(c.toString(8), h);
                            break;
                        default:
                            return U("Unsupported/invalid IEEE 1003.1 format identifier string in URL"), a
                    } else i = c;
                    a = a.substring(0, d) + i + a.substring(e + 1)
                }
            }

            function p(a) {
                return a.split("$$").join("$")
            }

            function r(a, b) {
                if (null === b || -1 === a.indexOf("$RepresentationID$"))return a;
                var c = b.toString();
                return a.split("$RepresentationID$").join(c)
            }

            function s(a, b) {
                return a.representation.startNumber + b
            }

            function t(a, b) {
                var c, d = b.adaptation.period.mpd.manifest.Period_asArray[b.adaptation.period.index].AdaptationSet_asArray[b.adaptation.index].Representation_asArray[b.index].BaseURL;
                return c = a === d ? a : ea.test(a) ? a : d + a
            }

            function w(a, b) {
                var c, d, e = new i["default"];
                return c = a.adaptation.period, e.mediaType = b, e.type = m["default"].INIT_SEGMENT_TYPE, e.url = t(a.initialization, a), e.range = a.range, d = c.start, e.availabilityStartTime = X.calcAvailabilityStartTimeFromPresentationTime(d, a.adaptation.period.mpd, ba), e.availabilityEndTime = X.calcAvailabilityEndTimeFromPresentationTime(d + c.duration, c.mpd, ba), e.quality = a.index, e.mediaInfo = fa.getMediaInfo(), e
            }

            function x(a) {
                var b;
                return a ? b = w(a, ca) : null
            }

            function y(a) {
                var b, c, d, e = a.adaptation.period, f = a.segmentInfoType, g = !1;
                return 0 > _ ? g = !1 : ba || _ < a.availableSegmentsNumber ? (c = L(_, a), c && (d = c.presentationStartTime - e.start, b = a.adaptation.period.duration, U(a.segmentInfoType + ": " + d + " / " + b), g = "SegmentTimeline" === f ? !1 : d >= b)) : g = !0, g
            }

            function z(a, b) {
                var c, d, e, f;
                return d = a.segmentDuration, isNaN(d) && (d = a.adaptation.period.duration), e = a.adaptation.period.start + b * d, f = e + d, c = new g["default"], c.representation = a, c.duration = d, c.presentationStartTime = e, c.mediaStartTime = X.calcMediaTimeFromPresentationTime(c.presentationStartTime, a), c.availabilityStartTime = X.calcAvailabilityStartTimeFromPresentationTime(c.presentationStartTime, a.adaptation.period.mpd, ba), c.availabilityEndTime = X.calcAvailabilityEndTimeFromPresentationTime(f, a.adaptation.period.mpd, ba), c.wallStartTime = X.calcWallTimeForSegment(c, ba), c.replacementNumber = s(c, b), c.availabilityIdx = b, c
            }

            function A(a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate, q = p.SegmentTimeline, r = a.availableSegmentsNumber > 0, s = 10, t = 0, u = 0, v = -1, w = [], x = !1, y = function (b) {
                    return E(a, t, b.d, o, p.media, b.mediaRange, v)
                };
                for (o = a.timescale, b = q.S_asArray, j = D(a), j ? (m = j.start, n = j.end) : l = X.calcMediaTimeFromPresentationTime(aa || 0, a), d = 0, e = b.length; e > d; d++) {
                    if (c = b[d], g = 0, c.hasOwnProperty("r") && (g = c.r), c.hasOwnProperty("t") && (t = c.t, u = t / o), 0 > g) {
                        if (i = b[d + 1], i && i.hasOwnProperty("t"))h = i.t / o; else {
                            var z = a.segmentAvailabilityRange ? a.segmentAvailabilityRange.end : X.calcSegmentAvailabilityRange(a, ba).end;
                            h = X.calcMediaTimeFromPresentationTime(z, a), a.segmentDuration = c.d / o
                        }
                        g = Math.ceil((h - u) / (c.d / o)) - 1
                    }
                    if (k) {
                        if (r)break;
                        v += g + 1
                    } else for (f = 0; g >= f; f++) {
                        if (v++, j) {
                            if (v > n) {
                                if (k = !0, r)break;
                                continue
                            }
                            v >= m && w.push(y(c))
                        } else {
                            if (w.length > s) {
                                if (k = !0, r)break;
                                continue
                            }
                            x ? w.push(y(c)) : u >= l - c.d / o * 1.5 && (x = !0, w.push(y(c)))
                        }
                        t += c.d, u = t / o
                    }
                }
                return r || (a.availableSegmentsNumber = v + 1), w
            }

            function B(a) {
                var b, c, d, e, f, g = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate, h = a.segmentDuration, i = a.segmentAvailabilityRange, j = [], k = null, l = null;
                for (f = a.startNumber, b = isNaN(h) && !ba ? {
                    start: f,
                    end: f
                } : C(a), d = b.start, e = b.end, c = d; e >= c; c++)l = z(a, c), l.replacementTime = (f + c - 1) * a.segmentDuration, k = g.media, k = n(k, "Number", l.replacementNumber), k = n(k, "Time", l.replacementTime), l.media = k, j.push(l), l = null;
                return isNaN(h) ? a.availableSegmentsNumber = 1 : a.availableSegmentsNumber = Math.ceil((i.end - i.start) / h), j
            }

            function C(a) {
                var b, c, d, e = a.segmentDuration, f = a.adaptation.period.mpd.manifest.minBufferTime, g = a.segmentAvailabilityRange, h = {
                    start: X.calcPeriodRelativeTimeFromMpdRelativeTime(a, g.start),
                    end: X.calcPeriodRelativeTimeFromMpdRelativeTime(a, g.end)
                }, i = a.segments, j = 2 * e, k = Math.max(2 * f, 10 * e), l = NaN, m = null;
                return h || (h = X.calcSegmentAvailabilityRange(a, ba)), h.start = Math.max(h.start, 0), ba && !X.isTimeSyncCompleted() ? (b = Math.floor(h.start / e), c = Math.floor(h.end / e), d = {
                    start: b,
                    end: c
                }) : (i && i.length > 0 ? (m = L(_, a), l = m ? X.calcPeriodRelativeTimeFromMpdRelativeTime(a, m.presentationStartTime) : _ > 0 ? _ * e : X.calcPeriodRelativeTimeFromMpdRelativeTime(a, aa || i[0].presentationStartTime)) : l = _ > 0 ? _ * e : ba ? h.end : h.start, b = Math.floor(Math.max(l - j, h.start) / e), c = Math.floor(Math.min(b + k / e, h.end / e)), d = {
                    start: b,
                    end: c
                })
            }

            function D() {
                var a, b, c, d = 2, e = 10, f = 0, g = Number.POSITIVE_INFINITY;
                return ba && !X.isTimeSyncCompleted() ? c = {
                    start: f,
                    end: g
                } : !ba && aa || 0 > _ ? null : (a = Math.max(_ - d, f), b = Math.min(_ + e, g), c = {start: a, end: b})
            }

            function E(a, b, c, d, e, f, h) {
                var i, j, k, l = b / d, m = Math.min(c / d, a.adaptation.period.mpd.maxSegmentDuration);
                return i = X.calcPresentationTimeFromMediaTime(l, a), j = i + m, k = new g["default"], k.representation = a,
                    k.duration = m, k.mediaStartTime = l, k.presentationStartTime = i, k.availabilityStartTime = a.adaptation.period.mpd.manifest.loadedTime, k.availabilityEndTime = X.calcAvailabilityEndTimeFromPresentationTime(j, a.adaptation.period.mpd, ba), k.wallStartTime = X.calcWallTimeForSegment(k, ba), k.replacementTime = b, k.replacementNumber = s(k, h), e = n(e, "Number", k.replacementNumber), e = n(e, "Time", k.replacementTime), k.media = e, k.mediaRange = f, k.availabilityIdx = h, k
            }

            function F(a) {
                var b, c, d, e, f, g, h, i = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentList, j = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].BaseURL, k = i.SegmentURL_asArray.length, l = [];
                for (h = a.startNumber, e = C(a), f = Math.max(e.start, 0), g = Math.min(e.end, i.SegmentURL_asArray.length - 1), b = f; g >= b; b++)d = i.SegmentURL_asArray[b], c = z(a, b), c.replacementTime = (h + b - 1) * a.segmentDuration, c.media = d.media ? d.media : j, c.mediaRange = d.mediaRange, c.index = d.index, c.indexRange = d.indexRange, l.push(c), c = null;
                return a.availableSegmentsNumber = k, l
            }

            function G(a) {
                var b, c = a.segmentInfoType;
                return "SegmentBase" !== c && "BaseURL" !== c && M(a) ? ("SegmentTimeline" === c ? b = A(a) : "SegmentTemplate" === c ? b = B(a) : "SegmentList" === c && (b = F(a)), H(a, b)) : b = a.segments, b
            }

            function H(a, b) {
                var c, d, e, f;
                a.segments = b, c = b.length - 1, ba && isNaN(X.getExpectedLiveEdge()) && (f = b[c], d = f.presentationStartTime, e = Z.getMetricsFor("stream"), X.setExpectedLiveEdge(d), Z.updateManifestUpdateInfo(Y.getCurrentManifestUpdate(e), {presentationStartTime: d}))
            }

            function I(a) {
                if (!a)throw new k["default"]("no representation");
                return a.segments = null, G(a), a
            }

            function J(a, b) {
                var c, d = a.initialization, e = "BaseURL" !== a.segmentInfoType && "SegmentBase" !== a.segmentInfoType;
                return a.segmentDuration || a.segments || I(a), a.segmentAvailabilityRange = null, a.segmentAvailabilityRange = X.calcSegmentAvailabilityRange(a, ba), a.segmentAvailabilityRange.end < a.segmentAvailabilityRange.start && !a.useCalculatedLiveEdgeTime ? (c = new k["default"](v, "no segments are available yet", {availabilityDelay: a.segmentAvailabilityRange.start - a.segmentAvailabilityRange.end}), void V.trigger(o["default"].REPRESENTATION_UPDATED, {
                    sender: this,
                    representation: a,
                    error: c
                })) : (b || (_ = -1), a.segmentDuration && I(a), d || W.loadInitialization(a), e || W.loadSegments(a, ca, a.indexRange), void(d && e && V.trigger(o["default"].REPRESENTATION_UPDATED, {
                    sender: this,
                    representation: a
                })))
            }

            function K(a, b, c) {
                var d, e, f, g, h, i = b.segments, j = i ? i.length : null, k = -1;
                if (i && j > 0)for (h = 0; j > h; h++)if (e = i[h], f = e.presentationStartTime, g = e.duration, d = void 0 === c || null === c ? g / 2 : c, a + d >= f && f + g > a - d) {
                    k = e.availabilityIdx;
                    break
                }
                return k
            }

            function L(a, b) {
                if (!b || !b.segments)return null;
                var c, d, e = b.segments.length;
                if (e > a && (c = b.segments[a], c && c.availabilityIdx === a))return c;
                for (d = 0; e > d; d++)if (c = b.segments[d], c && c.availabilityIdx === a)return c;
                return null
            }

            function M(a) {
                var b, c, d = a.segments, e = !1;
                return d && 0 !== d.length ? (c = d[0].availabilityIdx, b = d[d.length - 1].availabilityIdx, e = c > _ || _ > b) : e = !0, e
            }

            function N(a) {
                if (null === a || void 0 === a)return null;
                var b, c = new i["default"], d = a.representation, e = d.adaptation.period.mpd.manifest.Period_asArray[d.adaptation.period.index].AdaptationSet_asArray[d.adaptation.index].Representation_asArray[d.index].bandwidth;
                return b = t(a.media, d), b = n(b, "Number", a.replacementNumber), b = n(b, "Time", a.replacementTime), b = n(b, "Bandwidth", e), b = r(b, d.id), b = p(b), c.mediaType = ca, c.type = m["default"].MEDIA_SEGMENT_TYPE, c.url = b, c.range = a.mediaRange, c.startTime = a.presentationStartTime, c.duration = a.duration, c.timescale = d.timescale, c.availabilityStartTime = a.availabilityStartTime, c.availabilityEndTime = a.availabilityEndTime, c.wallStartTime = a.wallStartTime, c.quality = d.index, c.index = a.availabilityIdx, c.mediaInfo = fa.getMediaInfo(), c
            }

            function O(a, b, c) {
                var d, e, f, g = _, h = c ? c.keepIdx : !1, j = c ? c.timeThreshold : null, k = c && c.ignoreIsFinished ? !0 : !1;
                return a ? (aa !== b && (aa = b, U("Getting the request for " + ca + " time : " + b)), _ = K(b, a, j), G(a), 0 > _ && (_ = K(b, a, j)), _ > 0 && U("Index for " + ca + " time " + b + " is " + _), f = k ? !1 : y(a), f ? (d = new i["default"], d.action = i["default"].ACTION_COMPLETE, d.index = _, d.mediaType = ca, d.mediaInfo = fa.getMediaInfo(), U("Signal complete.", d)) : (e = L(_, a), d = N(e)), h && g >= 0 && "SegmentTimeline" !== a.segmentInfoType && (_ = g), d) : null
            }

            function P(a, b) {
                var c = (a.segmentAvailabilityRange.end - a.segmentAvailabilityRange.start) / 2;
                return a.segments = null, a.segmentAvailabilityRange = {start: b - c, end: b + c}, O(a, b, {
                    keepIdx: !1,
                    ignoreIsFinished: !0
                })
            }

            function Q(a) {
                var b, c, d;
                return a && -1 !== _ ? (aa = null, _++, U("Getting the next request at index: " + _), d = y(a), d ? (b = new i["default"], b.action = i["default"].ACTION_COMPLETE, b.index = _, b.mediaType = ca, b.mediaInfo = fa.getMediaInfo(), U("Signal complete.")) : (G(a), c = L(_, a), b = N(c), !c && ba && _--), b) : null
            }

            function R(a) {
                var b = a.representation;
                b.segments && V.trigger(o["default"].REPRESENTATION_UPDATED, {sender: this, representation: b})
            }

            function S(a) {
                if (!a.error && ca === a.mediaType) {
                    var b, c, d, e, f = a.segments, g = a.representation, h = [], i = 0;
                    for (b = 0, c = f.length; c > b; b++)d = f[b], e = E(g, d.startTime, d.duration, d.timescale, d.media, d.mediaRange, i), h.push(e), e = null, i++;
                    g.segmentAvailabilityRange = {
                        start: h[0].presentationStartTime,
                        end: h[c - 1].presentationStartTime
                    }, g.availableSegmentsNumber = c, H(g, h), g.initialization && V.trigger(o["default"].REPRESENTATION_UPDATED, {
                        sender: this,
                        representation: g
                    })
                }
            }

            var T = this.context, U = (0, u["default"])(T).getInstance().log, V = (0, q["default"])(T).getInstance(), W = a.segmentBaseLoader, X = a.timelineConverter, Y = a.dashMetrics, Z = a.metricsModel, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0, ea = void 0, fa = void 0;
            return $ = {
                initialize: c,
                getStreamProcessor: d,
                getInitRequest: x,
                getSegmentRequestForTime: O,
                getNextSegmentRequest: Q,
                generateSegmentRequestForTime: P,
                updateRepresentation: J,
                setCurrentTime: e,
                getCurrentTime: f,
                getCurrentIndex: h,
                reset: j
            }, b(), $
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./vo/Segment.js"), g = d(f), h = a("../streaming/vo/FragmentRequest.js"), i = d(h), j = a("../streaming/vo/Error.js"), k = d(j), l = a("../streaming/vo/metrics/HTTPRequest.js"), m = d(l), n = a("../core/events/Events.js"), o = d(n), p = a("../core/EventBus.js"), q = d(p), r = a("../core/FactoryMaker.js"), s = d(r), t = a("../core/Debug.js"), u = d(t), v = 1;
        e.__dashjs_factory_name = "DashHandler";
        var w = s["default"].getClassFactory(e);
        w.SEGMENTS_UNAVAILABLE_ERROR_CODE = v, c["default"] = w, b.exports = c["default"]
    }, {
        "../core/Debug.js": 7,
        "../core/EventBus.js": 8,
        "../core/FactoryMaker.js": 9,
        "../core/events/Events.js": 11,
        "../streaming/vo/Error.js": 135,
        "../streaming/vo/FragmentRequest.js": 136,
        "../streaming/vo/metrics/HTTPRequest.js": 150,
        "./vo/Segment.js": 28
    }],
    15: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                var c, d = B.getValue(), e = d.Period_asArray[b];
                return c = w(e, a), null === c ? null : c.bandwidth
            }

            function b(a, b) {
                var c, d = B.getValue(), e = d.Period_asArray[b];
                return c = v(e, a)
            }

            function c(a, b) {
                var c, d = B.getValue(), e = d.Period_asArray[b];
                return c = y(e, a)
            }

            function d(a, b) {
                var c = 0, d = (0, i["default"])(A).getInstance();
                return d && (c = d.getTopQualityIndexFor(a, b)), c
            }

            function e(a) {
                if (null === a)return null;
                var b, c, d, e = a.RepSwitchList;
                return null === e || e.length <= 0 ? null : (b = e.length, c = b - 1, d = e[c])
            }

            function f(a) {
                if (null === a)return null;
                var b = a.BufferLevel;
                return null === b || b.length <= 0 ? null : b[b.length - 1]
            }

            function h(a) {
                if (null === a)return 0;
                var b = a.BufferLevel;
                return null === b || b.length <= 0 ? 0 : b[b.length - 1].level / 1e3
            }

            function j(a) {
                return a.RequestsQueue
            }

            function l(a) {
                if (null === a)return null;
                var b, c, d = a.HttpList, e = null;
                if (null === d || d.length <= 0)return null;
                for (b = d.length, c = b - 1; c >= 0;) {
                    if (d[c].responsecode) {
                        e = d[c];
                        break
                    }
                    c--
                }
                return e
            }

            function n(a) {
                return null === a ? [] : a.HttpList ? a.HttpList : []
            }

            function o(a) {
                if (null === a)return null;
                var b, c, d, e = a.DroppedFrames;
                return null === e || e.length <= 0 ? null : (b = e.length, c = b - 1, d = e[c])
            }

            function p(a) {
                if (null === a)return null;
                var b, c, d, e = a.SchedulingInfo;
                return null === e || e.length <= 0 ? null : (b = e.length, c = b - 1, d = e[c])
            }

            function q(a) {
                if (null === a)return null;
                var b, c, d, e = a.ManifestUpdate;
                return null === e || e.length <= 0 ? null : (b = e.length, c = b - 1, d = e[c])
            }

            function r(a) {
                if (null === a)return null;
                var b, c, d = a.DVRInfo;
                return null === d || d.length <= 0 ? null : (b = d.length - 1, c = d[b])
            }

            function s(a, b) {
                var c, d, e, f = {};
                if (null === a)return null;
                for (c = n(a), e = c.length - 1; e >= 0; e--)if (d = c[e], d.type === g["default"].MPD_TYPE) {
                    f = u(d._responseHeaders);
                    break
                }
                return void 0 === f[b] ? null : f[b]
            }

            function t(a, b) {
                if (null === a)return null;
                var c, d = l(a);
                return null === d || null === d._responseHeaders ? null : (c = u(d._responseHeaders), void 0 === c[b] ? null : c[b])
            }

            function u(a) {
                var b = {};
                if (!a)return b;
                for (var c = a.split("\r\n"), d = 0, e = c.length; e > d; d++) {
                    var f = c[d], g = f.indexOf(": ");
                    g > 0 && (b[f.substring(0, g)] = f.substring(g + 2))
                }
                return b
            }

            function v(a, b) {
                var c, d, e, f, g, h;
                for (d = a.AdaptationSet_asArray, g = 0; g < d.length; g += 1)for (c = d[g], f = c.Representation_asArray, h = 0; h < f.length; h += 1)if (e = f[h], b === e.id)return h;
                return -1
            }

            function w(a, b) {
                var c, d, e, f, g, h;
                for (d = a.AdaptationSet_asArray, g = 0; g < d.length; g += 1)for (c = d[g], f = c.Representation_asArray, h = 0; h < f.length; h += 1)if (e = f[h], b === e.id)return e;
                return null
            }

            function x(a, b) {
                return (0, m["default"])(A).getInstance().getIsTypeOf(a, b)
            }

            function y(a, b) {
                var c, d, e, f;
                if (!a || !b)return -1;
                for (d = a.AdaptationSet_asArray, f = 0; f < d.length; f += 1)if (c = d[f], e = c.Representation_asArray, x(c, b))return e.length;
                return -1
            }

            var z = void 0, A = this.context, B = (0, k["default"])(A).getInstance();
            return z = {
                getBandwidthForRepresentation: a,
                getIndexForRepresentation: b,
                getMaxIndexForBufferType: c,
                getMaxAllowedIndexForBufferType: d,
                getCurrentRepresentationSwitch: e,
                getLatestBufferLevelVO: f,
                getCurrentBufferLevel: h,
                getCurrentHttpRequest: l,
                getHttpRequests: n,
                getCurrentDroppedFrames: o,
                getCurrentSchedulingInfo: p,
                getCurrentDVRInfo: r,
                getCurrentManifestUpdate: q,
                getLatestFragmentRequestHeaderValueByID: t,
                getLatestMPDRequestHeaderValueByID: s,
                getRequestsQueue: j
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../streaming/vo/metrics/HTTPRequest.js"), g = d(f), h = a("../streaming/controllers/AbrController.js"), i = d(h), j = a("../streaming/models/ManifestModel.js"), k = d(j), l = a("./models/DashManifestModel.js"), m = d(l), n = a("../core/FactoryMaker.js"), o = d(n);
        e.__dashjs_factory_name = "DashMetrics", c["default"] = o["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../core/FactoryMaker.js": 9,
        "../streaming/controllers/AbrController.js": 42,
        "../streaming/models/ManifestModel.js": 79,
        "../streaming/vo/metrics/HTTPRequest.js": 150,
        "./models/DashManifestModel.js": 19
    }],
    16: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                u = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/, v = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})([0-9]{2}))?/, w = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/, x = /^https?:\/\//i, y = /^(https?:\/\/[^\/]+)\/?/i, z = [{
                    type: "duration",
                    test: function (a) {
                        for (var b = ["minBufferTime", "mediaPresentationDuration", "minimumUpdatePeriod", "timeShiftBufferDepth", "maxSegmentDuration", "maxSubsegmentDuration", "suggestedPresentationDelay", "start", "starttime", "duration"], c = b.length, d = 0; c > d; d++)if (a.nodeName === b[d])return u.test(a.value);
                        return !1
                    },
                    converter: function (a) {
                        var b = u.exec(a), c = parseFloat(b[2] || 0) * h + parseFloat(b[4] || 0) * i + parseFloat(b[6] || 0) * j + parseFloat(b[8] || 0) * l + parseFloat(b[10] || 0) * n + parseFloat(b[12] || 0);
                        return void 0 !== b[1] && (c = -c), c
                    }
                }, {
                    type: "datetime", test: function (a) {
                        return v.test(a.value)
                    }, converter: function (a) {
                        var b, c = v.exec(a);
                        if (b = Date.UTC(parseInt(c[1], 10), parseInt(c[2], 10) - 1, parseInt(c[3], 10), parseInt(c[4], 10), parseInt(c[5], 10), c[6] && parseInt(c[6], 10) || 0, c[7] && parseFloat(c[7]) * q || 0), c[9] && c[10]) {
                            var d = parseInt(c[9], 10) * p + parseInt(c[10], 10);
                            b += ("+" === c[8] ? -1 : 1) * d * n * q
                        }
                        return new Date(b)
                    }
                }, {
                    type: "numeric", test: function (a) {
                        return w.test(a.value)
                    }, converter: function (a) {
                        return parseFloat(a)
                    }
                }]
            }

            function b() {
                var a, b, c, d;
                return d = [{name: "profiles", merge: !1}, {name: "width", merge: !1}, {
                    name: "height",
                    merge: !1
                }, {name: "sar", merge: !1}, {name: "frameRate", merge: !1}, {
                    name: "audioSamplingRate",
                    merge: !1
                }, {name: "mimeType", merge: !1}, {name: "segmentProfiles", merge: !1}, {
                    name: "codecs",
                    merge: !1
                }, {name: "maximumSAPPeriod", merge: !1}, {name: "startsWithSap", merge: !1}, {
                    name: "maxPlayoutRate",
                    merge: !1
                }, {name: "codingDependency", merge: !1}, {name: "scanType", merge: !1}, {
                    name: "FramePacking",
                    merge: !0
                }, {name: "AudioChannelConfiguration", merge: !0}, {
                    name: "ContentProtection",
                    merge: !0
                }], a = {}, a.name = "AdaptationSet", a.isRoot = !1, a.isArray = !0, a.parent = null, a.children = [], a.properties = d, b = {}, b.name = "Representation", b.isRoot = !1, b.isArray = !0, b.parent = a, b.children = [], b.properties = d, a.children.push(b), c = {}, c.name = "SubRepresentation", c.isRoot = !1, c.isArray = !0, c.parent = b, c.children = [], c.properties = d, b.children.push(c), a
            }

            function c() {
                var a, b, c, d;
                return d = [{name: "SegmentBase", merge: !0}, {
                    name: "SegmentTemplate",
                    merge: !0
                }, {
                    name: "SegmentList",
                    merge: !0
                }], a = {}, a.name = "Period", a.isRoot = !1, a.isArray = !0, a.parent = null, a.children = [], a.properties = d, b = {}, b.name = "AdaptationSet", b.isRoot = !1, b.isArray = !0, b.parent = a, b.children = [], b.properties = d, a.children.push(b), c = {}, c.name = "Representation", c.isRoot = !1, c.isArray = !0, c.parent = b, c.children = [], c.properties = d, b.children.push(c), a
            }

            function d() {
                var a, b, c, d, e;
                return e = [{
                    name: "BaseURL", merge: !0, mergeFunction: function (a, b) {
                        var c, d;
                        return x.test(b) ? c = b : "/" === b.charAt(0) && y.test(a) ? (d = a.match(y), c = d[1] + b) : c = a + b, c
                    }
                }], a = {}, a.name = "mpd", a.isRoot = !0, a.isArray = !0, a.parent = null, a.children = [], a.properties = e, b = {}, b.name = "Period", b.isRoot = !1, b.isArray = !0, b.parent = null, b.children = [], b.properties = e, a.children.push(b), c = {}, c.name = "AdaptationSet", c.isRoot = !1, c.isArray = !0, c.parent = b, c.children = [], c.properties = e, b.children.push(c), d = {}, d.name = "Representation", d.isRoot = !1, d.isArray = !0, d.parent = c, d.children = [], d.properties = e, c.children.push(d), a
            }

            function e() {
                var a = [];
                return a.push(b()), a.push(c()), a.push(d()), a
            }

            function f(a, b, c) {
                var d, f = new o["default"](z, "", !0), h = new m["default"](e()), i = new Date, j = null, k = null;
                try {
                    if (d = f.xml_str2json(a), !d)throw"parser error";
                    j = new Date, d.hasOwnProperty("BaseURL") ? (d.BaseURL = d.BaseURL_asArray[0], 0 !== d.BaseURL.toString().indexOf("http") && (d.BaseURL = b + d.BaseURL)) : d.BaseURL = b, d.hasOwnProperty("Location") && (d.Location = d.Location_asArray[0]), h.run(d), k = new Date, c.setMatchers(z), c.setIron(h), s("Parsing complete: ( xml2json: " + (j.getTime() - i.getTime()) + "ms, objectiron: " + (k.getTime() - j.getTime()) + "ms, total: " + (k.getTime() - i.getTime()) / 1e3 + "s)")
                } catch (l) {
                    return (0, g["default"])(r).getInstance().manifestError("parsing the manifest failed", "parse", a), null
                }
                return d
            }

            var h = 31536e3, i = 2592e3, j = 86400, l = 3600, n = 60, p = 60, q = 1e3, r = this.context, s = (0, k["default"])(r).getInstance().log, t = void 0, u = void 0, v = void 0, w = void 0, x = void 0, y = void 0, z = void 0;
            return t = {parse: f}, a(), t
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../streaming/utils/ErrorHandler.js"), g = d(f), h = a("../core/FactoryMaker.js"), i = d(h), j = a("../core/Debug.js"), k = d(j), l = a("../../externals/objectiron.js"), m = d(l), n = a("../../externals/xml2json.js"), o = d(n);
        e.__dashjs_factory_name = "DashParser", c["default"] = i["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../externals/objectiron.js": 3,
        "../../externals/xml2json.js": 4,
        "../core/Debug.js": 7,
        "../core/FactoryMaker.js": 9,
        "../streaming/utils/ErrorHandler.js": 127
    }],
    17: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                t = (0, m["default"])(l).getInstance(), u = (0, s["default"])(l).getInstance(), v = (0, g["default"])(l).getInstance()
            }

            function b(a, c) {
                var d = !0, e = null, g = null, i = new XMLHttpRequest, j = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].BaseURL, k = c || {
                        url: j,
                        range: {start: 0, end: 1500},
                        searching: !1,
                        bytesLoaded: 0,
                        bytesToLoad: 1500,
                        request: i
                    };
                n("Start searching for initialization."), i.onload = function () {
                    i.status < 200 || i.status > 299 || (d = !1, k.bytesLoaded = k.range.end, g = u.parse(i.response), e = f(g), e ? (a.range = e, a.initialization = j, p.trigger(o["default"].INITIALIZATION_LOADED, {representation: a})) : (k.range.end = k.bytesLoaded + k.bytesToLoad, b(a, k)))
                }, i.onloadend = i.onerror = function () {
                    d && (d = !1, t.downloadError("initialization", k.url, i), p.trigger(o["default"].INITIALIZATION_LOADED, {representation: a}))
                }, h(i, k), n("Perform init search: " + k.url)
            }

            function c(a, b, d, f, g) {
                if (d && (void 0 === d.start || void 0 === d.end)) {
                    var i = d ? d.toString().split("-") : null;
                    d = i ? {start: parseFloat(i[0]), end: parseFloat(i[1])} : null
                }
                g = g ? g : j;
                var k = !0, l = null, m = null, o = !!d, p = new XMLHttpRequest, q = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].BaseURL, r = {
                    url: q,
                    range: o ? d : {start: 0, end: 1500},
                    searching: !o,
                    bytesLoaded: f ? f.bytesLoaded : 0,
                    bytesToLoad: 1500,
                    request: p
                };
                p.onload = function () {
                    if (!(p.status < 200 || p.status > 299)) {
                        var d = r.bytesToLoad, f = p.response.byteLength;
                        if (k = !1, r.bytesLoaded = r.range.end - r.range.start, l = u.parse(p.response), m = l.getBox("sidx"), m && m.isComplete) {
                            var h, i, j = m.references;
                            if (null !== j && void 0 !== j && j.length > 0 && (h = 1 === j[0].reference_type), h) {
                                n("Initiate multiple SIDX load."), r.range.end = r.range.start + m.size;
                                var o, q, s, t, v, w = [], x = 0, y = (m.offset || r.range.start) + m.size, z = function (c) {
                                    c ? (w = w.concat(c), x++, x >= q && g(w, a, b)) : g(null, a, b)
                                };
                                for (o = 0, q = j.length; q > o; o++)s = y, t = y + j[o].referenced_size - 1, y += j[o].referenced_size, v = {
                                    start: s,
                                    end: t
                                }, c(a, null, v, r, z)
                            } else n("Parsing segments from SIDX."), i = e(m, r), g(i, a, b)
                        } else {
                            if (m)r.range.start = m.offset || r.range.start, r.range.end = r.range.start + (m.size || d); else {
                                if (f < r.bytesLoaded)return void g(null, a, b);
                                var A = l.getLastBox();
                                A && A.size ? (r.range.start = A.offset + A.size, r.range.end = r.range.start + d) : r.range.end += d
                            }
                            c(a, b, r.range, r, g)
                        }
                    }
                }, p.onloadend = p.onerror = function () {
                    k && (k = !1, t.downloadError("SIDX", r.url, p), g(null, a, b))
                }, h(p, r), n("Perform SIDX load: " + r.url)
            }

            function d() {
                t = null, u = null, v = null, n = null
            }

            function e(a, b) {
                for (var c, d, e, f, g = a.references, h = g.length, j = a.timescale, k = a.earliest_presentation_time, l = b.range.start + a.first_offset + a.size, m = [], n = 0; h > n; n++)e = g[n].subsegment_duration, f = g[n].referenced_size, c = new i["default"], c.duration = e, c.media = b.url, c.startTime = k, c.timescale = j, d = l + f - 1, c.mediaRange = l + "-" + d, m.push(c), k += e, l += f;
                return m
            }

            function f(a) {
                var b, c, d = a.getBox("ftyp"), e = a.getBox("moov"), f = null;
                return n("Searching for initialization."), e && e.isComplete && (b = d ? d.offset : e.offset, c = e.offset + e.size - 1, f = b + "-" + c, n("Found the initialization.  Range: " + f)), f
            }

            function h(a, b) {
                a.open("GET", v.modifyRequestURL(b.url)), a.responseType = "arraybuffer", a.setRequestHeader("Range", "bytes=" + b.range.start + "-" + b.range.end), a = v.modifyRequestHeader(a), a.send(null)
            }

            function j(a, b, c) {
                a ? p.trigger(o["default"].SEGMENTS_LOADED, {
                    segments: a,
                    representation: b,
                    mediaType: c
                }) : p.trigger(o["default"].SEGMENTS_LOADED, {
                    segments: null,
                    representation: b,
                    mediaType: c,
                    error: new k["default"](null, "error loading segments", null)
                })
            }

            var l = this.context, n = (0, w["default"])(l).getInstance().log, p = (0, q["default"])(l).getInstance(), r = void 0, t = void 0, u = void 0, v = void 0;
            return r = {initialize: a, loadInitialization: b, loadSegments: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../streaming/utils/RequestModifier.js"), g = d(f), h = a("./vo/Segment.js"), i = d(h), j = a("../streaming/vo/Error.js"), k = d(j), l = a("../streaming/utils/ErrorHandler.js"), m = d(l), n = a("../core/events/Events.js"), o = d(n), p = a("../core/EventBus.js"), q = d(p), r = a("../streaming/utils/BoxParser.js"), s = d(r), t = a("../core/FactoryMaker.js"), u = d(t), v = a("../core/Debug.js"), w = d(v);
        e.__dashjs_factory_name = "SegmentBaseLoader", c["default"] = u["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../core/Debug.js": 7,
        "../core/EventBus.js": 8,
        "../core/FactoryMaker.js": 9,
        "../core/events/Events.js": 11,
        "../streaming/utils/BoxParser.js": 123,
        "../streaming/utils/ErrorHandler.js": 127,
        "../streaming/utils/RequestModifier.js": 130,
        "../streaming/vo/Error.js": 135,
        "./vo/Segment.js": 28
    }],
    18: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                P = null, Q = -1, R = !0, S = [], V = (0, m["default"])(M).getInstance(), X = (0, q["default"])(M).getInstance(), Y = (0, o["default"])(M).getInstance(), Z = (0, s["default"])(M).getInstance(), $ = (0, u["default"])(M).getInstance(), _ = (0, y["default"])(M).getInstance(), aa = (0, k["default"])(M).getInstance(), ba = (0, g["default"])(M).getInstance(), ca = (0, i["default"])(M).getInstance(), da = (0, w["default"])(M).getInstance(), N.on(E["default"].QUALITY_CHANGED, J, O), N.on(E["default"].REPRESENTATION_UPDATED, F, O), N.on(E["default"].WALLCLOCK_TIME_UPDATED, G, O), N.on(E["default"].BUFFER_LEVEL_UPDATED, I, O), N.on(E["default"].LIVE_EDGE_SEARCH_COMPLETED, H, O)
            }

            function b(a) {
                U = a, W = U.getIndexHandler()
            }

            function c() {
                return U
            }

            function d() {
                return P
            }

            function e() {
                return Q
            }

            function f() {
                return R
            }

            function h() {
                return T
            }

            function j() {
                N.off(E["default"].QUALITY_CHANGED, J, O), N.off(E["default"].REPRESENTATION_UPDATED, F, O), N.off(E["default"].WALLCLOCK_TIME_UPDATED, G, O), N.off(E["default"].BUFFER_LEVEL_UPDATED, I, O), N.off(E["default"].LIVE_EDGE_SEARCH_COMPLETED, H, O), P = null, Q = -1, R = !0, S = [], V = null, X = null, Y = null, Z = null, $ = null, _ = null, aa = null, ba = null, ca = null, da = null
            }

            function l(a, b, c) {
                var d, e, f = null, g = U.getStreamInfo(), h = V.getTopQualityIndexFor(c, g.id);
                if (R = !0, N.trigger(E["default"].DATA_UPDATE_STARTED, {sender: this}), S = x(b), null === P && "fragmentedText" !== c ? (e = V.getAverageThroughput(c), f = e || V.getInitialBitrateFor(c, g), d = V.getQualityForBitrate(U.getMediaInfo(), f)) : d = V.getQualityFor(c, g), d > h && (d = h), T = r(d), P = a, "video" !== c && "audio" !== c && "fragmentedText" !== c)return R = !1, void N.trigger(E["default"].DATA_UPDATE_COMPLETED, {
                    sender: this,
                    data: P,
                    currentRepresentation: T
                });
                for (var i = 0; i < S.length; i++)W.updateRepresentation(S[i], !0)
            }

            function n() {
                var a = new Date, b = h(), c = 1e3 * Y.getTime();
                $.addRepresentationSwitch(b.adaptation.type, a, c, b.id)
            }

            function p() {
                var a = aa.calcSegmentAvailabilityRange(T, U.isDynamic());
                $.addDVRInfo(U.getType(), Y.getTime(), U.getStreamInfo().manifestInfo, a)
            }

            function r(a) {
                return S[a]
            }

            function t(a) {
                return S.indexOf(a)
            }

            function v() {
                for (var a = 0, b = S.length; b > a; a++) {
                    var c = S[a].segmentInfoType;
                    if (null === S[a].segmentAvailabilityRange || null === S[a].initialization || ("SegmentBase" === c || "BaseURL" === c) && !S[a].segments)return !1
                }
                return !0
            }

            function x(a) {
                var b, c = Z.getValue();
                return Q = ba.getIndexForAdaptation(P, c, a.period.index), b = ba.getRepresentationsForAdaptation(c, a)
            }

            function z(a) {
                for (var b, c = 0, d = S.length; d > c; c++)b = S[c], b.segmentAvailabilityRange = aa.calcSegmentAvailabilityRange(b, a)
            }

            function B() {
                S.forEach(function (a) {
                    a.segmentAvailabilityRange = null
                })
            }

            function D(a) {
                var b = a, c = function () {
                    if (!f()) {
                        R = !0, N.trigger(E["default"].DATA_UPDATE_STARTED, {sender: O}), B();
                        for (var a = 0; a < S.length; a++)W.updateRepresentation(S[a], !0)
                    }
                };
                R = !1, N.trigger(E["default"].AST_IN_FUTURE, {delay: b}), setTimeout(c, b)
            }

            function F(a) {
                if (a.sender.getStreamProcessor() === U && f()) {
                    var b, c, d, e = a.representation, g = $.getMetricsFor("stream"), i = $.getMetricsFor(h().adaptation.type), j = ca.getCurrentManifestUpdate(g), k = !1, l = 0;
                    if ("dynamic" == e.adaptation.period.mpd.manifest.type) {
                        var m = e.segmentAvailabilityRange.end - e.segmentAvailabilityRange.start;
                        l = 1e3 * (T.segmentDuration * da.getLiveDelayFragmentCount() - m)
                    }
                    if (l > 0)return p(), D(l), c = new A["default"](L, "Segments update failed", null), void N.trigger(E["default"].DATA_UPDATE_COMPLETED, {
                        sender: this,
                        data: P,
                        currentRepresentation: T,
                        error: c
                    });
                    if (j) {
                        for (var o = 0; o < j.trackInfo.length; o++)if (b = j.trackInfo[o], b.index === e.index && b.mediaType === U.getType()) {
                            k = !0;
                            break
                        }
                        k || $.addManifestUpdateRepresentationInfo(j, e.id, e.index, e.adaptation.period.index, U.getType(), e.presentationTimeOffset, e.startNumber, e.segmentInfoType)
                    }
                    v() && (R = !1, V.setPlaybackQuality(U.getType(), U.getStreamInfo(), t(T)), $.updateManifestUpdateInfo(j, {latency: T.segmentAvailabilityRange.end - Y.getTime()}), d = ca.getCurrentRepresentationSwitch(i), d || n(), N.trigger(E["default"].DATA_UPDATE_COMPLETED, {
                        sender: this,
                        data: P,
                        currentRepresentation: T
                    }))
                }
            }

            function G(a) {
                a.isDynamic && z(a.isDynamic)
            }

            function H(a) {
                if (!a.error) {
                    z(!0), W.updateRepresentation(T, !1);
                    var b = Z.getValue(), c = T.adaptation.period, d = X.getActiveStreamInfo();
                    d.isLast && (c.mpd.checkTime = ba.getCheckTime(b, c), c.duration = ba.getEndTimeForLastPeriod(Z.getValue(), c) - c.start, d.duration = c.duration)
                }
            }

            function I(a) {
                a.sender.getStreamProcessor() === U && p()
            }

            function J(a) {
                a.mediaType === U.getType() && U.getStreamInfo().id === a.streamInfo.id && a.oldQuality !== a.newQuality && (T = r(a.newQuality), K(a.mediaType, T.bandwidth), n())
            }

            function K(a, b) {
                !_.isSupported(y["default"].STORAGE_TYPE_LOCAL) || "video" !== a && "audio" !== a || localStorage.setItem(y["default"]["LOCAL_STORAGE_" + a.toUpperCase() + "_BITRATE_KEY"], JSON.stringify({
                    bitrate: b / 1e3,
                    timestamp: (new Date).getTime()
                }))
            }

            var L = 1, M = this.context, N = (0, C["default"])(M).getInstance(), O = void 0, P = void 0, Q = void 0, R = void 0, S = void 0, T = void 0, U = void 0, V = void 0, W = void 0, X = void 0, Y = void 0, Z = void 0, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0;
            return O = {
                initialize: b,
                getData: d,
                getDataIndex: e,
                isUpdating: f,
                updateData: l,
                getStreamProcessor: c,
                getCurrentRepresentation: h,
                getRepresentationForQuality: r,
                reset: j
            }, a(), O
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../models/DashManifestModel.js"), g = d(f), h = a("../DashMetrics.js"), i = d(h), j = a("../utils/TimelineConverter.js"), k = d(j), l = a("../../streaming/controllers/AbrController.js"), m = d(l), n = a("../../streaming/controllers/PlaybackController.js"), o = d(n), p = a("../../streaming/controllers/StreamController.js"), q = d(p), r = a("../../streaming/models/ManifestModel.js"), s = d(r), t = a("../../streaming/models/MetricsModel.js"), u = d(t), v = a("../../streaming/models/MediaPlayerModel.js"), w = d(v), x = a("../../streaming/utils/DOMStorage.js"), y = d(x), z = a("../../streaming/vo/Error.js"), A = d(z), B = a("../../core/EventBus.js"), C = d(B), D = a("../../core/events/Events.js"), E = d(D), F = a("../../core/FactoryMaker.js"), G = d(F);
        e.__dashjs_factory_name = "RepresentationController", c["default"] = G["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../../streaming/controllers/AbrController.js": 42,
        "../../streaming/controllers/PlaybackController.js": 48,
        "../../streaming/controllers/StreamController.js": 51,
        "../../streaming/models/ManifestModel.js": 79,
        "../../streaming/models/MediaPlayerModel.js": 80,
        "../../streaming/models/MetricsModel.js": 81,
        "../../streaming/utils/DOMStorage.js": 126,
        "../../streaming/vo/Error.js": 135,
        "../DashMetrics.js": 15,
        "../models/DashManifestModel.js": 19,
        "../utils/TimelineConverter.js": 21
    }],
    19: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                var c, d, e, f = !1, g = !1, h = a.ContentComponent_asArray, i = "text" !== b ? new RegExp(b) : new RegExp("(vtt|ttml)");
                if (a.Representation_asArray.length > 0 && a.Representation_asArray[0].hasOwnProperty("codecs") && "stpp" == a.Representation_asArray[0].codecs)return "fragmentedText" == b;
                if (h) {
                    if (h.length > 1)return "muxed" == b;
                    h[0] && h[0].contentType === b && (f = !0, g = !0)
                }
                if (a.hasOwnProperty("mimeType") && (f = i.test(a.mimeType), g = !0), !g)for (c = 0, d = a.Representation_asArray.length; !g && d > c;)e = a.Representation_asArray[c], e.hasOwnProperty("mimeType") && (f = i.test(e.mimeType), g = !0), c++;
                return f
            }

            function b(b) {
                return a(b, "audio")
            }

            function c(b) {
                return a(b, "video")
            }

            function d(b) {
                return a(b, "fragmentedText")
            }

            function e(b) {
                return a(b, "text")
            }

            function f(b) {
                return a(b, "muxed")
            }

            function h(a) {
                return "text/vtt" === a || "application/ttml+xml" === a
            }

            function j(a) {
                var b = "";
                return a.hasOwnProperty("lang") && (b = a.lang.replace(/[^A-Za-z0-9-]/g, "")), b
            }

            function l(a) {
                return a.hasOwnProperty("Viewpoint") ? a.Viewpoint : null
            }

            function n(a) {
                return a.hasOwnProperty("Role_asArray") ? a.Role_asArray : []
            }

            function p(a) {
                return a.hasOwnProperty("Accessibility_asArray") ? a.Accessibility_asArray : []
            }

            function r(a) {
                return a.hasOwnProperty("AudioChannelConfiguration_asArray") ? a.AudioChannelConfiguration_asArray : []
            }

            function t(a) {
                return n(a).filter(function (a) {
                    return "main" === a.value
                })[0]
            }

            function v(a) {
                return void 0 !== a.Representation_asArray && null !== a.Representation_asArray && a.Representation_asArray.sort(function (a, b) {
                    return a.bandwidth - b.bandwidth
                }), a
            }

            function w(a, b, c) {
                var d, e, f = b.Period_asArray[c].AdaptationSet_asArray;
                for (d = 0, e = f.length; e > d; d++)if (f[d].hasOwnProperty("id") && f[d].id === a)return f[d];
                return null
            }

            function x(a, b, c) {
                var d = b.Period_asArray[c].AdaptationSet_asArray;
                return d[a]
            }

            function y(a, b, c) {
                var d, e, f = b.Period_asArray[c].AdaptationSet_asArray;
                for (d = 0, e = f.length; e > d; d++)if (f[d] === a)return d;
                return -1
            }

            function z(b, c, d) {
                var e, f, g = b.Period_asArray[c].AdaptationSet_asArray, h = [];
                for (e = 0, f = g.length; f > e; e++)a(g[e], d) && h.push(v(g[e]));
                return h
            }

            function A(a, b, c) {
                var d, e, f;
                if (f = z(a, b, c), !f || 0 === f.length)return null;
                for (d = 0, e = f.length; e > d; d++)if (t(f[d]))return f[d];
                return f[0]
            }

            function B(a) {
                var b = a.Representation_asArray[0];
                return b.mimeType + ';codecs="' + b.codecs + '"'
            }

            function C(a) {
                return a.Representation_asArray[0].mimeType
            }

            function D(a) {
                return a && a.hasOwnProperty("cenc:default_KID") ? a["cenc:default_KID"] : null
            }

            function E(a) {
                return a && a.hasOwnProperty("ContentProtection_asArray") && 0 !== a.ContentProtection_asArray.length ? a.ContentProtection_asArray : null
            }

            function F(a) {
                var b = !1;
                return a.hasOwnProperty("type") && (b = "dynamic" === a.type), b
            }

            function G(a) {
                var b, c, d = F(a);
                return b = !isNaN(a.timeShiftBufferDepth), c = d && b
            }

            function H(a) {
                var b = !1;
                return a.profiles && a.profiles.length > 0 && (b = -1 !== a.profiles.indexOf("urn:mpeg:dash:profile:isoff-on-demand:2011")), b
            }

            function I(a) {
                var b;
                return b = a.hasOwnProperty("mediaPresentationDuration") ? a.mediaPresentationDuration : Number.MAX_VALUE
            }

            function J(a) {
                return a.bandwidth
            }

            function K(a) {
                var b = NaN, c = 2;
                return a.hasOwnProperty("minimumUpdatePeriod") && (b = Math.max(parseFloat(a.minimumUpdatePeriod), c)), b
            }

            function L(a) {
                return a.Representation_asArray.length
            }

            function M(a) {
                if (!a || !a.Representation_asArray || !a.Representation_asArray.length)return null;
                for (var b = v(a), c = b.Representation_asArray, d = c.length, e = [], f = 0; d > f; f++)e.push(c[f].bandwidth);
                return e
            }

            function N(a, b) {
                return b.Representation_asArray[a]
            }

            function O(a, b) {
                for (var c, d, e, f, i, j = v(a.Period_asArray[b.period.index].AdaptationSet_asArray[b.index]), k = [], l = 0; l < j.Representation_asArray.length; l++)f = j.Representation_asArray[l], c = new g["default"], c.index = l, c.adaptation = b, f.hasOwnProperty("id") && (c.id = f.id), f.hasOwnProperty("bandwidth") && (c.bandwidth = f.bandwidth), f.hasOwnProperty("maxPlayoutRate") && (c.maxPlayoutRate = f.maxPlayoutRate), f.hasOwnProperty("SegmentBase") ? (e = f.SegmentBase, c.segmentInfoType = "SegmentBase") : f.hasOwnProperty("SegmentList") ? (e = f.SegmentList, c.segmentInfoType = "SegmentList", c.useCalculatedLiveEdgeTime = !0) : f.hasOwnProperty("SegmentTemplate") ? (e = f.SegmentTemplate, e.hasOwnProperty("SegmentTimeline") ? (c.segmentInfoType = "SegmentTimeline", i = e.SegmentTimeline.S_asArray[e.SegmentTimeline.S_asArray.length - 1], (!i.hasOwnProperty("r") || i.r >= 0) && (c.useCalculatedLiveEdgeTime = !0)) : c.segmentInfoType = "SegmentTemplate", e.hasOwnProperty("initialization") && (c.initialization = e.initialization.split("$Bandwidth$").join(f.bandwidth).split("$RepresentationID$").join(f.id))) : (e = f.BaseURL, c.segmentInfoType = "BaseURL"), e.hasOwnProperty("Initialization") ? (d = e.Initialization, d.hasOwnProperty("sourceURL") ? c.initialization = d.sourceURL : d.hasOwnProperty("range") && (c.initialization = f.BaseURL, c.range = d.range)) : f.hasOwnProperty("mimeType") && h(f.mimeType) && (c.initialization = f.BaseURL, c.range = 0), e.hasOwnProperty("timescale") && (c.timescale = e.timescale), e.hasOwnProperty("duration") && (c.segmentDuration = e.duration / c.timescale), e.hasOwnProperty("startNumber") && (c.startNumber = e.startNumber), e.hasOwnProperty("indexRange") && (c.indexRange = e.indexRange), e.hasOwnProperty("presentationTimeOffset") && (c.presentationTimeOffset = e.presentationTimeOffset / c.timescale), c.MSETimeOffset = ba.calcMSETimeOffset(c), k.push(c);
                return k
            }

            function P(a, e) {
                for (var g, h, j = a.Period_asArray[e.index], k = [], l = 0; l < j.AdaptationSet_asArray.length; l++)h = j.AdaptationSet_asArray[l], g = new i["default"], h.hasOwnProperty("id") && (g.id = h.id), g.index = l, g.period = e, f(h) ? g.type = "muxed" : b(h) ? g.type = "audio" : c(h) ? g.type = "video" : d(h) ? g.type = "fragmentedText" : g.type = "text", k.push(g);
                return k
            }

            function Q(a, b) {
                var c, d, e = F(a), f = [], g = null, h = null, i = null, j = null;
                for (d = 0, c = a.Period_asArray.length; c > d; d++)h = a.Period_asArray[d],
                    h.hasOwnProperty("start") ? (j = new k["default"], j.start = h.start) : null !== g && h.hasOwnProperty("duration") && null !== i ? (j = new k["default"], j.start = i.start + i.duration, j.duration = h.duration) : 0 !== d || e || (j = new k["default"], j.start = 0), null !== i && isNaN(i.duration) && (i.duration = j.start - i.start), null !== j && (j.id = R(h)), null !== j && h.hasOwnProperty("duration") && (j.duration = h.duration), null !== j && (j.index = d, j.mpd = b, f.push(j), g = h, i = j), h = null, j = null;
                return 0 === f.length ? f : (null !== i && isNaN(i.duration) && (i.duration = V(a, i) - i.start), f)
            }

            function R(a) {
                if (!a)throw new Error("Period cannot be null or undefined");
                var b = k["default"].DEFAULT_ID;
                return a.hasOwnProperty("id") && "__proto__" !== a.id && (b = a.id), b
            }

            function S(a) {
                var b = new m["default"];
                return b.manifest = a, a.hasOwnProperty("availabilityStartTime") ? b.availabilityStartTime = new Date(a.availabilityStartTime.getTime()) : b.availabilityStartTime = new Date(a.loadedTime.getTime()), a.hasOwnProperty("availabilityEndTime") && (b.availabilityEndTime = new Date(a.availabilityEndTime.getTime())), a.hasOwnProperty("suggestedPresentationDelay") && (b.suggestedPresentationDelay = a.suggestedPresentationDelay), a.hasOwnProperty("timeShiftBufferDepth") && (b.timeShiftBufferDepth = a.timeShiftBufferDepth), a.hasOwnProperty("maxSegmentDuration") && (b.maxSegmentDuration = a.maxSegmentDuration), b
            }

            function T(a, b) {
                return ba.calcPresentationTimeFromWallTime(a.loadedTime, b)
            }

            function U(a, b) {
                var c, d = NaN;
                return a.hasOwnProperty("minimumUpdatePeriod") && (c = T(a, b), d = c + a.minimumUpdatePeriod), d
            }

            function V(a, b) {
                var c, d = U(a, b);
                if (a.mediaPresentationDuration)c = a.mediaPresentationDuration; else {
                    if (isNaN(d))throw new Error("Must have @mediaPresentationDuration or @minimumUpdatePeriod on MPD or an explicit @duration on the last period.");
                    c = d
                }
                return c
            }

            function W(a, b) {
                var c = a.Period_asArray, d = c[b.index].EventStream_asArray, e = [];
                if (d)for (var f = 0; f < d.length; f++) {
                    var g = new u["default"];
                    if (g.period = b, g.timescale = 1, !d[f].hasOwnProperty("schemeIdUri"))throw"Invalid EventStream. SchemeIdUri has to be set";
                    g.schemeIdUri = d[f].schemeIdUri, d[f].hasOwnProperty("timescale") && (g.timescale = d[f].timescale), d[f].hasOwnProperty("value") && (g.value = d[f].value);
                    for (var h = 0; h < d[f].Event_asArray.length; h++) {
                        var i = new s["default"];
                        i.presentationTime = 0, i.eventStream = g, d[f].Event_asArray[h].hasOwnProperty("presentationTime") && (i.presentationTime = d[f].Event_asArray[h].presentationTime), d[f].Event_asArray[h].hasOwnProperty("duration") && (i.duration = d[f].Event_asArray[h].duration), d[f].Event_asArray[h].hasOwnProperty("id") && (i.id = d[f].Event_asArray[h].id), e.push(i)
                    }
                }
                return e
            }

            function X(a, b) {
                var c = [];
                if (!a)return c;
                for (var d = 0; d < a.length; d++) {
                    var e = new u["default"];
                    if (e.timescale = 1, e.representation = b, !a[d].hasOwnProperty("schemeIdUri"))throw"Invalid EventStream. SchemeIdUri has to be set";
                    e.schemeIdUri = a[d].schemeIdUri, a[d].hasOwnProperty("timescale") && (e.timescale = a[d].timescale), a[d].hasOwnProperty("value") && (e.value = a[d].value), c.push(e)
                }
                return c
            }

            function Y(a, b) {
                var c = a.Period_asArray[b.period.index].AdaptationSet_asArray[b.index].InbandEventStream_asArray;
                return X(c, null)
            }

            function Z(a, b) {
                var c = a.Period_asArray[b.adaptation.period.index].AdaptationSet_asArray[b.adaptation.index].Representation_asArray[b.index].InbandEventStream_asArray;
                return X(c, b)
            }

            function $(a) {
                var b = F(a), c = a.hasOwnProperty("availabilityStartTime"), d = a.UTCTiming_asArray, e = [];
                return (b || c) && d && d.forEach(function (a) {
                    var b = new o["default"];
                    a.hasOwnProperty("schemeIdUri") && (b.schemeIdUri = a.schemeIdUri, a.hasOwnProperty("value") && (b.value = a.value.toString(), e.push(b)))
                }), e
            }

            var _ = void 0, aa = this.context, ba = (0, q["default"])(aa).getInstance();
            return _ = {
                getIsTypeOf: a,
                getIsAudio: b,
                getIsVideo: c,
                getIsText: e,
                getIsMuxed: f,
                getIsTextTrack: h,
                getIsFragmentedText: d,
                getIsMain: t,
                getLanguageForAdaptation: j,
                getViewpointForAdaptation: l,
                getRolesForAdaptation: n,
                getAccessibilityForAdaptation: p,
                getAudioChannelConfigurationForAdaptation: r,
                processAdaptation: v,
                getAdaptationForIndex: x,
                getIndexForAdaptation: y,
                getAdaptationForId: w,
                getAdaptationsForType: z,
                getAdaptationForType: A,
                getCodec: B,
                getMimeType: C,
                getKID: D,
                getContentProtectionData: E,
                getIsDynamic: F,
                getIsDVR: G,
                getIsOnDemand: H,
                getDuration: I,
                getBandwidth: J,
                getRefreshDelay: K,
                getRepresentationCount: L,
                getBitrateListForAdaptation: M,
                getRepresentationFor: N,
                getRepresentationsForAdaptation: O,
                getAdaptationsForPeriod: P,
                getRegularPeriods: Q,
                getPeriodId: R,
                getMpd: S,
                getFetchTime: T,
                getCheckTime: U,
                getEndTimeForLastPeriod: V,
                getEventsForPeriod: W,
                getEventStreams: X,
                getEventStreamForAdaptationSet: Y,
                getEventStreamForRepresentation: Z,
                getUTCTimingSources: $
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/Representation.js"), g = d(f), h = a("../vo/AdaptationSet.js"), i = d(h), j = a("../vo/Period.js"), k = d(j), l = a("../vo/Mpd.js"), m = d(l), n = a("../vo/UTCTiming.js"), o = d(n), p = a("../utils/TimelineConverter.js"), q = d(p), r = a("../vo/Event.js"), s = d(r), t = a("../vo/EventStream.js"), u = d(t), v = a("../../core/FactoryMaker.js"), w = d(v);
        e.__dashjs_factory_name = "DashManifestModel", c["default"] = w["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../core/FactoryMaker.js": 9,
        "../utils/TimelineConverter.js": 21,
        "../vo/AdaptationSet.js": 22,
        "../vo/Event.js": 23,
        "../vo/EventStream.js": 24,
        "../vo/Mpd.js": 25,
        "../vo/Period.js": 26,
        "../vo/Representation.js": 27,
        "../vo/UTCTiming.js": 29
    }],
    20: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                a && a.boxParser && (e = a.boxParser)
            }

            function b(a) {
                var b, c, d, f, g, h, i, j, k, l, m, n = e.parse(a), o = n.getBox("tfhd"), p = n.getBox("tfdt"), q = n.getBox("trun"), r = n.getBox("moof"), s = n.getBox("mfhd");
                for (l = s.sequence_number, d = q.sample_count, g = p.baseMediaDecodeTime, k = (o.base_data_offset || 0) + (q.data_offset || 0), h = [], j = 0; d > j; j++)i = q.samples[j], b = void 0 !== i.sample_duration ? i.sample_duration : o.default_sample_duration, f = void 0 !== i.sample_size ? i.sample_size : o.default_sample_size, c = void 0 !== i.sample_composition_time_offset ? i.sample_composition_time_offset : 0, h.push({
                    dts: g,
                    cts: g + c,
                    duration: b,
                    offset: r.offset + k,
                    size: f
                }), k += f, g += b;
                return m = g - p.baseMediaDecodeTime, {sampleList: h, sequenceNumber: l, totalDuration: m}
            }

            function c(a) {
                var b = e.parse(a), c = b.getBox("mdhd");
                return c ? c.timescale : NaN
            }

            var d = void 0, e = void 0;
            return d = {getSamplesInfo: b, getMediaTimescaleFromMoov: c, setConfig: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "FragmentedTextBoxParser", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    21: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                z = 0, A = !1, B = NaN, x.on(i["default"].LIVE_EDGE_SEARCH_COMPLETED, s, this), x.on(i["default"].TIME_SYNCHRONIZATION_COMPLETED, t, this)
            }

            function b() {
                return A
            }

            function c(a) {
                A = a
            }

            function d() {
                return z
            }

            function e() {
                return B
            }

            function f(a) {
                B = a
            }

            function h(a, b, c, d) {
                var e = NaN;
                return e = d ? c && b.timeShiftBufferDepth != Number.POSITIVE_INFINITY ? new Date(b.availabilityStartTime.getTime() + 1e3 * (a + b.timeShiftBufferDepth)) : b.availabilityEndTime : c ? new Date(b.availabilityStartTime.getTime() + 1e3 * (a - z)) : b.availabilityStartTime
            }

            function j(a, b, c) {
                return h.call(this, a, b, c)
            }

            function k(a, b, c) {
                return h.call(this, a, b, c, !0)
            }

            function l(a, b) {
                return (a.getTime() - b.mpd.availabilityStartTime.getTime() + 1e3 * z) / 1e3
            }

            function m(a, b) {
                var c = b.adaptation.period.start, d = b.presentationTimeOffset;
                return a + (c - d)
            }

            function n(a, b) {
                var c = b.adaptation.period.start, d = b.presentationTimeOffset;
                return a - c + d
            }

            function o(a, b) {
                var c, d, e;
                return b && (c = a.representation.adaptation.period.mpd.suggestedPresentationDelay, d = a.presentationStartTime + c, e = new Date(a.availabilityStartTime.getTime() + 1e3 * d)), e
            }

            function p(a, b) {
                var c, d, e = a.adaptation.period.start, f = e + a.adaptation.period.duration, g = {
                    start: e,
                    end: f
                }, h = a.segmentDuration || (a.segments && a.segments.length ? a.segments[a.segments.length - 1].duration : 0);
                if (!b)return g;
                if (!A && a.segmentAvailabilityRange)return a.segmentAvailabilityRange;
                c = a.adaptation.period.mpd.checkTime, d = l(new Date, a.adaptation.period), e = Math.max(d - a.adaptation.period.mpd.timeShiftBufferDepth, a.adaptation.period.start);
                var i = isNaN(c) ? d : Math.min(c, d), j = a.adaptation.period.start + a.adaptation.period.duration;
                return f = (i >= j && j > i - h ? j : i) - h, g = {start: e, end: f}
            }

            function q(a, b) {
                var c = a.adaptation.period.start;
                return b - c
            }

            function r(a, b) {
                var c = a.adaptation.period.start;
                return b + c
            }

            function s(a) {
                A || a.error || (z += a.liveEdge - (B + a.searchTime), A = !0)
            }

            function t(a) {
                A || a.error || (z = a.offset / 1e3, A = !0)
            }

            function u(a) {
                var b = a.presentationTimeOffset, c = a.adaptation.period.start;
                return c - b
            }

            function v() {
                x.off(i["default"].LIVE_EDGE_SEARCH_COMPLETED, s, this), x.off(i["default"].TIME_SYNCHRONIZATION_COMPLETED, t, this), z = 0, A = !1, B = NaN
            }

            var w = this.context, x = (0, g["default"])(w).getInstance(), y = void 0, z = void 0, A = void 0, B = void 0;
            return y = {
                initialize: a,
                isTimeSyncCompleted: b,
                setTimeSyncCompleted: c,
                getClientTimeOffset: d,
                getExpectedLiveEdge: e,
                setExpectedLiveEdge: f,
                calcAvailabilityStartTimeFromPresentationTime: j,
                calcAvailabilityEndTimeFromPresentationTime: k,
                calcPresentationTimeFromWallTime: l,
                calcPresentationTimeFromMediaTime: m,
                calcPeriodRelativeTimeFromMpdRelativeTime: q,
                calcMpdRelativeTimeFromPeriodRelativeTime: r,
                calcMediaTimeFromPresentationTime: n,
                calcSegmentAvailabilityRange: p,
                calcWallTimeForSegment: o,
                calcMSETimeOffset: u,
                reset: v
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/EventBus.js"), g = d(f), h = a("../../core/events/Events.js"), i = d(h), j = a("../../core/FactoryMaker.js"), k = d(j);
        e.__dashjs_factory_name = "TimelineConverter", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/EventBus.js": 8, "../../core/FactoryMaker.js": 9, "../../core/events/Events.js": 11}],
    22: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.period = null, this.index = -1, this.type = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    23: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.duration = NaN, this.presentationTime = NaN, this.id = NaN, this.messageData = "", this.eventStream = null, this.presentationTimeDelta = NaN
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    24: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.adaptionSet = null, this.representation = null, this.period = null, this.timescale = 1, this.value = "", this.schemeIdUri = ""
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    25: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.manifest = null, this.suggestedPresentationDelay = 0, this.availabilityStartTime = null, this.availabilityEndTime = Number.POSITIVE_INFINITY, this.timeShiftBufferDepth = Number.POSITIVE_INFINITY, this.maxSegmentDuration = Number.POSITIVE_INFINITY, this.checkTime = NaN, this.clientServerTimeShift = 0, this.isClientServerTimeSyncCompleted = !1
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    26: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.id = null, this.index = -1, this.duration = NaN, this.start = NaN, this.mpd = null
        };
        e.DEFAULT_ID = "defaultId", c["default"] = e, b.exports = c["default"]
    }, {}],
    27: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.id = null, this.index = -1, this.adaptation = null, this.segmentInfoType = null, this.initialization = null, this.segmentDuration = NaN, this.timescale = 1, this.startNumber = 1, this.indexRange = null, this.range = null, this.presentationTimeOffset = 0, this.MSETimeOffset = NaN, this.segmentAvailabilityRange = null, this.availableSegmentsNumber = 0, this.bandwidth = NaN, this.maxPlayoutRate = NaN
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    28: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.indexRange = null, this.index = null, this.mediaRange = null, this.media = null, this.duration = NaN, this.replacementTime = null, this.replacementNumber = NaN, this.mediaStartTime = NaN, this.presentationStartTime = NaN, this.availabilityStartTime = NaN, this.availabilityEndTime = NaN, this.availabilityIdx = NaN, this.wallStartTime = NaN, this.representation = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    29: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.schemeIdUri = "", this.value = ""
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    30: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                s = (0, q["default"])(h).getInstance(), t = []
            }

            function c(a, b) {
                var d = new XMLHttpRequest, e = [], f = !0, h = !0, i = null, o = 0, q = this, u = function (b, c) {
                    h = !1;
                    var f, g, i = new Date;
                    b.firstByteDate || (b.firstByteDate = b.requestStartDate), b.requestEndDate = i, f = b.firstByteDate.getTime() - b.requestStartDate.getTime(), g = b.requestEndDate.getTime() - b.firstByteDate.getTime(), j((c ? "loaded " : "failed ") + b.mediaType + ":" + b.type + ":" + b.startTime + " (" + d.status + ", " + f + "ms, " + g + "ms)"), m.addHttpRequest(a.mediaType, null, a.type, a.url, d.responseURL || null, a.range, a.requestStartDate, b.firstByteDate, b.requestEndDate, d.status, a.duration, d.getAllResponseHeaders(), c ? e : null)
                };
                t.push(d), a.requestStartDate = new Date, i = a.requestStartDate, d.open("GET", p.modifyRequestURL(a.url), !0), d.responseType = "arraybuffer", d = p.modifyRequestHeader(d), a.range && d.setRequestHeader("Range", "bytes=" + a.range), d.onprogress = function (b) {
                    var c = new Date;
                    f && (f = !1, (!b.lengthComputable || b.lengthComputable && b.total !== b.loaded) && (a.firstByteDate = c)), b.lengthComputable && (a.bytesLoaded = b.loaded, a.bytesTotal = b.total), e.push({
                        s: i,
                        d: c.getTime() - i.getTime(),
                        b: [b.loaded ? b.loaded - o : 0]
                    }), i = c, o = b.loaded, l.trigger(k["default"].LOADING_PROGRESS, {request: a})
                }, d.onload = function () {
                    d.status < 200 || d.status > 299 || (u(a, !0), l.trigger(k["default"].LOADING_COMPLETED, {
                        request: a,
                        response: d.response,
                        sender: r
                    }))
                }, d.onloadend = d.onerror = function () {
                    -1 !== t.indexOf(d) && (t.splice(t.indexOf(d), 1), h && (u(a, !1), b > 0 ? (j("Failed loading fragment: " + a.mediaType + ":" + a.type + ":" + a.startTime + ", retry in " + s.getFragmentRetryInterval() + "ms attempts: " + b), b--, setTimeout(function () {
                        c.call(q, a, b)
                    }, s.getFragmentRetryInterval())) : (j("Failed loading fragment: " + a.mediaType + ":" + a.type + ":" + a.startTime + " no retry attempts left"), n.downloadError("content", a.url, d), l.trigger(k["default"].LOADING_COMPLETED, {
                        request: a,
                        bytes: null,
                        error: new g["default"](null, "failed loading fragment", null),
                        sender: q
                    }))))
                }, d.send()
            }

            function d(a) {
                if (!a)return void l.trigger(k["default"].CHECK_FOR_EXISTENCE_COMPLETED, {request: a, exists: !1});
                var b = new XMLHttpRequest, c = !1;
                b.open("HEAD", a.url, !0), b.onload = function () {
                    b.status < 200 || b.status > 299 || (c = !0, l.trigger(k["default"].CHECK_FOR_EXISTENCE_COMPLETED, {
                        request: a,
                        exists: !0
                    }))
                }, b.onloadend = b.onerror = function () {
                    c || l.trigger(k["default"].CHECK_FOR_EXISTENCE_COMPLETED, {request: a, exists: !1})
                }, b.send()
            }

            function e(a) {
                a ? c(a, s.getFragmentRetryAttempts()) : l.trigger(k["default"].LOADING_COMPLETED, {
                    request: a,
                    bytes: null,
                    error: new g["default"](null, "request is null", null),
                    sender: this
                })
            }

            function f() {
                var a, b, c = t.length;
                for (a = 0; c > a; a++)b = t[a], t[a] = null, b && (b.abort(), b = null);
                t = []
            }

            var h = this.context, j = (0, o["default"])(h).getInstance().log, l = (0, i["default"])(h).getInstance(), m = a.metricsModel, n = a.errHandler, p = a.requestModifier, r = void 0, s = void 0, t = void 0;
            return r = {checkForExistence: d, load: e, abort: f}, b(), r
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./vo/Error.js"), g = d(f), h = a("./../core/EventBus.js"), i = d(h), j = a("./../core/events/Events.js"), k = d(j), l = a("../core/FactoryMaker.js"), m = d(l), n = a("../core/Debug.js"), o = d(n), p = a("./models/MediaPlayerModel.js"), q = d(p);
        e.__dashjs_factory_name = "FragmentLoader", c["default"] = m["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../core/Debug.js": 7,
        "../core/FactoryMaker.js": 9,
        "./../core/EventBus.js": 8,
        "./../core/events/Events.js": 11,
        "./models/MediaPlayerModel.js": 80,
        "./vo/Error.js": 135
    }],
    31: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                z = h;
                var a = (0, i["default"])(n).create({errHandler: t, metricsModel: v, requestModifier: w});
                y = (0, g["default"])(n).create({xlinkLoader: a}), r.on(q["default"].XLINK_READY, f, x)
            }

            function c(a) {
                var b, d, f, g, i, n = e(a), o = new XMLHttpRequest, u = new Date, x = !0, A = u, B = 0, C = [];
                d = function () {
                    var c, d = null, f = new Date;
                    o.status < 200 || o.status > 299 || (x = !1, z = h, o.responseURL && o.responseURL !== a && (n = e(o.responseURL), d = o.responseURL), v.addHttpRequest("stream", null, m["default"].MPD_TYPE, a, d, null, u, o.firstByteDate || null, f, o.status, null, o.getAllResponseHeaders(), C), b = s.parse(o.responseText, n, y), b ? (b.url = d || a, b.originalUrl || (b.originalUrl = b.url), b.loadedTime = f, v.addManifestUpdate("stream", b.type, u, f, b.availabilityStartTime), y.resolveManifestOnLoad(b)) : (c = "Failed loading manifest: " + a + ", parsing failed", r.trigger(q["default"].INTERNAL_MANIFEST_LOADED, {
                        manifest: null,
                        error: new k["default"](l, c, null)
                    }), p(c)))
                }, f = function () {
                    x && (x = !1, v.addHttpRequest("stream", null, m["default"].MPD_TYPE, a, o.responseURL || null, null, u, o.firstByteDate || null, new Date, o.status, null, o.getAllResponseHeaders(), null), z > 0 ? (p("Failed loading manifest: " + a + ", retry in " + j + "ms attempts: " + z), z--, setTimeout(function () {
                        c(a)
                    }, j)) : (p("Failed loading manifest: " + a + " no retry attempts left"), t.downloadError("manifest", a, o), r.trigger(q["default"].INTERNAL_MANIFEST_LOADED, {error: new k["default"]("Failed loading manifest: " + a + " no retry attempts left")})))
                }, g = function (a) {
                    var b = new Date;
                    i && (i = !1, (!a.lengthComputable || a.lengthComputable && a.total !== a.loaded) && (o.firstByteDate = b)), a.lengthComputable && (o.bytesLoaded = a.loaded, o.bytesTotal = a.total), C.push({
                        s: A,
                        d: b.getTime() - A.getTime(),
                        b: [a.loaded ? a.loaded - B : 0]
                    }), A = b, B = a.loaded
                };
                try {
                    o.onload = d, o.onloadend = f, o.onerror = f, o.onprogress = g, o.open("GET", w.modifyRequestURL(a), !0), o = w.modifyRequestHeader(o), o.send()
                } catch (D) {
                    o.onerror()
                }
            }

            function d() {
                r.off(q["default"].XLINK_READY, f, x), w = null, y.reset(), y = null
            }

            function e(a) {
                var b = "";
                return -1 !== a.indexOf("/") && (-1 !== a.indexOf("?") && (a = a.substring(0, a.indexOf("?"))), b = a.substring(0, a.lastIndexOf("/") + 1)), b
            }

            function f(a) {
                r.trigger(q["default"].INTERNAL_MANIFEST_LOADED, {manifest: a.manifest})
            }

            var h = 3, j = 500, l = 1, n = this.context, p = (0, u["default"])(n).getInstance().log, r = (0, o["default"])(n).getInstance(), s = a.parser, t = a.errHandler, v = a.metricsModel, w = a.requestModifier, x = void 0, y = void 0, z = void 0;
            return x = {load: c, reset: d}, b(), x
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./controllers/XlinkController.js"), g = d(f), h = a("./XlinkLoader.js"), i = d(h), j = a("./vo/Error.js"), k = d(j), l = a("./vo/metrics/HTTPRequest.js"), m = d(l), n = a("../core/EventBus.js"), o = d(n), p = a("../core/events/Events.js"), q = d(p), r = a("../core/FactoryMaker.js"), s = d(r), t = a("../core/Debug.js"), u = d(t);
        e.__dashjs_factory_name = "ManifestLoader", c["default"] = s["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../core/Debug.js": 7,
        "../core/EventBus.js": 8,
        "../core/FactoryMaker.js": 9,
        "../core/events/Events.js": 11,
        "./XlinkLoader.js": 41,
        "./controllers/XlinkController.js": 54,
        "./vo/Error.js": 135,
        "./vo/metrics/HTTPRequest.js": 150
    }],
    32: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                a && (a.manifestModel && (z = a.manifestModel), a.dashManifestModel && (A = a.dashManifestModel))
            }

            function b(a) {
                y = a, u = NaN, v = null, x = !1, w = !0, s.on(i["default"].STREAMS_COMPOSED, p, this), s.on(i["default"].PLAYBACK_STARTED, n, this), s.on(i["default"].PLAYBACK_PAUSED, o, this), s.on(i["default"].INTERNAL_MANIFEST_LOADED, l, this)
            }

            function c(a) {
                j(a)
            }

            function d() {
                return y
            }

            function e() {
                s.off(i["default"].PLAYBACK_STARTED, n, this), s.off(i["default"].PLAYBACK_PAUSED, o, this), s.off(i["default"].STREAMS_COMPOSED, p, this), s.off(i["default"].INTERNAL_MANIFEST_LOADED, l, this), w = !0, x = !1, f(), u = NaN
            }

            function f() {
                null !== v && (clearInterval(v), v = null)
            }

            function h() {
                f(), isNaN(u) || (r("Refresh manifest in " + u + " seconds."), v = setTimeout(k, Math.min(1e3 * u, Math.pow(2, 31) - 1), this))
            }

            function j(a) {
                var b, c, d = new Date;
                z.setValue(a), r("Manifest has been refreshed at " + d + "[" + d.getTime() / 1e3 + "] "), b = A.getRefreshDelay(a), c = ((new Date).getTime() - a.loadedTime.getTime()) / 1e3, u = Math.max(b - c, 0), s.trigger(i["default"].MANIFEST_UPDATED, {manifest: a}), w || h()
            }

            function k() {
                var a, b;
                w || x || (x = !0, a = z.getValue(), b = a.url, a.hasOwnProperty("Location") && (b = a.Location), y.load(b))
            }

            function l(a) {
                a.error || j(a.manifest)
            }

            function n() {
                w = !1, h()
            }

            function o() {
                w = !0, f()
            }

            function p() {
                x = !1
            }

            var q = this.context, r = (0, m["default"])(q).getInstance().log, s = (0, g["default"])(q).getInstance(), t = void 0, u = void 0, v = void 0, w = void 0, x = void 0, y = void 0, z = void 0, A = void 0;
            return t = {initialize: b, setManifest: c, getManifestLoader: d, setConfig: a, reset: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../core/EventBus.js"), g = d(f), h = a("../core/events/Events.js"), i = d(h), j = a("../core/FactoryMaker.js"), k = d(j), l = a("../core/Debug.js"), m = d(l);
        e.__dashjs_factory_name = "ManifestUpdater", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../core/Debug.js": 7, "../core/EventBus.js": 8, "../core/FactoryMaker.js": 9, "../core/events/Events.js": 11}],
    33: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                Tb = !1, Ub = !1, Vb = !0, Yb = null, Sb = null, $b = null, ga["default"].extend(ia["default"]), ac = (0, K["default"])(Lb).getInstance()
            }

            function b(a, b, c) {
                return cc = (0, u["default"])(Lb).getInstance(), bc = (0, s["default"])(Lb).getInstance(), cc.supportsMediaSource() ? void(Tb || (Tb = !0, Wb = (0, O["default"])(Lb).getInstance(), fc = (0, i["default"])(Lb).getInstance(), Xb = (0, m["default"])(Lb).getInstance(), Xb.initialize(), hc = (0, qa["default"])(Lb).getInstance(), gc = (0, sa["default"])(Lb).getInstance(), _b = (0, M["default"])(Lb).getInstance(), _b.setConfig({adapter: Ab()}), _a(), na(void 0 !== c ? c : !0), a && sb(a), b && ub(b), Ob("[dash.js " + Hb + "] MediaPlayer has been initialized"))) : void bc.capabilityError("mediasource")
            }

            function c() {
                return !!Qb && !!Rb
            }

            function d() {
                if (!Ub)throw Ib;
                (!Vb || f() && Ub) && fc.play()
            }

            function e() {
                if (!Ub)throw Ib;
                fc.pause()
            }

            function f() {
                if (!Ub)throw Ib;
                return fc.isPaused()
            }

            function h() {
                if (!Ub)throw Ib;
                return fc.isSeeking()
            }

            function j(a) {
                if (!Qb)throw Jb;
                Qb.muted = a
            }

            function l() {
                if (!Qb)throw Jb;
                return Qb.muted
            }

            function n(a) {
                if (!Qb)throw Jb;
                Qb.volume = a
            }

            function p() {
                if (!Qb)throw Jb;
                return Qb.volume
            }

            function r(a) {
                if (a) {
                    if ("video" === a || "audio" === a || "fragmentedText" === a) {
                        var b = va().getCurrentBufferLevel(wa(a));
                        return b ? b.toPrecision(3) : NaN
                    }
                    return Ob("Warning  - getBufferLength requested for invalid type"), NaN
                }
                var c = Ia("video").length > 0 ? va().getCurrentBufferLevel(wa("video")) : Number.MAX_SAFE_INTEGER, d = Ia("audio").length > 0 ? va().getCurrentBufferLevel(wa("audio")) : Number.MAX_SAFE_INTEGER, e = Ia("fragmentedText").length > 0 ? va().getCurrentBufferLevel(wa("fragmentedText")) : Number.MAX_SAFE_INTEGER;
                return Math.min(c, d, e).toPrecision(3)
            }

            function t() {
                var a = Db();
                return a ? a.manifestInfo.DVRWindowSize : 0
            }

            function v(a) {
                var b = Db();
                if (!b)return 0;
                var c = b.range.start + a;
                return c > b.range.end && (c = b.range.end), c
            }

            function x(a) {
                if (!Ub)throw Ib;
                var b = fc.getIsDynamic() ? v(a) : a;
                fc.seek(b)
            }

            function z() {
                if (!Ub)throw Ib;
                var a = Qb.currentTime;
                if (fc.getIsDynamic()) {
                    var b = Db();
                    a = null === b ? 0 : B() - (b.range.end - b.time)
                }
                return a
            }

            function B() {
                if (!Ub)throw Ib;
                var a = Qb.duration;
                if (fc.getIsDynamic()) {
                    var b, c = Db();
                    if (!c)return 0;
                    b = c.range.end - c.range.start, a = b < c.manifestInfo.DVRWindowSize ? b : c.manifestInfo.DVRWindowSize
                }
                return a
            }

            function D() {
                if (!Ub)throw Ib;
                return z() < 0 ? NaN : Eb(z())
            }

            function F() {
                if (!Ub)throw Ib;
                return Eb(B())
            }

            function H(a, b, c) {
                var d = new Date(1e3 * a), e = d.toLocaleDateString(b), f = d.toLocaleTimeString(b, {hour12: c});
                return f + " " + e
            }

            function J(a) {
                a = Math.max(a, 0);
                var b = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = Math.floor(a % 3600 % 60);
                return (0 === b ? "" : 10 > b ? "0" + b.toString() + ":" : b.toString() + ":") + (10 > c ? "0" + c.toString() : c.toString()) + ":" + (10 > d ? "0" + d.toString() : d.toString())
            }

            function L(a, b, c) {
                ka["default"].extend(a, b, c, Lb)
            }

            function N(a, b, c) {
                Mb.on(a, b, c)
            }

            function P(a, b, c) {
                Mb.off(a, b, c)
            }

            function R() {
                return Hb
            }

            function T() {
                return Nb
            }

            function V() {
                if (!Qb)throw Jb;
                return ic
            }

            function X() {
                return ic ? ic.getVideoContainer() : null
            }

            function Z(a) {
                ac.setLiveDelayFragmentCount(a)
            }

            function _(a) {
                ac.setUseSuggestedPresentationDelay(a)
            }

            function ba(a, b) {
                ac.setLastBitrateCachingInfo(a, b)
            }

            function da(a, b) {
                ac.setLastMediaSettingsCachingInfo(a, b)
            }

            function fa(a, b) {
                Wb.setMaxAllowedBitrateFor(a, b)
            }

            function ha(a) {
                return Wb.getMaxAllowedBitrateFor(a)
            }

            function ja(a, b) {
                Wb.setMaxAllowedRepresentationRatioFor(a, b)
            }

            function la(a) {
                return Wb.getMaxAllowedRepresentationRatioFor(a)
            }

            function na(a) {
                Vb = a
            }

            function pa() {
                return Vb
            }

            function ra(a) {
                ac.setScheduleWhilePaused(a)
            }

            function ta() {
                return ac.getScheduleWhilePaused()
            }

            function va() {
                return gc
            }

            function wa(a) {
                return _b.getReadOnlyMetricsFor(a)
            }

            function xa(a) {
                if (!Ub)throw Ib;
                return Wb.getQualityFor(a, dc.getActiveStreamInfo())
            }

            function ya(a, b) {
                if (!Ub)throw Ib;
                Wb.setPlaybackQuality(a, dc.getActiveStreamInfo(), b)
            }

            function za() {
                return Wb.getLimitBitrateByPortal()
            }

            function Aa(a) {
                Wb.setLimitBitrateByPortal(a)
            }

            function Ba(a) {
                if (!Ub)throw Ib;
                void 0 === jc && (jc = (0, E["default"])(Lb).getInstance());
                for (var b = Qb.textTracks, c = b.length, d = 0; c > d; d++) {
                    var e = b[d], f = a === d ? "showing" : "hidden";
                    e.mode !== f && (e.mode = f)
                }
                jc.setTextTrack()
            }

            function Ca(a) {
                if (!Ub)throw Ib;
                var b = Fb();
                return b ? b.getBitrateListFor(a) : []
            }

            function Da(a, b) {
                Wb.setInitialBitrateFor(a, b)
            }

            function Ea(a) {
                if (!Ub)throw Ib;
                return Wb.getInitialBitrateFor(a)
            }

            function Fa(a, b) {
                Wb.setInitialRepresentationRatioFor(a, b)
            }

            function Ga(a) {
                return Wb.getInitialRepresentationRatioFor(a)
            }

            function Ha(a) {
                if (!Ub)throw Ib;
                return $b.getStreamsInfo(a)
            }

            function Ia(a) {
                if (!Ub)throw Ib;
                var b = dc.getActiveStreamInfo();
                return b ? Xb.getTracksFor(a, b) : []
            }

            function Ja(a, b, c) {
                if (!Ub)throw Ib;
                return c = c || $b.getStreamsInfo(b)[0], c ? $b.getAllMediaInfoForType(b, c, a) : []
            }

            function Ka(a) {
                if (!Ub)throw Ib;
                var b = dc.getActiveStreamInfo();
                return b ? Xb.getCurrentTrackFor(a, b) : null
            }

            function La(a, b) {
                Xb.setInitialSettings(a, b)
            }

            function Ma(a) {
                return Xb.getInitialSettings(a)
            }

            function Na(a) {
                if (!Ub)throw Ib;
                Xb.setTrack(a)
            }

            function Oa(a) {
                return Xb.getSwitchMode(a)
            }

            function Pa(a, b) {
                Xb.setSwitchMode(a, b)
            }

            function Qa(a) {
                Xb.setSelectionModeForInitialTrack(a)
            }

            function Ra() {
                return Xb.getSelectionModeForInitialTrack()
            }

            function Sa() {
                return Wb.getAutoSwitchBitrateFor("video") || Wb.getAutoSwitchBitrateFor("audio")
            }

            function Ta(a) {
                Wb.setAutoSwitchBitrateFor("video", a), Wb.setAutoSwitchBitrateFor("audio", a)
            }

            function Ua(a) {
                return Wb.getAutoSwitchBitrateFor(a)
            }

            function Va(a, b) {
                Wb.setAutoSwitchBitrateFor(a, b)
            }

            function Wa(a) {
                ac.setBufferOccupancyABREnabled(a)
            }

            function Xa(a, b) {
                var c = yb(), d = this, e = function g(a) {
                    a.error ? b(null, a.error) : b(a.manifest), Mb.off(ga["default"].INTERNAL_MANIFEST_LOADED, g, d), c.reset()
                };
                Mb.on(ga["default"].INTERNAL_MANIFEST_LOADED, e, d);
                var f = (0, G["default"])(Lb).getInstance();
                f.initialize(), c.load(f.parseURI(a))
            }

            function Ya(a, b) {
                Za(a, b);
                var c = new g["default"];
                c.schemeIdUri = a, c.value = b, ac.getUTCTimingSources().push(c)
            }

            function Za(a, b) {
                var c = ac.getUTCTimingSources();
                c.forEach(function (d, e) {
                    d.schemeIdUri === a && d.value === b && c.splice(e, 1)
                })
            }

            function $a() {
                ac.setUTCTimingSources([])
            }

            function _a() {
                Ya(K["default"].DEFAULT_UTC_TIMING_SOURCE.scheme, K["default"].DEFAULT_UTC_TIMING_SOURCE.value)
            }

            function ab(a) {
                ac.setUseManifestDateHeaderTimeSource(a)
            }

            function bb(a) {
                ac.setBufferToKeep(a)
            }

            function cb(a) {
                ac.setBufferPruningInterval(a)
            }

            function db(a) {
                ac.setStableBufferTime(a)
            }

            function eb(a) {
                ac.setBufferTimeAtTopQuality(a)
            }

            function fb(a) {
                ac.setBufferTimeAtTopQualityLongForm(a)
            }

            function gb(a) {
                ac.setLongFormContentDurationThreshold(a)
            }

            function hb(a) {
                ac.setRichBufferThreshold(a)
            }

            function ib(a) {
                ac.setBandwidthSafetyFactor(a)
            }

            function jb() {
                return ac.getBandwidthSafetyFactor()
            }

            function kb(a) {
                ac.setAbandonLoadTimeout(a)
            }

            function lb(a) {
                ac.setFragmentRetryAttempts(a)
            }

            function mb(a) {
                ac.setFragmentRetryInterval(a)
            }

            function nb() {
                return Bb()
            }

            function ob(a) {
                Yb = a
            }

            function pb(a) {
                Sb = a
            }

            function qb(a) {
                var b = (0, w["default"])(Lb).getInstance();
                b.setConfig({videoModel: ic}), b.initialize(), b.displayCConTop(a)
            }

            function rb(a) {
                if (!ic)throw Jb;
                ic.setVideoContainer(a)
            }

            function sb(a) {
                if (!Tb)throw Kb;
                ic = null, Qb = a, Qb && (ic = (0, U["default"])(Lb).getInstance(), ic.initialize(), ic.setElement(Qb), Qb.preload = "auto", Bb(), Cb()), wb()
            }

            function tb(a) {
                if (!ic)throw Jb;
                ic.setTTMLRenderingDiv(a)
            }

            function ub(a) {
                if (!Tb)throw Kb;
                if ("string" == typeof a) {
                    var b = (0, G["default"])(Lb).getInstance();
                    b.initialize(), Rb = b.parseURI(a)
                } else Rb = a;
                wb()
            }

            function vb() {
                ub(null), sb(null)
            }

            function wb() {
                Ub ? (Ub = !1, $b.reset(), dc.reset(), fc.reset(), Wb.reset(), ec.reset(), Xb.reset(), dc = null, Zb = null, Yb = null, Sb = null, c() && Gb()) : c() && Gb()
            }

            function xb() {
                var a = (0, $["default"])(Lb).getInstance();
                a.initialize();
                var b = (0, S["default"])(Lb).getInstance();
                b.initialize();
                var c = (0, Y["default"])(Lb).getInstance();
                c.initialize();
                var d = (0, y["default"])(Lb).getInstance();
                d.setConfig({dashManifestModel: hc});
                var e = (0, A["default"])(Lb).getInstance();
                e.setConfig({sourceBufferController: d}), Xb.initialize(), Xb.setConfig({errHandler: bc}), ec = (0, W["default"])(Lb).getInstance(), ec.initialize(), ec.setConfig({
                    abrRulesCollection: b,
                    scheduleRulesCollection: c,
                    synchronizationRulesCollection: a
                }), dc = (0, k["default"])(Lb).getInstance(), dc.setConfig({
                    capabilities: cc,
                    manifestLoader: yb(),
                    manifestModel: (0, I["default"])(Lb).getInstance(),
                    dashManifestModel: hc,
                    protectionController: Yb,
                    adapter: $b,
                    metricsModel: _b,
                    dashMetrics: gc,
                    liveEdgeFinder: (0, q["default"])(Lb).getInstance(),
                    mediaSourceController: (0, aa["default"])(Lb).getInstance(),
                    timeSyncController: (0, Q["default"])(Lb).getInstance(),
                    virtualBuffer: e,
                    errHandler: bc,
                    timelineConverter: (0, ua["default"])(Lb).getInstance()
                }), dc.initialize(Vb, Sb), Wb.setConfig({
                    abrRulesCollection: b,
                    rulesController: ec,
                    streamController: dc
                })
            }

            function yb() {
                return (0, o["default"])(Lb).create({
                    errHandler: bc,
                    parser: zb(),
                    metricsModel: _b,
                    requestModifier: (0, C["default"])(Lb).getInstance()
                })
            }

            function zb() {
                return (0, oa["default"])(Lb).create()
            }

            function Ab() {
                return $b = (0, ma["default"])(Lb).getInstance(), $b.initialize(), $b.setConfig({dashManifestModel: hc}), $b
            }

            function Bb() {
                if (Yb)return Yb;
                var a = dashjs.Protection;
                if ("function" == typeof a) {
                    var b = a(Lb).create();
                    return ga["default"].extend(a.events), ia["default"].extend(a.events, {publicOnly: !0}), Yb = b.createProtectionSystem({
                        log: Ob,
                        videoModel: ic,
                        capabilities: cc,
                        eventBus: Mb,
                        adapter: $b
                    })
                }
                return null
            }

            function Cb() {
                if (Zb)return Zb;
                var a = dashjs.MetricsReporting;
                if ("function" == typeof a) {
                    var b = a(Lb).create();
                    return Zb = b.createMetricsReporting({
                        log: Ob,
                        eventBus: Mb,
                        mediaElement: ic.getElement(),
                        dashManifestModel: hc,
                        metricsModel: _b
                    })
                }
                return null
            }

            function Db() {
                var a = _b.getReadOnlyMetricsFor("video") || _b.getReadOnlyMetricsFor("audio");
                return gc.getCurrentDVRInfo(a)
            }

            function Eb(a) {
                var b, c, d = Db();
                return d ? (b = d.manifestInfo.availableFrom.getTime() / 1e3, c = a + (b + d.range.start)) : 0
            }

            function Fb() {
                if (!Ub)throw Ib;
                var a = dc.getActiveStreamInfo();
                return a ? dc.getStreamById(a.id) : null
            }

            function Gb() {
                if (!Ub) {
                    if (!Tb)throw Kb;
                    if (!Qb || !Rb)throw"Missing view or source.";
                    Ub = !0, Ob("Playback Initialized"), xb(), "string" == typeof Rb ? dc.load(Rb) : dc.loadWithManifest(Rb)
                }
            }

            var Hb = "2.0.0", Ib = "You must first call play() to init playback before calling this method", Jb = "You must first call attachView() to set the video element before calling this method", Kb = "MediaPlayer not initialized!", Lb = this.context, Mb = (0, ea["default"])(Lb).getInstance(), Nb = (0, ca["default"])(Lb).getInstance(), Ob = Nb.log, Pb = void 0, Qb = void 0, Rb = void 0, Sb = void 0, Tb = void 0, Ub = void 0, Vb = void 0, Wb = void 0, Xb = void 0, Yb = void 0, Zb = void 0, $b = void 0, _b = void 0, ac = void 0, bc = void 0, cc = void 0, dc = void 0, ec = void 0, fc = void 0, gc = void 0, hc = void 0, ic = void 0, jc = void 0;
            return Pb = {
                initialize: b,
                on: N,
                off: P,
                extend: L,
                attachView: sb,
                attachSource: ub,
                isReady: c,
                play: d,
                isPaused: f,
                pause: e,
                isSeeking: h,
                seek: x,
                setMute: j,
                isMuted: l,
                setVolume: n,
                getVolume: p,
                time: z,
                duration: B,
                timeAsUTC: D,
                durationAsUTC: F,
                getDVRWindowSize: t,
                getDVRSeekOffset: v,
                convertToTimeCode: J,
                formatUTC: H,
                getVersion: R,
                getDebug: T,
                getBufferLength: r,
                getVideoModel: V,
                getVideoContainer: X,
                setLiveDelayFragmentCount: Z,
                useSuggestedPresentationDelay: _,
                enableLastBitrateCaching: ba,
                enableLastMediaSettingsCaching: da,
                setMaxAllowedBitrateFor: fa,
                getMaxAllowedBitrateFor: ha,
                setMaxAllowedRepresentationRatioFor: ja,
                getMaxAllowedRepresentationRatioFor: la,
                setAutoPlay: na,
                getAutoPlay: pa,
                setScheduleWhilePaused: ra,
                getScheduleWhilePaused: ta,
                getDashMetrics: va,
                getMetricsFor: wa,
                getQualityFor: xa,
                setQualityFor: ya,
                getLimitBitrateByPortal: za,
                setLimitBitrateByPortal: Aa,
                setTextTrack: Ba,
                getBitrateInfoListFor: Ca,
                setInitialBitrateFor: Da,
                getInitialBitrateFor: Ea,
                setInitialRepresentationRatioFor: Fa,
                getInitialRepresentationRatioFor: Ga,
                getStreamsFromManifest: Ha,
                getTracksFor: Ia,
                getTracksForTypeFromManifest: Ja,
                getCurrentTrackFor: Ka,
                setInitialMediaSettingsFor: La,
                getInitialMediaSettingsFor: Ma,
                setCurrentTrack: Na,
                getTrackSwitchModeFor: Oa,
                setTrackSwitchModeFor: Pa,
                setSelectionModeForInitialTrack: Qa,
                getSelectionModeForInitialTrack: Ra,
                getAutoSwitchQuality: Sa,
                setAutoSwitchQuality: Ta,
                getAutoSwitchQualityFor: Ua,
                setAutoSwitchQualityFor: Va,
                enableBufferOccupancyABR: Wa,
                setBandwidthSafetyFactor: ib,
                getBandwidthSafetyFactor: jb,
                setAbandonLoadTimeout: kb,
                retrieveManifest: Xa,
                addUTCTimingSource: Ya,
                removeUTCTimingSource: Za,
                clearDefaultUTCTimingSources: $a,
                restoreDefaultUTCTimingSources: _a,
                setBufferToKeep: bb,
                setBufferPruningInterval: cb,
                setStableBufferTime: db,
                setBufferTimeAtTopQuality: eb,
                setFragmentLoaderRetryAttempts: lb,
                setFragmentLoaderRetryInterval: mb,
                setBufferTimeAtTopQualityLongForm: fb,
                setLongFormContentDurationThreshold: gb,
                setRichBufferThreshold: hb,
                getProtectionController: nb,
                attachProtectionController: ob,
                setProtectionData: pb,
                enableManifestDateHeaderTimeSource: ab,
                displayCaptionsOnTop: qb,
                attachVideoContainer: rb,
                attachTTMLRenderingDiv: tb,
                reset: vb
            }, a(), Pb
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../dash/vo/UTCTiming.js"), g = d(f), h = a("./controllers/PlaybackController.js"), i = d(h), j = a("./controllers/StreamController.js"), k = d(j), l = a("./controllers/MediaController.js"), m = d(l), n = a("./ManifestLoader.js"), o = d(n), p = a("./utils/LiveEdgeFinder.js"), q = d(p), r = a("./utils/ErrorHandler.js"), s = d(r), t = a("./utils/Capabilities.js"), u = d(t), v = a("./TextTracks.js"), w = d(v), x = a("./controllers/SourceBufferController.js"), y = d(x), z = a("./VirtualBuffer.js"), A = d(z), B = a("./utils/RequestModifier.js"), C = d(B), D = a("./TextSourceBuffer.js"), E = d(D), F = a("./models/URIQueryAndFragmentModel.js"), G = d(F), H = a("./models/ManifestModel.js"), I = d(H), J = a("./models/MediaPlayerModel.js"), K = d(J), L = a("./models/MetricsModel.js"), M = d(L), N = a("./controllers/AbrController.js"), O = d(N), P = a("./controllers/TimeSyncController.js"), Q = d(P), R = a("./rules/abr/ABRRulesCollection.js"), S = d(R), T = a("./models/VideoModel.js"), U = d(T), V = a("./rules/RulesController.js"), W = d(V), X = a("./rules/scheduling/ScheduleRulesCollection.js"), Y = d(X), Z = a("./rules/synchronization/SynchronizationRulesCollection.js"), $ = d(Z), _ = a("./controllers/MediaSourceController.js"), aa = d(_), ba = a("./../core/Debug.js"), ca = d(ba), da = a("./../core/EventBus.js"), ea = d(da), fa = a("./../core/events/Events.js"), ga = d(fa), ha = a("./MediaPlayerEvents.js"), ia = d(ha), ja = a("../core/FactoryMaker.js"), ka = d(ja), la = a("../dash/DashAdapter.js"), ma = d(la), na = a("../dash/DashParser.js"), oa = d(na), pa = a("../dash/models/DashManifestModel.js"), qa = d(pa), ra = a("../dash/DashMetrics.js"), sa = d(ra), ta = a("../dash/utils/TimelineConverter.js"), ua = d(ta);
        e.__dashjs_factory_name = "MediaPlayer";
        var va = ka["default"].getClassFactory(e);
        va.events = ia["default"], c["default"] = va, b.exports = c["default"]
    }, {
        "../core/FactoryMaker.js": 9,
        "../dash/DashAdapter.js": 13,
        "../dash/DashMetrics.js": 15,
        "../dash/DashParser.js": 16,
        "../dash/models/DashManifestModel.js": 19,
        "../dash/utils/TimelineConverter.js": 21,
        "../dash/vo/UTCTiming.js": 29,
        "./../core/Debug.js": 7,
        "./../core/EventBus.js": 8,
        "./../core/events/Events.js": 11,
        "./ManifestLoader.js": 31,
        "./MediaPlayerEvents.js": 34,
        "./TextSourceBuffer.js": 38,
        "./TextTracks.js": 39,
        "./VirtualBuffer.js": 40,
        "./controllers/AbrController.js": 42,
        "./controllers/MediaController.js": 46,
        "./controllers/MediaSourceController.js": 47,
        "./controllers/PlaybackController.js": 48,
        "./controllers/SourceBufferController.js": 50,
        "./controllers/StreamController.js": 51,
        "./controllers/TimeSyncController.js": 53,
        "./models/ManifestModel.js": 79,
        "./models/MediaPlayerModel.js": 80,
        "./models/MetricsModel.js": 81,
        "./models/URIQueryAndFragmentModel.js": 82,
        "./models/VideoModel.js": 83,
        "./rules/RulesController.js": 108,
        "./rules/abr/ABRRulesCollection.js": 110,
        "./rules/scheduling/ScheduleRulesCollection.js": 119,
        "./rules/synchronization/SynchronizationRulesCollection.js": 122,
        "./utils/Capabilities.js": 124,
        "./utils/ErrorHandler.js": 127,
        "./utils/LiveEdgeFinder.js": 129,
        "./utils/RequestModifier.js": 130
    }],
    34: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value"in h)return h.value;
                    var i = h.get;
                    if (void 0 === i)return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j)return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a("../core/events/EventsBase.js"), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.BUFFER_EMPTY = "bufferstalled", this.BUFFER_LOADED = "bufferloaded", this.ERROR = "error", this.LOG = "log", this.MANIFEST_LOADED = "manifestloaded", this.METRICS_CHANGED = "metricschanged", this.METRIC_CHANGED = "metricchanged", this.METRIC_ADDED = "metricadded", this.METRIC_UPDATED = "metricupdated", this.PERIOD_SWITCH_COMPLETED = "streamswitchcompleted", this.PERIOD_SWITCH_STARTED = "streamswitchstarted", this.STREAM_INITIALIZED = "streaminitialized", this.TEXT_TRACKS_ADDED = "alltexttracksadded", this.TEXT_TRACK_ADDED = "texttrackadded", this.CAN_PLAY = "canPlay", this.PLAYBACK_ENDED = "playbackEnded", this.PLAYBACK_ERROR = "playbackError", this.PLAYBACK_METADATA_LOADED = "playbackMetaDataLoaded", this.PLAYBACK_PAUSED = "playbackPaused", this.PLAYBACK_PLAYING = "playbackPlaying", this.PLAYBACK_PROGRESS = "playbackProgress", this.PLAYBACK_RATE_CHANGED = "playbackRateChanged", this.PLAYBACK_SEEKED = "playbackSeeked", this.PLAYBACK_SEEKING = "playbackSeeking", this.PLAYBACK_STARTED = "playbackStarted", this.PLAYBACK_TIME_UPDATED = "playbackTimeUpdated"
            }

            return f(b, a), b
        }(i["default"]), k = new j;
        c["default"] = k, b.exports = c["default"]
    }, {"../core/events/EventsBase.js": 12}],
    35: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b, c) {
                if (!a || "VIDEO" !== a.nodeName)return null;
                if (a._dashjs_player)return a._dashjs_player;
                var e, f = a.id || a.name || "video element";
                if (b = b || [].slice.call(a.querySelectorAll("source")).filter(function (a) {
                            return a.type == d
                        })[0], !b && a.src)b = document.createElement("source"), b.src = a.src; else if (!b && !a.src)return null;
                return c = c || {}, e = (0, h["default"])(c).create(), e.initialize(a, b.src, a.autoplay), e.getDebug().log("Converted " + f + " to dash.js player and added content: " + b.src), a._dashjs_player = e, e
            }

            function b(b, e) {
                var f = [];
                b = b || "[data-dashjs-player]", e = e || document;
                for (var g = e.querySelectorAll(b), h = 0; h < g.length; h++) {
                    var i = a(g[h], null);
                    f.push(i)
                }
                for (var j = e.querySelectorAll('source[type="' + d + '"]'), h = 0; h < j.length; h++) {
                    var k = c(j[h]), i = a(k, null);
                    f.push(i)
                }
                return f
            }

            function c(a) {
                for (var b = !0; b;) {
                    var c = a;
                    if (b = !1, "video" === c.nodeName.toLowerCase())return c;
                    a = c.parentNode, b = !0
                }
            }

            var d = "application/dash+xml";
            return {create: a, createAll: b}
        }

        function f() {
            window.removeEventListener("load", f), i.createAll()
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = a("./MediaPlayer.js"), h = d(g), i = e(), j = window && window.dashjs && window.dashjs.skipAutoCreate;
        !j && window && window.addEventListener && ("complete" === window.document.readyState ? i.createAll() : window.addEventListener("load", f)), c["default"] = i, b.exports = c["default"]
    }, {"./MediaPlayer.js": 33}],
    36: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                ga = [], ha = !1, ia = !1, ja = null, ka = {}, la = !1, ma = !1, oa = (0, g["default"])(Y).getInstance(), pa = (0, w["default"])(Y).getInstance(), ta = (0, q["default"])(Y).getInstance(), qa = (0, k["default"])(Y).getInstance(), ra = (0, o["default"])(Y).create(), ua = (0, M["default"])(Y).getInstance(), $.on(G["default"].BUFFERING_COMPLETED, S, fa), $.on(G["default"].DATA_UPDATE_COMPLETED, T, fa)
            }

            function c(a, b) {
                ja = a, na = b, na && ($.on(G["default"].KEY_ERROR, D, fa), $.on(G["default"].SERVER_CERTIFICATE_UPDATED, D, fa), $.on(G["default"].LICENSE_REQUEST_COMPLETE, D, fa), $.on(G["default"].KEY_SYSTEM_SELECTED, D, fa), $.on(G["default"].KEY_SESSION_CREATED, D, fa))
            }

            function d(a) {
                ha ? R() : ($.on(G["default"].CURRENT_TRACK_CHANGED, J, fa), O(a))
            }

            function e() {
                var a = ga.length, b = 0;
                for (b; a > b; b++)ga[b].reset();
                ga = [], ha = !1, ia = !1, x(), $.off(G["default"].CURRENT_TRACK_CHANGED, J, fa)
            }

            function f() {
                pa.pause(), ra.reset(), oa.abortSearch(), e(), pa = null, ra = null, qa = null, ta = null, aa = null, _ = null, ba = null, ca = null, Z = null, da = null, la = !1, ma = !1, ka = {}, $.off(G["default"].DATA_UPDATE_COMPLETED, T, fa), $.off(G["default"].BUFFERING_COMPLETED, S, fa), $.off(G["default"].KEY_ERROR, D, fa), $.off(G["default"].SERVER_CERTIFICATE_UPDATED, D, fa), $.off(G["default"].LICENSE_REQUEST_COMPLETE, D, fa), $.off(G["default"].KEY_SYSTEM_SELECTED, D, fa), $.off(G["default"].KEY_SESSION_CREATED, D, fa)
            }

            function h() {
                return ja.duration
            }

            function j() {
                return ja.start
            }

            function l() {
                return ja.index
            }

            function n() {
                return ja.id
            }

            function p() {
                return ja
            }

            function r(a) {
                return null !== Q(a)
            }

            function t(a) {
                var b = Q(a);
                return ta.getBitrateList(b)
            }

            function v() {
                sa && sa.start()
            }

            function x() {
                sa && sa.reset()
            }

            function z() {
                return ha
            }

            function B() {
                return ma
            }

            function D(a) {
                a.error && (da.mediaKeySessionError(a.error), Z(a.error), f())
            }

            function F(a) {
                return "text" === a.type ? a.mimeType : a.type
            }

            function H(a, b, c) {
                var d, e, f = a.type;
                if ("muxed" === f && a)return e = "Multiplexed representations are intentionally not supported, as they are not compliant with the DASH-AVC/264 guidelines", Z(e), da.manifestError(e, "multiplexedrep", _.getValue()), !1;
                if ("text" === f || "fragmentedText" === f || "embeddedText" === f)return !0;
                if (d = a.codec, Z(f + " codec: " + d), a.contentProtection && !ca.supportsEncryptedMedia())da.capabilityError("encryptedmedia"); else if (!ca.supportsCodec((0, s["default"])(Y).getInstance().getElement(), d))return e = f + "Codec (" + d + ") is not supported.", da.manifestError(e, "codec", c), Z(e), !1;
                return !0
            }

            function J(a) {
                if (a.newMediaInfo.streamInfo.id === ja.id) {
                    var b = U(a.oldMediaInfo);
                    if (b) {
                        var c = pa.getTime(), d = b.getBuffer(), e = a.newMediaInfo, f = _.getValue(), g = ga.indexOf(b), h = b.getMediaSource();
                        "fragmentedText" !== e.type ? (b.reset(!0), L(e, f, h, {
                            buffer: d,
                            replaceIdx: g,
                            currentTime: c
                        }), pa.seek(pa.getTime())) : b.updateMediaInfo(f, e)
                    }
                }
            }

            function K() {
                var a = (0, A["default"])(Y).getInstance();
                a.initialize();
                var b = (0, y["default"])(Y).create({
                    segmentBaseLoader: a,
                    timelineConverter: ea,
                    dashMetrics: (0, C["default"])(Y).getInstance(),
                    metricsModel: (0, u["default"])(Y).getInstance()
                });
                return b
            }

            function L(a, b, c, d) {
                var e = (0, i["default"])(Y).create({
                    indexHandler: K(),
                    timelineConverter: ea,
                    adapter: ba,
                    manifestModel: _
                }), f = ba.getAllMediaInfoForType(b, ja, a.type);
                if (e.initialize(F(a), ra, c, fa, sa), ta.updateTopQualityIndex(a), d ? (e.setBuffer(d.buffer), ga[d.replaceIdx] = e, e.setIndexHandlerTime(d.currentTime)) : ga.push(e), "text" === a.type || "fragmentedText" === a.type) {
                    for (var g, h = 0; h < f.length; h++)f[h].index === a.index && (g = h), e.updateMediaInfo(b, f[h]);
                    "fragmentedText" === a.type && e.updateMediaInfo(b, f[g])
                } else e.updateMediaInfo(b, a);
                return e
            }

            function N(a, b) {
                var c, d = _.getValue(), e = ba.getAllMediaInfoForType(d, ja, a), f = null;
                if (!e || 0 === e.length)return void Z("No " + a + " data.");
                for (var g = 0, h = e.length; h > g; g++)if (f = e[g], "embeddedText" === a)ua.addEmbeddedTrack(f); else {
                    if (!H(f, b, d))continue;
                    qa.isMultiTrackSupportedByType(f.type) && qa.addTrack(f, ja)
                }
                "embeddedText" !== a && 0 !== qa.getTracksFor(a, ja).length && (qa.checkInitialMediaSettings(ja), c = qa.getCurrentTrackFor(a, ja), L(c, d, b))
            }

            function O(a) {
                var b, c = _.getValue();
                if (sa = (0, m["default"])(Y).getInstance(), sa.initialize(), sa.setConfig({
                        manifestModel: _,
                        manifestUpdater: aa
                    }), b = ba.getEventsFor(c, ja), sa.addInlineEvents(b), la = !0, N("video", a), N("audio", a), N("text", a), N("fragmentedText", a), N("embeddedText", a), N("muxed", a), R(), ia = !0, la = !1, 0 === ga.length) {
                    var d = "No streams to play.";
                    da.manifestError(d, "nostreams", c), Z(d)
                } else oa.initialize(ea, ga[0]), P()
            }

            function P() {
                var a = ga.length, b = !!ka.audio || !!ka.video, c = b ? new Error(X, "Data update failed", null) : null, d = 0;
                for (d; a > d; d++)if (ga[d].isUpdating() || la)return;
                ma = !0, ha = !0, $.trigger(G["default"].STREAM_INITIALIZED, {
                    streamInfo: ja,
                    error: c
                }), ia && na && na.initialize(_.getValue(), Q("audio"), Q("video"))
            }

            function Q(a) {
                for (var b = ga.length, c = null, d = 0; b > d; d++)if (c = ga[d], c.getType() === a)return c.getMediaInfo();
                return null
            }

            function R() {
                for (var a = 0, b = ga.length; b > a; a++)ga[a].createBuffer()
            }

            function S(a) {
                if (a.streamInfo === ja) {
                    var b = V(), c = b.length, d = 0;
                    for (d; c > d; d++)if (!b[d].isBufferingCompleted())return;
                    $.trigger(G["default"].STREAM_BUFFERING_COMPLETED, {streamInfo: ja})
                }
            }

            function T(a) {
                var b = a.sender.getStreamProcessor();
                b.getStreamInfo() === ja && (ka[b.getType()] = a.error, P())
            }

            function U(a) {
                if (!a)return !1;
                var b = V();
                return b.filter(function (b) {
                    return b.getType() === a.type
                })[0]
            }

            function V() {
                var a, b, c = ga.length, d = [], e = 0;
                for (e; c > e; e++)b = ga[e], a = b.getType(), ("audio" === a || "video" === a || "fragmentedText" === a) && d.push(b);
                return d
            }

            function W(a) {
                var b, c, d, e = ga.length, f = _.getValue(), g = 0;
                for (ha = !1, ja = a, Z("Manifest updated... set new data on buffers."), sa && (c = ba.getEventsFor(f, ja), sa.addInlineEvents(c)), la = !0, ma = !1, g; e > g; g++)d = ga[g], b = ba.getMediaInfoForType(f, ja, d.getType()), ta.updateTopQualityIndex(b), d.updateMediaInfo(f, b);
                la = !1, P()
            }

            var X = 1, Y = this.context, Z = (0, I["default"])(Y).getInstance().log, $ = (0, E["default"])(Y).getInstance(), _ = a.manifestModel, aa = a.manifestUpdater, ba = a.adapter, ca = a.capabilities, da = a.errHandler, ea = a.timelineConverter, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0, ua = void 0;
            return fa = {
                initialize: c,
                activate: d,
                deactivate: e,
                getDuration: h,
                getStartTime: j,
                getStreamIndex: l,
                getId: n,
                getStreamInfo: p,
                hasMedia: r,
                getBitrateListFor: t,
                startEventController: v,
                resetEventController: x,
                isActivated: z,
                isInitialized: B,
                updateData: W,
                reset: f,
                getProcessors: V
            }, b(), fa
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./utils/LiveEdgeFinder.js"), g = d(f), h = a("./StreamProcessor.js"), i = d(h), j = a("./controllers/MediaController.js"), k = d(j), l = a("./controllers/EventController.js"), m = d(l), n = a("./controllers/FragmentController.js"), o = d(n), p = a("./controllers/AbrController.js"), q = d(p), r = a("./models/VideoModel.js"), s = d(r), t = a("./models/MetricsModel.js"), u = d(t), v = a("./controllers/PlaybackController.js"), w = d(v), x = a("../dash/DashHandler.js"), y = d(x), z = a("../dash/SegmentBaseLoader.js"), A = d(z), B = a("../dash/DashMetrics.js"), C = d(B), D = a("../core/EventBus.js"), E = d(D), F = a("../core/events/Events.js"), G = d(F), H = a("../core/Debug.js"), I = d(H), J = a("../core/FactoryMaker.js"), K = d(J), L = a("./TextSourceBuffer.js"), M = d(L);
        e.__dashjs_factory_name = "Stream", c["default"] = K["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../core/Debug.js": 7,
        "../core/EventBus.js": 8,
        "../core/FactoryMaker.js": 9,
        "../core/events/Events.js": 11,
        "../dash/DashHandler.js": 14,
        "../dash/DashMetrics.js": 15,
        "../dash/SegmentBaseLoader.js": 17,
        "./StreamProcessor.js": 37,
        "./TextSourceBuffer.js": 38,
        "./controllers/AbrController.js": 42,
        "./controllers/EventController.js": 44,
        "./controllers/FragmentController.js": 45,
        "./controllers/MediaController.js": 46,
        "./controllers/PlaybackController.js": 48,
        "./models/MetricsModel.js": 81,
        "./models/VideoModel.js": 83,
        "./utils/LiveEdgeFinder.js": 129
    }],
    37: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                ia = []
            }

            function c(a, b, c, d, e) {
                ha = a, ja = d, ka = e, pa = b, fa = ja.getStreamInfo().manifestInfo.isDynamic, la = (0, g["default"])(_).getInstance(), la.initialize(ha, this), ma = $(a), ma.initialize(ha, c, this), na = (0, s["default"])(_).create({
                    metricsModel: (0, A["default"])(_).getInstance(),
                    manifestModel: da,
                    adapter: ca,
                    dashMetrics: (0, Q["default"])(_).getInstance(),
                    dashManifestModel: (0, O["default"])(_).getInstance(),
                    timelineConverter: ba,
                    scheduleRulesCollection: (0, w["default"])(_).getInstance(),
                    rulesController: (0, u["default"])(_).getInstance(),
                    mediaPlayerModel: (0, y["default"])(_).getInstance()
                }), na.initialize(ha, this), qa = (0, C["default"])(_).create({
                    metricsModel: (0, A["default"])(_).getInstance(),
                    errHandler: (0, U["default"])(_).getInstance(),
                    requestModifier: (0, E["default"])(_).getInstance()
                }), aa.initialize(this), aa.setCurrentTime((0, k["default"])(_).getInstance().getStreamStartTime(z())), oa = (0, S["default"])(_).create(), oa.initialize(this), ra = na.getFragmentModel(), ra.setLoader(qa)
            }

            function d(a) {
                ra.reset(), aa.reset(), ma.reset(a), na.reset(), oa.reset(), ma = null, na = null, oa = null, pa = null, qa = null, ra = null, ka = null, ja = null, fa = null, ga = null, ia = [], ha = null
            }

            function e() {
                return oa.isUpdating()
            }

            function f() {
                return ha
            }

            function h() {
                return la
            }

            function j() {
                return oa
            }

            function l() {
                return qa
            }

            function n() {
                return aa
            }

            function p() {
                return pa
            }

            function r() {
                return ma.getBuffer()
            }

            function t(a) {
                ma.setBuffer(a)
            }

            function v() {
                return ma
            }

            function x() {
                return ra
            }

            function z() {
                return ja.getStreamInfo()
            }

            function B(a, b) {
                b === ga || b && ga && b.type !== ga.type || (ga = b), -1 === ia.indexOf(b) && ia.push(b), ca.updateData(a, this)
            }

            function D() {
                return ia
            }

            function F() {
                return ga
            }

            function H() {
                return ma.getMediaSource()
            }

            function J() {
                return na
            }

            function L() {
                return ka
            }

            function N() {
                na.start()
            }

            function P() {
                na.stop()
            }

            function R() {
                return ca.getIndexHandlerTime(this)
            }

            function T(a) {
                ca.setIndexHandlerTime(this, a)
            }

            function V() {
                return ca.getCurrentRepresentationInfo(da.getValue(), oa)
            }

            function W(a) {
                return ca.getRepresentationInfoForQuality(da.getValue(), oa, a)
            }

            function X() {
                return ma.getIsBufferingCompleted()
            }

            function Y() {
                return ma.getBuffer() || ma.createBuffer(ga)
            }

            function Z() {
                return fa
            }

            function $(a) {
                var b = null;
                return b = "video" === a || "audio" === a || "fragmentedText" === a ? (0, i["default"])(_).create({
                    metricsModel: (0, A["default"])(_).getInstance(),
                    manifestModel: da,
                    sourceBufferController: (0, G["default"])(_).getInstance(),
                    errHandler: (0, U["default"])(_).getInstance(),
                    mediaSourceController: (0, M["default"])(_).getInstance(),
                    streamController: (0, m["default"])(_).getInstance(),
                    mediaController: (0, o["default"])(_).getInstance(),
                    adapter: ca,
                    virtualBuffer: (0, K["default"])(_).getInstance(),
                    textSourceBuffer: (0, I["default"])(_).getInstance()
                }) : (0, q["default"])(_).create({
                    errHandler: (0, U["default"])(_).getInstance(),
                    sourceBufferController: (0, G["default"])(_).getInstance()
                })
            }

            var _ = this.context, aa = a.indexHandler, ba = a.timelineConverter, ca = a.adapter, da = a.manifestModel, ea = void 0, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0;
            return ea = {
                initialize: c,
                isUpdating: e,
                getType: f,
                getBufferController: v,
                getABRController: h,
                getFragmentLoader: l,
                getFragmentModel: x,
                getScheduleController: J,
                getEventController: L,
                getFragmentController: p,
                getRepresentationController: j,
                getIndexHandler: n,
                getIndexHandlerTime: R,
                setIndexHandlerTime: T,
                getCurrentRepresentationInfo: V,
                getRepresentationInfoForQuality: W,
                isBufferingCompleted: X,
                createBuffer: Y,
                getStreamInfo: z,
                updateMediaInfo: B,
                getMediaInfoArr: D,
                getMediaInfo: F,
                getMediaSource: H,
                getBuffer: r,
                setBuffer: t,
                start: N,
                stop: P,
                isDynamic: Z,
                reset: d
            }, b(), ea
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./controllers/AbrController.js"), g = d(f), h = a("./controllers/BufferController.js"), i = d(h), j = a("./controllers/PlaybackController.js"), k = d(j), l = a("./controllers/StreamController.js"), m = d(l), n = a("./controllers/MediaController.js"), o = d(n), p = a("./controllers/TextController.js"), q = d(p), r = a("./controllers/ScheduleController.js"), s = d(r), t = a("./rules/RulesController.js"), u = d(t), v = a("./rules/scheduling/ScheduleRulesCollection.js"), w = d(v), x = a("./models/MediaPlayerModel.js"), y = d(x), z = a("./models/MetricsModel.js"), A = d(z), B = a("./FragmentLoader.js"), C = d(B), D = a("./utils/RequestModifier.js"), E = d(D), F = a("./controllers/SourceBufferController"), G = d(F), H = a("./TextSourceBuffer.js"), I = d(H), J = a("./VirtualBuffer.js"), K = d(J), L = a("./controllers/MediaSourceController.js"), M = d(L), N = a("../dash/models/DashManifestModel.js"), O = d(N), P = a("../dash/DashMetrics.js"), Q = d(P), R = a("../dash/controllers/RepresentationController.js"), S = d(R), T = a("./utils/ErrorHandler.js"), U = d(T), V = a("../core/FactoryMaker.js"), W = d(V);
        e.__dashjs_factory_name = "StreamProcessor", c["default"] = W["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../core/FactoryMaker.js": 9,
        "../dash/DashMetrics.js": 15,
        "../dash/controllers/RepresentationController.js": 18,
        "../dash/models/DashManifestModel.js": 19,
        "./FragmentLoader.js": 30,
        "./TextSourceBuffer.js": 38,
        "./VirtualBuffer.js": 40,
        "./controllers/AbrController.js": 42,
        "./controllers/BufferController.js": 43,
        "./controllers/MediaController.js": 46,
        "./controllers/MediaSourceController.js": 47,
        "./controllers/PlaybackController.js": 48,
        "./controllers/ScheduleController.js": 49,
        "./controllers/SourceBufferController": 50,
        "./controllers/StreamController.js": 51,
        "./controllers/TextController.js": 52,
        "./models/MediaPlayerModel.js": 80,
        "./models/MetricsModel.js": 81,
        "./rules/RulesController.js": 108,
        "./rules/scheduling/ScheduleRulesCollection.js": 119,
        "./utils/ErrorHandler.js": 127,
        "./utils/RequestModifier.js": 130
    }],
    38: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, c) {
                M = !1, N = null, U = null, V = !1, W = NaN, X = [], $ = null, E || b();
                var d = c.getStreamProcessor();
                if (R = d.getMediaInfoArr(), S.setConfig({videoModel: Y}), S.initialize(), T = !K.getIsTextTrack(a), H = (0, k["default"])(C).getInstance(), Q = (0, i["default"])(C).getInstance(), Q.setConfig({boxParser: H}), T) {
                    U = d.getFragmentModel(), this.buffered = (0, m["default"])(C).create(), X = L.getTracksFor("fragmentedText", Z.getActiveStreamInfo());
                    for (var e = L.getCurrentTrackFor("fragmentedText", Z.getActiveStreamInfo()), f = 0; f < X.length; f++)if (X[f] === e) {
                        _ = f;
                        break
                    }
                }
            }

            function b() {
                aa = [], R = [], Y = (0, s["default"])(C).getInstance(), S = (0, u["default"])(C).getInstance(), S.setConfig({videoModel: Y}), S.initialize(), H = (0, k["default"])(C).getInstance(), Q = (0, i["default"])(C).getInstance(), Q.setConfig({boxParser: H}), T = !1, _ = null, ba = !1, ca = 0, fa = [], ea = [], da = null, E = !0
            }

            function c(a, b) {
                function c(a, b) {
                    var c = new g["default"], d = {subtitle: "subtitles", caption: "captions"}, e = function () {
                        var a = b.roles.length > 0 ? d[b.roles[0]] : d.caption;
                        return a = a === d.caption || a === d.subtitle ? a : d.caption
                    }, f = function () {
                        var a = !1;
                        return b.codec && b.codec.search("stpp") >= 0 && (a = !0), b.mimeType && b.mimeType.search("ttml") >= 0 && (a = !0), a
                    };
                    c.captionData = a, c.lang = b.lang, c.label = b.id, c.index = b.index, c.isTTML = f(), c.video = Y.getElement(), c.defaultTrack = A(b), c.isFragmented = T, c.isEmbedded = b.isEmbedded ? !0 : !1, c.kind = e();
                    var h = (R ? R.length : 0) + aa.length;
                    S.addTextTrack(c, h)
                }

                var e, f, h, i, j, k = b.mediaInfo, l = k.type, m = k.mimeType;
                if ("fragmentedText" === l)if (V)for (i = Q.getSamplesInfo(a), f = i.sampleList, h = 0; h < f.length; h++) {
                    $ || ($ = f[0].cts - b.start * W), f[h].cts -= $, this.buffered.add(f[h].cts / W, (f[h].cts + f[h].duration) / W);
                    var n = new DataView(a, f[h].offset, f[h].size);
                    j = w["default"].Utils.dataViewToString(n, "utf-8"), N = null !== N ? N : B(m);
                    try {
                        e = N.parse(j), S.addCaptions(_, $ / W, e)
                    } catch (p) {
                    }
                } else {
                    for (V = !0, h = 0; h < R.length; h++)c(null, R[h]);
                    W = Q.getMediaTimescaleFromMoov(a)
                } else if ("text" === l) {
                    var n = new DataView(a, 0, a.byteLength);
                    j = w["default"].Utils.dataViewToString(n, "utf-8");
                    try {
                        e = B(m).parse(j), c(e, k)
                    } catch (p) {
                        I.timedTextError(p, "parse", j)
                    }
                } else if ("video" === l)if ("InitializationSegment" === b.segmentType) {
                    if (0 === ca)for (ca = Q.getMediaTimescaleFromMoov(a), h = 0; h < aa.length; h++)c(null, aa[h])
                } else {
                    if (0 === ca)return void D("CEA-608: No timescale for embeddedTextTrack yet");
                    var q = function (a, b) {
                        function c(a, c, d) {
                            var e = null;
                            if (Y.getTTMLRenderingDiv())e = o(Y.getElement(), a, c, d); else {
                                var f = d.getDisplayText();
                                e = [{start: a, end: c, data: f, styles: {}}]
                            }
                            e && S.addCaptions(b, 0, e)
                        }

                        return c
                    };
                    i = Q.getSamplesInfo(a);
                    var r = i.sequenceNumber;
                    if (!fa[0] && !fa[1]) {
                        var s = void 0, t = void 0, u = void 0;
                        for (h = 0; h < aa.length; h++) {
                            if ("CC1" === aa[h].id ? (s = 0, u = S.getTrackIdxForId("CC1")) : "CC3" === aa[h].id && (s = 1, u = S.getTrackIdxForId("CC3")), -1 === u)return void console.log("CEA-608: data before track is ready.");
                            t = q(this, u), fa[h] = new y["default"].Cea608Parser(h, {newCue: t}, null)
                        }
                    }
                    if (ca && -1 == ea.indexOf(r)) {
                        if (null !== da && r !== da + 1)for (h = 0; h < fa.length; h++)fa[h] && fa[h].reset();
                        for (var v = d(a), x = 0; x < fa.length; x++) {
                            var z = v.fields[x], C = fa[x];
                            if (C) {
                                for (h = 0; h < z.length; h++)C.addData(z[h][0] / ca, z[h][1]);
                                v.endTime && C.cueSplitAtTime(v.endTime / ca)
                            }
                        }
                        da = r, ea.push(r)
                    }
                } else D("Warning: Non-supported text type: " + l)
            }

            function d(a) {
                var b = function (a, b, c) {
                    var d = a.length;
                    if (d > 0) {
                        if (b >= a[d - 1][0])a.push([b, c]); else for (var e = d - 1; e >= 0; e--)if (b < a[e][0]) {
                            a.splice(e, 0, [b, c]);
                            break
                        }
                    } else a.push([b, c])
                }, c = H.parse(a), d = c.getBox("moof"), e = c.getBox("tfdt"), f = c.getBoxes("trun"), g = null;
                if (0 === f.length)return null;
                g = f[0], f.length > 1 && console.log("Warning: Too many truns");
                for (var h = d.offset + g.data_offset, i = g.sample_count, j = h, k = e.baseMediaDecodeTime, l = new DataView(a), m = {
                    startTime: null,
                    endTime: null,
                    fields: [[], []]
                }, n = 0, o = 0; i > o; o++) {
                    for (var p = g.samples[o], q = k + n + p.sample_composition_time_offset, r = y["default"].findCea608Nalus(l, j, p.sample_size), s = 0; s < r.length; s++)for (var t = y["default"].extractCea608DataFromRange(l, r[s]), u = 0; 2 > u; u++)t[u].length > 0 && b(m.fields[u], q, t[u]);
                    n += p.sample_duration, j += p.sample_size
                }
                var v = k + n;
                return m.startTime = k, m.endTime = v, m
            }

            function e(a) {
                for (var b = "", c = 0; c < a.length; ++c) {
                    var d = a[c];
                    b += d.uchar
                }
                var e = b.length, f = b.replace(/^\s+/, "").length;
                return e - f
            }

            function f(a) {
                return "left: " + 3.125 * a.x + "%; top: " + 6.66 * a.y1 + "%; width: " + (100 - 3.125 * a.x) + "%; height: " + 6.66 * Math.max(a.y2 - 1 - a.y1, 1) + "%; align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;"
            }

            function h(a) {
                return "red" == a ? "rgb(255, 0, 0)" : "green" == a ? "rgb(0, 255, 0)" : "blue" == a ? "rgb(0, 0, 255)" : "cyan" == a ? "rgb(0, 255, 255)" : "magenta" == a ? "rgb(255, 0, 255)" : "yellow" == a ? "rgb(255, 255, 0)" : "white" == a ? "rgb(255, 255, 255)" : "black" == a ? "rgb(0, 0, 0)" : a
            }

            function j(a, b) {
                var c = a.videoHeight / 15;
                return b ? "font-size: " + c + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; color: " + (b.foreground ? h(b.foreground) : "rgb(255, 255, 255)") + "; font-style: " + (b.italics ? "italic" : "normal") + "; text-decoration: " + (b.underline ? "underline" : "none") + "; white-space: pre; background-color: " + (b.background ? h(b.background) : "transparent") + ";" : "font-size: " + c + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; justify-content: flex-start; text-align: left; color: rgb(255, 255, 255); font-style: normal; white-space: pre; line-height: normal; font-weight: normal; text-decoration: none; width: 100%; display: flex;"
            }

            function l(a) {
                var b = a.replace(/^\s+/g, "");
                return b
            }

            function n(a) {
                var b = a.replace(/\s+$/g, "");
                return b
            }

            function o(a, b, c, d) {
                var g = null, h = null, i = !1, k = -1, m = {
                    start: b,
                    end: c,
                    spans: []
                }, o = "style_cea608_white_black", p = {}, q = {}, r = [], s = void 0, t = void 0;
                for (s = 0; 15 > s; ++s) {
                    var u = d.rows[s], v = "", w = null;
                    if (!1 === u.isEmpty()) {
                        var x = e(u.chars);
                        null === g && (g = {
                            x: x,
                            y1: s,
                            y2: s + 1,
                            p: []
                        }), x !== k && i && (g.p.push(m), m = {
                            start: b,
                            end: c,
                            spans: []
                        }, g.y2 = s, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = {
                            x: x,
                            y1: s,
                            y2: s + 1,
                            p: []
                        });
                        for (var y = 0; y < u.chars.length; ++y) {
                            var z = u.chars[y], A = z.penState;
                            if (null === w || !A.equals(w)) {
                                v.trim().length > 0 && (m.spans.push({name: o, line: v, row: s}), v = "");
                                var B = "style_cea608_" + A.foreground + "_" + A.background;
                                A.underline && (B += "_underline"), A.italics && (B += "_italics"), q.hasOwnProperty(B) || (q[B] = JSON.parse(JSON.stringify(A))), w = A, o = B
                            }
                            v += z.uchar
                        }
                        v.trim().length > 0 && m.spans.push({name: o, line: v, row: s}), i = !0, k = x
                    } else i = !1, k = -1, g && (g.p.push(m), m = {
                        start: b,
                        end: c,
                        spans: []
                    }, g.y2 = s, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = null)
                }
                g && (g.p.push(m), g.y2 = s + 1, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = null);
                var C = [];
                for (s = 0; s < r.length; ++s) {
                    var D = r[s], E = "sub_" + F++, G = document.createElement("div");
                    G.id = "subtitle_" + E;
                    var H = f(D);
                    G.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + H;
                    var I = document.createElement("div");
                    I.className = "paragraph bodyStyle", I.style.cssText = j(a);
                    var J = document.createElement("div");
                    J.className = "cueUniWrapper", J.style.cssText = "unicode-bidi: normal; direction: ltr;";
                    for (var K = 0; K < D.p.length; ++K) {
                        var L = D.p[K], M = 0;
                        for (t = 0; t < L.spans.length; ++t) {
                            var N = L.spans[t];
                            if (N.line.length > 0) {
                                if (0 !== t && M != N.row) {
                                    var O = document.createElement("br");
                                    O.className = "lineBreak", J.appendChild(O)
                                }
                                var P = !1;
                                M === N.row && (P = !0), M = N.row;
                                var Q = q[N.name], R = document.createElement("span");
                                R.className = "spanPadding " + N.name + " customSpanColor", R.style.cssText = j(a, Q), 0 !== t && P ? t === L.spans.length - 1 ? R.textContent = n(N.line) : R.textContent = N.line : 0 === t && L.spans.length > 1 && N.row === L.spans[1].row ? R.textContent = l(N.line) : R.textContent = N.line.trim(), J.appendChild(R)
                            }
                        }
                    }
                    I.appendChild(J), G.appendChild(I);
                    var S = {bodyStyle: 90};
                    for (t in q)q.hasOwnProperty(t) && (S[t] = 90);
                    C.push({
                        type: "html",
                        start: b,
                        end: c,
                        cueHTMLElement: G,
                        cueID: E,
                        cellResolution: [32, 15],
                        isFromCEA608: !0,
                        regions: r,
                        regionID: D.name,
                        videoHeight: a.videoHeight,
                        videoWidth: a.videoWidth,
                        fontSize: S || {defaultFontSize: "100"},
                        lineHeight: {},
                        linePadding: {}
                    })
                }
                return C
            }

            function p() {
                S.deleteAllTextTracks(), M = !1, N = null, Q = null, R = null, S = null, T = !1, U = null, V = !1, W = NaN, X = [], Y = null, Z = null, E = !1, aa = null
            }

            function r(a) {
                E || b(), "CC1" === a.id || "CC3" === a.id ? aa.push(a) : D("Warning: Embedded track " + a.id + " not supported!")
            }

            function t() {
                E = !1, aa = [], fa = [null, null], ea = [], da = null
            }

            function v() {
                return M
            }

            function x(a) {
                a && (a.errHandler && (I = a.errHandler), a.adapter && (J = a.adapter), a.dashManifestModel && (K = a.dashManifestModel), a.mediaController && (L = a.mediaController), a.videoModel && (Y = a.videoModel), a.streamController && (Z = a.streamController), a.textTracks && (S = a.textTracks), a.VTTParser && (O = a.VTTParser), a.TTMLParser && (P = a.TTMLParser))
            }

            function z() {
                for (var a = Y.getElement(), b = a.textTracks, c = b.length, d = c - aa.length, e = S.getCurrentTrackIdx(), f = 0; c > f; f++) {
                    var g = b[f];
                    if (M = "showing" !== g.mode, "showing" === g.mode) {
                        if (e !== f && (S.setCurrentTrackIdx(f), S.addCaptions(f, 0, null), T && d > f)) {
                            var h = L.getCurrentTrackFor("fragmentedText", Z.getActiveStreamInfo()), i = X[f];
                            i !== h && (U.abortRequests(), S.deleteTrackCues(h), L.setTrack(i), _ = f)
                        }
                        break
                    }
                }
                M && S.setCurrentTrackIdx(-1)
            }

            function A(a) {
                var b = !1;
                return aa.length > 1 ? b = a.id && "CC1" === a.id : 1 === aa.length ? a.id && "CC" === a.id.substring(0, 2) && (b = !0) : b = a.index === R[0].index, b
            }

            function B(a) {
                var b;
                return "text/vtt" === a ? b = O : ("application/ttml+xml" === a || "application/mp4" === a) && (b = P, b.setConfig({videoModel: Y})), b
            }

            var C = this.context, D = (0, q["default"])(C).getInstance().log, E = !1, F = 0, G = void 0, H = void 0, I = void 0, J = void 0, K = void 0, L = void 0, M = void 0, N = void 0, O = void 0, P = void 0, Q = void 0, R = void 0, S = void 0, T = void 0, U = void 0, V = void 0, W = void 0, X = void 0, Y = void 0, Z = void 0, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0, ea = void 0, fa = void 0;
            return G = {
                initialize: a,
                append: c,
                abort: p,
                getAllTracksAreDisabled: v,
                setTextTrack: z,
                setConfig: x,
                addEmbeddedTrack: r,
                resetEmbedded: t
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./vo/TextTrackInfo.js"), g = d(f), h = a("../dash/utils/FragmentedTextBoxParser.js"), i = d(h), j = a("./utils/BoxParser.js"), k = d(j), l = a("./utils/CustomTimeRanges.js"), m = d(l), n = a("../core/FactoryMaker.js"), o = d(n), p = a("../core/Debug.js"), q = d(p), r = a("./models/VideoModel.js"), s = d(r), t = a("./TextTracks.js"), u = d(t), v = a("codem-isoboxer"), w = d(v), x = a("../../externals/cea608-parser.js"), y = d(x);
        e.__dashjs_factory_name = "TextSourceBuffer", c["default"] = o["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../externals/cea608-parser.js": 2,
        "../core/Debug.js": 7,
        "../core/FactoryMaker.js": 9,
        "../dash/utils/FragmentedTextBoxParser.js": 20,
        "./TextTracks.js": 39,
        "./models/VideoModel.js": 83,
        "./utils/BoxParser.js": 123,
        "./utils/CustomTimeRanges.js": 125,
        "./vo/TextTrackInfo.js": 142,
        "codem-isoboxer": 6
    }],
    39: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                B = window.VTTCue || window.TextTrackCue, E = [], F = [], G = -1, H = 0, I = 0, J = 0, K = 0, L = null, M = null, P = !1, Q = 2147483647, N = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/), void 0 !== document.fullscreenElement ? O = "fullscreenElement" : void 0 !== document.webkitIsFullScreen ? O = "webkitIsFullScreen" : document.msFullscreenElement ? O = "msFullscreenElement" : document.mozFullScreen && (O = "mozFullScreen")
            }

            function b(a) {
                var b = E[a].kind, c = void 0 !== E[a].label ? E[a].label : E[a].lang, d = E[a].lang, e = N ? document.createElement("track") : D.addTextTrack(b, c, d);
                return N && (e.kind = b, e.label = c, e.srclang = d), e
            }

            function c(a) {
                P = a, L && !document[O] && (L.style.zIndex = a ? Q : null)
            }

            function d(a, c) {
                if (E.length === c)return void z("Trying to add too many tracks.");
                if (E.push(a), void 0 === D && (D = a.video), E.length === c) {
                    E.sort(function (a, b) {
                        return a.index - b.index
                    }), L = C.getTTMLRenderingDiv();
                    for (var d = -1, e = 0; e < E.length; e++) {
                        var f = b.call(this, e);
                        F.push(f), E[e].defaultTrack && (f["default"] = !0, d = e), N && D.appendChild(f);
                        var g = D.textTracks[e];
                        g.nonAddedCues = [], L && (E[e].isTTML || E[e].isEmbedded) ? g.renderingType = "html" : g.renderingType = "default", this.addCaptions(e, 0, E[e].captionData), y.trigger(i["default"].TEXT_TRACK_ADDED)
                    }
                    o.call(this, d), d >= 0 && (D.textTracks[d].mode = "showing", this.addCaptions(d, 0, null)), y.trigger(i["default"].TEXT_TRACKS_ADDED, {
                        index: G,
                        tracks: E
                    })
                }
            }

            function e(a, b, c, d, e, f) {
                var g = a / b, h = c / d, i = 0, j = 0, k = 0, l = 0;
                g > h ? (l = b, k = l / d * c, i = (a - k) / 2, j = 0) : (k = a, l = k / c * d, i = 0, j = (b - l) / 2);
                var m = 0, n = 0, o = 0, p = 0, q = k / l;
                return q > e ? (p = l, o = l / (1 / e), m = (a - o) / 2, n = 0) : (o = k, p = k / e, m = 0, n = (b - p) / 2), f ? {
                    x: m + .1 * o,
                    y: n + .1 * p,
                    w: .8 * o,
                    h: .8 * p
                } : {x: m, y: n, w: o, h: p}
            }

            function f() {
                var a = this.getCurrentTextTrack();
                if (a && "html" === a.renderingType) {
                    if (!a.activeCues || 0 === a.activeCues.length)return;
                    var b = D.clientWidth, c = D.clientHeight, d = 1;
                    a.cellResolution && (d = a.cellResolution[0] / a.cellResolution[1]);
                    var f = !1;
                    a.isFromCEA608 && (d = 3.5 / 3, f = !0);
                    var g = e.call(this, D.clientWidth, D.clientHeight, D.videoWidth, D.videoHeight, d, f);
                    if (b = g.w, c = g.h, b != J || c != K) {
                        H = g.x, I = g.y, J = b, K = c, L.style.left = H + "px", L.style.top = I + "px", L.style.width = J + "px", L.style.height = K + "px";
                        for (var h = 0; h < a.activeCues.length; ++h) {
                            var i = a.activeCues[h];
                            i.scaleCue(i)
                        }
                        O && document[O] || P ? L.style.zIndex = Q : L.style.zIndex = null
                    }
                }
            }

            function h(a) {
                var b, c, d, e = J, f = K, g = [e / a.cellResolution[0], f / a.cellResolution[1]];
                if (a.linePadding)for (b in a.linePadding)if (a.linePadding.hasOwnProperty(b)) {
                    var h = a.linePadding[b];
                    c = (h * g[0]).toString();
                    for (var i = document.getElementsByClassName("spanPadding"), j = 0; j < i.length; j++)i[j].style.cssText = i[j].style.cssText.replace(/(padding-left\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c), i[j].style.cssText = i[j].style.cssText.replace(/(padding-right\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
                }
                if (a.fontSize)for (b in a.fontSize)if (a.fontSize.hasOwnProperty(b)) {
                    var k = a.fontSize[b] / 100;
                    c = (k * g[1]).toString(), d = "defaultFontSize" !== b ? document.getElementsByClassName(b) : document.getElementsByClassName("paragraph");
                    for (var l = 0; l < d.length; l++)d[l].style.cssText = d[l].style.cssText.replace(/(font-size\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
                }
                if (a.lineHeight)for (b in a.lineHeight)if (a.lineHeight.hasOwnProperty(b)) {
                    var m = a.lineHeight[b] / 100;
                    c = (m * g[1]).toString(), d = document.getElementsByClassName(b);
                    for (var n = 0; n < d.length; n++)d[n].style.cssText = d[n].style.cssText.replace(/(line-height\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
                }
            }

            function j(a, b, c) {
                var d = a >= 0 ? D.textTracks[a] : null, e = this;
                if (d) {
                    if ("showing" !== d.mode)return void(c && c.length > 0 && (d.nonAddedCues = d.nonAddedCues.concat(c)));
                    if (c || (c = d.nonAddedCues, d.nonAddedCues = []), c && 0 !== c.length)for (var g in c) {
                        var i, j = c[g];
                        d.cellResolution = j.cellResolution, d.isFromCEA608 = j.isFromCEA608, M || "html" != j.type || (M = setInterval(f.bind(this), 500)), "image" == j.type ? (i = new B(j.start - b, j.end - b, ""), i.image = j.data, i.id = j.id, i.size = 0, i.type = "image", i.onenter = function () {
                            var a = new Image;
                            a.id = "ttmlImage_" + this.id, a.src = this.image, a.className = "cue-image", L ? L.appendChild(a) : D.parentNode.appendChild(a)
                        }, i.onexit = function () {
                            var a, b, c;
                            for (a = L ? L : D.parentNode, c = a.childNodes, b = 0; b < c.length; b++)c[b].id == "ttmlImage_" + this.id && a.removeChild(c[b])
                        }) : "html" === j.type ? (i = new B(j.start - b, j.end - b, ""), i.cueHTMLElement = j.cueHTMLElement, i.regions = j.regions, i.regionID = j.regionID, i.cueID = j.cueID, i.videoWidth = j.videoWidth, i.videoHeight = j.videoHeight, i.cellResolution = j.cellResolution, i.fontSize = j.fontSize, i.lineHeight = j.lineHeight, i.linePadding = j.linePadding, i.scaleCue = h.bind(e), L.style.left = H + "px", L.style.top = I + "px", L.style.width = J + "px", L.style.height = K + "px", i.onenter = function () {
                            "showing" == d.mode && (L.appendChild(this.cueHTMLElement), h.call(e, this))
                        }, i.onexit = function () {
                            for (var a = L.childNodes, b = 0; b < a.length; ++b)a[b].id == "subtitle_" + this.cueID && L.removeChild(a[b])
                        }) : (i = new B(j.start - b, j.end - b, j.data), j.styles && (void 0 !== j.styles.align && i.hasOwnProperty("align") && (i.align = j.styles.align), void 0 !== j.styles.line && i.hasOwnProperty("line") && (i.line = j.styles.line), void 0 !== j.styles.position && i.hasOwnProperty("position") && (i.position = j.styles.position), void 0 !== j.styles.size && i.hasOwnProperty("size") && (i.size = j.styles.size))), d.addCue(i)
                    }
                }
            }

            function k() {
                return G >= 0 ? D.textTracks[G] : null
            }

            function l() {
                return G
            }

            function n(a) {
                for (var b = -1, c = 0; c < D.textTracks.length; c++)if (D.textTracks[c].label === a) {
                    b = c;
                    break
                }
                return b
            }

            function o(a) {
                if (G = a, v.call(this), a >= 0) {
                    var b = D.textTracks[a];
                    "html" === b.renderingType ? t.call(this) : u.call(this)
                } else u.call(this)
            }

            function p(a) {
                return D.textTracks[a]
            }

            function q(a) {
                if (a.cues) {
                    for (var b = a.cues, c = b.length - 1, d = c; d >= 0; d--)a.removeCue(b[d]);
                    a.mode = "disabled"
                }
            }

            function r() {
                for (var a = F.length, b = 0; a > b; b++)if (N)D.removeChild(F[b]); else {
                    var c = p.call(this, b);
                    c.nonAddedCues = [], q.call(this, c)
                }
                F = [], E = [], M && (clearInterval(M), M = null), v.call(this)
            }

            function s(a) {
                D.removeChild(F[a]), F.splice(a, 1)
            }

            function t() {
                if (N) {
                    var a = document.getElementById("native-cue-style");
                    if (!a) {
                        a = document.createElement("style"), a.id = "native-cue-style", document.head.appendChild(a);
                        var b = a.sheet;
                        D.id ? b.insertRule("#" + D.id + "::cue {background: transparent}", 0) : 0 !== D.classList.length ? b.insertRule("." + D.className + "::cue {background: transparent}", 0) : b.insertRule("video::cue {background: transparent}", 0)
                    }
                }
            }

            function u() {
                if (N) {
                    var a = document.getElementById("native-cue-style");
                    a && document.head.removeChild(a)
                }
            }

            function v() {
                if (L)for (; L.firstChild;)L.removeChild(L.firstChild)
            }

            function w(a) {
                a && a.videoModel && (C = a.videoModel)
            }

            var x = this.context, y = (0, g["default"])(x).getInstance(), z = (0, m["default"])(x).getInstance().log, A = void 0, B = void 0, C = void 0, D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0, K = void 0, L = void 0, M = void 0, N = void 0, O = void 0, P = void 0, Q = void 0;
            return A = {
                initialize: a,
                displayCConTop: c,
                addTextTrack: d,
                addCaptions: j,
                getTextTrack: p,
                getCurrentTextTrack: k,
                getCurrentTrackIdx: l,
                setCurrentTrackIdx: o,
                getTrackIdxForId: n,
                deleteTrackCues: q,
                deleteAllTextTracks: r,
                deleteTextTrack: s,
                setConfig: w
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../core/EventBus.js"), g = d(f), h = a("../core/events/Events.js"), i = d(h), j = a("../core/FactoryMaker.js"), k = d(j), l = a("../core/Debug.js"), m = d(l);
        e.__dashjs_factory_name = "TextTracks", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../core/Debug.js": 7, "../core/EventBus.js": 8, "../core/FactoryMaker.js": 9, "../core/events/Events.js": 11}],
    40: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                v = {}
            }

            function b(a) {
                var b = a.streamId, c = a.mediaInfo.type, d = a.segmentType, e = a.start, f = a.end;
                v[b] = v[b] || r(), v[b][c][d].push(a), n(v[b][c][d], "index"), isNaN(e) || isNaN(f) || (v[b][c].calculatedBufferedRanges.add(e, f), t.trigger(o["default"].CHUNK_APPENDED, {
                    chunk: a,
                    sender: this
                }))
            }

            function c(a, b) {
                if (a && b) {
                    var c, d, f = a.streamId, g = a.mediaInfo.type, h = v[f][g].actualBufferedRanges, i = e({
                        streamId: f,
                        mediaType: g,
                        appended: !0,
                        start: a.start
                    })[0];
                    if (i ? (d = v[f][g].appended.indexOf(i), v[f][g].appended[d] = a) : v[f][g].appended.push(a), n(v[f][g].appended, "start"), c = w.getRangeDifference(h, b), !c)return void(i ? a.bufferedRange = i.bufferedRange : a.bufferedRange = {
                        start: a.start,
                        end: a.end
                    });
                    a.bufferedRange = c, h.add(c.start, c.end), i && (a.bufferedRange.start = Math.min(i.bufferedRange.start, c.start), a.bufferedRange.end = Math.max(i.bufferedRange.end, c.end))
                }
            }

            function d(a, b) {
                if (a) {
                    var c, d, f = a.streamId, g = a.mediaType, h = e({streamId: f, mediaType: g, appended: !0}), j = [];
                    if (v[f][g].actualBufferedRanges = (0, i["default"])(s).create(), !b || 0 === b.length)return void(v[f][g].appended = []);
                    for (var k = 0, l = b.length; l > k; k++)c = b.start(k), d = b.end(k), v[f][g].actualBufferedRanges.add(c, d), j = j.concat(q(h, {
                        start: c,
                        end: d
                    }, !0));
                    v[f][g].appended = j
                }
            }

            function e(a) {
                var b, c = p(a), d = a.segmentType, e = a.appended, f = a.removeOrigin, h = a.limit || Number.POSITIVE_INFINITY, i = (0, g["default"])(s).getInstance(), j = 0, k = [];
                return c ? (delete a.streamId, delete a.mediaType, delete a.segmentType, delete a.removeOrigin, delete a.limit, delete a.appended, b = e ? c.appended : d ? c[d] : [], k = b.filter(function (b, d, e) {
                    if (j >= h)return !1;
                    for (var g in a) {
                        if ("mediaInfo" === g)return i.isTracksEqual(b[g], a[g]);
                        if (a.hasOwnProperty(g) && b[g] != a[g])return !1
                    }
                    return f && (c.calculatedBufferedRanges.remove(b.start, b.end), e.splice(d, 1)), j++, !0
                }), a.forRange && (k = q(k, a.forRange, !1)), k) : k
            }

            function f(a) {
                return a.removeOrigin = !0, e(a)
            }

            function h(a) {
                var b = a.type, c = 0;
                for (var d in v)v.hasOwnProperty(d) && (c += w.getTotalBufferedTime({buffered: v[d][b].calculatedBufferedRanges}));
                return c
            }

            function j(a) {
                a && a.sourceBufferController && (w = a.sourceBufferController)
            }

            function l() {
                v = {}
            }

            function n(a, b) {
                var c = function (a, c) {
                    return a[b] < c[b] ? -1 : a[b] > c[b] ? 1 : 0
                };
                a.sort(c)
            }

            function p(a) {
                var b = a.streamId, c = a.mediaType;
                return v[b] ? v[b][c] : null
            }

            function q(a, b, c) {
                var d, e, f, g, h = b.start, i = b.end, j = [];
                return a.forEach(function (a) {
                    d = a.bufferedRange.start, e = a.bufferedRange.end, f = d >= h && i > d, g = e > h && i >= e, (f || g) && (j.push(a), c && (a.bufferedRange.start = f ? d : h, a.bufferedRange.end = g ? e : i))
                }), j
            }

            function r() {
                var a = {};
                return a.audio = {
                    calculatedBufferedRanges: (0, i["default"])(s).create(),
                    actualBufferedRanges: (0, i["default"])(s).create(),
                    appended: []
                }, a.audio[k["default"].MEDIA_SEGMENT_TYPE] = [], a.audio[k["default"].INIT_SEGMENT_TYPE] = [], a.video = {
                    calculatedBufferedRanges: (0, i["default"])(s).create(),
                    actualBufferedRanges: (0, i["default"])(s).create(),
                    appended: []
                }, a.video[k["default"].MEDIA_SEGMENT_TYPE] = [], a.video[k["default"].INIT_SEGMENT_TYPE] = [], a.fragmentedText = {
                    calculatedBufferedRanges: (0, i["default"])(s).create(),
                    actualBufferedRanges: (0, i["default"])(s).create(),
                    appended: []
                }, a.fragmentedText[k["default"].MEDIA_SEGMENT_TYPE] = [], a.fragmentedText[k["default"].INIT_SEGMENT_TYPE] = [], a
            }

            var s = this.context, t = (0, m["default"])(s).getInstance(), u = void 0, v = void 0, w = void 0;
            return u = {
                append: b,
                extract: f,
                getChunks: e,
                storeAppendedChunk: c,
                updateBufferedRanges: d,
                getTotalBufferLevel: h,
                setConfig: j,
                reset: l
            }, a(), u
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./controllers/MediaController.js"), g = d(f), h = a("./utils/CustomTimeRanges.js"), i = d(h), j = a("./vo/metrics/HTTPRequest.js"), k = d(j), l = a("../core/EventBus.js"), m = d(l), n = a("../core/events/Events.js"), o = d(n), p = a("../core/FactoryMaker.js"), q = d(p);
        e.__dashjs_factory_name = "VirtualBuffer", c["default"] = q["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../core/EventBus.js": 8,
        "../core/FactoryMaker.js": 9,
        "../core/events/Events.js": 11,
        "./controllers/MediaController.js": 46,
        "./utils/CustomTimeRanges.js": 125,
        "./vo/metrics/HTTPRequest.js": 150
    }],
    41: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a, b, e) {
                a === f ? (b.resolvedContent = null, b.resolved = !0, n.trigger(m["default"].XLINK_ELEMENT_LOADED, {
                    element: b,
                    resolveObject: e
                })) : c(a, b, e, d)
            }

            function c(a, b, d, f) {
                var h, j, k, o, s = new XMLHttpRequest, t = !0, u = !0, v = new Date, w = [], x = v, y = 0;
                j = function () {
                    s.status < 200 || s.status > 299 || (t = !1, q.addHttpRequest("stream", null, i["default"].XLINK_EXPANSION_TYPE, a, s.responseURL || null, null, v, s.firstByteDate || null, new Date, s.status, null, s.getAllResponseHeaders(), w), o = s.responseText, b.resolved = !0, o ? (b.resolvedContent = o, n.trigger(m["default"].XLINK_ELEMENT_LOADED, {
                        element: b,
                        resolveObject: d
                    })) : (b.resolvedContent = null, n.trigger(m["default"].XLINK_ELEMENT_LOADED, {
                        element: b,
                        resolveObject: d,
                        error: new g["default"](null, "Failed loading Xlink element: " + a, null)
                    })))
                }, h = function () {
                    t && (t = !1, q.addHttpRequest("stream", null, i["default"].XLINK_EXPANSION_TYPE, a, s.responseURL || null, null, v, s.firstByteDate || null, new Date, s.status, null, s.getAllResponseHeaders(), null), f > 0 ? (l("Failed loading xLink content: " + a + ", retry in " + e + "ms attempts: " + f), f--, setTimeout(function () {
                        c(a, b, d, f)
                    }, e)) : (l("Failed loading Xlink content: " + a + " no retry attempts left"), p.downloadError("xlink", a, s), b.resolved = !0, b.resolvedContent = null, n.trigger(m["default"].XLINK_ELEMENT_LOADED, {
                        element: b,
                        resolveObject: d,
                        error: new g["default"]("Failed loading xlink Element: " + a + " no retry attempts left")
                    })))
                }, k = function (a) {
                    var b = new Date;
                    u && (u = !1, (!a.lengthComputable || a.lengthComputable && a.total !== a.loaded) && (s.firstByteDate = b)), a.lengthComputable && (s.bytesLoaded = a.loaded, s.bytesTotal = a.total), w.push({
                        s: x,
                        d: b.getTime() - x.getTime(),
                        b: [a.loaded ? a.loaded - y : 0]
                    }), x = b, y = a.loaded
                };
                try {
                    s.onload = j, s.onloadend = h, s.onerror = h, s.onprogress = k, s.open("GET", r.modifyRequestURL(a), !0), s.send()
                } catch (z) {
                    l("Xlink loading Error"), s.onerror()
                }
            }

            var d = 1, e = 500, f = "urn:mpeg:dash:resolve-to-zero:2013", h = void 0, j = this.context, l = (0, o["default"])(j).getInstance().log, n = (0, k["default"])(j).getInstance(), p = a.errHandler, q = a.metricsModel, r = a.requestModifier;
            return h = {load: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./vo/Error.js"), g = d(f), h = a("./vo/metrics/HTTPRequest.js"), i = d(h), j = a("../core/EventBus.js"), k = d(j), l = a("../core/events/Events.js"), m = d(l), n = a("../core/Debug.js"), o = d(n), p = a("../core/FactoryMaker.js"), q = d(p);
        e.__dashjs_factory_name = "XlinkLoader", c["default"] = q["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../core/Debug.js": 7,
        "../core/EventBus.js": 8,
        "../core/FactoryMaker.js": 9,
        "../core/events/Events.js": 11,
        "./vo/Error.js": 135,
        "./vo/metrics/HTTPRequest.js": 150
    }],
    42: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                da = {
                    video: !0,
                    audio: !0
                }, ea = {}, fa = {}, ga = {}, ha = {}, ia = {}, ja = {}, la = {}, ka = {}, na = !1, sa = (0, k["default"])(Z).getInstance(), ra = (0, o["default"])(Z).getInstance(), oa = (0, y["default"])(Z).getInstance(), pa = (0, A["default"])(Z).getInstance(), qa = (0, C["default"])(Z).getInstance()
            }

            function b(a, b) {
                ka[a] = b, la[a] = la[a] || {}, la[a].state = E, $.on(u["default"].LOADING_PROGRESS, Y, this)
            }

            function c(a) {
                a && (a.abrRulesCollection && (aa = a.abrRulesCollection), a.rulesController && (ba = a.rulesController), a.streamController && (ca = a.streamController))
            }

            function d(a, b) {
                var c;
                return ea[b] = ea[b] || {}, ea[b].hasOwnProperty(a) || (ea[b][a] = 0), c = V(ea[b][a], a), c = W(c, a, ea[b][a]), c = X(c, a)
            }

            function e(a) {
                var b = sa.getSavedBitrateSettings(a);
                if (!ha.hasOwnProperty(a))if (ia.hasOwnProperty(a)) {
                    var c = oa.getValue(), d = pa.getAdaptationForType(c, 0, a).Representation;
                    Array.isArray(d) ? ha[a] = d[Math.round(d.length * ia[a]) - 1].bandwidth : ha[a] = 0
                } else isNaN(b) ? ha[a] = "video" === a ? F : G : ha[a] = b;
                return ha[a]
            }

            function f(a, b) {
                ha[a] = b
            }

            function h(a) {
                return ia.hasOwnProperty(a) ? ia[a] : null
            }

            function j(a, b) {
                ia[a] = b
            }

            function l(a) {
                return ha.hasOwnProperty("max") && ha.max.hasOwnProperty(a) ? ha.max[a] : NaN
            }

            function n(a, b) {
                ha.max = ha.max || {}, ha.max[a] = b
            }

            function p(a) {
                return ia.hasOwnProperty("max") && ia.max.hasOwnProperty(a) ? ia.max[a] : 1
            }

            function r(a, b) {
                ia.max = ia.max || {}, ia.max[a] = b
            }

            function t(a) {
                return da[a]
            }

            function v(a, b) {
                da[a] = b
            }

            function w() {
                return na
            }

            function x(a) {
                na = a
            }

            function z(a, b) {
                var c, e, f, h, i = a.getType(), j = a.getStreamInfo(), k = j.id, l = function (f) {
                    var g = d(i, k);
                    c = f.value, h = f.confidence, 0 > c && (c = 0), c > g && (c = g), e = Q(i, j), c === e || la[i].state === D && c > e || (c !== e && (R(i, k, c), T(i, k, h), $.trigger(u["default"].QUALITY_CHANGED, {
                        mediaType: i,
                        streamInfo: a.getStreamInfo(),
                        oldQuality: e,
                        newQuality: c
                    })), void 0 !== b && b())
                };
                c = Q(i, j), h = S(i, k), t(i) ? (f = aa.getRules(m["default"].QUALITY_SWITCH_RULES), ba.applyRules(f, a, l, c, function (a, b) {
                    return a = a === g["default"].NO_CHANGE ? 0 : a, Math.max(a, b)
                })) : void 0 !== b && b()
            }

            function B(a, b, c) {
                var e = b.id, f = Q(a, b), g = null !== c && !isNaN(c) && c % 1 === 0;
                if (!g)throw"argument is not an integer";
                c !== f && c >= 0 && c <= d(a, e) && (R(a, e, c), $.trigger(u["default"].QUALITY_CHANGED, {
                    mediaType: a,
                    streamInfo: b,
                    oldQuality: f,
                    newQuality: c
                }))
            }

            function H(a, b) {
                la[a].state = b
            }

            function I(a) {
                return la[a].state
            }

            function J(a, b) {
                for (var c, d = K(a), e = d.length, f = 0; e > f; f++)if (c = d[f], 1e3 * b <= c.bitrate)return Math.max(f - 1, 0);
                return e - 1
            }

            function K(a) {
                if (!a || !a.bitrateList)return null;
                for (var b, c = a.bitrateList, d = a.type, e = [], f = 0, g = c.length; g > f; f++)b = new i["default"], b.mediaType = d, b.qualityIndex = f, b.bitrate = c[f], e.push(b);
                return e
            }

            function L(a, b) {
                ja[a] = b
            }

            function M(a) {
                return ja[a]
            }

            function N(a) {
                var b = a.type, c = a.streamInfo.id, d = a.representationCount - 1;
                return U(b, c, d), d
            }

            function O(a) {
                var b, c = a.id, e = Q("audio", a), f = Q("video", a);
                return b = e === d("audio", c) && f === d("video", c)
            }

            function P() {
                $.off(u["default"].LOADING_PROGRESS, Y, this), clearTimeout(ma), ma = null, a()
            }

            function Q(a, b) {
                var c, d = b.id;
                return fa[d] = fa[d] || {}, fa[d].hasOwnProperty(a) || (fa[d][a] = 0), c = fa[d][a]
            }

            function R(a, b, c) {
                fa[b] = fa[b] || {}, fa[b][a] = c
            }

            function S(a, b) {
                var c;
                return ga[b] = ga[b] || {}, ga[b].hasOwnProperty(a) || (ga[b][a] = 0), c = ga[b][a]
            }

            function T(a, b, c) {
                ga[b] = ga[b] || {}, ga[b][a] = c
            }

            function U(a, b, c) {
                ea[b] = ea[b] || {}, ea[b][a] = c
            }

            function V(a, b) {
                var c = l(b);
                if (isNaN(c) || !ka[b])return a;
                var d = J(ka[b].getMediaInfo(), c);
                return Math.min(a, d)
            }

            function W(a, b, c) {
                var d = p(b);
                return isNaN(d) || d >= 1 || 0 > d ? a : Math.min(a, Math.round(c * d))
            }

            function X(a, b) {
                if ("video" !== b || !na || !ka[b])return a;
                var c = qa.getElement(), d = c.clientWidth, e = c.clientHeight, f = oa.getValue(), g = pa.getAdaptationForType(f, 0, b).Representation, h = a;
                if (d > 0 && e > 0) {
                    for (; h > 0 && g[h] && d < g[h].width && d - g[h - 1].width < g[h].width - d;)h -= 1;
                    g.length - 2 >= h && g[h].width === g[h + 1].width && (h = Math.min(a, h + 1))
                }
                return h
            }

            function Y(a) {
                var b = a.request.mediaType;
                if (t(b)) {
                    var c = aa.getRules(m["default"].ABANDON_FRAGMENT_RULES), d = ka[b].getScheduleController(), e = d.getFragmentModel(), f = function (a) {
                        function c(a) {
                            ma = setTimeout(function () {
                                H(a, E)
                            }, ra.getAbandonLoadTimeout())
                        }

                        if (a.confidence === g["default"].STRONG) {
                            var f = e.getRequests({state: q["default"].FRAGMENT_MODEL_LOADING}), h = a.value, i = Q(b, ca.getActiveStreamInfo());
                            i > h && (e.abortRequests(), H(b, D), B(b, ca.getActiveStreamInfo(), h), d.replaceCanceledRequests(f), c(b))
                        }
                    };
                    ba.applyRules(c, ka[b], f, a, function (a, b) {
                        return b
                    })
                }
            }

            var Z = this.context, $ = (0, s["default"])(Z).getInstance(), _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0, ea = void 0, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0;
            return _ = {
                isPlayingAtTopQuality: O,
                updateTopQualityIndex: N,
                getAverageThroughput: M,
                getBitrateList: K,
                getQualityForBitrate: J,
                getMaxAllowedBitrateFor: l,
                setMaxAllowedBitrateFor: n,
                getMaxAllowedRepresentationRatioFor: p,
                setMaxAllowedRepresentationRatioFor: r,
                getInitialBitrateFor: e,
                setInitialBitrateFor: f,
                getInitialRepresentationRatioFor: h,
                setInitialRepresentationRatioFor: j,
                setAutoSwitchBitrateFor: v,
                getAutoSwitchBitrateFor: t,
                setLimitBitrateByPortal: x,
                getLimitBitrateByPortal: w,
                getConfidenceFor: S,
                getQualityFor: Q,
                getAbandonmentStateFor: I,
                setAbandonmentStateFor: H,
                setPlaybackQuality: B,
                getPlaybackQuality: z,
                setAverageThroughput: L,
                getTopQualityIndexFor: d,
                initialize: b,
                setConfig: c,
                reset: P
            }, a(), _
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../rules/SwitchRequest"), g = d(f), h = a("../vo/BitrateInfo.js"), i = d(h), j = a("../utils/DOMStorage.js"), k = d(j), l = a("../rules/abr/ABRRulesCollection.js"), m = d(l), n = a("../models/MediaPlayerModel.js"), o = d(n), p = a("../models/FragmentModel.js"), q = d(p), r = a("../../core/EventBus.js"), s = d(r), t = a("../../core/events/Events.js"), u = d(t), v = a("../../core/FactoryMaker.js"), w = d(v), x = a("../models/ManifestModel.js"), y = d(x), z = a("../../dash/models/DashManifestModel.js"), A = d(z), B = a("../models/VideoModel.js"), C = d(B), D = "abandonload", E = "allowload", F = 1e3, G = 100;
        e.__dashjs_factory_name = "AbrController";
        var H = w["default"].getSingletonFactory(e);
        H.ABANDON_LOAD = D, c["default"] = H, b.exports = c["default"]
    }, {
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../../dash/models/DashManifestModel.js": 19,
        "../models/FragmentModel.js": 78,
        "../models/ManifestModel.js": 79,
        "../models/MediaPlayerModel.js": 80,
        "../models/VideoModel.js": 83,
        "../rules/SwitchRequest": 109,
        "../rules/abr/ABRRulesCollection.js": 110,
        "../utils/DOMStorage.js": 126,
        "../vo/BitrateInfo.js": 133
    }],
    43: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                ya = -1, za = -1, Aa = !1, Ba = 0, Ca = 0, Da = Number.POSITIVE_INFINITY, Fa = -1, Ga = -1, Ia = null, Ka = G, Ma = 0, Na = !1, Oa = !1, Pa = !1, Qa = !1
            }

            function c(a, b, c) {
                Ha = a, fa(b), Sa = c, Wa = (0, i["default"])(ka).getInstance(), Ra = (0, q["default"])(ka).getInstance(), Ta = (0, o["default"])(ka).getInstance(), Ua = Sa.getFragmentController(), Va = Sa.getScheduleController(), ya = Ta.getQualityFor(Ha, Sa.getStreamInfo()), ma.on(y["default"].DATA_UPDATE_COMPLETED, S, this), ma.on(y["default"].INIT_FRAGMENT_LOADED, f, this), ma.on(y["default"].MEDIA_FRAGMENT_LOADED, h, this), ma.on(y["default"].QUALITY_CHANGED, r, this), ma.on(y["default"].STREAM_COMPLETED, T, this), ma.on(y["default"].PLAYBACK_PROGRESS, v, this), ma.on(y["default"].PLAYBACK_TIME_UPDATED, v, this), ma.on(y["default"].PLAYBACK_RATE_CHANGED, X, this), ma.on(y["default"].PLAYBACK_SEEKING, t, this), ma.on(y["default"].WALLCLOCK_TIME_UPDATED, W, this), ma.on(y["default"].CURRENT_TRACK_CHANGED, V, this), ma.on(y["default"].SOURCEBUFFER_APPEND_COMPLETED, p, this), ma.on(y["default"].SOURCEBUFFER_REMOVE_COMPLETED, O, this), ma.on(y["default"].CHUNK_APPENDED, U, this)
            }

            function d(a) {
                if (!a || !Ea || !Sa)return null;
                var b = null;
                try {
                    b = pa.createSourceBuffer(Ea, a), b && b.hasOwnProperty("initialize") && b.initialize(Ha, this)
                } catch (c) {
                    qa.mediaSourceError("Error creating " + Ha + " source buffer.")
                }
                return aa(b), P(Sa.getRepresentationInfoForQuality(ya).MSETimeOffset), j(), b
            }

            function e() {
                var a = Sa.getStreamInfo().id, b = sa.getActiveStreamInfo().id;
                return a === b
            }

            function f(a) {
                var b;
                a.fragmentModel === Sa.getFragmentModel() && (la("Initialization finished loading"), b = a.chunk, va.append(b), l(Q(), ya))
            }

            function h(a) {
                if (a.fragmentModel === Sa.getFragmentModel()) {
                    var b, c = a.chunk, d = c.bytes, e = c.quality, f = c.index, h = Sa.getFragmentModel().getRequests({
                        state: g["default"].FRAGMENT_MODEL_EXECUTED,
                        quality: e,
                        index: f
                    })[0], i = Sa.getRepresentationInfoForQuality(e), k = oa.getValue(), l = ua.getEventsFor(k, i.mediaInfo, Sa), m = ua.getEventsFor(k, i, Sa);
                    (l.length > 0 || m.length > 0) && (b = I(d, h, l, m), Sa.getEventController().addInbandEvents(b)), c.bytes = J(d), va.append(c), j()
                }
            }

            function j() {
                if (Ia && !Oa && K()) {
                    var a, b = Q();
                    if (Na)a = Na; else {
                        if (a = va.extract({
                                streamId: b,
                                mediaType: Ha,
                                segmentType: k["default"].MEDIA_SEGMENT_TYPE,
                                limit: 1
                            })[0], !a)return;
                        Na = a
                    }
                    a.quality === za ? (Na = !1, n(a)) : l(b, Na.quality)
                }
            }

            function l(a, b) {
                var c = {
                    streamId: a,
                    mediaType: Ha,
                    segmentType: k["default"].INIT_SEGMENT_TYPE,
                    quality: b
                }, d = va.getChunks(c)[0];
                if (d) {
                    if (!Ia)return;
                    n(d)
                } else ma.trigger(y["default"].INIT_REQUESTED, {sender: xa, requiredQuality: b})
            }

            function n(a) {
                Oa = !0, La = a, pa.append(Ia, a), "video" === a.mediaInfo.type && a.mediaInfo.embeddedCaptions && wa.append(a.bytes, a)
            }

            function p(a) {
                if (Ia === a.buffer) {
                    v(), Aa && Sa.getStreamInfo().isLast && ra.signalEndOfStream(Ea);
                    var b;
                    if (a.error)return a.error.code === m["default"].QUOTA_EXCEEDED_ERROR_CODE && (va.append(La), Da = .8 * pa.getTotalBufferedTime(Ia), ma.trigger(y["default"].QUOTA_EXCEEDED, {
                        sender: xa,
                        criticalBufferLevel: Da
                    }), N(M())), void(Oa = !1);
                    if (K() || (ma.trigger(y["default"].QUOTA_EXCEEDED, {
                            sender: xa,
                            criticalBufferLevel: Da
                        }), N(M())), b = pa.getAllRanges(Ia), b && b.length > 0) {
                        var c, d;
                        for (c = 0, d = b.length; d > c; c++)la("Buffered Range: " + b.start(c) + " - " + b.end(c))
                    }
                    Oa = !1, isNaN(La.index) ? (za = La.quality, Sa.isDynamic() || j()) : (va.storeAppendedChunk(La, Ia), R(), Fa = Math.max(La.index, Fa), B()), ma.trigger(y["default"].BYTES_APPENDED, {
                        sender: xa,
                        quality: La.quality,
                        startTime: La.start,
                        index: La.index,
                        bufferedRanges: b
                    })
                }
            }

            function r(a) {
                var b = a.newQuality;
                ya !== b && Ha === a.mediaType && Sa.getStreamInfo().id === a.streamInfo.id && (P(Sa.getRepresentationInfoForQuality(b).MSETimeOffset), ya = b)
            }

            function t() {
                Oa = !1, v()
            }

            function v() {
                x(), z()
            }

            function x() {
                var a = Ra.getTime();
                Ba = pa.getBufferLength(Ia, a), ma.trigger(y["default"].BUFFER_LEVEL_UPDATED, {
                    sender: xa,
                    bufferLevel: Ba
                }), C()
            }

            function z() {
                e() && (na.addBufferState(Ha, Ka, Ca), na.addBufferLevel(Ha, new Date, 1e3 * Ba))
            }

            function B() {
                var a = Fa === Ga - 1;
                a && !Aa && (Aa = !0, ma.trigger(y["default"].BUFFERING_COMPLETED, {
                    sender: xa,
                    streamInfo: Sa.getStreamInfo()
                }))
            }

            function C() {
                D(H > Ba && !Aa ? G : F)
            }

            function D(a) {
                Ka === a || "fragmentedText" === Ha && wa.getAllTracksAreDisabled() || (Ka = a, z(), ma.trigger(y["default"].BUFFER_LEVEL_STATE_CHANGED, {
                    sender: xa,
                    state: a,
                    mediaType: Ha,
                    streamInfo: Sa.getStreamInfo()
                }), la(a === F ? "Got enough buffer to start." : "Waiting for more buffer before starting playback."))
            }

            function I(a, b, c, d) {
                var e, f, g, h, i = Math.max(isNaN(b.startTime) ? 0 : b.startTime, 0), j = [], k = [];
                Qa = !1, h = c.concat(d);
                for (var l = 0; l < h.length; l++)j[h[l].schemeIdUri] = h[l];
                g = (0, A["default"])(ka).getInstance().parse(a), e = g.getBoxes("emsg");
                for (var m = 0, n = e.length; n > m; m++)f = ua.getEvent(e[m], j, i), f && k.push(f);
                return k
            }

            function J(a) {
                if (!Qa)return a;
                for (var b, c, d = a.length, e = Math.pow(256, 2), f = Math.pow(256, 3), g = new Uint8Array(a.length), h = 0, i = 0; d > h;) {
                    if (b = String.fromCharCode(a[h + 4], a[h + 5], a[h + 6], a[h + 7]), c = a[h] * f + a[h + 1] * e + 256 * a[h + 2] + 1 * a[h + 3], "emsg" != b)for (var j = h; h + c > j; j++)g[i] = a[j], i++;
                    h += c
                }
                return g.subarray(0, i)
            }

            function K() {
                var a = pa.getTotalBufferedTime(Ia);
                return Da > a
            }

            function L() {
                if ("fragmentedText" !== Ha) {
                    la("try to prune buffer");
                    var a = Ia.buffered.length ? Ia.buffered.start(0) : 0, b = Ra.getTime(), c = b - a - Wa.getBufferToKeep();
                    c > 0 && (la("pruning buffer: " + c + " seconds."), Pa = !0, pa.remove(Ia, 0, Math.round(a + c), Ea))
                }
            }

            function M() {
                var a, b, c, d, e;
                return Ia ? (a = Ra.getTime(), e = Sa.getFragmentModel().getRequests({
                    state: g["default"].FRAGMENT_MODEL_EXECUTED,
                    time: a
                })[0], c = e && !isNaN(e.startTime) ? e.startTime : Math.floor(a), d = pa.getBufferRange(Ia, a), null === d && Ia.buffered.length > 0 && (c = Ia.buffered.end(Ia.buffered.length - 1)), b = Ia.buffered.start(0), {
                    start: b,
                    end: c
                }) : null
            }

            function N(a) {
                if (a && Ia) {
                    var b = a.start, c = a.end;
                    pa.remove(Ia, b, c, Ea)
                }
            }

            function O(a) {
                Ia === a.buffer && (Pa && (Pa = !1), va.updateBufferedRanges({
                    streamId: Q(),
                    mediaType: Ha
                }, pa.getAllRanges(Ia)), x(), ma.trigger(y["default"].BUFFER_CLEARED, {
                    sender: xa,
                    from: a.from,
                    to: a.to,
                    hasEnoughSpaceToAppend: K()
                }), K() || setTimeout(N(M()), 1e3 * Ja))
            }

            function P(a) {
                Ia && Ia.timestampOffset !== a && !isNaN(a) && (Ia.timestampOffset = a)
            }

            function Q() {
                return Sa.getStreamInfo().id
            }

            function R() {
                var a, b, c, d = va.getChunks({
                    streamId: Q(),
                    mediaType: Ha,
                    segmentType: k["default"].MEDIA_SEGMENT_TYPE,
                    appended: !0
                }), e = (0, u["default"])(ka), f = e.create(), g = e.create(), h = Ra.getTime(), i = 2 * Sa.getCurrentRepresentationInfo().fragmentDuration;
                if (d.forEach(function (a) {
                        b = ta.isCurrentTrack(a.mediaInfo) ? g : f, b.add(a.bufferedRange.start, a.bufferedRange.end)
                    }), 0 !== f.length && 0 !== g.length && (a = pa.getBufferLength({buffered: g}, h), !(i > a)))for (var j = 0, l = f.length; l > j; j++)c = {
                    start: f.start(j),
                    end: f.end(j)
                }, (ta.getSwitchMode(Ha) === s["default"].TRACK_SWITCH_MODE_ALWAYS_REPLACE || c.start > h) && N(c)
            }

            function S(a) {
                if (a.sender.getStreamProcessor() === Sa && !a.error) {
                    var b;
                    P(a.currentRepresentation.MSETimeOffset), b = Sa.getStreamInfo().manifestInfo.minBufferTime, Ja !== b && da(b)
                }
            }

            function T(a) {
                a.fragmentModel === Sa.getFragmentModel() && (Ga = a.request.index, B())
            }

            function U(a) {
                a.sender === va && z()
            }

            function V(a) {
                if (Ia && a.newMediaInfo.type === Ha && a.newMediaInfo.streamInfo.id === Sa.getStreamInfo().id) {
                    var b = a.newMediaInfo, c = b.type, d = a.switchMode, e = Ra.getTime(), f = {start: 0, end: e};
                    if (Ha === c)switch (d) {
                        case s["default"].TRACK_SWITCH_MODE_ALWAYS_REPLACE:
                            N(f);
                            break;
                        case s["default"].TRACK_SWITCH_MODE_NEVER_REPLACE:
                            break;
                        default:
                            la("track switch mode is not supported: " + d)
                    }
                }
            }

            function W() {
                var a;
                Ma++, a = Ma * (Wa.getWallclockTimeUpdateInterval() / 1e3), a >= Wa.getBufferPruningInterval() && !Oa && (Ma = 0, L())
            }

            function X() {
                C()
            }

            function Y() {
                return Ha
            }

            function Z() {
                return Sa
            }

            function $(a) {
                Sa = a
            }

            function _() {
                return Ia
            }

            function aa(a) {
                Ia = a
            }

            function ba() {
                return Ba
            }

            function ca() {
                return Ja
            }

            function da(a) {
                Ja = a
            }

            function ea() {
                return Da
            }

            function fa(a) {
                Ea = a
            }

            function ga() {
                return Ea
            }

            function ha() {
                return Aa
            }

            function ia() {
                return Oa
            }

            function ja(a) {
                ma.off(y["default"].DATA_UPDATE_COMPLETED, S, this), ma.off(y["default"].QUALITY_CHANGED, r, this), ma.off(y["default"].INIT_FRAGMENT_LOADED, f, this), ma.off(y["default"].MEDIA_FRAGMENT_LOADED, h, this), ma.off(y["default"].STREAM_COMPLETED, T, this), ma.off(y["default"].CURRENT_TRACK_CHANGED, V, this), ma.off(y["default"].PLAYBACK_PROGRESS, v, this), ma.off(y["default"].PLAYBACK_TIME_UPDATED, v, this), ma.off(y["default"].PLAYBACK_RATE_CHANGED, X, this), ma.off(y["default"].PLAYBACK_SEEKING, t, this), ma.off(y["default"].WALLCLOCK_TIME_UPDATED, W, this), ma.off(y["default"].SOURCEBUFFER_APPEND_COMPLETED, p, this), ma.off(y["default"].SOURCEBUFFER_REMOVE_COMPLETED, O, this), ma.off(y["default"].CHUNK_APPENDED, U, this), Da = Number.POSITIVE_INFINITY, Ka = G, Ja = null, za = -1, Ga = -1, Fa = -1, ya = 0, La = null, Na = !1, Aa = !1, Oa = !1, Pa = !1, Ra = null, Sa = null, Ta = null, Ua = null, Va = null, a || (pa.abort(Ea, Ia), pa.removeSourceBuffer(Ea, Ia)), Ia = null
            }

            var ka = this.context, la = (0, E["default"])(ka).getInstance().log, ma = (0, w["default"])(ka).getInstance(), na = a.metricsModel, oa = a.manifestModel, pa = a.sourceBufferController, qa = a.errHandler, ra = a.mediaSourceController, sa = a.streamController, ta = a.mediaController, ua = a.adapter, va = a.virtualBuffer, wa = a.textSourceBuffer, xa = void 0, ya = void 0, za = void 0, Aa = void 0, Ba = void 0, Ca = void 0, Da = void 0, Ea = void 0, Fa = void 0, Ga = void 0, Ha = void 0, Ia = void 0, Ja = void 0, Ka = void 0, La = void 0, Ma = void 0, Na = void 0, Oa = void 0, Pa = void 0, Qa = void 0, Ra = void 0, Sa = void 0, Ta = void 0, Ua = void 0, Va = void 0, Wa = void 0;
            return xa = {
                initialize: c,
                createBuffer: d,
                getType: Y,
                getStreamProcessor: Z,
                setStreamProcessor: $,
                getBuffer: _,
                setBuffer: aa,
                getBufferLevel: ba,
                getMinBufferTime: ca,
                setMinBufferTime: da,
                getCriticalBufferLevel: ea,
                setMediaSource: fa,
                getMediaSource: ga,
                getIsBufferingCompleted: ha,
                getIsAppendingInProgress: ia,
                reset: ja
            }, b(), xa
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../models/FragmentModel.js"), g = d(f), h = a("../models/MediaPlayerModel.js"), i = d(h), j = a("../vo/metrics/HTTPRequest.js"), k = d(j), l = a("./SourceBufferController.js"), m = d(l), n = a("./AbrController.js"), o = d(n), p = a("./PlaybackController.js"), q = d(p), r = a("./MediaController.js"), s = d(r), t = a("../utils/CustomTimeRanges.js"), u = d(t), v = a("../../core/EventBus.js"), w = d(v), x = a("../../core/events/Events.js"), y = d(x), z = a("../utils/BoxParser.js"), A = d(z), B = a("../../core/FactoryMaker.js"), C = d(B), D = a("../../core/Debug.js"), E = d(D), F = "bufferLoaded", G = "bufferStalled", H = .5;
        e.__dashjs_factory_name = "BufferController";
        var I = C["default"].getClassFactory(e);
        I.BUFFER_LOADED = F, I.BUFFER_EMPTY = G, c["default"] = I, b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../models/FragmentModel.js": 78,
        "../models/MediaPlayerModel.js": 80,
        "../utils/BoxParser.js": 123,
        "../utils/CustomTimeRanges.js": 125,
        "../vo/metrics/HTTPRequest.js": 150,
        "./AbrController.js": 42,
        "./MediaController.js": 46,
        "./PlaybackController.js": 48,
        "./SourceBufferController.js": 50
    }],
    44: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                D = !1, u = {}, v = {}, w = {}, x = null, y = 100, z = y / 1e3, C = (0, g["default"])(q).getInstance()
            }

            function b() {
                null !== x && D && (clearInterval(x), x = null, D = !1)
            }

            function c() {
                r("Start Event Controller"), D || isNaN(y) || (D = !0, x = setInterval(h, y))
            }

            function d(a) {
                if (u = {}, a)for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    u[c.id] = c, r("Add inline event with id " + c.id)
                }
                r("Added " + a.length + " inline events")
            }

            function e(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    c.id in v ? r("Repeated event with id " + c.id) : (v[c.id] = c, r("Add inband event with id " + c.id));
                }
            }

            function f() {
                if (w)for (var a = C.getTime(), b = Object.keys(w), c = 0; c < b.length; c++) {
                    var d = b[c], e = w[d];
                    null !== e && (e.duration + e.presentationTime) / e.eventStream.timescale < a && (r("Remove Event " + d + " at time " + a), e = null, delete w[d])
                }
            }

            function h() {
                j(v), j(u), f()
            }

            function i() {
                var a = A.getValue(), b = a.url;
                a.hasOwnProperty("Location") && (b = a.Location), r("Refresh manifest @ " + b), B.getManifestLoader().load(b)
            }

            function j(a) {
                var b, c = C.getTime();
                if (a)for (var d = Object.keys(a), e = 0; e < d.length; e++) {
                    var f = d[e], g = a[f];
                    void 0 !== g && (b = g.presentationTime / g.eventStream.timescale, (0 === b || c >= b && b + z > c) && (r("Start Event " + f + " at " + c), g.duration > 0 && (w[f] = g), g.eventStream.schemeIdUri == o && g.eventStream.value == p ? i() : s.trigger(g.eventStream.schemeIdUri, {event: g}), delete a[f]))
                }
            }

            function l(a) {
                a && (a.manifestModel && (A = a.manifestModel), a.manifestUpdater && (B = a.manifestUpdater))
            }

            function n() {
                b(), u = null, v = null, w = null, C = null
            }

            var o = "urn:mpeg:dash:event:2012", p = 1, q = this.context, r = (0, k["default"])(q).getInstance().log, s = (0, m["default"])(q).getInstance(), t = void 0, u = void 0, v = void 0, w = void 0, x = void 0, y = void 0, z = void 0, A = void 0, B = void 0, C = void 0, D = void 0;
            return t = {
                initialize: a,
                addInlineEvents: d,
                addInbandEvents: e,
                clear: b,
                start: c,
                setConfig: l,
                reset: n
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../controllers/PlaybackController.js"), g = d(f), h = a("../../core/FactoryMaker.js"), i = d(h), j = a("../../core/Debug.js"), k = d(j), l = a("../../core/EventBus.js"), m = d(l);
        e.__dashjs_factory_name = "EventController", c["default"] = i["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../controllers/PlaybackController.js": 48
    }],
    45: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                t = [], r.on(q["default"].FRAGMENT_LOADING_COMPLETED, l, s)
            }

            function b(a) {
                var b = null;
                return null !== a && void 0 !== a && a.byteLength > 0 && (b = new Uint8Array(a)), b
            }

            function c(a) {
                if (!a)return null;
                var b = h(a);
                return b || (b = (0, k["default"])(n).create({metricsModel: (0, m["default"])(n).getInstance()}), b.setScheduleController(a), t.push(b)), b
            }

            function d(a) {
                var b = t.indexOf(a);
                b > -1 && t.splice(b, 1)
            }

            function e(a) {
                return a && a.type && a.type === g["default"].INIT_SEGMENT_TYPE
            }

            function f() {
                r.off(q["default"].FRAGMENT_LOADING_COMPLETED, l, this), t = []
            }

            function h(a) {
                for (var b = t.length, c = 0; b > c; c++)if (t[c].getScheduleController() == a)return t[c];
                return null
            }

            function j(a, b, c) {
                var d = new i["default"];
                return d.streamId = c, d.mediaInfo = b.mediaInfo, d.segmentType = b.type, d.start = b.startTime, d.duration = b.duration, d.end = d.start + d.duration, d.bytes = a, d.index = b.index, d.quality = b.quality, d
            }

            function l(a) {
                var b = a.sender.getScheduleController();
                if (h(b)) {
                    var c = a.request, d = a.response, f = e(c), g = b.getStreamProcessor().getStreamInfo().id, i = void 0;
                    if (!d)return void p("No " + c.mediaType + " bytes to push.");
                    i = j(d, c, g), r.trigger(f ? q["default"].INIT_FRAGMENT_LOADED : q["default"].MEDIA_FRAGMENT_LOADED, {
                        chunk: i,
                        fragmentModel: a.sender
                    })
                }
            }

            var n = this.context, p = (0, u["default"])(n).getInstance().log, r = (0, o["default"])(n).getInstance(), s = void 0, t = void 0;
            return s = {process: b, getModel: c, detachModel: d, isInitializationRequest: e, reset: f}, a(), s
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/metrics/HTTPRequest.js"), g = d(f), h = a("../vo/DataChunk.js"), i = d(h), j = a("../models/FragmentModel.js"), k = d(j), l = a("../models/MetricsModel.js"), m = d(l), n = a("../../core/EventBus.js"), o = d(n), p = a("../../core/events/Events.js"), q = d(p), r = a("../../core/FactoryMaker.js"), s = d(r), t = a("../../core/Debug.js"), u = d(t);
        e.__dashjs_factory_name = "FragmentController", c["default"] = s["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../models/FragmentModel.js": 78,
        "../models/MetricsModel.js": 81,
        "../vo/DataChunk.js": 134,
        "../vo/metrics/HTTPRequest.js": 150
    }],
    46: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                P = {}, G(), F()
            }

            function b(a) {
                ["audio", "video", "text", "fragmentedText"].forEach(function (b) {
                    var c = l(b), e = d(b, a), f = [];
                    c || (c = N.getSavedMediaSettings(b), k(b, c)), e && 0 !== e.length && (c && e.forEach(function (a) {
                        E(c, a) || f.push(a)
                    }), j(0 === f.length ? H(e) : f.length > 1 ? H(f) : f[0]))
                })
            }

            function c(a) {
                var b = a ? a.type : null, c = a ? a.streamInfo.id : null, d = l(b);
                return a && y(b) ? (P[c] = P[c] || I(), P[c][b].list.indexOf(a) >= 0 ? !1 : (P[c][b].list.push(a), d && E(d, a) && !f(b, a.streamInfo) && j(a), !0)) : !1
            }

            function d(a, b) {
                if (!a || !b)return [];
                var c = b.id;
                return P[c] && P[c][a] ? P[c][a].list : []
            }

            function f(a, b) {
                return a && b ? P[b.id][a].current : null
            }

            function h(a) {
                var b = a.type, c = a.streamInfo.id;
                return P[c] && P[c][b] && z(P[c][b].current, a)
            }

            function j(a) {
                if (a) {
                    var b = a.type, c = a.streamInfo, d = c.id, e = f(b, c);
                    if (P[d] && P[d][b] && (!e || !z(a, e))) {
                        P[d][b].current = a, e && L.trigger(g["default"].CURRENT_TRACK_CHANGED, {
                            oldMediaInfo: e,
                            newMediaInfo: a,
                            switchMode: S[b]
                        });
                        var h = D(a);
                        h && P[d][b].storeLastSettings && (h.roles && (h.role = h.roles[0], delete h.roles), h.accessibility && (h.accessibility = h.accessibility[0]), h.audioChannelConfiguration && (h.audioChannelConfiguration = h.audioChannelConfiguration[0]), C(b, h))
                    }
                }
            }

            function k(a, b) {
                a && b && (Q[a] = b)
            }

            function l(a) {
                return a ? Q[a] : null
            }

            function n(a, b) {
                var c = !!e[b];
                return c ? void(S[a] = b) : void K("track switch mode is not supported: " + b)
            }

            function p(a) {
                return S[a]
            }

            function w(a) {
                var b = !!e.trackSelectionModes[a];
                return b ? void(R = a) : void K("track selection mode is not supported: " + a)
            }

            function x() {
                return R || v
            }

            function y(a) {
                return "audio" === a || "video" === a || "text" === a || "fragmentedText" === a
            }

            function z(a, b) {
                var c = a.id === b.id, d = a.viewpoint === b.viewpoint, e = a.lang === b.lang, f = a.roles.toString() == b.roles.toString(), g = a.accessibility.toString() == b.accessibility.toString(), h = a.audioChannelConfiguration.toString() == b.audioChannelConfiguration.toString();
                return c && d && e && f && g && h
            }

            function A(a) {
                a && a.errHandler && (T = a.errHandler)
            }

            function B() {
                a(), M.resetEmbedded()
            }

            function C(a, b) {
                !N.isSupported(q["default"].STORAGE_TYPE_LOCAL) || "video" !== a && "audio" !== a || localStorage.setItem(q["default"]["LOCAL_STORAGE_" + a.toUpperCase() + "_SETTINGS_KEY"], JSON.stringify({
                    settings: b,
                    timestamp: (new Date).getTime()
                }))
            }

            function D(a) {
                var b = {
                    lang: a.lang,
                    viewpoint: a.viewpoint,
                    roles: a.roles,
                    accessibility: a.accessibility,
                    audioChannelConfiguration: a.audioChannelConfiguration
                }, c = b.lang || b.viewpoint || b.role && b.role.length > 0 || b.accessibility && b.accessibility.length > 0 || b.audioChannelConfiguration && b.audioChannelConfiguration.length > 0;
                return c ? b : null
            }

            function E(a, b) {
                var c = !a.lang || a.lang === b.lang, d = !a.viewpoint || a.viewpoint === b.viewpoint, e = !a.role || !!b.roles.filter(function (b) {
                        return b === a.role
                    })[0], f = !a.accessibility || !!b.accessibility.filter(function (b) {
                        return b === a.accessibility
                    })[0], g = !a.audioChannelConfiguration || !!b.audioChannelConfiguration.filter(function (b) {
                        return b === a.audioChannelConfiguration
                    })[0];
                return c && d && e && f && g
            }

            function F() {
                S = {audio: s, video: r}
            }

            function G() {
                Q = {audio: null, video: null}
            }

            function H(a) {
                var b = x(), c = [], d = function (a) {
                    var b, c = 0, d = [];
                    return a.forEach(function (a) {
                        b = Math.max.apply(Math, a.bitrateList), b > c ? (c = b, d = [a]) : b === c && d.push(a)
                    }), d
                }, e = function (a) {
                    var b, c = 0, d = [];
                    return a.forEach(function (a) {
                        b = a.representationCount, b > c ? (c = b, d = [a]) : b === c && d.push(a)
                    }), d
                };
                switch (b) {
                    case t:
                        c = d(a), c.length > 1 && (c = e(c));
                        break;
                    case u:
                        c = e(a), c.length > 1 && (c = d(a));
                        break;
                    default:
                        K("track selection mode is not supported: " + b)
                }
                return c[0]
            }

            function I() {
                return {
                    audio: {list: [], storeLastSettings: !0, current: null},
                    video: {list: [], storeLastSettings: !0, current: null},
                    text: {list: [], storeLastSettings: !0, current: null},
                    fragmentedText: {list: [], storeLastSettings: !0, current: null}
                }
            }

            var J = this.context, K = (0, m["default"])(J).getInstance().log, L = (0, i["default"])(J).getInstance(), M = (0, o["default"])(J).getInstance(), N = (0, q["default"])(J).getInstance(), O = void 0, P = void 0, Q = void 0, R = void 0, S = void 0, T = void 0;
            return O = {
                initialize: a,
                checkInitialMediaSettings: b,
                addTrack: c,
                getTracksFor: d,
                getCurrentTrackFor: f,
                isCurrentTrack: h,
                setTrack: j,
                setInitialSettings: k,
                getInitialSettings: l,
                setSwitchMode: n,
                getSwitchMode: p,
                setSelectionModeForInitialTrack: w,
                getSelectionModeForInitialTrack: x,
                isMultiTrackSupportedByType: y,
                isTracksEqual: z,
                setConfig: A,
                reset: B
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/events/Events.js"), g = d(f), h = a("../../core/EventBus.js"), i = d(h), j = a("../../core/FactoryMaker.js"), k = d(j), l = a("../../core/Debug.js"), m = d(l), n = a("../TextSourceBuffer.js"), o = d(n), p = a("../utils/DOMStorage.js"), q = d(p), r = "neverReplace", s = "alwaysReplace", t = "highestBitrate", u = "widestRange", v = t;
        e.__dashjs_factory_name = "MediaController";
        var w = k["default"].getSingletonFactory(e);
        w.TRACK_SWITCH_MODE_NEVER_REPLACE = r, w.TRACK_SWITCH_MODE_ALWAYS_REPLACE = s, w.TRACK_SELECTION_MODE_HIGHEST_BITRATE = t, w.TRACK_SELECTION_MODE_WIDEST_RANGE = u, w.DEFAULT_INIT_TRACK_SELECTION_MODE = v, c["default"] = w, b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../TextSourceBuffer.js": 38,
        "../utils/DOMStorage.js": 126
    }],
    47: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                var a = "WebKitMediaSource"in window, b = "MediaSource"in window;
                return b ? new MediaSource : a ? new WebKitMediaSource : null
            }

            function b(a, b) {
                var c = window.URL.createObjectURL(a);
                return b.setSource(c), c
            }

            function c(a) {
                a.setSource("")
            }

            function d(a, b) {
                return a.duration != b && (a.duration = b), a.duration
            }

            function e(a) {
                var b = a.sourceBuffers, c = b.length, d = 0;
                if ("open" === a.readyState) {
                    for (d; c > d; d++) {
                        if (b[d].updating)return;
                        if (0 === b[d].buffered.length)return
                    }
                    a.endOfStream()
                }
            }

            var f = void 0;
            return f = {
                createMediaSource: a,
                attachMediaSource: b,
                detachMediaSource: c,
                setDuration: d,
                signalEndOfStream: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "MediaSourceController", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    48: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                la = 0, ma = NaN, na = null, ra = null, oa = {}, pa = {}, ta = !1, sa = (0, k["default"])($).getInstance()
            }

            function b(a) {
                qa = a, ca = ka.getElement(), Y(), ra = qa.manifestInfo.isDynamic, ma = qa.start, aa.on(o["default"].DATA_UPDATE_COMPLETED, H, this), aa.on(o["default"].LIVE_EDGE_SEARCH_COMPLETED, I, this), aa.on(o["default"].BYTES_APPENDED, W, this), aa.on(o["default"].BUFFER_LEVEL_STATE_CHANGED, X, this), ta && (ta = !1, h())
            }

            function c() {
                return B(qa) + qa.duration - q()
            }

            function d() {
                return q() > 0
            }

            function e() {
                return qa.id
            }

            function f() {
                return qa.duration
            }

            function h() {
                ca ? (ca.autoplay = !0, ca.play()) : ta = !0
            }

            function j() {
                return ca ? ca.paused : void 0
            }

            function l() {
                ca && (ca.pause(), ca.autoplay = !1)
            }

            function n() {
                return ca ? ca.seeking : void 0
            }

            function p(a) {
                ka && (_("Requesting seek to time: " + a), ka.setCurrentTime(a))
            }

            function q() {
                return ca ? ca.currentTime : void 0
            }

            function r() {
                return ca ? ca.playbackRate : void 0
            }

            function t() {
                return ca ? ca.played : void 0
            }

            function u() {
                return ca ? ca.ended : void 0
            }

            function v() {
                return ra
            }

            function w(a) {
                ma = a
            }

            function x() {
                return ma
            }

            function y(a) {
                var b, c = ia.getMpd(ha.getValue());
                return b = sa.getUseSuggestedPresentationDelay() && c.hasOwnProperty("suggestedPresentationDelay") ? c.suggestedPresentationDelay : isNaN(a) ? 2 * qa.manifestInfo.minBufferTime : a * sa.getLiveDelayFragmentCount()
            }

            function z() {
                ka && ca && (aa.off(o["default"].DATA_UPDATE_COMPLETED, H, this), aa.off(o["default"].BUFFER_LEVEL_STATE_CHANGED, X, this), aa.off(o["default"].LIVE_EDGE_SEARCH_COMPLETED, I, this), aa.off(o["default"].BYTES_APPENDED, W, this), E(), Z()), ka = null, qa = null, ca = null, ra = null, a()
            }

            function A(a) {
                a && (a.streamController && (da = a.streamController), a.timelineConverter && (ea = a.timelineConverter), a.metricsModel && (fa = a.metricsModel), a.dashMetrics && (ga = a.dashMetrics), a.manifestModel && (ha = a.manifestModel), a.dashManifestModel && (ia = a.dashManifestModel), a.adapter && (ja = a.adapter), a.videoModel && (ka = a.videoModel))
            }

            function B(a) {
                var b, c = parseInt((0, i["default"])($).getInstance().getURIFragmentData().s, 10);
                return ra ? (!isNaN(c) && c > 1262304e3 && (b = c - a.manifestInfo.availableFrom.getTime() / 1e3, (b > ma || b < ma - a.manifestInfo.DVRWindowSize) && (b = null)), b = b || ma) : b = !isNaN(c) && c < a.duration && c >= 0 ? c : a.start, b
            }

            function C(a) {
                var b, c = fa.getReadOnlyMetricsFor("video") || fa.getReadOnlyMetricsFor("audio"), d = ga.getCurrentDVRInfo(c), e = d ? d.range : null;
                return e ? a >= e.start && a <= e.end ? a : b = Math.max(e.end - 2 * qa.manifestInfo.minBufferTime, e.start) : NaN
            }

            function D() {
                if (null === na) {
                    var a = function () {
                        V()
                    };
                    na = setInterval(a, sa.getWallclockTimeUpdateInterval())
                }
            }

            function E() {
                clearInterval(na), na = null
            }

            function F() {
                if (!pa[qa.id] && !n()) {
                    var a = B(qa);
                    aa.trigger(o["default"].PLAYBACK_SEEKING, {seekTime: a}), _("Starting playback at offset: " + a)
                }
            }

            function G() {
                if (!j() && ra && 0 !== ca.readyState) {
                    var a = q(), b = C(a), c = !isNaN(b) && b !== a;
                    c && p(b)
                }
            }

            function H(a) {
                if (!a.error) {
                    var b = ja.convertDataToTrack(ha.getValue(), a.currentRepresentation), c = b.mediaInfo.streamInfo;
                    qa.id === c.id && (qa = b.mediaInfo.streamInfo, G())
                }
            }

            function I(a) {
                a.error || 0 === ca.readyState || F()
            }

            function J() {
                aa.trigger(o["default"].CAN_PLAY)
            }

            function K() {
                _("Native video element event: play"), G(), D(), aa.trigger(o["default"].PLAYBACK_STARTED, {startTime: q()})
            }

            function L() {
                _("Native video element event: playing"), aa.trigger(o["default"].PLAYBACK_PLAYING, {playingTime: q()})
            }

            function M() {
                _("Native video element event: pause"), aa.trigger(o["default"].PLAYBACK_PAUSED, {ended: u()})
            }

            function N() {
                var a = q();
                _("Seeking to: " + a), D(), aa.trigger(o["default"].PLAYBACK_SEEKING, {seekTime: a})
            }

            function O() {
                _("Native video element event: seeked"), aa.trigger(o["default"].PLAYBACK_SEEKED)
            }

            function P() {
                var a = q();
                a !== la && (la = a, aa.trigger(o["default"].PLAYBACK_TIME_UPDATED, {timeToEnd: c(), time: a}))
            }

            function Q() {
                var a, b, c, d = ca.buffered;
                d.length && (a = d.length - 1, b = d.end(a), c = B(qa) + qa.duration - b), aa.trigger(o["default"].PLAYBACK_PROGRESS, {
                    bufferedRanges: ca.buffered,
                    remainingUnbufferedDuration: c
                })
            }

            function R() {
                var a = r();
                _("Native video element event: ratechange: ", a), aa.trigger(o["default"].PLAYBACK_RATE_CHANGED, {playbackRate: a})
            }

            function S() {
                _("Native video element event: loadedmetadata"), (!ra || ea.isTimeSyncCompleted()) && F(), aa.trigger(o["default"].PLAYBACK_METADATA_LOADED), D()
            }

            function T() {
                _("Native video element event: ended"), ca.autoplay = !1, E(), aa.trigger(o["default"].PLAYBACK_ENDED)
            }

            function U(a) {
                var b = a.target || a.srcElement;
                aa.trigger(o["default"].PLAYBACK_ERROR, {error: b.error})
            }

            function V() {
                aa.trigger(o["default"].WALLCLOCK_TIME_UPDATED, {isDynamic: ra, time: new Date})
            }

            function W(a) {
                var b, c = a.bufferedRanges, d = qa.id, e = q(), f = a.sender.getStreamProcessor(), g = f.getType(), h = da.getStreamById(qa.id), i = B(qa), j = a.startTime, k = oa[d];
                j === i && (pa[d] = pa[d] || {}, pa[d][g] = !0, pa[d].ready = !(h.hasMedia("audio") && !pa[d].audio || h.hasMedia("video") && !pa[d].video)), !c || !c.length || pa[d] && pa[d].seekCompleted || (b = Math.max(c.start(0), qa.start), oa[d] = void 0 === oa[d] ? b : Math.max(oa[d], b), k === oa[d] && e === k || !pa[d] || !pa[d].ready || e > oa[d] || (n() ? oa = {} : (p(Math.max(oa[d], i)), pa[d].seekCompleted = !0)))
            }

            function X(a) {
                a.streamInfo.id === qa.id && ka.setStallState(a.mediaType, a.state === g["default"].BUFFER_EMPTY)
            }

            function Y() {
                ca.addEventListener("canplay", J), ca.addEventListener("play", K), ca.addEventListener("playing", L), ca.addEventListener("pause", M), ca.addEventListener("error", U), ca.addEventListener("seeking", N), ca.addEventListener("seeked", O), ca.addEventListener("timeupdate", P), ca.addEventListener("progress", Q), ca.addEventListener("ratechange", R), ca.addEventListener("loadedmetadata", S), ca.addEventListener("ended", T)
            }

            function Z() {
                ca.removeEventListener("canplay", J), ca.removeEventListener("play", K), ca.removeEventListener("playing", L), ca.removeEventListener("pause", M), ca.removeEventListener("error", U), ca.removeEventListener("seeking", N), ca.removeEventListener("seeked", O), ca.removeEventListener("timeupdate", P), ca.removeEventListener("progress", Q), ca.removeEventListener("ratechange", R), ca.removeEventListener("loadedmetadata", S), ca.removeEventListener("ended", T)
            }

            var $ = this.context, _ = (0, s["default"])($).getInstance().log, aa = (0, m["default"])($).getInstance(), ba = void 0, ca = void 0, da = void 0, ea = void 0, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0;
            return ba = {
                initialize: b,
                setConfig: A,
                getStreamStartTime: B,
                getTimeToStreamEnd: c,
                isPlaybackStarted: d,
                getStreamId: e,
                getStreamDuration: f,
                getTime: q,
                getPlaybackRate: r,
                getPlayedRanges: t,
                getEnded: u,
                getIsDynamic: v,
                setLiveStartTime: w,
                getLiveStartTime: x,
                getLiveDelay: y,
                play: h,
                isPaused: j,
                pause: l,
                isSeeking: n,
                seek: p,
                reset: z
            }, a(), ba
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./BufferController.js"), g = d(f), h = a("../models/URIQueryAndFragmentModel.js"), i = d(h), j = a("../../streaming/models/MediaPlayerModel.js"), k = d(j), l = a("../../core/EventBus.js"), m = d(l), n = a("../../core/events/Events.js"), o = d(n), p = a("../../core/FactoryMaker.js"), q = d(p), r = a("../../core/Debug.js"), s = d(r);
        e.__dashjs_factory_name = "PlaybackController", c["default"] = q["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../../streaming/models/MediaPlayerModel.js": 80,
        "../models/URIQueryAndFragmentModel.js": 82,
        "./BufferController.js": 43
    }],
    49: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                pa = !0, qa = !1, ra = null, sa = null, ta = !0, ua = !1, va = 0, xa = NaN
            }

            function c(a, b) {
                ka = a, Aa = b, Ca = (0, s["default"])(Z).getInstance(), ya = (0, m["default"])(Z).getInstance(), za = (0, o["default"])(Z).getInstance(), Ba = Aa.getFragmentController(), Da = Aa.getBufferController(), ma = Ba.getModel(this), na = Aa.isDynamic(), Ea = ia.getScheduleWhilePaused(), ea.getIsTextTrack(ka) && _.on(w["default"].TIMED_TEXT_REQUESTED, L, this), _.on(w["default"].LIVE_EDGE_SEARCH_COMPLETED, P, this), _.on(w["default"].QUALITY_CHANGED, y, this), _.on(w["default"].DATA_UPDATE_STARTED, F, this), _.on(w["default"].DATA_UPDATE_COMPLETED, z, this), _.on(w["default"].FRAGMENT_LOADING_COMPLETED, D, this), _.on(w["default"].STREAM_COMPLETED, C, this), _.on(w["default"].STREAM_INITIALIZED, B, this), _.on(w["default"].BUFFER_LEVEL_STATE_CHANGED, I, this), _.on(w["default"].BUFFER_CLEARED, H, this), _.on(w["default"].BYTES_APPENDED, E, this), _.on(w["default"].INIT_REQUESTED, G, this), _.on(w["default"].QUOTA_EXCEEDED, J, this), _.on(w["default"].BUFFER_LEVEL_STATE_CHANGED, I, this), _.on(w["default"].PLAYBACK_STARTED, M, this), _.on(w["default"].PLAYBACK_SEEKING, N, this), _.on(w["default"].PLAYBACK_RATE_CHANGED, O, this)
            }

            function d(a, b) {
                var c = 0, d = null;
                ra && ta === !1 && (d = sa.start, c = a.getTime() - d.getTime(), sa.duration = c, sa.stopreason = b, ra.trace.push(sa), ta = !0)
            }

            function e() {
                la && (K(), qa = !1, pa && (pa = !1), $("Schedule controller starting for " + ka), ya.getPlayedRanges().length > 0 && n())
            }

            function f() {
                pa && j(oa.quality), e()
            }

            function h() {
                qa || (qa = !0, $("Schedule controller stopping for " + ka), clearInterval(wa))
            }

            function j(a) {
                var b = ca.getInitRequest(Aa, a);
                return null !== b && ma.executeRequest(b), b
            }

            function l(a) {
                var b, c, d, e = a.length, f = .1;
                for (d = 0; e > d; d++)b = a[d], c = b.startTime + b.duration / 2 + f, b = ca.getFragmentRequestForTime(Aa, oa, c, {
                    timeThreshold: 0,
                    ignoreIsFinished: !0
                }), ma.executeRequest(b)
            }

            function n() {
                qa || ya.isPaused() && ya.getPlayedRanges().length > 0 && !Ea || p()
            }

            function p() {
                var a = ga.getRules(i["default"].FRAGMENTS_TO_SCHEDULE_RULES);
                ha.applyRules(a, Aa, r, 0, function (a, b) {
                    return a = a === k["default"].NO_CHANGE ? 0 : a, Math.max(a, b)
                })
            }

            function r(a) {
                1 !== a.value || ua || !ea.getIsTextTrack(ka) && Da.getIsAppendingInProgress() ? x(1e3) : (ua = !0, za.getPlaybackQuality(Aa, t()))
            }

            function t() {
                var a = ga.getRules(i["default"].NEXT_FRAGMENT_RULES);
                ha.applyRules(a, Aa, v, null, function (a, b) {
                    return b
                })
            }

            function v(a) {
                a.value ? ma.executeRequest(a.value) : (ua = !1, x(1e3))
            }

            function x(a) {
                wa = setTimeout(function () {
                    n()
                }, a)
            }

            function y(a) {
                if (ka === a.mediaType && Aa.getStreamInfo().id === a.streamInfo.id) {
                    if (oa = Aa.getRepresentationInfoForQuality(a.newQuality), null === oa || void 0 === oa)throw"Unexpected error! - currentRepresentationInfo is null or undefined";
                    d(new Date, g["default"].Trace.REPRESENTATION_SWITCH_STOP_REASON), K()
                }
            }

            function z(a) {
                a.error || (oa = ca.convertDataToTrack(ba.getValue(), a.currentRepresentation))
            }

            function B(a) {
                a.error || (oa = Aa.getCurrentRepresentationInfo(), na && null === Ca.getLiveEdge() || (la = !0), la && f())
            }

            function C(a) {
                a.fragmentModel === ma && $("Stream is complete")
            }

            function D(a) {
                a.sender === ma && (isNaN(a.request.index) || (ua = !1), a.error && h())
            }

            function E(a) {
                a.sender.getStreamProcessor() === Aa && n()
            }

            function F(a) {
                a.sender.getStreamProcessor() === Aa && h()
            }

            function G(a) {
                a.sender.getStreamProcessor() === Aa && j(a.requiredQuality)
            }

            function H(a) {
                a.sender.getStreamProcessor() === Aa && (ma.removeExecutedRequestsBeforeTime(a.to), a.hasEnoughSpaceToAppend && !Da.getIsBufferingCompleted() && e())
            }

            function I(a) {
                a.sender.getStreamProcessor() !== Aa || a.state !== q["default"].BUFFER_EMPTY || ya.isSeeking() || ($("Stalling Buffer"), d(new Date, g["default"].Trace.REBUFFERING_REASON))
            }

            function J(a) {
                a.sender.getStreamProcessor() === Aa && h()
            }

            function K() {
                ra && ta === !0 && oa && (ta = !1, sa = new g["default"].Trace, sa.representationid = oa.id, sa.start = new Date, sa.mstart = 1e3 * ya.getTime(), sa.playbackspeed = ya.getPlaybackRate().toString())
            }

            function L(a) {
                a.sender.getStreamProcessor() === Aa && j(a.index)
            }

            function M() {
                e()
            }

            function N(a) {
                pa || (ua = !1);
                var b = aa.getMetricsFor("stream"), c = da.getCurrentManifestUpdate(b);
                xa = a.seekTime;
                var d = oa.DVRWindow ? oa.DVRWindow.end - ya.getTime() : NaN;
                aa.updateManifestUpdateInfo(c, {latency: d}), na && n()
            }

            function O(a) {
                sa && (sa.playbackspeed = a.playbackRate.toString())
            }

            function P(a) {
                if (!a.error) {
                    var b, c, d = a.liveEdge, e = oa.mediaInfo.streamInfo.manifestInfo, g = d - Math.min(ya.getLiveDelay(oa.fragmentDuration), e.DVRWindowSize / 2), h = aa.getMetricsFor("stream"), i = da.getCurrentManifestUpdate(h), j = ya.getLiveStartTime();
                    b = ca.getFragmentRequestForTime(Aa, oa, g, {ignoreIsFinished: !0}), c = b.startTime, (isNaN(j) || c > j) && ya.setLiveStartTime(c), aa.updateManifestUpdateInfo(i, {
                        currentTime: c,
                        presentationStartTime: d,
                        latency: d - c,
                        clientTimeOffset: fa.getClientTimeOffset()
                    }), la = !0, f()
                }
            }

            function Q() {
                return xa
            }

            function R(a) {
                xa = a
            }

            function S() {
                return ma
            }

            function T(a) {
                va = a
            }

            function U() {
                return va
            }

            function V() {
                return Aa
            }

            function W(a) {
                ra = a
            }

            function X(a, b) {
                d(a, b), ra = null
            }

            function Y() {
                _.off(w["default"].LIVE_EDGE_SEARCH_COMPLETED, P, this), _.off(w["default"].DATA_UPDATE_STARTED, F, this), _.off(w["default"].DATA_UPDATE_COMPLETED, z, this), _.off(w["default"].BUFFER_LEVEL_STATE_CHANGED, I, this), _.off(w["default"].QUALITY_CHANGED, y, this), _.off(w["default"].FRAGMENT_LOADING_COMPLETED, D, this), _.off(w["default"].STREAM_COMPLETED, C, this), _.off(w["default"].STREAM_INITIALIZED, B, this), _.off(w["default"].QUOTA_EXCEEDED, J, this), _.off(w["default"].BYTES_APPENDED, E, this), _.off(w["default"].BUFFER_CLEARED, H, this), _.off(w["default"].INIT_REQUESTED, G, this), _.off(w["default"].PLAYBACK_RATE_CHANGED, O, this), _.off(w["default"].PLAYBACK_SEEKING, N, this), _.off(w["default"].PLAYBACK_STARTED, M, this), ea.getIsTextTrack(ka) && _.off(w["default"].TIMED_TEXT_REQUESTED, L, this), h(), Ba.detachModel(ma), ua = !1, va = 0, xa = NaN, ya = null, ra = null
            }

            var Z = this.context, $ = (0, A["default"])(Z).getInstance().log, _ = (0, u["default"])(Z).getInstance(), aa = a.metricsModel, ba = a.manifestModel, ca = a.adapter, da = a.dashMetrics, ea = a.dashManifestModel, fa = a.timelineConverter, ga = a.scheduleRulesCollection, ha = a.rulesController, ia = a.mediaPlayerModel, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0, ua = void 0, va = void 0, wa = void 0, xa = void 0, ya = void 0, za = void 0, Aa = void 0, Ba = void 0, Ca = void 0, Da = void 0, Ea = void 0;
            return ja = {
                initialize: c,
                getStreamProcessor: V,
                getSeekTarget: Q,
                setSeekTarget: R,
                getFragmentModel: S,
                setTimeToLoadDelay: T,
                getTimeToLoadDelay: U,
                replaceCanceledRequests: l,
                start: e,
                stop: h,
                reset: Y,
                setPlayList: W,
                finalisePlayList: X
            }, b(), ja
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/metrics/PlayList.js"), g = d(f), h = a("../rules/scheduling/ScheduleRulesCollection.js"), i = d(h), j = a("../rules/SwitchRequest.js"), k = d(j), l = a("./PlaybackController.js"), m = d(l), n = a("./AbrController.js"), o = d(n), p = a("./BufferController.js"), q = d(p), r = a("../utils/LiveEdgeFinder.js"), s = d(r), t = a("../../core/EventBus.js"), u = d(t), v = a("../../core/events/Events.js"), w = d(v), x = a("../../core/FactoryMaker.js"), y = d(x), z = a("../../core/Debug.js"), A = d(z);
        e.__dashjs_factory_name = "ScheduleController", c["default"] = y["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../rules/SwitchRequest.js": 109,
        "../rules/scheduling/ScheduleRulesCollection.js": 119,
        "../utils/LiveEdgeFinder.js": 129,
        "../vo/metrics/PlayList.js": 152,
        "./AbrController.js": 42,
        "./BufferController.js": 43,
        "./PlaybackController.js": 48
    }],
    50: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                var c = b.codec, d = null;
                try {
                    if (c.match(/application\/mp4;\s*codecs="stpp"/i))throw new y["default"]("not really supported");
                    d = a.addSourceBuffer(c)
                } catch (e) {
                    if (!b.isText && -1 === c.indexOf('codecs="stpp"'))throw e;
                    d = (0, g["default"])(t).getInstance(), d.setConfig({
                        errHandler: (0, m["default"])(t).getInstance(),
                        adapter: (0, k["default"])(t).getInstance(),
                        dashManifestModel: z,
                        mediaController: (0, i["default"])(t).getInstance(),
                        videoModel: (0, w["default"])(t).getInstance(),
                        streamController: (0, o["default"])(t).getInstance(),
                        textTracks: (0, q["default"])(t).getInstance(),
                        VTTParser: (0, s["default"])(t).getInstance(),
                        TTMLParser: (0, u["default"])(t).getInstance()
                    })
                }
                return d
            }

            function b(a, b) {
                try {
                    a.removeSourceBuffer(b)
                } catch (c) {
                }
            }

            function c(a, b, c) {
                var d, e, f = null, g = 0, h = 0, i = null, j = null, k = 0, l = c || .15;
                try {
                    f = a.buffered
                } catch (m) {
                    return null
                }
                if (null !== f && void 0 !== f) {
                    for (e = 0, d = f.length; d > e; e++)if (g = f.start(e), h = f.end(e), null === i)k = Math.abs(g - b), b >= g && h > b ? (i = g, j = h) : l >= k && (i = g, j = h); else {
                        if (k = g - j, !(l >= k))break;
                        j = h
                    }
                    if (null !== i)return {start: i, end: j}
                }
                return null
            }

            function d(a) {
                var b = null;
                try {
                    return b = a.buffered
                } catch (c) {
                    return null
                }
            }

            function e(a) {
                var b, c, e = d(a), f = 0;
                if (!e)return f;
                for (c = 0, b = e.length; b > c; c++)f += e.end(c) - e.start(c);
                return f
            }

            function f(a, b, d) {
                var e, f;
                return e = c(a, b, d), f = null === e ? 0 : e.end - b
            }

            function h(a, b) {
                if (!b)return null;
                var c, e, f, g, h, i, j, k, l, m = d(b);
                if (!m)return null;
                for (var n = 0, o = m.length; o > n; n++) {
                    if (k = a.length > n, h = k ? {
                            start: a.start(n),
                            end: a.end(n)
                        } : null, c = m.start(n), e = m.end(n), !h)return l = {start: c, end: e};
                    if (f = h.start === c, g = h.end === e, !f || !g) {
                        if (f)l = {start: h.end, end: e}; else {
                            if (!g)return l = {start: c, end: e};
                            l = {start: c, end: h.start}
                        }
                        return i = a.length > n + 1 ? {
                            start: a.start(n + 1),
                            end: a.end(n + 1)
                        } : null, j = o > n + 1 ? {
                            start: m.start(n + 1),
                            end: m.end(n + 1)
                        } : null, !i || j && j.start === i.start && j.end === i.end || (l.end = i.start), l
                    }
                }
                return null
            }

            function j(a, b) {
                var c = b.bytes, d = "append"in a ? "append" : "appendBuffer"in a ? "appendBuffer" : null, e = "Object" === Object.prototype.toString.call(a).slice(8, -1);
                if (d)try {
                    r(a, function () {
                        e ? a[d](c, b) : a[d](c), r(a, function () {
                            v.trigger(C["default"].SOURCEBUFFER_APPEND_COMPLETED, {buffer: a, bytes: c})
                        })
                    })
                } catch (f) {
                    v.trigger(C["default"].SOURCEBUFFER_APPEND_COMPLETED, {
                        buffer: a,
                        bytes: c,
                        error: new y["default"](f.code, f.message, null)
                    })
                }
            }

            function l(a, b, c, d) {
                try {
                    r(a, function () {
                        b >= 0 && c > b && "ended" !== d.readyState && a.remove(b, c), r(a, function () {
                            v.trigger(C["default"].SOURCEBUFFER_REMOVE_COMPLETED, {buffer: a, from: b, to: c})
                        })
                    })
                } catch (e) {
                    v.trigger(C["default"].SOURCEBUFFER_REMOVE_COMPLETED, {
                        buffer: a,
                        from: b,
                        to: c,
                        error: new y["default"](e.code, e.message, null)
                    })
                }
            }

            function n(a, b) {
                try {
                    "open" === a.readyState && b.abort()
                } catch (c) {
                }
            }

            function p(a) {
                a && a.dashManifestModel && (z = a.dashManifestModel)
            }

            function r(a, b) {
                var c, d = 50, e = function () {
                    a.updating || (clearInterval(c), b())
                }, f = function h() {
                    a.updating || (a.removeEventListener("updateend", h, !1), b())
                };
                if (!a.updating)return void b();
                if ("function" == typeof a.addEventListener)try {
                    a.addEventListener("updateend", f, !1)
                } catch (g) {
                    c = setInterval(e, d)
                } else c = setInterval(e, d)
            }

            var t = this.context, v = (0, A["default"])(t).getInstance(), x = void 0, z = void 0;
            return x = {
                append: j,
                remove: l,
                abort: n,
                createSourceBuffer: a,
                removeSourceBuffer: b,
                getBufferRange: c,
                getAllRanges: d,
                getTotalBufferedTime: e,
                getBufferLength: f,
                getRangeDifference: h,
                setConfig: p
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../TextSourceBuffer.js"), g = d(f), h = a("./MediaController.js"), i = d(h), j = a("../../dash/DashAdapter.js"), k = d(j), l = a("../utils/ErrorHandler.js"), m = d(l), n = a("./StreamController.js"), o = d(n), p = a("../TextTracks.js"), q = d(p), r = a("../utils/VTTParser.js"), s = d(r), t = a("../utils/TTMLParser.js"), u = d(t), v = a("../models/VideoModel.js"), w = d(v), x = a("../vo/Error.js"), y = d(x), z = a("../../core/EventBus.js"), A = d(z), B = a("../../core/events/Events.js"), C = d(B), D = a("../../core/FactoryMaker.js"), E = d(D), F = 22;
        e.__dashjs_factory_name = "SourceBufferController";
        var G = E["default"].getSingletonFactory(e);
        G.QUOTA_EXCEEDED_ERROR_CODE = F, c["default"] = G, b.exports = c["default"]
    }, {
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../../dash/DashAdapter.js": 13,
        "../TextSourceBuffer.js": 38,
        "../TextTracks.js": 39,
        "../models/VideoModel.js": 83,
        "../utils/ErrorHandler.js": 127,
        "../utils/TTMLParser.js": 131,
        "../utils/VTTParser.js": 132,
        "../vo/Error.js": 135,
        "./MediaController.js": 46,
        "./StreamController.js": 51
    }],
    51: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                ia = null, ga = [], sa = (0, u["default"])(Q).getInstance(), ka = !0, la = !1, ma = !1, ta = !1, ua = !0, va = null, na = !1, oa = !1
            }

            function b(a, b) {
                ka = a, ja = b, fa.initialize(), V = (0, k["default"])(Q).getInstance(), V.setConfig({
                    log: R,
                    manifestModel: X,
                    dashManifestModel: Y
                }), V.initialize(W), qa = (0, s["default"])(Q).getInstance(), ra = (0, g["default"])(Q).getInstance(), ra.setConfig({
                    streamController: T,
                    timelineConverter: fa,
                    metricsModel: $,
                    dashMetrics: _,
                    manifestModel: X,
                    dashManifestModel: Y,
                    adapter: Z,
                    videoModel: qa
                }), S.on(o["default"].TIME_SYNCHRONIZATION_COMPLETED, F, this), S.on(o["default"].PLAYBACK_SEEKING, n, this), S.on(o["default"].PLAYBACK_TIME_UPDATED, j, this), S.on(o["default"].PLAYBACK_ENDED, l, this), S.on(o["default"].PLAYBACK_ERROR, h, this), S.on(o["default"].PLAYBACK_STARTED, p, this), S.on(o["default"].PLAYBACK_PAUSED, r, this), S.on(o["default"].MANIFEST_UPDATED, G, this), S.on(o["default"].STREAM_BUFFERING_COMPLETED, t, this)
            }

            function c(a, b) {
                b = b || new Date, va && (ha && ha.getProcessors().forEach(function (c) {
                    var d = c.getScheduleController();
                    d && d.finalisePlayList(b, a)
                }), $.addPlayList(va), va = null)
            }

            function d(a) {
                va = new y["default"], va.start = new Date, va.mstart = 1e3 * ra.getTime(), va.starttype = a, ha && ha.getProcessors().forEach(function (a) {
                    var b = a.getScheduleController();
                    b && b.setPlayList(va)
                })
            }

            function e(a, b, c) {
                S.trigger(a, {fromStreamInfo: b ? b.getStreamInfo() : null, toStreamInfo: c.getStreamInfo()})
            }

            function f() {
                ha.isActivated() && 0 === ha.getStreamInfo().index && (ha.startEventController(), ka && ra.play())
            }

            function h(a) {
                var b = a.error ? a.error.code : 0, c = "";
                if (-1 !== b) {
                    switch (b) {
                        case 1:
                            c = "MEDIA_ERR_ABORTED";
                            break;
                        case 2:
                            c = "MEDIA_ERR_NETWORK";
                            break;
                        case 3:
                            c = "MEDIA_ERR_DECODE";
                            break;
                        case 4:
                            c = "MEDIA_ERR_SRC_NOT_SUPPORTED";
                            break;
                        case 5:
                            c = "MEDIA_ERR_ENCRYPTED";
                            break;
                        default:
                            c = "UNKNOWN"
                    }
                    na = !0, a.error.msExtendedCode && (c += " (0x" + (a.error.msExtendedCode >>> 0).toString(16).toUpperCase() + ")"), R("Video Element Error: " + c), a.error && R(a.error), ea.mediaSourceError(c), O()
                }
            }

            function j(a) {
                var b = qa.getPlaybackQuality();
                b && $.addDroppedFrames("video", b), ra.isSeeking() || a.timeToEnd < P && ba.signalEndOfStream(pa)
            }

            function l() {
                var a = v();
                x(ha, a), c(a ? y["default"].Trace.END_OF_PERIOD_STOP_REASON : y["default"].Trace.END_OF_CONTENT_STOP_REASON)
            }

            function n(a) {
                var b = w(a.seekTime);
                b && b !== ha ? (c(y["default"].Trace.END_OF_PERIOD_STOP_REASON), x(ha, b, a.seekTime)) : c(y["default"].Trace.USER_REQUEST_STOP_REASON), d(y["default"].SEEK_START_REASON)
            }

            function p() {
                ua ? (ua = !1, d(y["default"].INITIAL_PLAYOUT_START_REASON)) : ta && (ta = !1, d(y["default"].RESUME_FROM_PAUSE_START_REASON))
            }

            function r(a) {
                a.ended || (ta = !0, c(y["default"].Trace.USER_REQUEST_STOP_REASON))
            }

            function t(a) {
                var b = v(), c = a.streamInfo.isLast;
                pa && c && ba.signalEndOfStream(pa), b && b.activate(pa)
            }

            function v() {
                var a = ha.getStreamInfo().start, b = ha.getStreamInfo().duration;
                return ga.filter(function (c) {
                    return c.getStreamInfo().start === a + b
                })[0]
            }

            function w(a) {
                var b = 0, c = null, d = ga.length;
                d > 0 && (b += ga[0].getStartTime());
                for (var e = 0; d > e; e++)if (c = ga[e], b += c.getDuration(), b > a)return c;
                return null
            }

            function x(a, b, c) {
                if (!la && a && b && a !== b) {
                    e(o["default"].PERIOD_SWITCH_STARTED, a, b), la = !0;
                    var d = function () {
                        void 0 !== c && ra.seek(c), ra.play(), ha.startEventController(), la = !1, e(o["default"].PERIOD_SWITCH_COMPLETED, a, b)
                    };
                    a.deactivate(), ha = b, ra.initialize(ha.getStreamInfo()), z(d)
                }
            }

            function z(a) {
                var b, c = function d(c) {
                    R("MediaSource is open!"), R(c), window.URL.revokeObjectURL(b), pa.removeEventListener("sourceopen", d), pa.removeEventListener("webkitsourceopen", d), B(), ha.activate(pa), a && a()
                };
                pa ? ba.detachMediaSource(qa) : pa = ba.createMediaSource(), pa.addEventListener("sourceopen", c, !1), pa.addEventListener("webkitsourceopen", c, !1), b = ba.attachMediaSource(pa, qa)
            }

            function B() {
                var a, b;
                a = ha.getStreamInfo().manifestInfo.duration, b = ba.setDuration(pa, a), R("Duration successfully set to: " + b)
            }

            function C() {
                var a, b, c, d, f, g, h, j = X.getValue(), k = $.getMetricsFor("stream"), l = _.getCurrentManifestUpdate(k), m = [];
                if (j) {
                    g = Z.getStreamsInfo(j), ia && (S.trigger(o["default"].PROTECTION_CREATED, {
                        controller: ia,
                        manifest: j
                    }), ia.setMediaElement(qa.getElement()), ja && ia.setProtectionData(ja));
                    try {
                        if (0 === g.length)throw new Error("There are no streams");
                        for ($.updateManifestUpdateInfo(l, {
                            currentTime: ra.getTime(),
                            buffered: qa.getElement().buffered,
                            presentationStartTime: g[0].start,
                            clientTimeOffset: fa.getClientTimeOffset()
                        }), ma = !0, d = 0, b = g.length; b > d; d++) {
                            for (a = g[d], f = 0, c = ga.length; c > f; f++)ga[f].getId() === a.id && (h = ga[f], m.push(h), h.updateData(a));
                            h || (h = (0, i["default"])(Q).create({
                                manifestModel: X,
                                manifestUpdater: V,
                                adapter: Z,
                                timelineConverter: fa,
                                capabilities: U,
                                errHandler: ea
                            }), h.initialize(a, ia), S.on(o["default"].STREAM_INITIALIZED, E, this), m.push(h), ha && h.updateData(a)), $.addManifestUpdateStreamInfo(l, a.id, a.index, a.start, a.duration), h = null
                        }
                        ga = m, ha || (ha = ga[0], e(o["default"].PERIOD_SWITCH_STARTED, null, ha), ra.initialize(ha.getStreamInfo()), e(o["default"].PERIOD_SWITCH_COMPLETED, null, ha)), pa || z(), ma = !1, D()
                    } catch (n) {
                        ea.manifestError(n.message, "nostreamscomposed", j), oa = !0, O()
                    }
                }
            }

            function D() {
                if (!ma) {
                    var a = ga.length, b = 0;
                    for (f(), b; a > b; b++)if (!ga[b].isInitialized())return;
                    S.trigger(o["default"].STREAMS_COMPOSED)
                }
            }

            function E() {
                D()
            }

            function F() {
                C()
            }

            function G(a) {
                if (a.error)oa = !0, O(); else {
                    var b, c, d = a.manifest, e = Z.getStreamsInfo(d)[0], f = Z.getMediaInfoForType(d, e, "video") || Z.getMediaInfoForType(d, e, "audio");
                    f && (b = Z.getDataForMedia(f), c = Y.getRepresentationsForAdaptation(d, b)[0].useCalculatedLiveEdgeTime, c && (R("SegmentTimeline detected using calculated Live Edge Time"), sa.setUseManifestDateHeaderTimeSource(!1)));
                    var g = Y.getUTCTimingSources(a.manifest), h = !Y.getIsDynamic(d) || c ? g : g.concat(sa.getUTCTimingSources()), i = (0, q["default"])(Q).getInstance().isManifestHTTPS();
                    h.forEach(function (a) {
                        a.value.replace(/.*?:\/\//g, "") === u["default"].DEFAULT_UTC_TIMING_SOURCE.value.replace(/.*?:\/\//g, "") && (a.value = a.value.replace(i ? new RegExp(/^(http:)?\/\//i) : new RegExp(/^(https:)?\/\//i), i ? "https://" : "http://"), R("Matching default timing source protocol to manifest protocol: ", a.value))
                    }), ca.setConfig({
                        metricsModel: $,
                        dashMetrics: _
                    }), ca.initialize(h, sa.getUseManifestDateHeaderTimeSource())
                }
            }

            function H() {
                return ka
            }

            function I() {
                return ha ? ha.getStreamInfo() : null
            }

            function J(a) {
                return ha.getId() === a.id
            }

            function K(a) {
                return ga.filter(function (b) {
                    return b.getId() === a
                })[0]
            }

            function L(a) {
                W.load(a)
            }

            function M(a) {
                V.setManifest(a)
            }

            function N(a) {
                a && (a.capabilities && (U = a.capabilities), a.manifestLoader && (W = a.manifestLoader), a.manifestModel && (X = a.manifestModel), a.dashManifestModel && (Y = a.dashManifestModel), a.protectionController && (ia = a.protectionController), a.adapter && (Z = a.adapter), a.metricsModel && ($ = a.metricsModel), a.dashMetrics && (_ = a.dashMetrics), a.liveEdgeFinder && (aa = a.liveEdgeFinder), a.mediaSourceController && (ba = a.mediaSourceController), a.timeSyncController && (ca = a.timeSyncController), a.virtualBuffer && (da = a.virtualBuffer), a.errHandler && (ea = a.errHandler), a.timelineConverter && (fa = a.timelineConverter))
            }

            function O() {
                ca.reset(), c(na || oa ? y["default"].Trace.FAILURE_STOP_REASON : y["default"].Trace.USER_REQUEST_STOP_REASON);
                for (var a = 0, b = ga.length; b > a; a++) {
                    var d = ga[a];
                    S.off(o["default"].STREAM_INITIALIZED, E, this), d.reset(na)
                }
                ga = [], S.off(o["default"].PLAYBACK_TIME_UPDATED, j, this), S.off(o["default"].PLAYBACK_SEEKING, n, this), S.off(o["default"].PLAYBACK_ERROR, h, this), S.off(o["default"].PLAYBACK_STARTED, p, this), S.off(o["default"].PLAYBACK_PAUSED, r, this), S.off(o["default"].PLAYBACK_ENDED, l, this), S.off(o["default"].STREAM_BUFFERING_COMPLETED, t, this), S.off(o["default"].MANIFEST_UPDATED, G, this), V.reset(), $.clearAllCurrentMetrics(), X.setValue(null), W.reset(), fa.reset(), aa.reset(), Z.reset(), da.reset(), la = !1, ma = !1, ha = null, na = !1, oa = !1, ua = !0, ta = !1, pa && (ba.detachMediaSource(qa), pa = null), qa = null, ia && (ia.setMediaElement(null), ia = null, ja = null, X.getValue() && S.trigger(o["default"].PROTECTION_DESTROYED, {data: X.getValue().url})), S.trigger(o["default"].STREAM_TEARDOWN_COMPLETE)
            }

            var P = .2, Q = this.context, R = (0, A["default"])(Q).getInstance().log, S = (0, m["default"])(Q).getInstance(), T = void 0, U = void 0, V = void 0, W = void 0, X = void 0, Y = void 0, Z = void 0, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0, ea = void 0, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0, ua = void 0, va = void 0;
            return T = {
                initialize: b,
                getAutoPlay: H,
                getActiveStreamInfo: I,
                isStreamActive: J,
                getStreamById: K,
                load: L,
                loadWithManifest: M,
                setConfig: N,
                reset: O
            }, a(), T
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./PlaybackController.js"), g = d(f), h = a("../Stream.js"), i = d(h), j = a("../ManifestUpdater.js"), k = d(j), l = a("../../core/EventBus.js"), m = d(l), n = a("../../core/events/Events.js"), o = d(n), p = a("../models/URIQueryAndFragmentModel.js"), q = d(p), r = a("../models/VideoModel.js"), s = d(r), t = a("../models/MediaPlayerModel.js"), u = d(t), v = a("../../core/FactoryMaker.js"), w = d(v), x = a("../vo/metrics/PlayList.js"), y = d(x), z = a("../../core/Debug.js"), A = d(z);
        e.__dashjs_factory_name = "StreamController", c["default"] = w["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../ManifestUpdater.js": 32,
        "../Stream.js": 36,
        "../models/MediaPlayerModel.js": 80,
        "../models/URIQueryAndFragmentModel.js": 82,
        "../models/VideoModel.js": 83,
        "../vo/metrics/PlayList.js": 152,
        "./PlaybackController.js": 48
    }],
    52: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                s = !1, t = null, u = null, v = null, w = null, x = null, o.on(i["default"].DATA_UPDATE_COMPLETED, l, this), o.on(i["default"].INIT_FRAGMENT_LOADED, m, this)
            }

            function c(a, b, c) {
                v = a, h(b), w = c, x = w.getRepresentationController()
            }

            function d(a) {
                try {
                    u = p.createSourceBuffer(t, a), s || (u.hasOwnProperty("initialize") && u.initialize(v, this), s = !0)
                } catch (b) {
                    q.mediaSourceError("Error creating " + v + " source buffer.")
                }
                return u
            }

            function e() {
                return u
            }

            function f(a) {
                u = a
            }

            function h(a) {
                t = a
            }

            function j() {
                return w
            }

            function k(a) {
                o.off(i["default"].DATA_UPDATE_COMPLETED, l, this), o.off(i["default"].INIT_FRAGMENT_LOADED, m, this), a || (p.abort(t, u), p.removeSourceBuffer(t, u))
            }

            function l(a) {
                a.sender.getStreamProcessor() === w && o.trigger(i["default"].TIMED_TEXT_REQUESTED, {
                    index: 0,
                    sender: a.sender
                })
            }

            function m(a) {
                a.fragmentModel === w.getFragmentModel() && a.chunk.bytes && p.append(u, a.chunk)
            }

            var n = this.context, o = (0, g["default"])(n).getInstance(), p = a.sourceBufferController, q = a.errHandler, r = void 0, s = void 0, t = void 0, u = void 0, v = void 0, w = void 0, x = void 0;
            return r = {
                initialize: c,
                createBuffer: d,
                getBuffer: e,
                setBuffer: f,
                getStreamProcessor: j,
                setMediaSource: h,
                reset: k
            }, b(), r
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/EventBus.js"), g = d(f), h = a("../../core/events/Events.js"), i = d(h), j = a("../../core/FactoryMaker.js"), k = d(j);
        e.__dashjs_factory_name = "TextController", c["default"] = k["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../core/EventBus.js": 8, "../../core/FactoryMaker.js": 9, "../../core/events/Events.js": 11}],
    53: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                H = b, E = 0, F = !1, G = !1, I = {
                    "urn:mpeg:dash:utc:http-head:2014": v,
                    "urn:mpeg:dash:utc:http-xsdate:2014": u.bind(null, m),
                    "urn:mpeg:dash:utc:http-iso:2014": u.bind(null, n),
                    "urn:mpeg:dash:utc:direct:2014": t,
                    "urn:mpeg:dash:utc:http-head:2012": v,
                    "urn:mpeg:dash:utc:http-xsdate:2012": u.bind(null, m),
                    "urn:mpeg:dash:utc:http-iso:2012": u.bind(null, n),
                    "urn:mpeg:dash:utc:direct:2012": t,
                    "urn:mpeg:dash:utc:http-ntp:2014": s,
                    "urn:mpeg:dash:utc:ntp:2014": s,
                    "urn:mpeg:dash:utc:sntp:2014": s
                }, e() || (y(a), f(!0))
            }

            function b(a) {
                a && (a.metricsModel && (J = a.metricsModel), a.dashMetrics && (K = a.dashMetrics))
            }

            function c() {
                return j()
            }

            function d(a) {
                F = a
            }

            function e() {
                return F
            }

            function f(a) {
                G = a
            }

            function h(a) {
                E = a
            }

            function j() {
                return E
            }

            function l(a) {
                var b, c, d = 60, e = 60, f = 1e3, g = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/, h = g.exec(a);
                return b = Date.UTC(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10), h[6] && (parseInt(h[6], 10) || 0), h[7] && parseFloat(h[7]) * f || 0), h[9] && h[10] && (c = parseInt(h[9], 10) * e + parseInt(h[10], 10), b += ("+" === h[8] ? -1 : 1) * c * d * f), new Date(b).getTime()
            }

            function m(a) {
                var b = Date.parse(a);
                return isNaN(b) && (b = l(a)), b
            }

            function n(a) {
                return Date.parse(a)
            }

            function r(a) {
                return Date.parse(a)
            }

            function s(a, b, c) {
                c()
            }

            function t(a, b, c) {
                var d = m(a);
                return isNaN(d) ? void c() : void b(d)
            }

            function u(a, b, c, d, e) {
                var f, g, h = !1, i = new XMLHttpRequest, j = e ? "HEAD" : "GET", k = b.match(/\S+/g);
                b = k.shift(), f = function () {
                    h || (h = !0, k.length ? u(a, k.join(" "), c, d, e) : d())
                }, g = function () {
                    var b, d;
                    200 === i.status && (b = e ? i.getResponseHeader("Date") : i.response, d = a(b), isNaN(d) || (c(d), h = !0))
                }, i.open(j, b), i.timeout = q || 0, i.onload = g, i.onloadend = f, i.send()
            }

            function v(a, b, c) {
                u(r, a, b, c, !0)
            }

            function w() {
                var a = J.getReadOnlyMetricsFor("stream"), b = K.getLatestMPDRequestHeaderValueByID(a, "Date"), c = null !== b ? new Date(b).getTime() : Number.NaN;
                isNaN(c) ? x(!0) : (h(c - (new Date).getTime()), x(!1, c / 1e3, E))
            }

            function x(a, b, c) {
                d(!1), C.trigger(k["default"].TIME_SYNCHRONIZATION_COMPLETED, {
                    time: b,
                    offset: c,
                    error: a ? new g["default"](p) : null
                })
            }

            function y(a, b) {
                var c = b || 0, e = a[c], f = function (a, b) {
                    var c = !a || !b;
                    c && H ? w() : x(c, a, b)
                };
                d(!0), e ? I.hasOwnProperty(e.schemeIdUri) ? I[e.schemeIdUri](e.value, function (a) {
                    var b = (new Date).getTime(), c = a - b;
                    h(c), B("Local time:      " + new Date(b)), B("Server time:     " + new Date(a)), B("Difference (ms): " + c), f(a, c)
                }, function () {
                    y(a, c + 1)
                }) : y(a, c + 1) : (h(0), f())
            }

            function z() {
                f(!1), d(!1)
            }

            var A = this.context, B = (0, o["default"])(A).getInstance().log, C = (0, i["default"])(A).getInstance(), D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0, K = void 0;
            return D = {initialize: a, getOffsetToDeviceTimeMs: c, setConfig: b, reset: z}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./../vo/Error.js"), g = d(f), h = a("./../../core/EventBus.js"), i = d(h), j = a("./../../core/events/Events.js"), k = d(j), l = a("../../core/FactoryMaker.js"), m = d(l), n = a("../../core/Debug.js"), o = d(n), p = 1, q = 5e3;
        e.__dashjs_factory_name = "TimeSyncController";
        var r = m["default"].getSingletonFactory(e);
        r.TIME_SYNC_FAILED_ERROR_CODE = p, r.HTTP_TIMEOUT_MS = q, c["default"] = r, b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/FactoryMaker.js": 9,
        "./../../core/EventBus.js": 8,
        "./../../core/events/Events.js": 11,
        "./../vo/Error.js": 135
    }],
    54: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                y.on(i["default"].XLINK_ELEMENT_LOADED, j, A)
            }

            function c(a) {
                B = a
            }

            function d(a) {
                C = a
            }

            function e(a) {
                var b;
                E = new m["default"](B, "", !0), D = a, b = l(D.Period_asArray, D, p, n), h(b, p, n)
            }

            function f() {
                y.off(i["default"].XLINK_ELEMENT_LOADED, j, A)
            }

            function h(a, b, c) {
                var d, e, f, g = {};
                for (g.elements = a, g.type = b, g.resolveType = c, 0 === g.elements.length && k(g), f = 0; f < g.elements.length; f++)d = g.elements[f], e = -1 !== d.url.indexOf("http://") ? d.url : d.originalContent.BaseURL + d.url, z.load(e, d, g)
            }

            function j(a) {
                var b, c, d, e = "<response>", f = "</response>", g = "";
                b = a.element, c = a.resolveObject, b.resolvedContent && (d = b.resolvedContent.indexOf(">") + 1, g = b.resolvedContent.substr(0, d) + e + b.resolvedContent.substr(d) + f, b.resolvedContent = E.xml_str2json(g)), v(c) && k(c)
            }

            function k(a) {
                var b, c, d = [];
                if (t(a), a.resolveType === o && y.trigger(i["default"].XLINK_READY, {manifest: D}), a.resolveType === n)switch (a.type) {
                    case p:
                        for (b = 0; b < D[p + "_asArray"].length; b++)c = D[p + "_asArray"][b], c.hasOwnProperty(q + "_asArray") && (d = d.concat(l(c[q + "_asArray"], c, q, n))), c.hasOwnProperty(r + "_asArray") && (d = d.concat(l(c[r + "_asArray"], c, r, n)));
                        h(d, q, n);
                        break;
                    case q:
                        y.trigger(i["default"].XLINK_READY, {manifest: D})
                }
            }

            function l(a, b, c, d) {
                var e, f, g, h = [];
                for (f = a.length - 1; f >= 0; f--)e = a[f], e.hasOwnProperty("xlink:href") && e["xlink:href"] === s && a.splice(f, 1);
                for (f = 0; f < a.length; f++)e = a[f], e.hasOwnProperty("xlink:href") && e.hasOwnProperty("xlink:actuate") && e["xlink:actuate"] === d && (g = u(e["xlink:href"], b, c, f, d, e), h.push(g));
                return h
            }

            function t(a) {
                var b, c, d, e, f, g, h = [];
                for (e = a.elements.length - 1; e >= 0; e--) {
                    if (b = a.elements[e], c = b.type + "_asArray", !b.resolvedContent || w())delete b.originalContent["xlink:actuate"], delete b.originalContent["xlink:href"], h.push(b.originalContent); else if (b.resolvedContent)for (f = 0; f < b.resolvedContent[c].length; f++)d = b.resolvedContent[c][f], h.push(d);
                    for (b.parentElement[c].splice(b.index, 1), g = 0; g < h.length; g++)b.parentElement[c].splice(b.index + g, 0, h[g]);
                    h = []
                }
                a.elements.length > 0 && C.run(D)
            }

            function u(a, b, c, d, e, f) {
                return {
                    url: a,
                    parentElement: b,
                    type: c,
                    index: d,
                    resolveType: e,
                    originalContent: f,
                    resolvedContent: null,
                    resolved: !1
                }
            }

            function v(a) {
                var b, c;
                for (b = 0; b < a.elements.length; b++)if (c = a.elements[b], c.resolved === !1)return !1;
                return !0
            }

            function w() {
                return !1
            }

            var x = this.context, y = (0, g["default"])(x).getInstance(), z = a.xlinkLoader, A = void 0, B = void 0, C = void 0, D = void 0, E = void 0;
            return A = {resolveManifestOnLoad: e, setMatchers: c, setIron: d, reset: f}, b(), A
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/EventBus.js"), g = d(f), h = a("../../core/events/Events.js"), i = d(h), j = a("../../core/FactoryMaker.js"), k = d(j), l = a("../../../externals/xml2json.js"), m = d(l), n = "onLoad", o = "onActuate", p = "Period", q = "AdaptationSet", r = "EventStream", s = "urn:mpeg:dash:resolve-to-zero:2013";
        e.__dashjs_factory_name = "XlinkController", c["default"] = k["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../externals/xml2json.js": 4,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11
    }],
    55: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                return f = (0, g["default"])(d).getInstance({
                    eventBus: a.eventBus,
                    metricsModel: a.metricsModel
                }), (0, k["default"])(d).create(a)
            }

            function b() {
                return (0, o["default"])(d).getInstance()
            }

            function c() {
                return (0, m["default"])(d).getInstance()
            }

            var d = this.context, e = void 0, f = void 0;
            return e = {createMetricsReporting: a, getReportingFactory: b, getMetricsHandlerFactory: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./utils/DVBErrorsTranslator.js"), g = d(f), h = a("./MetricsReportingEvents.js"), i = d(h), j = a("./controllers/MetricsCollectionController.js"), k = d(j), l = a("./metrics/MetricsHandlerFactory.js"), m = d(l), n = a("./reporting/ReportingFactory.js"), o = d(n), p = a("../../core/FactoryMaker.js"), q = d(p);
        e.__dashjs_factory_name = "MetricsReporting";
        var r = q["default"].getClassFactory(e);
        r.events = i["default"], c["default"] = r, b.exports = c["default"]
    }, {
        "../../core/FactoryMaker.js": 9,
        "./MetricsReportingEvents.js": 56,
        "./controllers/MetricsCollectionController.js": 57,
        "./metrics/MetricsHandlerFactory.js": 62,
        "./reporting/ReportingFactory.js": 67,
        "./utils/DVBErrorsTranslator.js": 69
    }],
    56: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value"in h)return h.value;
                    var i = h.get;
                    if (void 0 === i)return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j)return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a("../../core/events/EventsBase.js"), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.METRICS_INITIALISATION_COMPLETE = "internal_metricsReportingInitialized", this.BECAME_REPORTING_PLAYER = "internal_becameReportingPlayer"
            }

            return f(b, a), b
        }(i["default"]), k = new j;
        c["default"] = k, b.exports = c["default"]
    }, {"../../core/events/EventsBase.js": 12}],
    57: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(b) {
                if (!b.error) {
                    var c = Object.keys(e), d = (0, i["default"])(f).getInstance({dashManifestModel: a.dashManifestModel}).getMetrics(b.manifest);
                    d.forEach(function (b) {
                        var d = JSON.stringify(b);
                        if (e.hasOwnProperty(d))c.splice(d, 1); else try {
                            var h = (0, g["default"])(f).create(a);
                            h.initialize(b), e[d] = h
                        } catch (i) {
                        }
                    }), c.forEach(function (a) {
                        e[a].reset(), delete e[a]
                    }), h.trigger(m["default"].METRICS_INITIALISATION_COMPLETE)
                }
            }

            function c() {
                Object.keys(e).forEach(function (a) {
                    e[a].reset()
                }), e = {}
            }

            function d() {
                h.on(o["default"].MANIFEST_UPDATED, b), h.on(o["default"].STREAM_TEARDOWN_COMPLETE, c)
            }

            var e = {}, f = this.context, h = a.eventBus;
            return d(), {}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./MetricsController.js"), g = d(f), h = a("../utils/ManifestParsing.js"), i = d(h), j = a("../../../core/FactoryMaker.js"), k = d(j), l = a("../MetricsReportingEvents.js"), m = d(l), n = a("../../../core/events/Events.js"), o = d(n);
        e.__dashjs_factory_name = "MetricsCollectionController", c["default"] = k["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../MetricsReportingEvents.js": 56,
        "../utils/ManifestParsing.js": 71,
        "./MetricsController.js": 58
    }],
    58: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(b) {
                try {
                    f = (0, i["default"])(h).create({mediaElement: a.mediaElement}), f.initialize(b.Range), e = (0, k["default"])(h).create({log: a.log}), e.initialize(b.Reporting, f), d = (0, m["default"])(h).create({
                        log: a.log,
                        eventBus: a.eventBus
                    }), d.initialize(b.metrics, e)
                } catch (g) {
                    throw c(), g
                }
            }

            function c() {
                d && d.reset(), e && e.reset(), f && f.reset()
            }

            var d = void 0, e = void 0, f = void 0, g = void 0, h = this.context;
            return g = {initialize: b, reset: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("./RangeController.js"), i = d(h), j = a("./ReportingController.js"), k = d(j), l = a("./MetricsHandlersController.js"), m = d(l);
        e.__dashjs_factory_name = "MetricsController", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "./MetricsHandlersController.js": 59,
        "./RangeController.js": 60,
        "./ReportingController.js": 61
    }],
    59: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a) {
                e.forEach(function (b) {
                    b.handleNewMetric(a.metric, a.value, a.mediaType)
                })
            }

            function c(a, c) {
                a.split(",").forEach(function (a, b, d) {
                    var f;
                    if (-1 !== a.indexOf("(") && -1 === a.indexOf(")")) {
                        var g = d[b + 1];
                        g && -1 === g.indexOf("(") && -1 !== g.indexOf(")") && (a += "," + g, delete d[b + 1])
                    }
                    f = j.create(a, c), f && e.push(f)
                }), i.on(k["default"].METRIC_ADDED, b, f), i.on(k["default"].METRIC_UPDATED, b, f)
            }

            function d() {
                i.off(k["default"].METRIC_ADDED, b, f), i.off(k["default"].METRIC_UPDATED, b, f), e.forEach(function (a) {
                    return a.reset()
                }), e = []
            }

            var e = [], f = void 0, h = this.context, i = a.eventBus, j = (0, g["default"])(h).getInstance({
                log: a.log,
                eventBus: a.eventBus
            });
            return f = {initialize: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../metrics/MetricsHandlerFactory.js"), g = d(f), h = a("../../../core/FactoryMaker.js"), i = d(h), j = a("../../MediaPlayerEvents.js"), k = d(j);
        e.__dashjs_factory_name = "MetricsHandlersController", c["default"] = i["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../MediaPlayerEvents.js": 34,
        "../metrics/MetricsHandlerFactory.js": 62
    }],
    60: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a) {
                a && a.length && (a.forEach(function (a) {
                    var b = a.starttime, c = b + a.duration;
                    j.add(b, c)
                }), f = !!a[0]._useWallClockTime)
            }

            function c() {
                j.clear()
            }

            function d() {
                j = (0, i["default"])(g).create()
            }

            function e() {
                var a, b = j.length;
                if (!b)return !0;
                a = f ? (new Date).getTime() / 1e3 : k.currentTime;
                for (var c = 0; b > c; c += 1) {
                    var d = j.start(c), e = j.end(c);
                    if (a >= d && e > a)return !0
                }
                return !1
            }

            var f = !1, g = this.context, h = void 0, j = void 0, k = a.mediaElement;
            return h = {initialize: b, reset: c, isEnabled: e}, d(), h
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("../../utils/CustomTimeRanges.js"), i = d(h);
        e.__dashjs_factory_name = "RangeController", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9, "../../utils/CustomTimeRanges.js": 125}],
    61: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a, b) {
                a.some(function (a) {
                    var c = g.create(a, b);
                    return c ? (e.push(c), !0) : void 0
                })
            }

            function c() {
                e.forEach(function (a) {
                    return a.reset()
                }), e = []
            }

            function d(a, b) {
                e.forEach(function (c) {
                    return c.report(a, b)
                })
            }

            var e = [], f = void 0, g = (0, i["default"])(this.context).getInstance({log: a.log});
            return f = {initialize: b, reset: c, report: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("../reporting/ReportingFactory.js"), i = d(h);
        e.__dashjs_factory_name = "ReportingController", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9, "../reporting/ReportingFactory.js": 67}],
    62: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(b, c) {
                var d, e = b.match(g);
                if (e) {
                    try {
                        d = j[e[1]](h).create({eventBus: a.eventBus}), d.initialize(e[1], c, e[3], e[5])
                    } catch (i) {
                        d = null, f("MetricsHandlerFactory: Could not create handler for type " + e[1] + " with args " + e[3] + ", " + e[5] + " (" + i.message + ")")
                    }
                    return d
                }
            }

            function c(a, b) {
                j[a] = b
            }

            function d(a) {
                delete j[a]
            }

            var e = void 0, f = a.log, g = /([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/, h = this.context, j = {
                BufferLevel: i["default"],
                DVBErrors: k["default"],
                HttpList: m["default"],
                PlayList: o["default"],
                RepSwitchList: o["default"],
                TcpList: o["default"]
            };
            return e = {create: b, register: c, unregister: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("./handlers/BufferLevelHandler.js"), i = d(h), j = a("./handlers/DVBErrorsHandler.js"), k = d(j), l = a("./handlers/HttpListHandler.js"), m = d(l), n = a("./handlers/GenericMetricHandler.js"), o = d(n);
        e.__dashjs_factory_name = "MetricsHandlerFactory", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "./handlers/BufferLevelHandler.js": 63,
        "./handlers/DVBErrorsHandler.js": 64,
        "./handlers/GenericMetricHandler.js": 65,
        "./handlers/HttpListHandler.js": 66
    }],
    63: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                try {
                    return Object.keys(o).map(function (a) {
                        return o[a]
                    }).reduce(function (a, b) {
                        return a.level < b.level ? a : b
                    })
                } catch (a) {
                    return
                }
            }

            function b() {
                var b = a();
                b && l !== b.t && (l = b.t, g.report(j, b))
            }

            function c(a, c, d) {
                c && (h = n.validateN(d), g = c, j = n.reconstructFullMetricName(a, d), k = setInterval(b, h))
            }

            function d() {
                clearInterval(k), k = null, h = 0, g = null, l = null
            }

            function e(a, b, c) {
                "BufferLevel" === a && (o[c] = b)
            }

            var f = void 0, g = void 0, h = void 0, j = void 0, k = void 0, l = void 0, m = this.context, n = (0, i["default"])(m).getInstance(), o = [];
            return f = {initialize: c, reset: d, handleNewMetric: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../../core/FactoryMaker.js"), g = d(f), h = a("../../utils/HandlerHelpers.js"), i = d(h);
        e.__dashjs_factory_name = "BufferLevelHandler", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../../core/FactoryMaker.js": 9, "../../utils/HandlerHelpers.js": 70}],
    64: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                h.off(i["default"].METRICS_INITIALISATION_COMPLETE, b, this), h.trigger(i["default"].BECAME_REPORTING_PLAYER)
            }

            function c(a, c) {
                c && (g = c, h.on(i["default"].METRICS_INITIALISATION_COMPLETE, b, this))
            }

            function d() {
                g = null
            }

            function e(a, b) {
                "DVBErrors" === a && g && g.report(a, b)
            }

            var f = void 0, g = void 0, h = a.eventBus;
            return f = {initialize: c, reset: d, handleNewMetric: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../../core/FactoryMaker.js"), g = d(f), h = a("../../MetricsReportingEvents.js"), i = d(h);
        c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../../core/FactoryMaker.js": 9, "../../MetricsReportingEvents.js": 56}],
    65: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                e = a, f = b
            }

            function b() {
                f = null, e = void 0
            }

            function c(a, b) {
                a === e && f && f.report(e, b)
            }

            var d = void 0, e = void 0, f = void 0;
            return d = {initialize: a, reset: b, handleNewMetric: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "GenericMetricHandler", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../../core/FactoryMaker.js": 9}],
    66: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                var a = l;
                a.length && f && f.report(j, a), l = []
            }

            function b(b, c, d, e) {
                c && (g = m.validateN(d), f = c, e && e.length && (h = e), j = m.reconstructFullMetricName(b, d, e), k = setInterval(a, g))
            }

            function c() {
                clearInterval(k), k = null, g = null, h = null, l = [], f = null
            }

            function d(a, b) {
                "HttpList" === a && (h && h !== b.type || l.push(b))
            }

            var e = void 0, f = void 0, g = void 0, h = void 0, j = void 0, k = void 0, l = [], m = (0, i["default"])(this.context).getInstance();
            return e = {initialize: b, reset: c, handleNewMetric: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../../core/FactoryMaker.js"), g = d(f), h = a("../../utils/HandlerHelpers.js"), i = d(h);
        e.__dashjs_factory_name = "HttpListHandler", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../../core/FactoryMaker.js": 9, "../../utils/HandlerHelpers.js": 70}],
    67: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a, b) {
                var c;
                try {
                    c = e[a.schemeIdUri](f).create(), c.initialize(a, b)
                } catch (d) {
                    c = null, g("ReportingFactory: could not create Reporting with schemeIdUri " + a.schemeIdUri + " (" + d.message + ")")
                }
                return c
            }

            function c(a, b) {
                e[a] = b
            }

            function d(a) {
                delete e[a]
            }

            var e = {"urn:dvb:dash:reporting:2014": i["default"]}, f = this.context, g = a.log, h = void 0;
            return h = {create: b, register: c, unregister: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("./reporters/DVBReporting.js"), i = d(h);
        e.__dashjs_factory_name = "ReportingFactory", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9, "./reporters/DVBReporting.js": 68}],
    68: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b, c) {
                var d = new XMLHttpRequest, e = function () {
                    var a = q.indexOf(d);
                    -1 !== a && (q.splice(a, 1), d.status >= 200 && d.status < 300 ? b && b() : c && c())
                };
                q.push(d);
                try {
                    d.open("GET", a), d.onloadend = e, d.onerror = e, d.send()
                } catch (f) {
                    d.onerror()
                }
            }

            function b(b, c) {
                Array.isArray(c) || (c = [c]), l && o.isEnabled() && c.forEach(function (c) {
                    var d = g.serialise(c);
                    j && "DVBErrors" !== b && (d = "metricname=" + b + "&" + d), d = n + "?" + d, a(d, null, function () {
                        l = !1
                    })
                })
            }

            function c(a, b) {
                var c;
                if (o = b, n = a["dvb:reportingUrl"], !n)throw new Error("required parameter missing (dvb:reportingUrl)");
                m || (c = a["dvb:probability"] || a["dvb:priority"] || 0, c && (1e3 === c || c / 1e3 >= h.random()) && (l = !0), m = !0)
            }

            function d() {
                p || (q.forEach(function (a) {
                    return a.abort()
                }), q = []), m = !1, l = !1, n = null, o = null
            }

            var e = void 0, f = this.context, g = (0, i["default"])(f).getInstance(), h = (0, k["default"])(f).getInstance(), j = !0, l = !1, m = !1, n = null, o = null, p = !0, q = [];
            return e = {report: b, initialize: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../../core/FactoryMaker.js"), g = d(f), h = a("../../utils/MetricSerialiser.js"), i = d(h), j = a("../../utils/RNG.js"), k = d(j);
        e.__dashjs_factory_name = "DVBReporting", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../../core/FactoryMaker.js": 9, "../../utils/MetricSerialiser.js": 72, "../../utils/RNG.js": 73}],
    69: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a) {
                a.error || (q = a.manifest)
            }

            function c() {
                h({errorcode: g["default"].BECAME_REPORTER})
            }

            function d(a) {
                (0 === a.responsecode || a.responsecode >= 400 || a.responsecode < 100 || a.responsecode >= 600) && h({
                    errorcode: a.responsecode || g["default"].CONNECTION_ERROR,
                    url: a.url,
                    terror: a.tresponse
                })
            }

            function e(a) {
                switch (a.metric) {
                    case"HttpList":
                        d(a.value)
                }
            }

            function f(a) {
                var b, c = a.error ? a.error.code : 0;
                switch (c) {
                    case MediaError.MEDIA_ERR_NETWORK:
                        b = g["default"].CONNECTION_ERROR;
                        break;
                    case MediaError.MEDIA_ERR_DECODE:
                        b = g["default"].CORRUPT_MEDIA_OTHER;
                        break;
                    default:
                        return
                }
                h({errorcode: b})
            }

            function h(a) {
                var b = new g["default"];
                if (q) {
                    for (var c in a)a.hasOwnProperty(c) && (b[c] = a[c]);
                    b.mpdurl || (b.mpdurl = q.originalUrl || q.url), b.servicelocation || (b.servicelocation = q.BaseURL.serviceLocation), b.terror || (b.terror = new Date), p.addDVBErrors(b)
                }
            }

            function j() {
                o.on(i["default"].MANIFEST_UPDATED, b, n), o.on(k["default"].METRIC_ADDED, e, n), o.on(k["default"].METRIC_UPDATED, e, n), o.on(k["default"].PLAYBACK_ERROR, f, n), o.on(m["default"].BECAME_REPORTING_PLAYER, c, n)
            }

            function l() {
                o.off(i["default"].MANIFEST_UPDATED, b, n), o.off(k["default"].METRIC_ADDED, e, n), o.off(k["default"].METRIC_UPDATED, e, n), o.off(k["default"].PLAYBACK_ERROR, f, n), o.off(m["default"].BECAME_REPORTING_PLAYER, c, n)
            }

            var n = void 0, o = a.eventBus, p = a.metricsModel, q = void 0;
            return n = {initialise: j, reset: l}, j(), n
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/DVBErrors.js"), g = d(f), h = a("../../../core/events/Events.js"), i = d(h), j = a("../../MediaPlayerEvents.js"), k = d(j), l = a("../MetricsReportingEvents.js"), m = d(l), n = a("../../../core/FactoryMaker.js"), o = d(n);
        e.__dashjs_factory_name = "DVBErrorsTranslator", c["default"] = o["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../../MediaPlayerEvents.js": 34,
        "../MetricsReportingEvents.js": 56,
        "../vo/DVBErrors.js": 74
    }],
    70: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            return {
                reconstructFullMetricName: function (a, b, c) {
                    var d = a;
                    return b && (d += "(" + b, c && c.length && (d += "," + c), d += ")"), d
                }, validateN: function (a) {
                    if (!a)throw"missing n";
                    if (isNaN(a))throw"n is NaN";
                    if (0 > a)throw"n must be positive";
                    return a
                }
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "HandlerHelpers", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9}],
    71: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a, b, c) {
                var d, f, g = e.getMpd(a), h = 0;
                return b ? h = g.availabilityStartTime.getTime() / 1e3 : (d = this.getRegularPeriods(a, g), d.length && (h = d[0].start)), f = h, c && c.hasOwnProperty("starttime") && (f += c.starttime), f
            }

            function c(a) {
                var c = [];
                return a.Metrics_asArray && a.Metrics_asArray.forEach(function (d) {
                    var f = new g["default"], h = e.getIsDynamic(a);
                    d.hasOwnProperty("metrics") && (f.metrics = d.metrics, d.Range_asArray && d.Range_asArray.forEach(function (c) {
                        var d = new i["default"];
                        d.starttime = b(a, h, c), c.hasOwnProperty("duration") ? d.duration = c.duration : d.duration = e.getDuration(a), d._useWallClockTime = h, f.Range.push(d)
                    }), d.Reporting_asArray && (d.Reporting_asArray.forEach(function (a) {
                        var b = new k["default"];
                        if (a.hasOwnProperty("schemeIdUri")) {
                            b.schemeIdUri = a.schemeIdUri;
                            for (var c in a)a.hasOwnProperty(c) && (b[c] = a[c]);
                            f.Reporting.push(b)
                        }
                    }), c.push(f)));
                }), c
            }

            var d = void 0, e = a.dashManifestModel;
            return d = {getMetrics: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/Metrics.js"), g = d(f), h = a("../vo/Range.js"), i = d(h), j = a("../vo/Reporting.js"), k = d(j), l = a("../../../core/FactoryMaker.js"), m = d(l);
        e.__dashjs_factory_name = "ManifestParsing", c["default"] = m["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9, "../vo/Metrics.js": 75, "../vo/Range.js": 76, "../vo/Reporting.js": 77}],
    72: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(b) {
                var c, d, e = [], f = [];
                for (c in b)if (b.hasOwnProperty(c) && 0 !== c.indexOf("_")) {
                    if (d = b[c], (void 0 === d || null === d) && (d = ""), Array.isArray(d)) {
                        if (!d.length)continue;
                        f = [], d.forEach(function (b) {
                            var c = "Object" !== Object.prototype.toString.call(b).slice(8, -1);
                            f.push(c ? b : a(b))
                        }), d = encodeURIComponent(f.join(","))
                    } else"string" == typeof d ? d = encodeURIComponent(d) : d instanceof Date ? d = d.toISOString() : "number" == typeof d && (d = Math.round(d));
                    e.push(c + "=" + d)
                }
                return e.join("&")
            }

            return {serialise: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "MetricSerialiser", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9}],
    73: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                c && (g || (g = new d(f)), c.getRandomValues(g), h = 0)
            }

            function b(b, d) {
                var f;
                return b || (b = 0), d || (d = 1), c ? (h === g.length && a(), f = g[h] / e, h += 1) : f = Math.random(), f * (d - b) + b
            }

            var c = window.crypto || window.msCrypto, d = Uint32Array, e = Math.pow(2, 8 * d.BYTES_PER_ELEMENT) - 1, f = 10, g = void 0, h = void 0, i = void 0;
            return i = {random: b}, a(), i
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "RNG", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9}],
    74: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.mpdurl = null, this.errorcode = null, this.terror = null, this.url = null, this.ipaddress = null, this.servicelocation = null
        };
        e.SSL_CONNECTION_FAILED_PREFIX = "SSL", e.DNS_RESOLUTION_FAILED = "C00", e.HOST_UNREACHABLE = "C01", e.CONNECTION_REFUSED = "C02", e.CONNECTION_ERROR = "C03", e.CORRUPT_MEDIA_ISOBMFF = "M00", e.CORRUPT_MEDIA_OTHER = "M01", e.BASE_URL_CHANGED = "F00", e.BECAME_REPORTER = "S00", c["default"] = e, b.exports = c["default"]
    }, {}],
    75: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.metrics = "", this.Range = [], this.Reporting = []
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    76: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.starttime = 0, this.duration = 1 / 0, this._useWallClockTime = !1
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    77: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.schemeIdUri = "", this.value = ""
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    78: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                F = null, J = null, G = [], H = [], C.on(i["default"].LOADING_COMPLETED, y, E), C.on(i["default"].PLAYBACK_SEEKING, z, E)
            }

            function c(a) {
                J = a
            }

            function d(a) {
                F = a
            }

            function e() {
                return F
            }

            function f(a) {
                var b = function (a, b) {
                    return a.action === m["default"].ACTION_COMPLETE && a.action === b.action
                }, c = function (a, b) {
                    return a.url === b.url && a.startTime === b.startTime
                }, d = function (a, b) {
                    return isNaN(a.index) && isNaN(b.index) && a.quality === b.quality
                }, e = function (e) {
                    var f, g, h = !1, i = e.length;
                    for (g = 0; i > g; g++)if (f = e[g], c(a, f) || d(a, f) || b(a, f)) {
                        h = !0;
                        break
                    }
                    return h
                };
                return e(H) || e(G)
            }

            function h(a) {
                var b, c = [], d = [], e = 1;
                if (!a || !a.state)return c;
                a.state instanceof Array ? (e = a.state.length, b = a.state) : b = [a.state];
                for (var f = 0; e > f; f++)c = w(b[f]), d = d.concat(v(c, a));
                return d
            }

            function j(a) {
                var b, c = G.length - 1, d = NaN, e = null;
                for (b = c; b >= 0; b--)e = G[b], d = e.startTime, !isNaN(d) && a > d && t(G, e)
            }

            function k() {
                var a = [];
                for (J.abort(); H.length > 0;)a.push(H[0]), t(H, H[0]);
                return H = [], a
            }

            function l(a) {
                var b = (new Date).getTime();
                if (a) {
                    if (b < a.delayLoadingTime)return void(I = setTimeout(function () {
                        l(a)
                    }, a.delayLoadingTime - b));
                    switch (a.action) {
                        case m["default"].ACTION_COMPLETE:
                            G.push(a), x(a, q), C.trigger(i["default"].STREAM_COMPLETED, {
                                request: a,
                                fragmentModel: this
                            });
                            break;
                        case m["default"].ACTION_DOWNLOAD:
                            x(a, p), H.push(a), r(a);
                            break;
                        default:
                            B("Unknown request action.")
                    }
                }
            }

            function n() {
                C.off(i["default"].LOADING_COMPLETED, y, this), C.off(i["default"].PLAYBACK_SEEKING, z, this), J.abort(), J = null, A = null, G = [], H = []
            }

            function r(a) {
                C.trigger(i["default"].FRAGMENT_LOADING_STARTED, {sender: E, request: a}), J.load(a)
            }

            function t(a, b) {
                var c = a.indexOf(b);
                -1 !== c && a.splice(c, 1)
            }

            function u(a, b, c) {
                var d, e = a.length - 1, f = NaN, g = NaN, h = null;
                for (d = e; d >= 0; d--)if (h = a[d], f = h.startTime, g = f + h.duration, c = c || h.duration / 2, !isNaN(f) && !isNaN(g) && b + c >= f && g > b - c || isNaN(f) && isNaN(b))return h;
                return null
            }

            function v(a, b) {
                return b ? b.hasOwnProperty("time") ? [u(a, b.time, b.threshold)] : a.filter(function (a) {
                    for (var c in b)if ("state" !== c && b.hasOwnProperty(c) && a[c] != b[c])return !1;
                    return !0
                }) : a
            }

            function w(a) {
                var b;
                switch (a) {
                    case p:
                        b = H;
                        break;
                    case q:
                        b = G;
                        break;
                    default:
                        b = []
                }
                return b
            }

            function x(a, b) {
                if (a) {
                    var c = a.mediaType, d = new Date, e = a.type, f = a.startTime, g = a.availabilityStartTime, h = a.duration, i = a.quality, j = a.range;
                    D.addSchedulingInfo(c, d, e, f, g, h, i, j, b), D.addRequestsQueue(c, H, G)
                }
            }

            function y(a) {
                if (a.sender === J) {
                    var b = a.request, c = a.response, d = a.error;
                    H.splice(H.indexOf(b), 1), c && !d && G.push(b), x(b, d ? s : q), C.trigger(i["default"].FRAGMENT_LOADING_COMPLETED, {
                        request: b,
                        response: c,
                        error: d,
                        sender: this
                    })
                }
            }

            function z() {
                void 0 !== I && clearTimeout(I)
            }

            var A = this.context, B = (0, o["default"])(A).getInstance().log, C = (0, g["default"])(A).getInstance(), D = a.metricsModel, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0;
            return E = {
                setLoader: c,
                setScheduleController: d,
                getScheduleController: e,
                getRequests: h,
                isFragmentLoaded: f,
                removeExecutedRequestsBeforeTime: j,
                abortRequests: k,
                executeRequest: l,
                reset: n
            }, b(), E
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/EventBus.js"), g = d(f), h = a("../../core/events/Events.js"), i = d(h), j = a("../../core/FactoryMaker.js"), k = d(j), l = a("../vo/FragmentRequest.js"), m = d(l), n = a("../../core/Debug.js"), o = d(n), p = "loading", q = "executed", r = "canceled", s = "failed";
        e.__dashjs_factory_name = "FragmentModel";
        var t = k["default"].getClassFactory(e);
        t.FRAGMENT_MODEL_LOADING = p, t.FRAGMENT_MODEL_EXECUTED = q, t.FRAGMENT_MODEL_CANCELED = r, t.FRAGMENT_MODEL_FAILED = s, c["default"] = t, b.exports = c["default"]
    }, {
        "../../core/Debug.js": 7,
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../vo/FragmentRequest.js": 136
    }],
    79: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                return f
            }

            function b(a) {
                f = a, d.trigger(i["default"].MANIFEST_LOADED, {data: a})
            }

            var c = this.context, d = (0, g["default"])(c).getInstance(), e = void 0, f = void 0;
            return e = {getValue: a, setValue: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/EventBus.js"), g = d(f), h = a("../../core/events/Events.js"), i = d(h), j = a("../../core/FactoryMaker.js"), k = d(j);
        e.__dashjs_factory_name = "ManifestModel", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/EventBus.js": 8, "../../core/FactoryMaker.js": 9, "../../core/events/Events.js": 11}],
    80: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                ga = [], fa = !1, ea = !0, ia = !1, xa = !1, la = {enabled: !0, ttl: j}, ma = {
                    enabled: !0,
                    ttl: k
                }, ha = i, ja = n, ka = o, na = p, oa = q, pa = r, qa = s, ra = t, sa = l, ta = m, ua = u, va = v, wa = w
            }

            function b(a) {
                xa = a
            }

            function c() {
                return xa
            }

            function d(a) {
                sa = a
            }

            function e() {
                return sa
            }

            function f(a) {
                ta = a
            }

            function g() {
                return ta
            }

            function h(a) {
                na = a
            }

            function x() {
                return na
            }

            function y(a) {
                oa = a
            }

            function z() {
                return oa
            }

            function A(a) {
                pa = a
            }

            function B() {
                return pa
            }

            function C(a) {
                qa = a
            }

            function D() {
                return qa
            }

            function E(a) {
                ra = a
            }

            function F() {
                return ra
            }

            function G(a) {
                ja = a
            }

            function H() {
                return ja
            }

            function I(a, b) {
                la.enabled = a, void 0 === b || isNaN(b) || "number" != typeof b || (la.ttl = b)
            }

            function J() {
                return la
            }

            function K(a, b) {
                ma.enabled = a, void 0 === b || isNaN(b) || "number" != typeof b || (ma.ttl = b)
            }

            function L() {
                return ma
            }

            function M(a) {
                ka = a
            }

            function N() {
                return ka
            }

            function O(a) {
                ua = a
            }

            function P() {
                return ua
            }

            function Q(a) {
                va = a
            }

            function R() {
                return va
            }

            function S(a) {
                wa = a
            }

            function T() {
                return wa
            }

            function U(a) {
                ia = a
            }

            function V() {
                return ia
            }

            function W(a) {
                ha = a
            }

            function X() {
                return ha
            }

            function Y(a) {
                ea = a
            }

            function Z() {
                return ea
            }

            function $(a) {
                fa = a
            }

            function _() {
                return fa
            }

            function aa(a) {
                ga = a
            }

            function ba() {
                return ga
            }

            function ca() {
            }

            var da = void 0, ea = void 0, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0, ua = void 0, va = void 0, wa = void 0, xa = void 0;
            return da = {
                setBufferOccupancyABREnabled: b,
                getBufferOccupancyABREnabled: c,
                setBandwidthSafetyFactor: d,
                getBandwidthSafetyFactor: e,
                setAbandonLoadTimeout: f,
                getAbandonLoadTimeout: g,
                setLastBitrateCachingInfo: I,
                getLastBitrateCachingInfo: J,
                setLastMediaSettingsCachingInfo: K,
                getLastMediaSettingsCachingInfo: L,
                setStableBufferTime: h,
                getStableBufferTime: x,
                setBufferTimeAtTopQuality: y,
                getBufferTimeAtTopQuality: z,
                setBufferTimeAtTopQualityLongForm: A,
                getBufferTimeAtTopQualityLongForm: B,
                setLongFormContentDurationThreshold: C,
                getLongFormContentDurationThreshold: D,
                setRichBufferThreshold: E,
                getRichBufferThreshold: F,
                setBufferToKeep: G,
                getBufferToKeep: H,
                setBufferPruningInterval: M,
                getBufferPruningInterval: N,
                setFragmentRetryAttempts: O,
                getFragmentRetryAttempts: P,
                setFragmentRetryInterval: Q,
                getFragmentRetryInterval: R,
                setWallclockTimeUpdateInterval: S,
                getWallclockTimeUpdateInterval: T,
                setScheduleWhilePaused: U,
                getScheduleWhilePaused: V,
                getUseSuggestedPresentationDelay: _,
                setUseSuggestedPresentationDelay: $,
                setLiveDelayFragmentCount: W,
                getLiveDelayFragmentCount: X,
                setUseManifestDateHeaderTimeSource: Y,
                getUseManifestDateHeaderTimeSource: Z,
                setUTCTimingSources: aa,
                getUTCTimingSources: ba,
                reset: ca
            }, a(), da
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f), h = {
            scheme: "urn:mpeg:dash:utc:http-xsdate:2014",
            value: "http://time.akamai.com/?iso"
        }, i = 4, j = 36e4, k = 36e4, l = .9, m = 1e4, n = 30, o = 30, p = 12, q = 30, r = 60, s = 600, t = 20, u = 3, v = 1e3, w = 50;
        e.__dashjs_factory_name = "MediaPlayerModel";
        var x = g["default"].getSingletonFactory(e);
        x.DEFAULT_UTC_TIMING_SOURCE = h, c["default"] = x, b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    81: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                T = {}
            }

            function b(a) {
                a && a.adapter && (S = a.adapter)
            }

            function c() {
                Q.trigger(E["default"].METRICS_CHANGED)
            }

            function d(a) {
                Q.trigger(E["default"].METRIC_CHANGED, {mediaType: a}), c()
            }

            function e(a, b, c) {
                Q.trigger(E["default"].METRIC_UPDATED, {mediaType: a, metric: b, value: c}), d(a)
            }

            function f(a, b, c) {
                Q.trigger(E["default"].METRIC_ADDED, {mediaType: a, metric: b, value: c}), d(a)
            }

            function h(a) {
                delete T[a], d(a)
            }

            function j() {
                T = {}, c()
            }

            function l(a) {
                return T.hasOwnProperty(a) ? T[a] : null
            }

            function n(a) {
                var b;
                return T.hasOwnProperty(a) ? b = T[a] : (b = new g["default"], T[a] = b), b
            }

            function p(a, b, c, d, e, g) {
                var h = new i["default"];
                return h.tcpid = b, h.dest = c, h.topen = d, h.tclose = e, h.tconnect = g, n(a).TcpList.push(h), f(a, S.metricsList.TCP_CONNECTION, h), h
            }

            function r(a, b, c, d, e, g, h, i, j, l, m, o, p) {
                var q = new k["default"];
                return e && e !== d && (r(a, null, c, d, null, g, h, null, null, null, m, null, null), q.actualurl = e), q.tcpid = b, q.type = c, q.url = d, q.range = g, q.trequest = h, q.tresponse = i, q.responsecode = l, q._tfinish = j, q._stream = a, q._mediaduration = m, q._responseHeaders = o, p ? p.forEach(function (a) {
                    t(q, a.s, a.d, a.b)
                }) : (delete q.interval, delete q.trace), n(a).HttpList.push(q), f(a, S.metricsList.HTTP_REQUEST, q), q
            }

            function t(a, b, c, d) {
                var e = new k["default"].Trace;
                return e.s = b, e.d = c, e.b = d, a.trace.push(e), a.interval || (a.interval = 0), a.interval += c, e
            }

            function v(a, b, c, d, e) {
                var g = new m["default"];
                return g.t = b, g.mt = c, g.to = d, e ? g.lto = e : delete g.lto, n(a).RepSwitchList.push(g), f(a, S.metricsList.TRACK_SWITCH, g), g
            }

            function x(a, b, c) {
                var d = new o["default"];
                return d.t = b, d.level = c, n(a).BufferLevel.push(d), f(a, S.metricsList.BUFFER_LEVEL, d), d
            }

            function z(a, b, c) {
                var d = new q["default"];
                return d.target = c, d.state = b, n(a).BufferState.push(d), f(a, S.metricsList.BUFFER_STATE, d), d
            }

            function B(a, b, c, d) {
                var e = new s["default"];
                return e.time = b, e.range = d, e.manifestInfo = c, n(a).DVRInfo.push(e), f(a, S.metricsList.DVR_INFO, e), e
            }

            function D(a, b) {
                var c = new u["default"], d = n(a).DroppedFrames;
                return c.time = b.creationTime, c.droppedFrames = b.droppedVideoFrames, d.length > 0 && d[d.length - 1] == c ? d[d.length - 1] : (d.push(c), f(a, S.metricsList.DROPPED_FRAMES, c), c)
            }

            function F(a, b, c, d, e, g, h, i, j) {
                var k = new y["default"];
                return k.mediaType = a, k.t = b, k.type = c, k.startTime = d, k.availabilityStartTime = e, k.duration = g, k.quality = h, k.range = i, k.state = j, n(a).SchedulingInfo.push(k), f(a, S.metricsList.SCHEDULING_INFO, k), k
            }

            function G(a, b, c) {
                var d = new C["default"];
                d.loadingRequests = b, d.executedRequests = c, n(a).RequestsQueue = d, f(a, S.metricsList.REQUESTS_QUEUE, d)
            }

            function H(a, b, c, d, e, g, h, i, j, k) {
                var l = new w["default"], m = n("stream");
                return l.mediaType = a, l.type = b, l.requestTime = c, l.fetchTime = d, l.availabilityStartTime = e, l.presentationStartTime = g, l.clientTimeOffset = h, l.currentTime = i, l.buffered = j, l.latency = k, m.ManifestUpdate.push(l), f(a, S.metricsList.MANIFEST_UPDATE, l), l
            }

            function J(a, b) {
                if (a) {
                    for (var c in b)a[c] = b[c];
                    e(a.mediaType, S.metricsList.MANIFEST_UPDATE, a)
                }
            }

            function K(a, b, c, d, f) {
                if (a) {
                    var g = new w["default"].StreamInfo;
                    return g.id = b, g.index = c, g.start = d, g.duration = f, a.streamInfo.push(g), e(a.mediaType, S.metricsList.MANIFEST_UPDATE_STREAM_INFO, a), g
                }
                return null
            }

            function L(a, b, c, d, f, g, h, i) {
                if (a) {
                    var j = new w["default"].TrackInfo;
                    return j.id = b, j.index = c, j.streamIndex = d, j.mediaType = f, j.startNumber = h, j.fragmentInfoType = i, j.presentationTimeOffset = g, a.trackInfo.push(j), e(a.mediaType, S.metricsList.MANIFEST_UPDATE_TRACK_INFO, a), j
                }
                return null
            }

            function M(a) {
                var b = "stream";
                return a.trace && Array.isArray(a.trace) ? a.trace.forEach(function (a) {
                    a.hasOwnProperty("subreplevel") && !a.subreplevel && delete a.subreplevel
                }) : delete a.trace, n(b).PlayList.push(a), f(b, S.metricsList.PLAY_LIST, a), a
            }

            function N(a) {
                var b = "stream";
                return n(b).DVBErrors.push(a), f(b, S.metricsList.DVB_ERRORS, a), a
            }

            function O(a, b) {
                var c = new I["default"];
                return c._s = b, n(a).BolaState = [c], f(a, "BolaState", c), c
            }

            var P = this.context, Q = (0, A["default"])(P).getInstance(), R = void 0, S = void 0, T = void 0;
            return R = {
                metricsChanged: c,
                metricChanged: d,
                metricUpdated: e,
                metricAdded: f,
                clearCurrentMetricsForType: h,
                clearAllCurrentMetrics: j,
                getReadOnlyMetricsFor: l,
                getMetricsFor: n,
                addTcpConnection: p,
                addHttpRequest: r,
                addRepresentationSwitch: v,
                addBufferLevel: x,
                addBufferState: z,
                addDVRInfo: B,
                addDroppedFrames: D,
                addSchedulingInfo: F,
                addRequestsQueue: G,
                addManifestUpdate: H,
                updateManifestUpdateInfo: J,
                addManifestUpdateStreamInfo: K,
                addManifestUpdateRepresentationInfo: L,
                addPlayList: M,
                addDVBErrors: N,
                updateBolaState: O,
                setConfig: b
            }, a(), R
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/MetricsList.js"), g = d(f), h = a("../vo/metrics/TCPConnection.js"), i = d(h), j = a("../vo/metrics/HTTPRequest.js"), k = d(j), l = a("../vo/metrics/RepresentationSwitch.js"), m = d(l), n = a("../vo/metrics/BufferLevel.js"), o = d(n), p = a("../vo/metrics/BufferState.js"), q = d(p), r = a("../vo/metrics/DVRInfo.js"), s = d(r), t = a("../vo/metrics/DroppedFrames.js"), u = d(t), v = a("../vo/metrics/ManifestUpdate.js"), w = d(v), x = a("../vo/metrics/SchedulingInfo.js"), y = d(x), z = a("../../core/EventBus.js"), A = d(z), B = a("../vo/metrics/RequestsQueue.js"), C = d(B), D = a("../../core/events/Events.js"), E = d(D), F = a("../../core/FactoryMaker.js"), G = d(F), H = a("../vo/metrics/BolaState.js"), I = d(H);
        e.__dashjs_factory_name = "MetricsModel", c["default"] = G["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../vo/MetricsList.js": 140,
        "../vo/metrics/BolaState.js": 145,
        "../vo/metrics/BufferLevel.js": 146,
        "../vo/metrics/BufferState.js": 147,
        "../vo/metrics/DVRInfo.js": 148,
        "../vo/metrics/DroppedFrames.js": 149,
        "../vo/metrics/HTTPRequest.js": 150,
        "../vo/metrics/ManifestUpdate.js": 151,
        "../vo/metrics/RepresentationSwitch.js": 153,
        "../vo/metrics/RequestsQueue.js": 154,
        "../vo/metrics/SchedulingInfo.js": 155,
        "../vo/metrics/TCPConnection.js": 156
    }],
    82: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                h = new g["default"], i = [], j = !1
            }

            function b() {
                return h
            }

            function c() {
                return i
            }

            function d() {
                return j
            }

            function e(a) {
                function b(a, b, c, d) {
                    var e = d[0].split(/[=]/);
                    return d.push({key: e[0], value: e[1]}), d.shift(), d
                }

                function c(a, b, c) {
                    return b > 0 && (l && 0 === i.length ? i = c[b].split(/[&]/) : m && (e = c[b].split(/[&]/))), c
                }

                if (!a)return null;
                var d, e = [], f = new RegExp(/[?]/), g = new RegExp(/[#]/), k = new RegExp(/^(https:)?\/\//i), l = f.test(a), m = g.test(a);
                return j = k.test(a), d = a.split(/[?#]/).map(c), i.length > 0 && (i = i.reduce(b, null)), e.length > 0 && (e = e.reduce(b, null), e.forEach(function (a) {
                    h[a.key] = a.value
                })), a
            }

            var f = void 0, h = void 0, i = void 0, j = void 0;
            return f = {initialize: a, parseURI: e, getURIFragmentData: b, getURIQueryData: c, isManifestHTTPS: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/URIFragmentData.js"), g = d(f), h = a("../../core/FactoryMaker.js"), i = d(h);
        e.__dashjs_factory_name = "URIQueryAndFragmentModel", c["default"] = i["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9, "../vo/URIFragmentData.js": 144}],
    83: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                v = []
            }

            function b(a) {
                !s || s.readyState < 2 || (s.playbackRate = a)
            }

            function c(a) {
                if (s.currentTime != a)try {
                    s.currentTime = a
                } catch (b) {
                    0 === s.readyState && b.code === b.INVALID_STATE_ERR && setTimeout(function () {
                        s.currentTime = a
                    }, 400)
                }
            }

            function d() {
                return s
            }

            function e(a) {
                s = a
            }

            function f(a) {
                a && (s.src = a)
            }

            function g() {
                return s.src
            }

            function h() {
                return u
            }

            function i(a) {
                u = a
            }

            function j() {
                return t
            }

            function k(a) {
                t = a, t.style.position = "absolute", t.style.display = "flex", t.style.overflow = "hidden", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0
            }

            function l(a, b) {
                p(a, b)
            }

            function m() {
                return v.length > 0
            }

            function n(a) {
                var c = void 0;
                null === a || s.seeking || -1 !== v.indexOf(a) || (v.push(a), 1 === v.length && (c = document.createEvent("Event"), c.initEvent("waiting", !0, !1), w = s.playbackRate, b(0), s.dispatchEvent(c)))
            }

            function o(a) {
                var c = v.indexOf(a), d = void 0;
                null !== a && (-1 !== c && v.splice(c, 1), m() === !1 && 0 === s.playbackRate && (d = document.createEvent("Event"), d.initEvent("playing", !0, !1), b(w || 1), s.dispatchEvent(d)))
            }

            function p(a, b) {
                b ? n(a) : o(a)
            }

            function q() {
                var a = "webkitDroppedFrameCount"in s, b = "getVideoPlaybackQuality"in s, c = null;
                return b ? c = s.getVideoPlaybackQuality() : a && (c = {
                    droppedVideoFrames: s.webkitDroppedFrameCount,
                    creationTime: new Date
                }), c
            }

            var r = void 0, s = void 0, t = void 0, u = void 0, v = void 0, w = void 0;
            return r = {
                initialize: a,
                setCurrentTime: c,
                setStallState: l,
                getElement: d,
                setElement: e,
                setSource: f,
                getSource: g,
                getVideoContainer: h,
                setVideoContainer: i,
                getTTMLRenderingDiv: j,
                setTTMLRenderingDiv: k,
                getPlaybackQuality: q
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "VideoModel", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    84: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value"in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), g = a("../../../externals/base64.js"), h = d(g), i = function () {
            function a() {
                e(this, a)
            }

            return f(a, null, [{
                key: "findCencContentProtection", value: function (a) {
                    for (var b = null, c = 0; c < a.length; ++c) {
                        var d = a[c];
                        "urn:mpeg:dash:mp4protection:2011" === d.schemeIdUri.toLowerCase() && "cenc" === d.value.toLowerCase() && (b = d)
                    }
                    return b
                }
            }, {
                key: "getPSSHData", value: function (a) {
                    var b = 8, c = new DataView(a), d = c.getUint8(b);
                    return b += 20, d > 0 && (b += 4 + 16 * c.getUint32(b)), b += 4, a.slice(b)
                }
            }, {
                key: "getPSSHForKeySystem", value: function (b, c) {
                    var d = a.parsePSSHList(c);
                    return d.hasOwnProperty(b.uuid.toLowerCase()) ? d[b.uuid.toLowerCase()] : null
                }
            }, {
                key: "parseInitDataFromContentProtection", value: function (a) {
                    return "pssh"in a ? h["default"].decodeArray(a.pssh.__text).buffer : null
                }
            }, {
                key: "parsePSSHList", value: function (a) {
                    if (null === a)return [];
                    for (var b = new DataView(a), c = !1, d = {}, e = 0; !c;) {
                        var f, g, h, i, j, k = e;
                        if (e >= b.buffer.byteLength)break;
                        if (f = b.getUint32(e), g = e + f, e += 4, 1886614376 === b.getUint32(e))if (e += 4, h = b.getUint8(e), 0 === h || 1 === h) {
                            e++, e += 3, i = "";
                            var l, m;
                            for (l = 0; 4 > l; l++)m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 4, i += "-", l = 0; 2 > l; l++)m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 2, i += "-", l = 0; 2 > l; l++)m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 2, i += "-", l = 0; 2 > l; l++)m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 2, i += "-", l = 0; 6 > l; l++)m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            e += 6, i = i.toLowerCase(), j = b.getUint32(e), e += 4, d[i] = b.buffer.slice(k, g), e = g
                        } else e = g; else e = g
                    }
                    return d
                }
            }]), a
        }();
        c["default"] = i, b.exports = c["default"]
    }, {"../../../externals/base64.js": 1}],
    85: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                var c = null, d = (0, i["default"])(e).getInstance();
                d.setConfig({log: a.log}), d.initialize();
                var f = b(a);
                return !c && f && (c = (0, g["default"])(e).create({
                    protectionModel: f,
                    protectionKeyController: d,
                    adapter: a.adapter,
                    eventBus: a.eventBus,
                    log: a.log
                }), a.capabilities.setEncryptedMediaSupported(!0)), c
            }

            function b(a) {
                var b = a.log, d = a.eventBus, f = a.videoModel.getElement();
                return void 0 !== f.onencrypted && void 0 !== f.mediaKeys && void 0 !== navigator.requestMediaKeySystemAccess && "function" == typeof navigator.requestMediaKeySystemAccess ? (b("EME detected on this user agent! (ProtectionModel_21Jan2015)"), (0, m["default"])(e).create({
                    log: b,
                    eventBus: d
                })) : c(f, u) ? (b("EME detected on this user agent! (ProtectionModel_3Feb2014)"), (0, o["default"])(e).create({
                    log: b,
                    eventBus: d,
                    api: c(f, u)
                })) : c(f, t) ? (b("EME detected on this user agent! (ProtectionModel_01b)"), (0, q["default"])(e).create({
                    log: b,
                    eventBus: d,
                    api: c(f, t)
                })) : (b("No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!"), null)
            }

            function c(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if ("function" == typeof a[d[Object.keys(d)[0]]])return d
                }
                return null
            }

            var d = void 0, e = this.context;
            return d = {createProtectionSystem: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./controllers/ProtectionController.js"), g = d(f), h = a("./controllers/ProtectionKeyController.js"), i = d(h), j = a("./ProtectionEvents.js"), k = d(j), l = a("./models/ProtectionModel_21Jan2015.js"), m = d(l), n = a("./models/ProtectionModel_3Feb2014.js"), o = d(n), p = a("./models/ProtectionModel_01b.js"), q = d(p), r = a("../../core/FactoryMaker.js"), s = d(r), t = [{
            generateKeyRequest: "generateKeyRequest",
            addKey: "addKey",
            cancelKeyRequest: "cancelKeyRequest",
            needkey: "needkey",
            keyerror: "keyerror",
            keyadded: "keyadded",
            keymessage: "keymessage"
        }, {
            generateKeyRequest: "webkitGenerateKeyRequest",
            addKey: "webkitAddKey",
            cancelKeyRequest: "webkitCancelKeyRequest",
            needkey: "webkitneedkey",
            keyerror: "webkitkeyerror",
            keyadded: "webkitkeyadded",
            keymessage: "webkitkeymessage"
        }], u = [{
            setMediaKeys: "setMediaKeys",
            MediaKeys: "MediaKeys",
            release: "close",
            needkey: "needkey",
            error: "keyerror",
            message: "keymessage",
            ready: "keyadded",
            close: "keyclose"
        }, {
            setMediaKeys: "msSetMediaKeys",
            MediaKeys: "MSMediaKeys",
            release: "close",
            needkey: "msneedkey",
            error: "mskeyerror",
            message: "mskeymessage",
            ready: "mskeyadded",
            close: "mskeyclose"
        }];
        e.__dashjs_factory_name = "Protection";
        var v = s["default"].getClassFactory(e);
        v.events = k["default"], c["default"] = v, b.exports = c["default"]
    }, {
        "../../core/FactoryMaker.js": 9,
        "./ProtectionEvents.js": 86,
        "./controllers/ProtectionController.js": 87,
        "./controllers/ProtectionKeyController.js": 88,
        "./models/ProtectionModel_01b.js": 92,
        "./models/ProtectionModel_21Jan2015.js": 93,
        "./models/ProtectionModel_3Feb2014.js": 94
    }],
    86: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value"in h)return h.value;
                    var i = h.get;
                    if (void 0 === i)return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j)return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a("../../core/events/EventsBase.js"), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.INTERNAL_KEY_MESSAGE = "internalKeyMessage", this.INTERNAL_KEY_SYSTEM_SELECTED = "internalKeySystemSelected", this.KEY_ADDED = "public_keyAdded", this.KEY_ERROR = "public_keyError", this.KEY_MESSAGE = "public_keyMessage", this.KEY_SESSION_CLOSED = "public_keySessionClosed", this.KEY_SESSION_CREATED = "public_keySessionCreated", this.KEY_SESSION_REMOVED = "public_keySessionRemoved", this.KEY_STATUSES_CHANGED = "public_keyStatusesChanged", this.KEY_SYSTEM_ACCESS_COMPLETE = "keySystemAccessComplete", this.KEY_SYSTEM_SELECTED = "public_keySystemSelected", this.LICENSE_REQUEST_COMPLETE = "public_licenseRequestComplete", this.NEED_KEY = "needkey", this.PROTECTION_CREATED = "public_protectioncreated", this.PROTECTION_DESTROYED = "public_protectiondestroyed", this.SERVER_CERTIFICATE_UPDATED = "serverCertificateUpdated", this.TEARDOWN_COMPLETE = "protectionTeardownComplete", this.VIDEO_ELEMENT_SELECTED = "videoElementSelected"
            }

            return f(b, a), b
        }(i["default"]), k = new j;
        c["default"] = k, b.exports = c["default"]
    }, {"../../core/events/EventsBase.js": 12}],
    87: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                C = w.getKeySystems(), D = [], H = !1, I = "temporary", i["default"].extend(q["default"].events)
            }

            function c(a, b, c) {
                if (!H) {
                    var d;
                    b || c || (d = y.getStreamsInfo(a)[0]), E = b || (d ? y.getMediaInfoForType(a, d, "audio") : null), F = c || (d ? y.getMediaInfoForType(a, d, "video") : null);
                    var e = F ? F : E, f = w.getSupportedKeySystemsFromContentProtection(e.contentProtection);
                    f && f.length > 0 && s(f, !0), H = !0
                }
            }

            function d(a) {
                var b = g["default"].getPSSHForKeySystem(J, a);
                if (b) {
                    for (var c = x.getAllInitData(), d = 0; d < c.length; d++)if (w.initDataEquals(b, c[d]))return void A("DRM: Ignoring initData because we have already seen it!");
                    try {
                        x.createKeySession(b, I)
                    } catch (e) {
                        z.trigger(i["default"].KEY_SESSION_CREATED, {
                            data: null,
                            error: "Error creating key session! " + e.message
                        })
                    }
                } else z.trigger(i["default"].KEY_SESSION_CREATED, {
                    data: null,
                    error: "Selected key system is " + J.systemString + ".  needkey/encrypted event contains no initData corresponding to that key system!"
                })
            }

            function e(a) {
                x.loadKeySession(a)
            }

            function f(a) {
                x.removeKeySession(a)
            }

            function h(a) {
                x.closeKeySession(a)
            }

            function j(a) {
                x.setServerCertificate(a)
            }

            function l(a) {
                a ? (x.setMediaElement(a), z.on(i["default"].NEED_KEY, v, this), z.on(i["default"].INTERNAL_KEY_MESSAGE, u, this)) : null === a && (x.setMediaElement(a), z.off(i["default"].NEED_KEY, v, this), z.off(i["default"].INTERNAL_KEY_MESSAGE, u, this))
            }

            function n(a) {
                I = a
            }

            function o(a) {
                G = a
            }

            function p() {
                l(null), J = void 0, x.reset(), x = null
            }

            function r(a) {
                var b = null, c = a.systemString;
                return G && (b = c in G ? G[c] : null), b
            }

            function s(a, b) {
                var c = this, e = [], f = [];
                F && f.push(new k["default"](F.codec)), E && e.push(new k["default"](E.codec));
                var g, h = new m["default"](e, f, "optional", "temporary" === I ? "optional" : "required", [I]), j = [];
                if (J) {
                    for (g = 0; g < a.length; g++)if (J === a[g].ks) {
                        var l = function () {
                            j.push({ks: a[g].ks, configs: [h]});
                            var e = function f(e) {
                                z.off(i["default"].KEY_SYSTEM_ACCESS_COMPLETE, f, c), e.error ? b || z.trigger(i["default"].KEY_SYSTEM_SELECTED, {error: "DRM: KeySystem Access Denied! -- " + e.error}) : (A("DRM: KeySystem Access Granted"), z.trigger(i["default"].KEY_SYSTEM_SELECTED, {data: e.data}), d(a[g].initData))
                            };
                            return z.on(i["default"].KEY_SYSTEM_ACCESS_COMPLETE, e, c), x.requestKeySystemAccess(j), "break"
                        }();
                        if ("break" === l)break
                    }
                } else if (void 0 === J) {
                    J = null, D.push(a);
                    for (var n = 0; n < a.length; n++)j.push({ks: a[n].ks, configs: [h]});
                    var o, p = function r(a) {
                        z.off(i["default"].KEY_SYSTEM_ACCESS_COMPLETE, r, c), a.error ? (J = void 0, z.off(i["default"].INTERNAL_KEY_SYSTEM_SELECTED, q, c), b || z.trigger(i["default"].KEY_SYSTEM_SELECTED, {
                            data: null,
                            error: "DRM: KeySystem Access Denied! -- " + a.error
                        })) : (o = a.data, A("DRM: KeySystem Access Granted (" + o.keySystem.systemString + ")!  Selecting key system..."), x.selectKeySystem(o))
                    }, q = function s(a) {
                        if (z.off(i["default"].INTERNAL_KEY_SYSTEM_SELECTED, s, c), z.off(i["default"].KEY_SYSTEM_ACCESS_COMPLETE, p, c), a.error)J = void 0, b || z.trigger(i["default"].KEY_SYSTEM_SELECTED, {
                            data: null,
                            error: "DRM: Error selecting key system! -- " + a.error
                        }); else {
                            J = x.getKeySystem(), z.trigger(i["default"].KEY_SYSTEM_SELECTED, {data: o});
                            for (var e = 0; e < D.length; e++)for (g = 0; g < D[e].length; g++)if (J === D[e][g].ks) {
                                d(D[e][g].initData);
                                break
                            }
                        }
                    };
                    z.on(i["default"].INTERNAL_KEY_SYSTEM_SELECTED, q, c), z.on(i["default"].KEY_SYSTEM_ACCESS_COMPLETE, p, c), x.requestKeySystemAccess(j)
                } else D.push(a)
            }

            function t(a, b) {
                z.trigger(i["default"].LICENSE_REQUEST_COMPLETE, {data: a, error: b})
            }

            function u(a) {
                if (A("DRM: onKeyMessage"), a.error)return void A(a.error);
                var b = a.data;
                z.trigger(i["default"].KEY_MESSAGE, {data: b});
                var c = b.messageType ? b.messageType : "license-request", d = b.message, e = b.sessionToken, f = r(J), h = J.systemString, j = w.getLicenseServer(J, f, c), k = {
                    sessionToken: e,
                    messageType: c
                };
                if (!j)return A("DRM: License server request not required for this message (type = " + a.data.messageType + ").  Session ID = " + e.getSessionID()), void t(k);
                if (w.isClearKey(J)) {
                    var l = w.processClearKeyLicenseRequest(f, d);
                    if (l)return A("DRM: ClearKey license request handled by application!"), t(k), void x.updateKeySession(e, l)
                }
                var m = new XMLHttpRequest, n = null;
                if (f)if (f.serverURL) {
                    var o = f.serverURL;
                    "string" == typeof o && "" !== o ? n = o : "object" == typeof o && o.hasOwnProperty(c) && (n = o[c])
                } else f.laURL && "" !== f.laURL && (n = f.laURL); else n = J.getLicenseServerURLFromInitData(g["default"].getPSSHData(e.initData)), n || (n = a.data.laURL);
                if (n = j.getServerURLFromMessage(n, d, c), !n)return void t(k, "DRM: No license server URL specified!");
                m.open(j.getHTTPMethod(c), n, !0), m.responseType = j.getResponseType(h, c), m.onload = function () {
                    200 == this.status ? (t(k), x.updateKeySession(e, j.getLicenseMessage(this.response, h, c))) : t(k, "DRM: " + h + ' update, XHR status is "' + this.statusText + '" (' + this.status + "), expected to be 200. readyState is " + this.readyState + ".  Response is " + (this.response ? j.getErrorResponse(this.response, h, c) : "NONE"))
                }, m.onabort = function () {
                    t(k, "DRM: " + h + ' update, XHR aborted. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
                }, m.onerror = function () {
                    t(k, "DRM: " + h + ' update, XHR error. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
                };
                var p = function (a) {
                    var b;
                    if (a)for (b in a)"authorization" === b.toLowerCase() && (m.withCredentials = !0), m.setRequestHeader(b, a[b])
                };
                f && p(f.httpRequestHeaders), p(J.getRequestHeadersFromMessage(d)), f && f.withCredentials && (m.withCredentials = !0), m.send(J.getLicenseRequestFromMessage(d))
            }

            function v(a) {
                if (A("DRM: onNeedKey"), "cenc" !== a.key.initDataType)return void A("DRM:  Only 'cenc' initData is supported!  Ignoring initData of type: " + a.key.initDataType);
                var b = a.key.initData;
                ArrayBuffer.isView(b) && (b = b.buffer), A("DRM: initData:", String.fromCharCode.apply(null, new Uint8Array(b)));
                var c = w.getSupportedKeySystems(b);
                return 0 === c.length ? void A("DRM: Received needkey event with initData, but we don't support any of the key systems!") : void s(c, !1)
            }

            var w = a.protectionKeyController, x = a.protectionModel, y = a.adapter, z = a.eventBus, A = a.log, B = void 0, C = void 0, D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0;
            return B = {
                initialize: c,
                createKeySession: d,
                loadKeySession: e,
                removeKeySession: f,
                closeKeySession: h,
                setServerCertificate: j,
                setMediaElement: l,
                setSessionType: n,
                setProtectionData: o,
                reset: p
            }, b(), B
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../CommonEncryption.js"), g = d(f), h = a("../../../core/events/Events.js"), i = d(h), j = a("../vo/MediaCapability.js"), k = d(j), l = a("../vo/KeySystemConfiguration.js"), m = d(l), n = a("../../../core/FactoryMaker.js"), o = d(n), p = a("../Protection.js"), q = d(p);
        e.__dashjs_factory_name = "ProtectionController", c["default"] = o["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../CommonEncryption.js": 84,
        "../Protection.js": 85,
        "../vo/KeySystemConfiguration.js": 104,
        "../vo/MediaCapability.js": 105
    }],
    88: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                a && a.log && (t = a.log)
            }

            function b() {
                v = [];
                var a;
                a = (0, m["default"])(p).getInstance(), v.push(a), a = (0, k["default"])(p).getInstance(), v.push(a), a = (0, i["default"])(p).getInstance(), v.push(a), w = a
            }

            function c() {
                return v
            }

            function d(a) {
                for (var b = 0; b < v.length; b++)if (v[b].systemString === a)return v[b];
                return null
            }

            function e(a) {
                return a === w
            }

            function f(a, b) {
                if (a.byteLength === b.byteLength) {
                    for (var c = new Uint8Array(a), d = new Uint8Array(b), e = 0; e < c.length; e++)if (c[e] !== d[e])return !1;
                    return !0
                }
                return !1
            }

            function h(a) {
                var b, c, d, e, f = [];
                if (a)for (d = 0; d < v.length; ++d)for (c = v[d], e = 0; e < a.length; ++e)if (b = a[e], b.schemeIdUri.toLowerCase() === c.schemeIdURI) {
                    var g = c.getInitData(b);
                    g && f.push({ks: v[d], initData: g})
                }
                return f
            }

            function j(a) {
                var b, c = [], d = g["default"].parsePSSHList(a);
                for (b = 0; b < v.length; ++b)v[b].uuid in d && c.push({ks: v[b], initData: d[v[b].uuid]});
                return c
            }

            function l(a, b, c) {
                if ("license-release" === c || "individualization-request" == c)return null;
                var d = null;
                return b && b.hasOwnProperty("drmtoday") ? d = (0, o["default"])(p).getInstance() : "com.widevine.alpha" === a.systemString ? d = (0, s["default"])(p).getInstance() : "com.microsoft.playready" === a.systemString ? d = (0, q["default"])(p).getInstance() : "org.w3.clearkey" === a.systemString && (d = (0, u["default"])(p).getInstance()), d
            }

            function n(a, b) {
                try {
                    return w.getClearKeysFromProtectionData(a, b)
                } catch (c) {
                    return t("Failed to retrieve clearkeys from ProtectionData"), null
                }
            }

            var p = this.context, r = void 0, t = void 0, v = void 0, w = void 0;
            return r = {
                initialize: b,
                isClearKey: e,
                initDataEquals: f,
                getKeySystems: c,
                getKeySystemBySystemString: d,
                getSupportedKeySystemsFromContentProtection: h,
                getSupportedKeySystems: j,
                getLicenseServer: l,
                processClearKeyLicenseRequest: n,
                setConfig: a
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./../CommonEncryption.js"), g = d(f), h = a("./../drm/KeySystemClearKey.js"), i = d(h), j = a("./../drm/KeySystemWidevine.js"), k = d(j), l = a("./../drm/KeySystemPlayReady.js"), m = d(l), n = a("./../servers/DRMToday.js"), o = d(n), p = a("./../servers/PlayReady.js"), q = d(p), r = a("./../servers/Widevine.js"), s = d(r), t = a("./../servers/ClearKey.js"), u = d(t), v = a("../../../core/FactoryMaker.js"), w = d(v);
        e.__dashjs_factory_name = "ProtectionKeyController", c["default"] = w["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "./../CommonEncryption.js": 84,
        "./../drm/KeySystemClearKey.js": 89,
        "./../drm/KeySystemPlayReady.js": 90,
        "./../drm/KeySystemWidevine.js": 91,
        "./../servers/ClearKey.js": 95,
        "./../servers/DRMToday.js": 96,
        "./../servers/PlayReady.js": 97,
        "./../servers/Widevine.js": 98
    }],
    89: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                var c = null;
                if (a) {
                    for (var d = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(b))), e = [], f = 0; f < d.kids.length; f++) {
                        var h = d.kids[f], j = a.clearkeys.hasOwnProperty(h) ? a.clearkeys[h] : null;
                        if (!j)throw new Error("DRM: ClearKey keyID (" + h + ") is not known!");
                        e.push(new g["default"](h, j))
                    }
                    c = new i["default"](e)
                }
                return c
            }

            function b(a) {
                return k["default"].parseInitDataFromContentProtection(a)
            }

            function c() {
                return null
            }

            function d(a) {
                return new Uint8Array(a)
            }

            function e() {
                return null
            }

            var f = void 0;
            return f = {
                uuid: n,
                schemeIdURI: p,
                systemString: o,
                getInitData: b,
                getRequestHeadersFromMessage: c,
                getLicenseRequestFromMessage: d,
                getLicenseServerURLFromInitData: e,
                getClearKeysFromProtectionData: a
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/KeyPair.js"), g = d(f), h = a("../vo/ClearKeyKeySet.js"), i = d(h), j = a("../CommonEncryption.js"), k = d(j), l = a("../../../core/FactoryMaker.js"), m = d(l), n = "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b", o = "org.w3.clearkey", p = "urn:uuid:" + n;
        e.__dashjs_factory_name = "KeySystemClearKey", c["default"] = m["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../CommonEncryption.js": 84,
        "../vo/ClearKeyKeySet.js": 99,
        "../vo/KeyPair.js": 102
    }],
    90: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                var b, c, d = {}, e = new DOMParser, f = "utf16" === h ? new Uint16Array(a) : new Uint8Array(a);
                b = String.fromCharCode.apply(null, f), c = e.parseFromString(b, "application/xml");
                for (var g = c.getElementsByTagName("name"), i = c.getElementsByTagName("value"), j = 0; j < g.length; j++)d[g[j].childNodes[0].nodeValue] = i[j].childNodes[0].nodeValue;
                return d.hasOwnProperty("Content") && (d["Content-Type"] = d.Content, delete d.Content), d
            }

            function b(a) {
                var b, c, d = null, e = new DOMParser, f = "utf16" === h ? new Uint16Array(a) : new Uint8Array(a);
                if (b = String.fromCharCode.apply(null, f), c = e.parseFromString(b, "application/xml"), c.getElementsByTagName("Challenge")[0]) {
                    var g = c.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
                    g && (d = m["default"].decode(g))
                }
                return d
            }

            function c(a) {
                if (a)for (var b = new DataView(a), c = b.getUint16(4, !0), d = 6, e = new DOMParser, f = 0; c > f; f++) {
                    var g = b.getUint16(d, !0);
                    d += 2;
                    var h = b.getUint16(d, !0);
                    if (d += 2, 1 === g) {
                        var i = a.slice(d, d + h), j = String.fromCharCode.apply(null, new Uint16Array(i)), k = e.parseFromString(j, "application/xml");
                        if (k.getElementsByTagName("LA_URL")[0]) {
                            var l = k.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue;
                            if (l)return l
                        }
                        if (k.getElementsByTagName("LUI_URL")[0]) {
                            var m = k.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue;
                            if (m)return m
                        }
                    } else d += h
                }
                return null
            }

            function d(a) {
                var b, c, d, e, f, h = new Uint8Array([112, 115, 115, 104, 0, 0, 0, 0]), i = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]), j = 0, k = null;
                if ("pssh"in a)return g["default"].parseInitDataFromContentProtection(a);
                if ("pro"in a)k = m["default"].decodeArray(a.pro.__text); else {
                    if (!("prheader"in a))return null;
                    k = m["default"].decodeArray(a.prheader.__text)
                }
                return b = k.length, c = 4 + h.length + i.length + 4 + b, d = new ArrayBuffer(c), e = new Uint8Array(d), f = new DataView(d), f.setUint32(j, c), j += 4, e.set(h, j), j += h.length, e.set(i, j), j += i.length, f.setUint32(j, b), j += 4, e.set(k, j), j += b, e.buffer
            }

            function e(a) {
                if ("utf8" !== a && "utf16" !== a)throw new i["default"]("Illegal PlayReady message format! -- " + a);
                h = a
            }

            var f = void 0, h = "utf16";
            return f = {
                uuid: n,
                schemeIdURI: p,
                systemString: o,
                getInitData: d,
                getRequestHeadersFromMessage: a,
                getLicenseRequestFromMessage: b,
                getLicenseServerURLFromInitData: c,
                setPlayReadyMessageFormat: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../CommonEncryption.js"), g = d(f), h = a("../../vo/Error.js"), i = d(h), j = a("../../../core/FactoryMaker.js"), k = d(j), l = a("../../../../externals/base64.js"), m = d(l), n = "9a04f079-9840-4286-ab92-e65be0885f95", o = "com.microsoft.playready", p = "urn:uuid:" + n;
        e.__dashjs_factory_name = "KeySystemPlayReady", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {
        "../../../../externals/base64.js": 1,
        "../../../core/FactoryMaker.js": 9,
        "../../vo/Error.js": 135,
        "../CommonEncryption.js": 84
    }],
    91: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                return g["default"].parseInitDataFromContentProtection(a)
            }

            function b() {
                return null
            }

            function c(a) {
                return new Uint8Array(a)
            }

            function d() {
                return null
            }

            var e = void 0;
            return e = {
                uuid: j,
                schemeIdURI: l,
                systemString: k,
                getInitData: a,
                getRequestHeadersFromMessage: b,
                getLicenseRequestFromMessage: c,
                getLicenseServerURLFromInitData: d
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../CommonEncryption.js"), g = d(f), h = a("../../../core/FactoryMaker.js"), i = d(h), j = "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", k = "com.widevine.alpha", l = "urn:uuid:" + j;
        e.__dashjs_factory_name = "KeySystemWidevine", c["default"] = i["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9, "../CommonEncryption.js": 84}],
    92: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                E = null, F = null, I = [], J = [], G = (0, g["default"])(z).getInstance(), H = (0, u["default"])(z).getInstance(), L = w()
            }

            function c() {
                E && y();
                for (var a = 0; a < J.length; a++)p(J[a]);
                A.trigger(s["default"].TEARDOWN_COMPLETE)
            }

            function d() {
                return F
            }

            function e() {
                for (var a = [], b = 0; b < I.length; b++)a.push(I[b].initData);
                for (var b = 0; b < J.length; b++)a.push(J[b].initData);
                return a
            }

            function f(a) {
                var b = E;
                b || (b = document.createElement("video"));
                for (var c = !1, d = 0; d < a.length; d++)for (var e = a[d].ks.systemString, f = a[d].configs, g = null, h = null, i = 0; i < f.length; i++) {
                    var j = f[i].videoCapabilities;
                    if (j && 0 !== j.length) {
                        h = [];
                        for (var k = 0; k < j.length; k++)"" !== b.canPlayType(j[k].contentType, e) && h.push(j[k])
                    }
                    if (!(!g && !h || g && 0 === g.length || h && 0 === h.length)) {
                        c = !0;
                        var l = new o["default"](g, h), m = G.getKeySystemBySystemString(e);
                        A.trigger(s["default"].KEY_SYSTEM_ACCESS_COMPLETE, {data: new q["default"](m, l)});
                        break
                    }
                }
                c || A.trigger(s["default"].KEY_SYSTEM_ACCESS_COMPLETE, {error: "Key system access denied! -- No valid audio/video content configurations detected!"})
            }

            function h(a) {
                F = a.keySystem, A.trigger(s["default"].INTERNAL_KEY_SYSTEM_SELECTED)
            }

            function j(a) {
                E !== a && (E && y(), E = a, E && (E.addEventListener(C.keyerror, L), E.addEventListener(C.needkey, L), E.addEventListener(C.keymessage, L), E.addEventListener(C.keyadded, L), A.trigger(s["default"].VIDEO_ELEMENT_SELECTED)))
            }

            function l(a) {
                if (!F)throw new Error("Can not create sessions until you have selected a key system");
                if (K || 0 === J.length) {
                    var b = {
                        sessionID: null, initData: a, getSessionID: function () {
                            return this.sessionID
                        }, getExpirationTime: function () {
                            return NaN
                        }, getSessionType: function () {
                            return "temporary"
                        }
                    };
                    return I.push(b), E[C.generateKeyRequest](F.systemString, new Uint8Array(a)), b
                }
                throw new Error("Multiple sessions not allowed!")
            }

            function n(a, b) {
                var c = a.sessionID;
                if (G.isClearKey(F))for (var d = 0; d < b.keyPairs.length; d++)E[C.addKey](F.systemString, b.keyPairs[d].key, b.keyPairs[d].keyID, c); else E[C.addKey](F.systemString, new Uint8Array(b), a.initData, c)
            }

            function p(a) {
                E[C.cancelKeyRequest](F.systemString, a.sessionID)
            }

            function r() {
            }

            function t() {
            }

            function v() {
            }

            function w() {
                return {
                    handleEvent: function (a) {
                        var b = null;
                        switch (a.type) {
                            case C.needkey:
                                var c = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                                A.trigger(s["default"].NEED_KEY, {key: new i["default"](c, "cenc")});
                                break;
                            case C.keyerror:
                                if (b = x(J, a.sessionId), b || (b = x(I, a.sessionId)), b) {
                                    var d = "";
                                    switch (a.errorCode.code) {
                                        case 1:
                                            d += "MEDIA_KEYERR_UNKNOWN - An unspecified error occurred. This value is used for errors that don't match any of the other codes.";
                                            break;
                                        case 2:
                                            d += "MEDIA_KEYERR_CLIENT - The Key System could not be installed or updated.";
                                            break;
                                        case 3:
                                            d += "MEDIA_KEYERR_SERVICE - The message passed into update indicated an error from the license service.";
                                            break;
                                        case 4:
                                            d += "MEDIA_KEYERR_OUTPUT - There is no available output device with the required characteristics for the content protection system.";
                                            break;
                                        case 5:
                                            d += "MEDIA_KEYERR_HARDWARECHANGE - A hardware configuration change caused a content protection error.";
                                            break;
                                        case 6:
                                            d += "MEDIA_KEYERR_DOMAIN - An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain."
                                    }
                                    d += "  System Code = " + a.systemCode, A.trigger(s["default"].KEY_ERROR, {data: new k["default"](b, d)})
                                } else B("No session token found for key error");
                                break;
                            case C.keyadded:
                                b = x(J, a.sessionId), b || (b = x(I, a.sessionId)), b ? (B("DRM: Key added."), A.trigger(s["default"].KEY_ADDED, {data: b})) : B("No session token found for key added");
                                break;
                            case C.keymessage:
                                if (K = null !== a.sessionId && void 0 !== a.sessionId, K ? (b = x(J, a.sessionId), !b && I.length > 0 && (b = I.shift(), J.push(b), b.sessionID = a.sessionId)) : I.length > 0 && (b = I.shift(), J.push(b), 0 !== I.length && H.mediaKeyMessageError("Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!")), b) {
                                    var e = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                                    b.keyMessage = e, A.trigger(s["default"].INTERNAL_KEY_MESSAGE, {data: new m["default"](b, e, a.defaultURL)})
                                } else B("No session token found for key message")
                        }
                    }
                }
            }

            function x(a, b) {
                if (b && a) {
                    for (var c = a.length, d = 0; c > d; d++)if (a[d].sessionID == b)return a[d];
                    return null
                }
                return null
            }

            function y() {
                E.removeEventListener(C.keyerror, L), E.removeEventListener(C.needkey, L), E.removeEventListener(C.keymessage, L), E.removeEventListener(C.keyadded, L)
            }

            var z = this.context, A = a.eventBus, B = a.log, C = a.api, D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0, K = void 0, L = void 0;
            return D = {
                getAllInitData: e,
                requestKeySystemAccess: f,
                getKeySystem: d,
                selectKeySystem: h,
                setMediaElement: j,
                createKeySession: l,
                updateKeySession: n,
                closeKeySession: p,
                setServerCertificate: r,
                loadKeySession: t,
                removeKeySession: v,
                reset: c
            }, b(), D
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../controllers/ProtectionKeyController.js"), g = d(f), h = a("../vo/NeedKey.js"), i = d(h), j = a("../vo/KeyError.js"), k = d(j), l = a("../vo/KeyMessage.js"), m = d(l), n = a("../vo/KeySystemConfiguration.js"), o = d(n), p = a("../vo/KeySystemAccess.js"), q = d(p), r = a("../../../core/events/Events.js"), s = d(r), t = a("../../utils/ErrorHandler.js"), u = d(t), v = a("../../../core/FactoryMaker.js"), w = d(v);
        e.__dashjs_factory_name = "ProtectionModel_01b", c["default"] = w["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../../utils/ErrorHandler.js": 127,
        "../controllers/ProtectionKeyController.js": 88,
        "../vo/KeyError.js": 100,
        "../vo/KeyMessage.js": 101,
        "../vo/KeySystemAccess.js": 103,
        "../vo/KeySystemConfiguration.js": 104,
        "../vo/NeedKey.js": 106
    }],
    93: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                A = null, B = null, C = null, D = [], F = (0, g["default"])(G).getInstance(), E = w()
            }

            function c() {
                var a, b = D.length;
                if (0 !== b)for (var c = function (a) {
                    x(a), 0 === D.length && (B ? (B.removeEventListener("encrypted", E), B.setMediaKeys(null).then(function () {
                        H.trigger(q["default"].TEARDOWN_COMPLETE)
                    })) : H.trigger(q["default"].TEARDOWN_COMPLETE))
                }, d = 0; b > d; d++)a = D[d], function (b) {
                    a.session.closed.then(function () {
                        c(b)
                    }), v(a)["catch"](function () {
                        c(b)
                    })
                }(a); else H.trigger(q["default"].TEARDOWN_COMPLETE)
            }

            function d() {
                return A
            }

            function e() {
                for (var a = [], b = 0; b < D.length; b++)a.push(D[b].initData);
                return a
            }

            function f(a) {
                u(a, 0)
            }

            function h(a) {
                a.mksa.createMediaKeys().then(function (b) {
                    A = a.keySystem, C = b, B && B.setMediaKeys(C), H.trigger(q["default"].INTERNAL_KEY_SYSTEM_SELECTED)
                })["catch"](function () {
                    H.trigger(q["default"].INTERNAL_KEY_SYSTEM_SELECTED, {error: "Error selecting keys system (" + a.keySystem.systemString + ")! Could not create MediaKeys -- TODO"})
                })
            }

            function j(a) {
                B !== a && (B && (B.removeEventListener("encrypted", E), B.setMediaKeys(null)), B = a, B && (B.addEventListener("encrypted", E), C && B.setMediaKeys(C)))
            }

            function l(a) {
                if (!A || !C)throw new Error("Can not set server certificate until you have selected a key system");
                C.setServerCertificate(a).then(function () {
                    I("DRM: License server certificate successfully updated."), H.trigger(q["default"].SERVER_CERTIFICATE_UPDATED)
                })["catch"](function (a) {
                    H.trigger(q["default"].SERVER_CERTIFICATE_UPDATED, {error: "Error updating server certificate -- " + a.name})
                })
            }

            function n(a, b) {
                if (!A || !C)throw new Error("Can not create sessions until you have selected a key system");
                var c = C.createSession(b), d = y(c, a, b);
                c.generateRequest("cenc", a).then(function () {
                    I("DRM: Session created.  SessionID = " + d.getSessionID()), H.trigger(q["default"].KEY_SESSION_CREATED, {data: d})
                })["catch"](function (a) {
                    x(d), H.trigger(q["default"].KEY_SESSION_CREATED, {
                        data: null,
                        error: "Error generating key request -- " + a.name
                    })
                })
            }

            function p(a, b) {
                var c = a.session;
                F.isClearKey(A) && (b = b.toJWK()), c.update(b)["catch"](function (b) {
                    H.trigger(q["default"].KEY_ERROR, {data: new k["default"](a, "Error sending update() message! " + b.name)})
                })
            }

            function r(a) {
                if (!A || !C)throw new Error("Can not load sessions until you have selected a key system");
                var b = C.createSession();
                b.load(a).then(function (c) {
                    if (c) {
                        var d = y(b);
                        I("DRM: Session created.  SessionID = " + d.getSessionID()), H.trigger(q["default"].KEY_SESSION_CREATED, {data: d})
                    } else H.trigger(q["default"].KEY_SESSION_CREATED, {
                        data: null,
                        error: "Could not load session! Invalid Session ID (" + a + ")"
                    })
                })["catch"](function (b) {
                    H.trigger(q["default"].KEY_SESSION_CREATED, {
                        data: null,
                        error: "Could not load session (" + a + ")! " + b.name
                    })
                })
            }

            function s(a) {
                var b = a.session;
                b.remove().then(function () {
                    I("DRM: Session removed.  SessionID = " + a.getSessionID()), H.trigger(q["default"].KEY_SESSION_REMOVED, {data: a.getSessionID()})
                }, function (b) {
                    H.trigger(q["default"].KEY_SESSION_REMOVED, {
                        data: null,
                        error: "Error removing session (" + a.getSessionID() + "). " + b.name
                    })
                })
            }

            function t(a) {
                v(a)["catch"](function (b) {
                    x(a), H.trigger(q["default"].KEY_SESSION_CLOSED, {
                        data: null,
                        error: "Error closing session (" + a.getSessionID() + ") " + b.name
                    })
                })
            }

            function u(a, b) {
                !function (b) {
                    var c = a[b].ks, d = a[b].configs;
                    navigator.requestMediaKeySystemAccess(c.systemString, d).then(function (a) {
                        var b = "function" == typeof a.getConfiguration ? a.getConfiguration() : null, d = new o["default"](c, b);
                        d.mksa = a, H.trigger(q["default"].KEY_SYSTEM_ACCESS_COMPLETE, {data: d})
                    })["catch"](function () {
                        ++b < a.length ? u(a, b) : H.trigger(q["default"].KEY_SYSTEM_ACCESS_COMPLETE, {error: "Key system access denied!"})
                    })
                }(b)
            }

            function v(a) {
                var b = a.session;
                return b.removeEventListener("keystatuseschange", a), b.removeEventListener("message", a), b.close()
            }

            function w() {
                return {
                    handleEvent: function (a) {
                        switch (a.type) {
                            case"encrypted":
                                if (a.initData) {
                                    var b = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                                    H.trigger(q["default"].NEED_KEY, {key: new i["default"](b, a.initDataType)})
                                }
                        }
                    }
                }
            }

            function x(a) {
                for (var b = 0; b < D.length; b++)if (D[b] === a) {
                    D.splice(b, 1);
                    break
                }
            }

            function y(a, b, c) {
                var d = {
                    session: a, initData: b, handleEvent: function (a) {
                        switch (a.type) {
                            case"keystatuseschange":
                                H.trigger(q["default"].KEY_STATUSES_CHANGED, {data: this});
                                break;
                            case"message":
                                var b = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                                H.trigger(q["default"].INTERNAL_KEY_MESSAGE, {data: new m["default"](this, b, void 0, a.messageType)})
                        }
                    }, getSessionID: function () {
                        return a.sessionId
                    }, getExpirationTime: function () {
                        return a.expiration
                    }, getKeyStatuses: function () {
                        return a.keyStatuses
                    }, getSessionType: function () {
                        return c
                    }
                };
                return a.addEventListener("keystatuseschange", d), a.addEventListener("message", d), a.closed.then(function () {
                    x(d), I("DRM: Session closed.  SessionID = " + d.getSessionID()), H.trigger(q["default"].KEY_SESSION_CLOSED, {data: d.getSessionID()})
                }), D.push(d), d
            }

            var z, A, B, C, D, E, F, G = this.context, H = a.eventBus, I = a.log;
            return z = {
                getAllInitData: e,
                requestKeySystemAccess: f,
                getKeySystem: d,
                selectKeySystem: h,
                setMediaElement: j,
                setServerCertificate: l,
                createKeySession: n,
                updateKeySession: p,
                loadKeySession: r,
                removeKeySession: s,
                closeKeySession: t,
                reset: c
            }, b(), z
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../controllers/ProtectionKeyController.js"), g = d(f), h = a("../vo/NeedKey.js"), i = d(h), j = a("../vo/KeyError.js"), k = d(j), l = a("../vo/KeyMessage.js"), m = d(l), n = a("../vo/KeySystemAccess.js"), o = d(n), p = a("../../../core/events/Events.js"), q = d(p), r = a("../../../core/FactoryMaker.js"), s = d(r);
        e.__dashjs_factory_name = "ProtectionModel_21Jan2015", c["default"] = s["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../controllers/ProtectionKeyController.js": 88,
        "../vo/KeyError.js": 100,
        "../vo/KeyMessage.js": 101,
        "../vo/KeySystemAccess.js": 103,
        "../vo/NeedKey.js": 106
    }],
    94: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                D = null, E = null, F = null, G = null, H = [], J = (0, g["default"])(y).getInstance(), I = v()
            }

            function c() {
                try {
                    for (var a = 0; a < H.length; a++)p(H[a]);
                    D && D.removeEventListener(B.needkey, I), z.trigger(s["default"].TEARDOWN_COMPLETE)
                } catch (b) {
                    z.trigger(s["default"].TEARDOWN_COMPLETE, {error: "Error tearing down key sessions and MediaKeys! -- " + b.message})
                }
            }

            function d() {
                return E
            }

            function e() {
                for (var a = [], b = 0; b < H.length; b++)a.push(H[b].initData);
                return a
            }

            function f(a) {
                for (var b = !1, c = 0; c < a.length; c++)for (var d = a[c].ks.systemString, e = a[c].configs, f = null, g = null, h = 0; h < e.length; h++) {
                    var i = e[h].audioCapabilities, j = e[h].videoCapabilities;
                    if (i && 0 !== i.length) {
                        f = [];
                        for (var k = 0; k < i.length; k++)window[B.MediaKeys].isTypeSupported(d, i[k].contentType) && f.push(i[k])
                    }
                    if (j && 0 !== j.length) {
                        g = [];
                        for (var l = 0; l < j.length; l++)window[B.MediaKeys].isTypeSupported(d, j[l].contentType) && g.push(j[l])
                    }
                    if (!(!f && !g || f && 0 === f.length || g && 0 === g.length)) {
                        b = !0;
                        var m = new o["default"](f, g), n = J.getKeySystemBySystemString(d);
                        z.trigger(s["default"].KEY_SYSTEM_ACCESS_COMPLETE, {data: new q["default"](n, m)});
                        break
                    }
                }
                b || z.trigger(s["default"].KEY_SYSTEM_ACCESS_COMPLETE, {error: "Key system access denied! -- No valid audio/video content configurations detected!"})
            }

            function h(a) {
                try {
                    F = a.mediaKeys = new window[B.MediaKeys](a.keySystem.systemString), E = a.keySystem, G = a, D && w(), z.trigger(s["default"].INTERNAL_KEY_SYSTEM_SELECTED)
                } catch (b) {
                    z.trigger(s["default"].INTERNAL_KEY_SYSTEM_SELECTED, {error: "Error selecting keys system (" + E.systemString + ")! Could not create MediaKeys -- TODO"})
                }
            }

            function j(a) {
                D !== a && (D && D.removeEventListener(B.needkey, I), D = a, D && (D.addEventListener(B.needkey, I), F && w()))
            }

            function l(a) {
                if (!E || !F || !G)throw new Error("Can not create sessions until you have selected a key system");
                var b = null;
                if (null !== G.ksConfiguration.videoCapabilities && G.ksConfiguration.videoCapabilities.length > 0 && (b = G.ksConfiguration.videoCapabilities[0]), null === b && null !== G.ksConfiguration.audioCapabilities && G.ksConfiguration.audioCapabilities.length > 0 && (b = G.ksConfiguration.audioCapabilities[0]), null === b)throw new Error("Can not create sessions for unknown content types.");
                var c = b.contentType, d = F.createSession(c, new Uint8Array(a)), e = x(d, a);
                d.addEventListener(B.error, e), d.addEventListener(B.message, e), d.addEventListener(B.ready, e), d.addEventListener(B.close, e), H.push(e), A("DRM: Session created.  SessionID = " + e.getSessionID()), z.trigger(s["default"].KEY_SESSION_CREATED, {data: e})
            }

            function n(a, b) {
                var c = a.session;
                J.isClearKey(E) ? c.update(new Uint8Array(b.toJWK())) : c.update(new Uint8Array(b))
            }

            function p(a) {
                var b = a.session;
                b.removeEventListener(B.error, a), b.removeEventListener(B.message, a), b.removeEventListener(B.ready, a), b.removeEventListener(B.close, a);
                for (var c = 0; c < H.length; c++)if (H[c] === a) {
                    H.splice(c, 1);
                    break
                }
                b[B.release]()
            }

            function r() {
            }

            function t() {
            }

            function u() {
            }

            function v() {
                return {
                    handleEvent: function (a) {
                        switch (a.type) {
                            case B.needkey:
                                if (a.initData) {
                                    var b = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                                    z.trigger(s["default"].NEED_KEY, {key: new i["default"](b, "cenc")})
                                }
                        }
                    }
                }
            }

            function w() {
                var a = null, b = function () {
                    D.removeEventListener("loadedmetadata", a), D[B.setMediaKeys](F), z.trigger(s["default"].VIDEO_ELEMENT_SELECTED)
                };
                D.readyState >= 1 ? b() : (a = b.bind(this), D.addEventListener("loadedmetadata", a))
            }

            function x(a, b) {
                return {
                    session: a, initData: b, getSessionID: function () {
                        return this.session.sessionId
                    }, getExpirationTime: function () {
                        return NaN
                    }, getSessionType: function () {
                        return "temporary"
                    }, handleEvent: function (a) {
                        switch (a.type) {
                            case B.error:
                                var b = "KeyError";
                                z.trigger(s["default"].KEY_ERROR, {data: new k["default"](this, b)});
                                break;
                            case B.message:
                                var c = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                                z.trigger(s["default"].INTERNAL_KEY_MESSAGE, {data: new m["default"](this, c, a.destinationURL)});
                                break;
                            case B.ready:
                                A("DRM: Key added."), z.trigger(s["default"].KEY_ADDED);
                                break;
                            case B.close:
                                A("DRM: Session closed.  SessionID = " + this.getSessionID()), z.trigger(s["default"].KEY_SESSION_CLOSED, {data: this.getSessionID()})
                        }
                    }
                }
            }

            var y = this.context, z = a.eventBus, A = a.log, B = a.api, C = void 0, D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0;
            return C = {
                getAllInitData: e,
                requestKeySystemAccess: f,
                getKeySystem: d,
                selectKeySystem: h,
                setMediaElement: j,
                createKeySession: l,
                updateKeySession: n,
                closeKeySession: p,
                setServerCertificate: r,
                loadKeySession: t,
                removeKeySession: u,
                reset: c
            }, b(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../controllers/ProtectionKeyController.js"), g = d(f), h = a("../vo/NeedKey.js"), i = d(h), j = a("../vo/KeyError.js"), k = d(j), l = a("../vo/KeyMessage.js"), m = d(l), n = a("../vo/KeySystemConfiguration.js"), o = d(n), p = a("../vo/KeySystemAccess.js"), q = d(p), r = a("../../../core/events/Events.js"), s = d(r), t = a("../../../core/FactoryMaker.js"), u = d(t);
        e.__dashjs_factory_name = "ProtectionModel_3Feb2014", c["default"] = u["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../controllers/ProtectionKeyController.js": 88,
        "../vo/KeyError.js": 100,
        "../vo/KeyMessage.js": 101,
        "../vo/KeySystemAccess.js": 103,
        "../vo/KeySystemConfiguration.js": 104,
        "../vo/NeedKey.js": 106
    }],
    95: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                var c = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(b)));
                a += "/?";
                for (var d = 0; d < c.kids.length; d++)a += c.kids[d] + "&";
                return a = a.substring(0, a.length - 1)
            }

            function b() {
                return "GET"
            }

            function c() {
                return "json"
            }

            function d(a) {
                if (!a.hasOwnProperty("keys"))return null;
                for (var b = [], c = 0; c < a.keys.length; c++) {
                    var d = a.keys[c], e = d.kid.replace(/=/g, ""), f = d.k.replace(/=/g, "");
                    b.push(new g["default"](e, f))
                }
                return new i["default"](b)
            }

            function e(a) {
                return String.fromCharCode.apply(null, new Uint8Array(a))
            }

            var f = void 0;
            return f = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/KeyPair.js"), g = d(f), h = a("../vo/ClearKeyKeySet.js"), i = d(h), j = a("../../../core/FactoryMaker.js"), k = d(j);
        e.__dashjs_factory_name = "ClearKey", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9, "../vo/ClearKeyKeySet.js": 99, "../vo/KeyPair.js": 102}],
    96: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b() {
                return "POST"
            }

            function c(a) {
                return f[a].responseType
            }

            function d(a, b) {
                return f[b].getLicenseMessage(a)
            }

            function e(a, b) {
                return f[b].getErrorResponse(a)
            }

            var f = {
                "com.widevine.alpha": {
                    responseType: "json", getLicenseMessage: function (a) {
                        return i["default"].decodeArray(a.license)
                    }, getErrorResponse: function (a) {
                        return a
                    }
                }, "com.microsoft.playready": {
                    responseType: "arraybuffer", getLicenseMessage: function (a) {
                        return a
                    }, getErrorResponse: function (a) {
                        return String.fromCharCode.apply(null, new Uint8Array(a))
                    }
                }
            }, g = void 0;
            return g = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("../../../../externals/base64.js"), i = d(h);
        e.__dashjs_factory_name = "DRMToday", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../../externals/base64.js": 1, "../../../core/FactoryMaker.js": 9}],
    97: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b() {
                return "POST"
            }

            function c() {
                return "arraybuffer"
            }

            function d(a) {
                return a
            }

            function e(a) {
                return String.fromCharCode.apply(null, new Uint8Array(a))
            }

            var f = void 0;
            return f = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "PlayReady", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9}],
    98: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b() {
                return "POST"
            }

            function c() {
                return "arraybuffer"
            }

            function d(a) {
                return a
            }

            function e(a) {
                return String.fromCharCode.apply(null, new Uint8Array(a))
            }

            var f = void 0;
            return f = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "Widevine", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9}],
    99: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value"in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), f = function () {
            function a(b, c) {
                if (d(this, a), c && "persistent" !== c && "temporary" !== c)throw new Error("Invalid ClearKey key set type!  Must be one of 'persistent' or 'temporary'");
                this.keyPairs = b, this.type = c
            }

            return e(a, [{
                key: "toJWK", value: function () {
                    var a, b = this.keyPairs.length, c = {keys: []};
                    for (a = 0; b > a; a++) {
                        var d = {kty: "oct", alg: "A128KW", kid: this.keyPairs[a].keyID, k: this.keyPairs[a].key};
                        c.keys.push(d)
                    }
                    this.type && (c.type = this.type);
                    var e = JSON.stringify(c), f = e.length, g = new ArrayBuffer(f), h = new Uint8Array(g);
                    for (a = 0; f > a; a++)h[a] = e.charCodeAt(a);
                    return g
                }
            }]), a
        }();
        c["default"] = f, b.exports = c["default"]
    }, {}],
    100: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f(a, b) {
            d(this, f), this.sessionToken = a, this.error = b
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    101: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f(a, b, c, e) {
            d(this, f), this.sessionToken = a, this.message = b, this.defaultURL = c, this.messageType = e ? e : "license-request"
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    102: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f(a, b) {
            d(this, f), this.keyID = a, this.key = b
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    103: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f(a, b) {
            d(this, f), this.keySystem = a, this.ksConfiguration = b
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    104: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f(a, b, c, e, g) {
            d(this, f), this.initDataTypes = ["cenc"], this.audioCapabilities = a, this.videoCapabilities = b, this.distinctiveIdentifier = c, this.persistentState = e, this.sessionTypes = g
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    105: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f(a, b) {
            d(this, f), this.contentType = a, this.robustness = b
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    106: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = function f(a, b) {
            d(this, f), this.initData = a, this.initDataType = b
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    107: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                return i.mediaInfo.streamInfo
            }

            function c() {
                return i.mediaInfo
            }

            function d() {
                return i
            }

            function e() {
                return k
            }

            function f() {
                return i.mediaInfo.streamInfo.manifestInfo
            }

            function g() {
                return j
            }

            var h = void 0, i = a.streamProcessor.getCurrentRepresentationInfo(), j = a.streamProcessor, k = a.currentValue;
            return h = {
                getStreamInfo: b,
                getMediaInfo: c,
                getTrackInfo: d,
                getCurrentValue: e,
                getManifestInfo: f,
                getStreamProcessor: g
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "RulesContext", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    108: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                v = {}, w = ["execute"]
            }

            function b(a) {
                a && (a.abrRulesCollection && (v[s] = a.abrRulesCollection), a.scheduleRulesCollection && (v[r] = a.scheduleRulesCollection), a.synchronizationRulesCollection && (v[t] = a.synchronizationRulesCollection))
            }

            function c(a, b) {
                h(a) && b && p(v[a], b, !0)
            }

            function d(a, b) {
                h(a) && b && p(v[a], b, !1)
            }

            function e(a, b, c, d, e) {
                var f, g, h = {}, k = a.length, m = k, n = l(b, d), o = function (a) {
                    var b, f;
                    a.value !== i["default"].NO_CHANGE && (h[a.priority] = e(h[a.priority], a.value)), --k || (h[i["default"].WEAK] !== i["default"].NO_CHANGE && (f = i["default"].WEAK, b = h[i["default"].WEAK]), h[i["default"].DEFAULT] !== i["default"].NO_CHANGE && (f = i["default"].DEFAULT, b = h[i["default"].DEFAULT]), h[i["default"].STRONG] !== i["default"].NO_CHANGE && (f = i["default"].STRONG, b = h[i["default"].STRONG]), f != i["default"].STRONG && f != i["default"].WEAK && (f = i["default"].DEFAULT), c({
                        value: void 0 !== b ? b : d,
                        confidence: f
                    }))
                };
                for (h[i["default"].STRONG] = i["default"].NO_CHANGE, h[i["default"].WEAK] = i["default"].NO_CHANGE, h[i["default"].DEFAULT] = i["default"].NO_CHANGE, g = 0; m > g; g++)f = a[g], j(f) ? f.execute(n, o) : k--
            }

            function f() {
                var a, b, c = v[s], d = v[r], e = v[t], f = (c.getRules(k["default"].QUALITY_SWITCH_RULES) || []).concat(c.getRules(k["default"].ABANDON_FRAGMENT_RULES) || []).concat(d.getRules(m["default"].NEXT_FRAGMENT_RULES) || []).concat(d.getRules(m["default"].FRAGMENTS_TO_SCHEDULE_RULES) || []).concat(e.getRules(o["default"].TIME_SYNCHRONIZED_RULES) || []).concat(e.getRules(o["default"].BEST_GUESS_RULES) || []), g = f.length;
                for (b = 0; g > b; b++)a = f[b], "function" == typeof a.reset && a.reset();
                v = {}
            }

            function h(a) {
                return a === k["default"].SCHEDULING_RULE || a === k["default"].ABR_RULE
            }

            function j(a) {
                var b = w.length, c = 0;
                for (c; b > c; c++)if (!a.hasOwnProperty(w[c]))return !1;
                return !0
            }

            function l(a, b) {
                return (0, g["default"])(q).create({streamProcessor: a, currentValue: b})
            }

            function n(a) {
                var b = a.execute.bind(a);
                return a.execute = function (c, d) {
                    var e = function (b) {
                        d.call(a, (0, i["default"])(c).create(b.value, b.priority))
                    };
                    b(c, e)
                }, "function" != typeof a.reset && (a.reset = function () {
                }), a
            }

            function p(a, b, c) {
                var d, e, f, g, h, i;
                for (e in b)if (g = b[e], h = g.length)for (i = 0; h > i; i++)d = g[i], j(d) && (d = n(d), f = a.getRules(e), c && (c = !1, f.length = 0), f.push(d))
            }

            var q = this.context, u = void 0, v = void 0, w = void 0;
            return u = {initialize: a, setConfig: b, setRules: c, addRules: d, applyRules: e, reset: f}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./RulesContext.js"), g = d(f), h = a("./SwitchRequest.js"), i = d(h), j = a("./abr/ABRRulesCollection.js"), k = d(j), l = a("./scheduling/ScheduleRulesCollection.js"), m = d(l), n = a("./synchronization/SynchronizationRulesCollection.js"), o = d(n), p = a("../../core/FactoryMaker.js"), q = d(p), r = 0, s = 1, t = 2;
        e.__dashjs_factory_name = "RulesController";
        var u = q["default"].getSingletonFactory(e);
        u.SCHEDULING_RULE = r, u.ABR_RULE = s, u.SYNC_RULE = t, c["default"] = u, b.exports = c["default"]
    }, {
        "../../core/FactoryMaker.js": 9,
        "./RulesContext.js": 107,
        "./SwitchRequest.js": 109,
        "./abr/ABRRulesCollection.js": 110,
        "./scheduling/ScheduleRulesCollection.js": 119,
        "./synchronization/SynchronizationRulesCollection.js": 122
    }],
    109: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            var c = void 0 === a ? h : a, d = void 0 === b ? i : b, e = {value: c, priority: d};
            return e
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f), h = 999, i = .5, j = 1, k = 0;
        e.__dashjs_factory_name = "SwitchRequest";
        var l = g["default"].getClassFactory(e);
        l.NO_CHANGE = h, l.DEFAULT = i, l.STRONG = j, l.WEAK = k, c["default"] = l, b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    110: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                e = [], f = [];
                var a = (0, u["default"])(c).getInstance(), b = (0, w["default"])(c).getInstance(), d = (0, s["default"])(c).getInstance();
                d.getBufferOccupancyABREnabled() ? (e.push((0, o["default"])(c).create({
                    metricsModel: a,
                    dashMetrics: (0, w["default"])(c).getInstance()
                })), f.push((0, q["default"])(c).create({
                    metricsModel: a,
                    dashMetrics: (0, w["default"])(c).getInstance()
                }))) : (e.push((0, g["default"])(c).create({
                    metricsModel: a,
                    dashMetrics: b
                })), e.push((0, i["default"])(c).create({
                    metricsModel: a,
                    dashMetrics: b
                })), e.push((0, k["default"])(c).create({metricsModel: a})), f.push((0, m["default"])(c).create()))
            }

            function b(a) {
                switch (a) {
                    case z:
                        return e;
                    case A:
                        return f;
                    default:
                        return null
                }
            }

            var c = this.context, d = void 0, e = void 0, f = void 0;
            return d = {initialize: a, getRules: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./ThroughputRule.js"), g = d(f), h = a("./BufferOccupancyRule.js"), i = d(h), j = a("./InsufficientBufferRule.js"), k = d(j), l = a("./AbandonRequestsRule.js"), m = d(l), n = a("./BolaRule.js"), o = d(n), p = a("./BolaAbandonRule.js"), q = d(p), r = a("../../models/MediaPlayerModel.js"), s = d(r), t = a("../../models/MetricsModel.js"), u = d(t), v = a("../../../dash/DashMetrics.js"), w = d(v), x = a("../../../core/FactoryMaker.js"), y = d(x), z = "qualitySwitchRules", A = "abandonFragmentRules";
        e.__dashjs_factory_name = "ABRRulesCollection";
        var B = y["default"].getSingletonFactory(e);
        B.QUALITY_SWITCH_RULES = z, B.ABANDON_FRAGMENT_RULES = A, c["default"] = B, b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../dash/DashMetrics.js": 15,
        "../../models/MediaPlayerModel.js": 80,
        "../../models/MetricsModel.js": 81,
        "./AbandonRequestsRule.js": 111,
        "./BolaAbandonRule.js": 112,
        "./BolaRule.js": 113,
        "./BufferOccupancyRule.js": 114,
        "./InsufficientBufferRule.js": 115,
        "./ThroughputRule.js": 116
    }],
    111: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                j = {}, k = {}, l = (0, i["default"])(e).getInstance()
            }

            function b(a, b) {
                j[a] = j[a] || {}, j[a][b] = j[a][b] || {}
            }

            function c(a, c) {
                var d, h = (new Date).getTime(), i = a.getMediaInfo(), m = i.type, p = a.getCurrentValue(), q = a.getTrackInfo(), r = p.request, s = a.getStreamProcessor().getABRController(), t = (0, g["default"])(e).create(g["default"].NO_CHANGE, g["default"].WEAK);
                if (!isNaN(r.index)) {
                    if (b(m, r.index), d = j[m][r.index], null === d || null === r.firstByteDate || k.hasOwnProperty(d.id))return void c(t);
                    if (void 0 === d.firstByteTime && (d.firstByteTime = r.firstByteDate.getTime(), d.segmentDuration = r.duration, d.bytesTotal = r.bytesTotal, d.id = r.index), d.bytesLoaded = r.bytesLoaded, d.elapsedTime = h - d.firstByteTime, d.bytesLoaded < d.bytesTotal && d.elapsedTime >= n) {
                        if (d.measuredBandwidthInKbps = Math.round(8 * d.bytesLoaded / d.elapsedTime), d.estimatedTimeOfDownload = (8 * d.bytesTotal * .001 / d.measuredBandwidthInKbps).toFixed(2), d.estimatedTimeOfDownload < d.segmentDuration * o || 0 === q.quality)return void c(t);
                        if (!k.hasOwnProperty(d.id)) {
                            var u = s.getQualityForBitrate(i, d.measuredBandwidthInKbps * l.getBandwidthSafetyFactor());
                            t = (0, g["default"])(e).create(u, g["default"].STRONG), k[d.id] = d, f("AbandonRequestsRule ( ", m, "frag id", d.id, ") is asking to abandon and switch to quality to ", u, " measured bandwidth was", d.measuredBandwidthInKbps), delete j[m][d.id]
                        }
                    } else d.bytesLoaded === d.bytesTotal && delete j[m][d.id]
                }
                c(t)
            }

            function d() {
                j = {}, k = {}
            }

            var e = this.context, f = (0, m["default"])(e).getInstance().log, h = void 0, j = void 0, k = void 0, l = void 0;
            return h = {execute: c, reset: d}, a(), h
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../models/MediaPlayerModel.js"), i = d(h), j = a("../../../core/FactoryMaker.js"), k = d(j), l = a("../../../core/Debug.js"), m = d(l), n = 500, o = 1.5;
        e.__dashjs_factory_name = "AbandonRequestsRule", c["default"] = k["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/Debug.js": 7,
        "../../../core/FactoryMaker.js": 9,
        "../../models/MediaPlayerModel.js": 80,
        "../SwitchRequest.js": 109
    }],
    112: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                o = {}, p = (0, i["default"])(j).getInstance()
            }

            function c(a, b, c) {
                o[a] = {index: b, quality: c}
            }

            function d(a, b, c) {
                var d = o[a];
                return d && d.index === b && d.quality === c
            }

            function e(a, b) {
                var e = a.getMediaInfo(), f = e.type, i = l.getReadOnlyMetricsFor(f), n = a.getCurrentValue(), o = n.request, p = (0, g["default"])(j).create(g["default"].NO_CHANGE, g["default"].WEAK);
                if (0 === i.BolaState.length || i.BolaState[0]._s.state !== m["default"].BOLA_STATE_STEADY)return void b(p);
                var q = i.BolaState[0]._s, r = o.index, s = o.quality;
                if (isNaN(r) || 0 === s || d(f, r, s) || !o.firstByteDate)return void b(p);
                var t = (new Date).getTime(), u = t - o.firstByteDate.getTime(), v = o.bytesLoaded, w = o.bytesTotal, x = w - v, y = w * q.bitrate[0] / q.bitrate[s], z = k.getCurrentBufferLevel(i) ? k.getCurrentBufferLevel(i) : 0;
                if (h > u || y >= x || z > q.bufferTarget)return void b(p);
                if (q.safetyGuarantee && z <= q.fragmentDuration && q.state === m["default"].BOLA_STATE_STEADY)return q.lastQuality = 0, l.updateBolaState(f, q), c(f, r, s), p = (0, g["default"])(j).create(0, g["default"].STRONG), m["default"].BOLA_DEBUG && console.log("BolaDebug " + f + " BolaAbandonRule to 0 for safety guarantee"), void b(p);
                var A = 8e3 * q.bandwidthSafetyFactor * v / u, B = .001 * (o.firstByteDate.getTime() - o.requestStartDate.getTime()), C = 8 * x / A, D = s;
                if (C > z)for (--D; D > 0 && (y = w * q.bitrate[D] / q.bitrate[s], !(z >= 8 * y / A));)--D;
                var E = z + q.virtualBuffer - B, F = x - B * A / 8;
                1 > F && (F = 1);
                for (var G = s, H = (q.utility[s] + q.gp - E / q.Vp) / F, I = 0; s > I && (y = w * q.bitrate[I] / q.bitrate[s], !(y > F)); ++I) {
                    var J = (q.utility[I] + q.gp - E / q.Vp) / y;
                    J > H && (G = I, H = J)
                }
                if (G > D && (G = D), G === s)return void b(p);
                for (; G > 0;) {
                    var J = q.bitrate[G], K = q.bitrate[G - 1], L = q.utility[G], M = q.utility[G - 1], N = q.Vp * (q.gp + (J * M - K * L) / (J - K));
                    y = w * q.bitrate[G] / q.bitrate[s];
                    var O = 8 * y / A;
                    if (E - O >= N)break;
                    --G
                }
                q.lastQuality = G, l.updateBolaState(f, q), c(f, r, s), p = (0, g["default"])(j).create(G, g["default"].STRONG), m["default"].BOLA_DEBUG && console.log("BolaDebug " + f + " BolaAbandonRule abandon to " + G), b(p)
            }

            function f() {
                o = {}
            }

            var h = 250, j = this.context, k = a.dashMetrics, l = a.metricsModel, n = void 0, o = void 0, p = void 0;
            return n = {execute: e, reset: f}, b(), n
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../models/MediaPlayerModel.js"), i = d(h), j = a("../../../core/FactoryMaker.js"), k = d(j), l = a("./BolaRule.js"), m = d(l);
        e.__dashjs_factory_name = "BolaAbandonRule", c["default"] = k["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../models/MediaPlayerModel.js": 80,
        "../SwitchRequest.js": 109,
        "./BolaRule.js": 113
    }],
    113: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                D = [], E = (0, k["default"])(r).getInstance(), F = (0, m["default"])(r).getInstance(), G = (0, q["default"])(r).getInstance(), B.on(u["default"].PLAYBACK_SEEKING, j, C)
            }

            function c(a) {
                var b = {}, c = a.getMediaInfo(), d = c.bitrateList, e = d.length;
                if (2 > e || d[0] >= d[1] || d[e - 2] >= d[e - 1])return b.state = v, b;
                var f = a.getStreamProcessor(), g = a.getStreamInfo(), h = a.getTrackInfo(), i = f.isDynamic(), j = g.manifestInfo.duration, k = h.fragmentDuration, l = void 0, m = void 0;
                l = E.getStableBufferTime(), m = j >= E.getLongFormContentDurationThreshold() ? E.getBufferTimeAtTopQualityLongForm() : E.getBufferTimeAtTopQuality();
                var n = l;
                k + p > n && (n = k + p);
                for (var o = [], q = 0; e > q; ++q)o.push(Math.log(d[q] / d[0]));
                var r = (n - k) / o[e - 1], s = 1 + o[e - 1] / (n / k - 1), t = .2, u = !i && n === l;
                if (u) {
                    for (var x = r, y = s, q = 1; e > q; ++q) {
                        var z = x * (y - d[0] * o[q] / (d[q] - d[0])), A = k * (2 - d[0] / d[q]) + t;
                        if (A >= l) {
                            u = !1;
                            break
                        }
                        A > z && (x *= (l - A) / (l - z), y = A / x + o[q] * d[0] / (d[q] - d[0]))
                    }
                    u && p > (l - k) * x / r && (u = !1), u && (r = x, s = y)
                }
                var B = r * (o[e - 1] + s);
                return b.state = w, b.bitrate = d, b.utility = o, b.Vp = r, b.gp = s, b.fragmentDuration = k, b.bandwidthSafetyFactor = E.getBandwidthSafetyFactor(), b.bufferTarget = l, b.bufferMax = m, b.bolaBufferTarget = n, b.bolaBufferMax = B, b.isDynamic = i, b.safetyGuarantee = u, b.lastQuality = 0, b.virtualBuffer = 0, b
            }

            function d(a, b) {
                for (var c = a.bitrate.length, d = c - 1, e = 0, f = 0; c > f; ++f) {
                    var g = (a.utility[f] + a.gp - b / a.Vp) / a.bitrate[f];
                    g > e && (e = g, d = f)
                }
                return d
            }

            function e(a) {
                for (var b = t.getHttpRequests(a), c = b.length - 1; c >= 0; --c) {
                    var d = b[c];
                    if (d.type === o["default"].MEDIA_SEGMENT_TYPE && d._tfinish && d.tresponse)return d
                }
                return null
            }

            function f(a, b) {
                var c = e(a);
                if (!c)return 0;
                var d = .001 * (c._tfinish.getTime() - c.trequest.getTime()), f = 8 * c.trace.reduce(function (a, b) {
                        return a + b.b[0]
                    }, 0);
                return z && console.log("BolaDebug " + b + " BolaRule last throughput = " + (f / 1e6).toFixed(3) + "/" + d.toFixed(3) + "=" + (f / d / 1e6).toFixed(3)), f / d
            }

            function h(a, b) {
                for (var c = 0, d = 1; d < a.bitrate.length && !(a.bitrate[d] > b); ++d)c = d;
                return c
            }

            function i(a) {
                var b = e(a);
                if (!b)return 0;
                var c = (new Date).getTime(), d = b._tfinish.getTime(), f = c - d;
                return 0 > f ? 0 : .001 * f
            }

            function j() {
                for (var a = 0; a < D.length; ++a) {
                    var b = D[a], c = A.getReadOnlyMetricsFor(b);
                    if (0 !== c.BolaState.length) {
                        var d = c.BolaState[0]._s;
                        d.state !== v && (d.state = w), A.updateBolaState(b, d)
                    }
                }
            }

            function l(a, b) {
                var e = a.getStreamProcessor();
                e.getScheduleController().setTimeToLoadDelay(0);
                var j = (0, g["default"])(r).create(g["default"].NO_CHANGE, g["default"].WEAK), k = a.getMediaInfo(), l = k.type, m = A.getReadOnlyMetricsFor(l);
                if (0 === m.BolaState.length) {
                    z && console.log("BolaDebug " + l + "\nBolaDebug " + l + " BolaRule for state=- fragmentStart=" + G.getIndexHandlerTime(a.getStreamProcessor()).toFixed(3));
                    var n = c(a);
                    A.updateBolaState(l, n);
                    var o = 0;
                    if (n.state !== v) {
                        D.push(l);
                        var p = f(m, l);
                        o = h(n, p * n.bandwidthSafetyFactor), n.lastQuality = o, j = (0, g["default"])(r).create(o, g["default"].DEFAULT)
                    }
                    return z && console.log("BolaDebug " + l + " BolaRule quality " + o + " for INITIALIZE"), void b(j)
                }
                var q = m.BolaState[0]._s;
                if (q.state === v)return z && console.log("BolaDebug " + l + " BolaRule quality 0 for ONE_BITRATE"), void b(j);
                z && console.log("BolaDebug " + l + "\nBolaDebug " + l + " EXECUTE BolaRule for state=" + q.state + " fragmentStart=" + G.getIndexHandlerTime(a.getStreamProcessor()).toFixed(3));
                var s = t.getCurrentBufferLevel(m) ? t.getCurrentBufferLevel(m) : 0, u = d(q, s), B = f(m, l);
                if (z && console.log("BolaDebug " + l + " BolaRule bufferLevel=" + s.toFixed(3) + "(+" + q.virtualBuffer.toFixed(3) + ") lastThroughput=" + (B / 1e6).toFixed(3) + " tentativeQuality=" + u + "," + d(q, s + q.virtualBuffer)), .1 >= s && (q.virtualBuffer = 0), !q.safetyGuarantee) {
                    var C = i(m);
                    C > .1 && (q.virtualBuffer += C), s + q.virtualBuffer > q.bolaBufferMax && (q.virtualBuffer = q.bolaBufferMax - s), q.virtualBuffer < 0 && (q.virtualBuffer = 0);
                    var E = d(q, s + q.virtualBuffer);
                    if (E > u) {
                        for (var F = u; E > F && q.bitrate[F + 1] * q.fragmentDuration / (B * q.bandwidthSafetyFactor) < s;)++F;
                        if (F > u)if (F >= E)u = E; else {
                            u = F;
                            var H = q.bitrate[F], I = q.bitrate[F + 1], J = q.utility[F], K = q.utility[F + 1], L = q.Vp * (q.gp + (I * J - H * K) / (I - H));
                            s + q.virtualBuffer > L && (q.virtualBuffer = L - s, q.virtualBuffer < 0 && (q.virtualBuffer = 0))
                        }
                    }
                }
                if (q.state === w || q.state === x) {
                    var o = h(q, B * q.bandwidthSafetyFactor);
                    if (0 >= B && (q.state = y), q.state === w && o < q.lastQuality && (q.state = x), q.state === x && o > q.lastQuality && (o = q.lastQuality), u >= o && (q.state = y), q.state !== y)return z && console.log("BolaDebug " + l + " BolaRule quality " + o + ">" + u + " for STARTUP"), q.lastQuality = o, A.updateBolaState(l, q), j = (0, g["default"])(r).create(o, g["default"].DEFAULT), void b(j)
                }
                var M = 0;
                if (u > q.lastQuality) {
                    var o = h(q, B);
                    if (u > o) {
                        if (o < q.lastQuality)o = q.lastQuality; else {
                            var H = q.bitrate[o], I = q.bitrate[o + 1], J = q.utility[o], K = q.utility[o + 1], N = q.Vp * (q.gp + (I * J - H * K) / (I - H));
                            M = s - N
                        }
                        u = o
                    }
                }
                M > 0 && (M > q.virtualBuffer ? (M -= q.virtualBuffer, q.virtualBuffer = 0) : (q.virtualBuffer -= M, M = 0)), M > 0 && e.getScheduleController().setTimeToLoadDelay(1e3 * M), q.lastQuality = u, A.updateBolaState(l, q), j = (0, g["default"])(r).create(u, g["default"].DEFAULT), z && console.log("BolaDebug " + l + " BolaRule quality " + u + " delay=" + M.toFixed(3) + " for STEADY"), b(j)
            }

            function n() {
                B.off(u["default"].PLAYBACK_SEEKING, j, C), b()
            }

            var p = 5, r = this.context, t = a.dashMetrics, A = a.metricsModel, B = (0, s["default"])(r).getInstance(), C = void 0, D = void 0, E = void 0, F = void 0, G = void 0;
            return C = {execute: l, reset: n}, b(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../../core/FactoryMaker.js"), i = d(h), j = a("../../models/MediaPlayerModel.js"), k = d(j), l = a("../../controllers/PlaybackController.js"), m = d(l), n = a("../../vo/metrics/HTTPRequest.js"), o = d(n), p = a("../../../dash/DashAdapter.js"), q = d(p), r = a("../../../core/EventBus.js"), s = d(r), t = a("../../../core/events/Events.js"), u = d(t), v = 0, w = 1, x = 2, y = 3, z = !1;
        e.__dashjs_factory_name = "BolaRule";
        var A = i["default"].getClassFactory(e);
        A.BOLA_STATE_ONE_BITRATE = v, A.BOLA_STATE_STARTUP = w, A.BOLA_STATE_STARTUP_NO_INC = x, A.BOLA_STATE_STEADY = y, A.BOLA_DEBUG = z, c["default"] = A, b.exports = c["default"]
    }, {
        "../../../core/EventBus.js": 8,
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../../../dash/DashAdapter.js": 13,
        "../../controllers/PlaybackController.js": 48,
        "../../models/MediaPlayerModel.js": 80,
        "../../vo/metrics/HTTPRequest.js": 150,
        "../SwitchRequest.js": 109
    }],
    114: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                m = 0, n = (0, i["default"])(f).getInstance()
            }

            function c(a, b) {
                var c = (new Date).getTime() / 1e3, d = a.getMediaInfo(), e = a.getTrackInfo(), i = d.type, o = isNaN(e.fragmentDuration) ? 2 : e.fragmentDuration / 2, p = a.getCurrentValue(), q = a.getStreamProcessor(), r = q.getABRController(), s = j.getReadOnlyMetricsFor(i), t = l.getCurrentBufferLevel(s), u = s.BufferState.length > 0 ? s.BufferState[s.BufferState.length - 1] : null, v = !1, w = d.representationCount - 1, x = (0, g["default"])(f).create(g["default"].NO_CHANGE, g["default"].WEAK);
                return o > c - m || r.getAbandonmentStateFor(i) === k["default"].ABANDON_LOAD ? void b(x) : (null !== u && t > u.target && (v = t - u.target > n.getRichBufferThreshold(), v && d.representationCount > 1 && (x = (0, g["default"])(f).create(w, g["default"].STRONG))), x.value !== g["default"].NO_CHANGE && x.value !== p && h("BufferOccupancyRule requesting switch to index: ", x.value, "type: ", i, " Priority: ", x.priority === g["default"].DEFAULT ? "Default" : x.priority === g["default"].STRONG ? "Strong" : "Weak"), void b(x))
            }

            function d() {
                m = 0
            }

            var e = void 0, f = this.context, h = (0, o["default"])(f).getInstance().log, j = a.metricsModel, l = a.dashMetrics, m = void 0, n = void 0;
            return e = {execute: c, reset: d}, b(), e
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../models/MediaPlayerModel.js"), i = d(h), j = a("../../controllers/AbrController.js"), k = d(j), l = a("../../../core/FactoryMaker.js"), m = d(l), n = a("../../../core/Debug.js"), o = d(n);
        e.__dashjs_factory_name = "BufferOccupancyRule", c["default"] = m["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/Debug.js": 7,
        "../../../core/FactoryMaker.js": 9,
        "../../controllers/AbrController.js": 42,
        "../../models/MediaPlayerModel.js": 80,
        "../SwitchRequest.js": 109
    }],
    115: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                p = {}, r = 0, s = 1e3, l.on(m["default"].PLAYBACK_SEEKING, e, o)
            }

            function c(a, b) {
                var c = (new Date).getTime(), e = a.getMediaInfo().type, f = a.getCurrentValue(), k = n.getReadOnlyMetricsFor(e), l = k.BufferState.length > 0 ? k.BufferState[k.BufferState.length - 1] : null, m = (0, g["default"])(h).create(g["default"].NO_CHANGE, g["default"].WEAK);
                return s > c - r || null === l ? void b(m) : (d(e, l.state), l.state === i["default"].BUFFER_EMPTY && void 0 !== p[e].firstBufferLoadedEvent && (m = (0, g["default"])(h).create(0, g["default"].STRONG)), m.value !== g["default"].NO_CHANGE && m.value !== f && j("InsufficientBufferRule requesting switch to index: ", m.value, "type: ", e, " Priority: ", m.priority === g["default"].DEFAULT ? "Default" : m.priority === g["default"].STRONG ? "Strong" : "Weak"), r = c, void b(m))
            }

            function d(a, b) {
                p[a] = p[a] || {}, p[a].state = b, b !== i["default"].BUFFER_LOADED || p[a].firstBufferLoadedEvent || (p[a].firstBufferLoadedEvent = !0)
            }

            function e() {
                p = {}
            }

            function f() {
                l.off(m["default"].PLAYBACK_SEEKING, e, o), p = {}, r = 0
            }

            var h = this.context, j = (0, q["default"])(h).getInstance().log, l = (0, k["default"])(h).getInstance(), n = a.metricsModel, o = void 0, p = void 0, r = void 0, s = void 0;
            return o = {execute: c, reset: f}, b(), o
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../controllers/BufferController.js"), i = d(h), j = a("../../../core/EventBus.js"), k = d(j), l = a("../../../core/events/Events.js"), m = d(l), n = a("../../../core/FactoryMaker.js"), o = d(n), p = a("../../../core/Debug.js"), q = d(p);
        e.__dashjs_factory_name = "InsufficientBufferRule", c["default"] = o["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/Debug.js": 7,
        "../../../core/EventBus.js": 8,
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../../controllers/BufferController.js": 43,
        "../SwitchRequest.js": 109
    }],
    116: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                t = [], u = (0, m["default"])(l).getInstance()
            }

            function c(a, b) {
                t[a] = t[a] || [], b !== 1 / 0 && b !== t[a][t[a].length - 1] && t[a].push(b)
            }

            function d(a, b) {
                var c = 0, d = b ? h : j, e = t[a], f = e.length;
                if (d = d > f ? f : d, f > 0) {
                    for (var g = f - d, i = 0, k = g; f > k; k++)i += e[k];
                    c = i / d
                }
                return e.length > d && e.shift(), c / 1e3 * u.getBandwidthSafetyFactor()
            }

            function e(a, b) {
                var e, f, h, j, m = a.getMediaInfo(), r = m.type, s = a.getCurrentValue(), t = q.getReadOnlyMetricsFor(r), u = a.getStreamProcessor(), v = u.getABRController(), w = u.isDynamic(), x = p.getCurrentHttpRequest(t), y = t.BufferState.length > 0 ? t.BufferState[t.BufferState.length - 1] : null, z = t.BufferLevel.length > 0 ? t.BufferLevel[t.BufferLevel.length - 1] : null, A = (0, g["default"])(l).create(g["default"].NO_CHANGE, g["default"].WEAK);
                if (!(t && x && x.type === o["default"].MEDIA_SEGMENT_TYPE && y && z))return void b(A);
                if (x.trace && x.trace.length && (e = (x._tfinish.getTime() - x.tresponse.getTime()) / 1e3, f = x.trace.reduce(function (a, b) {
                        return a + b.b[0]
                    }, 0), j = Math.round(8 * f) / e, c(r, j)), h = Math.round(d(r, w)), v.setAverageThroughput(r, h), v.getAbandonmentStateFor(r) !== k["default"].ABANDON_LOAD) {
                    if (y.state === i["default"].BUFFER_LOADED || w) {
                        var B = v.getQualityForBitrate(m, h);
                        u.getScheduleController().setTimeToLoadDelay(0), A = (0, g["default"])(l).create(B, g["default"].DEFAULT)
                    }
                    A.value !== g["default"].NO_CHANGE && A.value !== s && n("ThroughputRule requesting switch to index: ", A.value, "type: ", r, " Priority: ", A.priority === g["default"].DEFAULT ? "Default" : A.priority === g["default"].STRONG ? "Strong" : "Weak", "Average throughput", Math.round(h), "kbps")
                }
                b(A)
            }

            function f() {
                b()
            }

            var h = 2, j = 3, l = this.context, n = (0, s["default"])(l).getInstance().log, p = a.dashMetrics, q = a.metricsModel, r = void 0, t = void 0, u = void 0;
            return r = {execute: e, reset: f}, b(), r
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../controllers/BufferController.js"), i = d(h), j = a("../../controllers/AbrController.js"), k = d(j), l = a("../../models/MediaPlayerModel.js"), m = d(l), n = a("../../vo/metrics/HTTPRequest.js"), o = d(n), p = a("../../../core/FactoryMaker.js"), q = d(p), r = a("../../../core/Debug.js"), s = d(r);
        e.__dashjs_factory_name = "ThroughputRule", c["default"] = q["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/Debug.js": 7,
        "../../../core/FactoryMaker.js": 9,
        "../../controllers/AbrController.js": 42,
        "../../controllers/BufferController.js": 43,
        "../../models/MediaPlayerModel.js": 80,
        "../../vo/metrics/HTTPRequest.js": 150,
        "../SwitchRequest.js": 109
    }],
    117: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                n = (0, i["default"])(h).getInstance(), o = (0, k["default"])(h).getInstance()
            }

            function c(a, b) {
                var c = a.getMediaInfo(), d = c.type, f = l.getReadOnlyMetricsFor(d), i = j.getCurrentBufferLevel(f), k = void 0;
                k = i < e(a, d) ? 1 : 0, b((0, g["default"])(h).create(k, g["default"].DEFAULT))
            }

            function d() {
            }

            function e(a, b) {
                var c = a.getStreamProcessor(), d = a.getStreamInfo(), e = a.getTrackInfo(), f = c.getABRController(), g = d.manifestInfo.duration, h = g >= n.getLongFormContentDurationThreshold(), i = NaN;
                return i = "fragmentedText" === b ? m.getAllTracksAreDisabled() ? 0 : e.fragmentDuration : f.isPlayingAtTopQuality(d) ? h ? n.getBufferTimeAtTopQualityLongForm() : n.getBufferTimeAtTopQuality() : n.getStableBufferTime()
            }

            var f = void 0, h = this.context, j = a.dashMetrics, l = a.metricsModel, m = a.textSourceBuffer, n = void 0, o = void 0;
            return f = {execute: c, reset: d}, b(), f
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../models/MediaPlayerModel.js"), i = d(h), j = a("../../controllers/PlaybackController.js"), k = d(j), l = a("../../../core/FactoryMaker.js"), m = d(l);
        e.__dashjs_factory_name = "BufferLevelRule", c["default"] = m["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../controllers/PlaybackController.js": 48,
        "../../models/MediaPlayerModel.js": 80,
        "../SwitchRequest.js": 109
    }],
    118: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a, b) {
                var c = a.getMediaInfo().type, i = a.getMediaInfo(), l = a.getStreamInfo().id, m = a.getStreamProcessor(), n = m.getScheduleController(), o = m.getCurrentRepresentationInfo(), p = n.getSeekTarget(), q = !isNaN(p), r = q ? g["default"].STRONG : g["default"].DEFAULT, s = !q, t = q ? p : f.getIndexHandlerTime(m), u = m.getBuffer(), v = void 0, w = null, x = void 0;
                if (isNaN(t) || "fragmentedText" === c && k.getAllTracksAreDisabled())return void b((0, g["default"])(d).create(null, r));
                if (q && n.setSeekTarget(NaN), u && (w = h.getBufferRange(m.getBuffer(), t), null !== w && (v = j.getChunks({
                        streamId: l,
                        mediaType: c,
                        appended: !0,
                        mediaInfo: i,
                        forRange: w
                    }), v && v.length > 0))) {
                    var y = t;
                    t = v[v.length - 1].bufferedRange.end, e("Prior to making a request for time, NextFragmentRequestRule is aligning index handler's currentTime with bufferedRange.end.", y, " was changed to ", t)
                }
                x = f.getFragmentRequestForTime(m, o, t, {keepIdx: s}), x && m.getFragmentModel().isFragmentLoaded(x) && (x = f.getNextFragmentRequest(m, o)), x && (f.setIndexHandlerTime(m, x.startTime + x.duration), x.delayLoadingTime = (new Date).getTime() + n.getTimeToLoadDelay()), b((0, g["default"])(d).create(x, r))
            }

            var c = void 0, d = this.context, e = (0, i["default"])(d).getInstance().log, f = a.adapter, h = a.sourceBufferController, j = a.virtualBuffer, k = a.textSourceBuffer;
            return c = {execute: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../../core/Debug.js"), i = d(h), j = a("../../../core/FactoryMaker.js"), k = d(j);
        e.__dashjs_factory_name = "NextFragmentRequestRule", c["default"] = k["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../core/Debug.js": 7, "../../../core/FactoryMaker.js": 9, "../SwitchRequest.js": 109}],
    119: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                e = [], f = [], e.push((0, i["default"])(c).create({
                    dashMetrics: (0, s["default"])(c).getInstance(),
                    metricsModel: (0, o["default"])(c).getInstance(),
                    textSourceBuffer: (0, m["default"])(c).getInstance()
                })), f.push((0, k["default"])(c).create({
                    adapter: (0, q["default"])(c).getInstance(),
                    sourceBufferController: (0, u["default"])(c).getInstance(),
                    virtualBuffer: (0, w["default"])(c).getInstance(),
                    textSourceBuffer: (0, m["default"])(c).getInstance()
                }))
            }

            function b(a) {
                switch (a) {
                    case x:
                        return e;
                    case y:
                        return f;
                    default:
                        return null
                }
            }

            var c = this.context, d = void 0, e = void 0, f = void 0;
            return d = {initialize: a, getRules: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("./BufferLevelRule.js"), i = d(h), j = a("./NextFragmentRequestRule.js"), k = d(j), l = a("../../TextSourceBuffer.js"), m = d(l), n = a("../../models/MetricsModel.js"), o = d(n), p = a("../../../dash/DashAdapter.js"), q = d(p), r = a("../../../dash/DashMetrics.js"), s = d(r), t = a("../../controllers/SourceBufferController.js"), u = d(t), v = a("../../VirtualBuffer.js"), w = d(v), x = "fragmentsToScheduleRules", y = "nextFragmentRules";
        e.__dashjs_factory_name = "ScheduleRulesCollection";
        var z = g["default"].getSingletonFactory(e);
        z.FRAGMENTS_TO_SCHEDULE_RULES = x, z.NEXT_FRAGMENT_RULES = y, c["default"] = z, b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../dash/DashAdapter.js": 13,
        "../../../dash/DashMetrics.js": 15,
        "../../TextSourceBuffer.js": 38,
        "../../VirtualBuffer.js": 40,
        "../../controllers/SourceBufferController.js": 50,
        "../../models/MetricsModel.js": 81,
        "./BufferLevelRule.js": 117,
        "./NextFragmentRequestRule.js": 118
    }],
    120: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b() {
                r = NaN, s = null, t = NaN, u = null, v = !1, w = NaN, x = g["default"].DEFAULT
            }

            function c(a, b) {
                var c, d;
                if (y = b, A = a.getStreamProcessor(), z = A.getFragmentLoader(), u = a.getTrackInfo(), w = u.fragmentDuration, d = u.DVRWindow, r = d.end, u.useCalculatedLiveEdgeTime) {
                    var i = p.getExpectedLiveEdge();
                    return p.setExpectedLiveEdge(r), void y((0, g["default"])(l).create(i, x))
                }
                s = {
                    start: Math.max(0, r - n),
                    end: r + n
                }, t = Math.floor((d.end - d.start) / 2), c = o.getFragmentRequestForTime(A, u, r, {ignoreIsFinished: !0}), e(r, h, f, c)
            }

            function d() {
                r = NaN, s = null, t = NaN, u = null, v = !1, w = NaN, A = null, z = null
            }

            function e(a, b, c, d) {
                var f;
                if (null === d)f = o.generateFragmentRequestForTime(A, u, a), e(a, b, c, f); else {
                    var g = function h(d) {
                        m.off(k["default"].CHECK_FOR_EXISTENCE_COMPLETED, h, this), d.exists ? b(d.request, a) : c(d.request, a)
                    };
                    m.on(k["default"].CHECK_FOR_EXISTENCE_COMPLETED, g, this), z.checkForExistence(d)
                }
            }

            function f(a, b) {
                var c, d, i;
                return v ? void j(!1, b) : (i = b - r, c = i > 0 ? r - i : r + Math.abs(i) + t, void(c < s.start && c > s.end ? y((0, g["default"])(l).create(null, x)) : (d = o.getFragmentRequestForTime(A, u, c, {ignoreIsFinished: !0}), e(c, h, f, d))))
            }

            function h(a, b) {
                var c, d, f = a.startTime;
                if (!v) {
                    if (!u.fragmentDuration)return void y((0, g["default"])(l).create(f, x));
                    if (v = !0, s.end = f + 2 * t, b === r)return d = b + w, c = o.getFragmentRequestForTime(A, u, d, {ignoreIsFinished: !0}), void e(d, function () {
                        j(!0, d)
                    }, function () {
                        y((0, g["default"])(l).create(d, x))
                    }, c)
                }
                j(!0, b)
            }

            function j(a, b) {
                var c, d, i;
                a ? s.start = b : s.end = b, c = Math.floor(s.end - s.start) <= w, c ? y((0, g["default"])(l).create(a ? b : b - w, x)) : (i = (s.start + s.end) / 2, d = o.getFragmentRequestForTime(A, u, i, {ignoreIsFinished: !0}), e(i, h, f, d))
            }

            var l = this.context, m = (0, i["default"])(l).getInstance(), o = a.adapter, p = a.timelineConverter, q = void 0, r = void 0, s = void 0, t = void 0, u = void 0, v = void 0, w = void 0, x = void 0, y = void 0, z = void 0, A = void 0;
            return q = {execute: c, reset: d}, b(), q
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../../core/EventBus.js"), i = d(h), j = a("../../../core/events/Events.js"), k = d(j), l = a("../../../core/FactoryMaker.js"), m = d(l), n = 43200;
        e.__dashjs_factory_name = "LiveEdgeBinarySearchRule", c["default"] = m["default"].getClassFactory(e), b.exports = c["default"]
    }, {
        "../../../core/EventBus.js": 8,
        "../../../core/FactoryMaker.js": 9,
        "../../../core/events/Events.js": 11,
        "../SwitchRequest.js": 109
    }],
    121: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a) {
            function b(a, b) {
                var c = a.getTrackInfo(), f = c.DVRWindow.end, h = g["default"].DEFAULT;
                if (c.useCalculatedLiveEdgeTime) {
                    var i = e.getExpectedLiveEdge();
                    e.setExpectedLiveEdge(f), b((0, g["default"])(d).create(i, h))
                } else b((0, g["default"])(d).create(f, h))
            }

            var c = void 0, d = this.context, e = a.timelineConverter;
            return c = {execute: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../SwitchRequest.js"), g = d(f), h = a("../../../core/FactoryMaker.js"), i = d(h);
        e.__dashjs_factory_name = "LiveEdgeWithTimeSynchronizationRule", c["default"] = i["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../../core/FactoryMaker.js": 9, "../SwitchRequest.js": 109}],
    122: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                e = [], f = [], e.push((0, m["default"])(c).create({timelineConverter: (0, i["default"])(c).getInstance()})), f.push((0, k["default"])(c).create({
                    timelineConverter: (0, i["default"])(c).getInstance(),
                    adapter: (0, o["default"])(c).getInstance()
                }))
            }

            function b(a) {
                switch (a) {
                    case p:
                        return e;
                    case q:
                        return f;
                    default:
                        return null
                }
            }

            var c = this.context, d = void 0, e = void 0, f = void 0;
            return d = {initialize: a, getRules: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../../core/FactoryMaker.js"), g = d(f), h = a("../../../dash/utils/TimelineConverter.js"), i = d(h), j = a("./LiveEdgeBinarySearchRule.js"), k = d(j), l = a("./LiveEdgeWithTimeSynchronizationRule.js"), m = d(l), n = a("../../../dash/DashAdapter.js"), o = d(n), p = "withAccurateTimeSourceRules", q = "bestGuestRules";
        e.__dashjs_factory_name = "SynchronizationRulesCollection";
        var r = g["default"].getSingletonFactory(e);
        r.TIME_SYNCHRONIZED_RULES = p, r.BEST_GUESS_RULES = q, c["default"] = r, b.exports = c["default"]
    }, {
        "../../../core/FactoryMaker.js": 9,
        "../../../dash/DashAdapter.js": 13,
        "../../../dash/utils/TimelineConverter.js": 21,
        "./LiveEdgeBinarySearchRule.js": 120,
        "./LiveEdgeWithTimeSynchronizationRule.js": 121
    }],
    123: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                if (!a)return null;
                void 0 === a.fileStart && (a.fileStart = 0);
                var b = k["default"].parseBuffer(a), d = (0, g["default"])(c).create();
                return d.setData(b), d
            }

            var b = void 0, c = this.context;
            return b = {parse: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("./IsoFile.js"), g = d(f), h = a("../../core/FactoryMaker.js"), i = d(h), j = a("codem-isoboxer"), k = d(j);
        e.__dashjs_factory_name = "BoxParser", c["default"] = i["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9, "./IsoFile.js": 128, "codem-isoboxer": 6}],
    124: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                g = !1
            }

            function b() {
                var a = "WebKitMediaSource"in window, b = "MediaSource"in window;
                return a || b
            }

            function c() {
                return g
            }

            function d(a) {
                g = a
            }

            function e(a, b) {
                if (!(a instanceof HTMLMediaElement))throw"element must be of type HTMLMediaElement.";
                var c = a.canPlayType(b);
                return "probably" === c || "maybe" === c
            }

            var f = void 0, g = void 0;
            return f = {
                supportsMediaSource: b,
                supportsEncryptedMedia: c,
                supportsCodec: e,
                setEncryptedMediaSupported: d
            }, a(), f
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "Capabilities", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    125: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                var c = 0;
                for (c = 0; c < this.customTimeRangeArray.length && a > this.customTimeRangeArray[c].start; c++);
                for (this.customTimeRangeArray.splice(c, 0, {
                    start: a,
                    end: b
                }), c = 0; c < this.customTimeRangeArray.length - 1; c++)this.mergeRanges(c, c + 1) && c--;
                this.length = this.customTimeRangeArray.length
            }

            function b() {
                this.customTimeRangeArray = [], this.length = 0
            }

            function c(a, b) {
                for (var c = 0; c < this.customTimeRangeArray.length; c++)if (a <= this.customTimeRangeArray[c].start && b >= this.customTimeRangeArray[c].end)this.customTimeRangeArray.splice(c, 1), c--; else {
                    if (a > this.customTimeRangeArray[c].start && b < this.customTimeRangeArray[c].end) {
                        this.customTimeRangeArray.splice(c + 1, 0, {
                            start: b,
                            end: this.customTimeRangeArray[c].end
                        }), this.customTimeRangeArray[c].end = a;
                        break
                    }
                    a > this.customTimeRangeArray[c].start && a < this.customTimeRangeArray[c].end ? this.customTimeRangeArray[c].end = a : b > this.customTimeRangeArray[c].start && b < this.customTimeRangeArray[c].end && (this.customTimeRangeArray[c].start = b)
                }
                this.length = this.customTimeRangeArray.length
            }

            function d(a, b) {
                var c = this.customTimeRangeArray[a], d = this.customTimeRangeArray[b];
                return c.start <= d.start && d.start <= c.end && c.end <= d.end ? (c.end = d.end, this.customTimeRangeArray.splice(b, 1), !0) : d.start <= c.start && c.start <= d.end && d.end <= c.end ? (c.start = d.start, this.customTimeRangeArray.splice(b, 1), !0) : d.start <= c.start && c.start <= d.end && c.end <= d.end ? (this.customTimeRangeArray.splice(a, 1), !0) : c.start <= d.start && d.start <= c.end && d.end <= c.end ? (this.customTimeRangeArray.splice(b, 1), !0) : !1
            }

            function e(a) {
                return this.customTimeRangeArray[a].start
            }

            function f(a) {
                return this.customTimeRangeArray[a].end
            }

            var g = [], h = 0;
            return {customTimeRangeArray: g, length: h, add: a, clear: b, remove: c, mergeRanges: d, start: e, end: f}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "CustomTimeRanges", c["default"] = g["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    126: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                j = (0, i["default"])(e).getInstance()
            }

            function b(a) {
                if (void 0 !== h)return h;
                h = !1;
                var b, c = "1", d = "1";
                try {
                    b = window[a]
                } catch (e) {
                    return f("Warning: DOMStorage access denied: " + e.message), h
                }
                if (!b || a !== p && a !== q)return h;
                try {
                    b.setItem(c, d), b.removeItem(c), h = !0
                } catch (e) {
                    f("Warning: DOMStorage is supported, but cannot be used: " + e.message)
                }
                return h
            }

            function c(a) {
                if (!b(p) || !j.getLastMediaSettingsCachingInfo().enabled)return null;
                var c = "video" === a ? o : n, d = JSON.parse(localStorage.getItem(c)) || {}, e = (new Date).getTime() - parseInt(d.timestamp, 10) >= j.getLastMediaSettingsCachingInfo().ttl || !1, f = d.settings;
                return e && (localStorage.removeItem(c), f = null), f
            }

            function d(a) {
                var c = NaN;
                if (b(p) && j.getLastBitrateCachingInfo().enabled) {
                    var d = "video" === a ? l : m, e = JSON.parse(localStorage.getItem(d)) || {}, g = (new Date).getTime() - parseInt(e.timestamp, 10) >= j.getLastBitrateCachingInfo().ttl || !1, h = parseInt(e.bitrate, 10);
                    isNaN(h) || g ? g && localStorage.removeItem(d) : (c = h, f("Last saved bitrate for " + a + " was " + h))
                }
                return c
            }

            var e = this.context, f = (0, k["default"])(e).getInstance().log, g = void 0, h = void 0, j = void 0;
            return g = {getSavedBitrateSettings: d, getSavedMediaSettings: c, isSupported: b}, a(), g
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f), h = a("../models/MediaPlayerModel.js"), i = d(h), j = a("../../core/Debug.js"), k = d(j), l = "dashjs_vbitrate", m = "dashjs_abitrate", n = "dashjs_asettings", o = "dashjs_vsettings", p = "localStorage", q = "sessionStorage";
        e.__dashjs_factory_name = "DOMStorage";
        var r = g["default"].getSingletonFactory(e);
        r.STORAGE_TYPE_LOCAL = p, r.STORAGE_TYPE_SESSION = q, r.LOCAL_STORAGE_VIDEO_BITRATE_KEY = l, r.LOCAL_STORAGE_AUDIO_BITRATE_KEY = m, r.LOCAL_STORAGE_AUDIO_SETTINGS_KEY = n, r.LOCAL_STORAGE_VIDEO_SETTINGS_KEY = o, c["default"] = r, b.exports = c["default"]
    }, {"../../core/Debug.js": 7, "../../core/FactoryMaker.js": 9, "../models/MediaPlayerModel.js": 80}],
    127: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                l.trigger(i["default"].ERROR, {error: "capability", event: a})
            }

            function b(a, b, c) {
                l.trigger(i["default"].ERROR, {error: "download", event: {id: a, url: b, request: c}})
            }

            function c(a, b, c) {
                l.trigger(i["default"].ERROR, {error: "manifestError", event: {message: a, id: b, manifest: c}})
            }

            function d(a, b, c) {
                l.trigger(i["default"].ERROR, {error: "cc", event: {message: a, id: b, cc: c}})
            }

            function e(a) {
                l.trigger(i["default"].ERROR, {error: "mediasource", event: a})
            }

            function f(a) {
                l.trigger(i["default"].ERROR, {error: "key_session", event: a})
            }

            function h(a) {
                l.trigger(i["default"].ERROR, {error: "key_message", event: a})
            }

            var j = void 0, k = this.context, l = (0, g["default"])(k).getInstance();
            return j = {
                capabilityError: a,
                downloadError: b,
                manifestError: c,
                timedTextError: d,
                mediaSourceError: e,
                mediaKeySessionError: f,
                mediaKeyMessageError: h
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/EventBus.js"), g = d(f), h = a("../../core/events/Events.js"), i = d(h), j = a("../../core/FactoryMaker.js"), k = d(j);
        e.__dashjs_factory_name = "ErrorHandler", c["default"] = k["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/EventBus.js": 8, "../../core/FactoryMaker.js": 9, "../../core/events/Events.js": 11}],
    128: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                return a && k && k.boxes && 0 !== k.boxes.length ? i(k.fetch(a)) : null
            }

            function b(a) {
                for (var b, c = k.fetchAll(a), d = [], e = 0, f = c.length; f > e; e++)b = i(c[e]), b && d.push(b);
                return d
            }

            function c(a) {
                k = a
            }

            function d() {
                if (!k || !k.boxes || !k.boxes.length)return null;
                var a = k.boxes[k.boxes.length - 1].type, c = b(a);
                return c[c.length - 1]
            }

            function e() {
                return k._cursor.offset
            }

            function f() {
                l = {offset: "_offset", size: "size", type: "type"}, m = {
                    references: "references",
                    timescale: "timescale",
                    earliest_presentation_time: "earliest_presentation_time",
                    first_offset: "first_offset"
                }, n = {
                    reference_type: "reference_type",
                    referenced_size: "referenced_size",
                    subsegment_duration: "subsegment_duration"
                }, o = {
                    id: "id",
                    value: "value",
                    timescale: "timescale",
                    scheme_id_uri: "scheme_id_uri",
                    presentation_time_delta: "presentation_time_delta",
                    event_duration: "event_duration",
                    message_data: "message_data"
                }, p = {timescale: "timescale"}, q = {sequence_number: "sequence_number"}, r = {
                    base_data_offset: "base_data_offset",
                    sample_description_index: "sample_description_index",
                    default_sample_duration: "default_sample_duration",
                    default_sample_size: "default_sample_size",
                    default_sample_flags: "default_sample_flags",
                    flags: "flags"
                }, s = {
                    version: "version",
                    baseMediaDecodeTime: "baseMediaDecodeTime",
                    flags: "flags"
                }, t = {
                    sample_count: "sample_count",
                    first_sample_flags: "first_sample_flags",
                    data_offset: "data_offset",
                    flags: "flags",
                    samples: "samples"
                }, u = {
                    sample_size: "sample_size",
                    sample_duration: "sample_duration",
                    sample_composition_time_offset: "sample_composition_time_offset"
                }
            }

            function h(a, b, c) {
                for (var d in c)b[d] = a[c[d]]
            }

            function i(a) {
                if (!a)return null;
                var b, c, d = new g["default"];
                switch (h(a, d, l), a.hasOwnProperty("_incomplete") && (d.isComplete = !a._incomplete), d.type) {
                    case"sidx":
                        if (h(a, d, m), d.references)for (b = 0, c = d.references.length; c > b; b++)h(a.references[b], d.references[b], n);
                        break;
                    case"emsg":
                        h(a, d, o);
                        break;
                    case"mdhd":
                        h(a, d, p);
                        break;
                    case"mfhd":
                        h(a, d, q);
                        break;
                    case"tfhd":
                        h(a, d, r);
                        break;
                    case"tfdt":
                        h(a, d, s);
                        break;
                    case"trun":
                        if (h(a, d, t), d.samples)for (b = 0, c = d.samples.length; c > b; b++)h(a.samples[b], d.samples[b], u)
                }
                return d
            }

            var j = void 0, k = void 0, l = void 0, m = void 0, n = void 0, o = void 0, p = void 0, q = void 0, r = void 0, s = void 0, t = void 0, u = void 0;
            return j = {getBox: a, getBoxes: b, setData: c, getLastBox: d, getOffset: e}, f(), j
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../vo/IsoBox.js"), g = d(f), h = a("../../core/FactoryMaker.js"), i = d(h);
        e.__dashjs_factory_name = "IsoFile", c["default"] = i["default"].getClassFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9, "../vo/IsoBox.js": 137}],
    129: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a, b) {
                n = a, p = b, s = !1, t = NaN, v = null, q = (0, o["default"])(h).getInstance(), w = g["default"].BEST_GUESS_RULES, j.on(m["default"].STREAM_INITIALIZED, f, this)
            }

            function b() {
                s = !1, t = NaN
            }

            function c() {
                return v
            }

            function d() {
                j.off(m["default"].STREAM_INITIALIZED, f, this), b(), v = null, n = null, p = null, s = !1, t = NaN, w = null, q = null
            }

            function e(a) {
                var b = ((new Date).getTime() - t) / 1e3;
                v = a.value, j.trigger(m["default"].LIVE_EDGE_SEARCH_COMPLETED, {
                    liveEdge: v,
                    searchTime: b,
                    error: null === v ? new i["default"](r, "live edge has not been found", null) : null
                })
            }

            function f(a) {
                !p.isDynamic() || s || a.error || (w = n.isTimeSyncCompleted() ? g["default"].TIME_SYNCHRONIZED_RULES : g["default"].BEST_GUESS_RULES, u = (0, g["default"])(h).getInstance().getRules(w), s = !0, t = (new Date).getTime(), q.applyRules(u, p, e, null, function (a, b) {
                    return b
                }))
            }

            var h = this.context, j = (0, k["default"])(h).getInstance(), l = void 0, n = void 0, p = void 0, q = void 0, s = void 0, t = void 0, u = void 0, v = void 0, w = void 0;
            return l = {initialize: a, abortSearch: b, getLiveEdge: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../rules/synchronization/SynchronizationRulesCollection.js"), g = d(f), h = a("../vo/Error.js"), i = d(h), j = a("../../core/EventBus.js"), k = d(j), l = a("../../core/events/Events.js"), m = d(l), n = a("../rules/RulesController.js"), o = d(n), p = a("../../core/FactoryMaker.js"), q = d(p), r = 1;
        e.__dashjs_factory_name = "LiveEdgeFinder";
        var s = q["default"].getSingletonFactory(e);
        s.LIVE_EDGE_NOT_FOUND_ERROR_CODE = r, c["default"] = s, b.exports = c["default"]
    }, {
        "../../core/EventBus.js": 8,
        "../../core/FactoryMaker.js": 9,
        "../../core/events/Events.js": 11,
        "../rules/RulesController.js": 108,
        "../rules/synchronization/SynchronizationRulesCollection.js": 122,
        "../vo/Error.js": 135
    }],
    130: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b(a) {
                return a
            }

            var c = void 0;
            return c = {modifyRequestURL: a, modifyRequestHeader: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f);
        e.__dashjs_factory_name = "RequestModifier", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/FactoryMaker.js": 9}],
    131: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a(a) {
                a && a.videoModel && (T = a.videoModel)
            }

            function b(a) {
                var b, c = new i["default"]([], "", !1);
                if (E = c.xml_str2json(a), !E)throw"TTML document could not be parsed";
                T.getTTMLRenderingDiv() && (b = "html");
                var h = f(E, "http://www.w3.org/ns/ttml");
                if (h && g(E, h), G = E.tt.head.layout.region_asArray, F = E.tt.head.styling.style_asArray, !e()) {
                    var j = "TTML document has incorrect structure";
                    throw j
                }
                var k = w(), l = T.getElement().clientWidth, p = T.getElement().clientHeight, q = [l / k[0], p / k[1]];
                L["font-size"] = q[1] + "px;";
                for (var r = [], s = 0; s < G.length; s++)r.push(t(JSON.parse(JSON.stringify(G[s])), q));
                var u = f(E.tt, "http://www.w3.org/ns/ttml#parameter");
                E.tt.hasOwnProperty(u + ":frameRate") && (E.tt.frameRate = parseInt(E.tt[u + ":frameRate"], 10));
                var v = [], B = E.tt.body_asArray[0].__children;
                return B.forEach(function (a) {
                    var c = a.div.p_asArray;
                    if (!c || 0 === c.length) {
                        var e = "TTML document does not contain any cues";
                        throw e
                    }
                    var f, g, h, i;
                    c.forEach(function (c) {
                        if (c.hasOwnProperty("begin") && c.hasOwnProperty("end"))f = d(c.begin), g = d(c.end); else {
                            if (!c.span.hasOwnProperty("begin") || !c.span.hasOwnProperty("end"))throw e = "TTML document has incorrect timing value";
                            h = d(c.span.begin), i = d(c.span.end)
                        }
                        if (void 0 !== c["smpte:backgroundImage"])for (var j = E.tt.head.metadata.image_asArray, s = 0; s < j.length; s++)"#" + j[s]["xml:id"] == c["smpte:backgroundImage"] && v.push({
                            start: h || f,
                            end: i || g,
                            id: j[s]["xml:id"],
                            data: "data:image/" + j[s].imagetype.toLowerCase() + ";base64, " + j[s].__text,
                            type: "image"
                        }); else if ("html" === b) {
                            I = {}, J = {}, H = {};
                            var t = "";
                            if ((c.hasOwnProperty("id") || c.hasOwnProperty("xml:id")) && (t = c["xml:id"] || c.id), (isNaN(f) || isNaN(g)) && (isNaN(h) || isNaN(i)))throw e = "TTML document has incorrect timing value";
                            var u = z(c, a.div, q), w = A(c, q), B = w[1];
                            w = w[0];
                            var C = document.createElement("div");
                            C.className = B;
                            var D = c.__children, F = y(D, q);
                            F.className = "cueDirUniWrapper", m("unicode-bidi", w) && (F.style.cssText += n("unicode-bidi", w), o("unicode-bidi", w)), m("direction", w) && (F.style.cssText += n("direction", w), o("direction", w)), m("padding-left", w) && m("padding-right", w) && (F.innerHTML = x(F, w)), m("padding-left", w) && m("padding-right", w) && (o("padding-left", w), o("padding-right", w));
                            var G = "";
                            if (m("regionID", u)) {
                                var K = n("regionID", u);
                                G = K.slice(K.indexOf(":") + 1, K.length - 1)
                            }
                            w && (C.style.cssText = w.join(" ") + "display:flex;"), u && (u = u.join(" ")), C.appendChild(F);
                            var L = document.createElement("div");
                            L.appendChild(C), L.id = "subtitle_" + t, L.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + u, 0 === Object.keys(H).length && (H.defaultFontSize = "100"), v.push({
                                start: h || f,
                                end: i || g,
                                type: "html",
                                cueHTMLElement: L,
                                regions: r,
                                regionID: G,
                                cueID: t,
                                videoHeight: p,
                                videoWidth: l,
                                cellResolution: k,
                                fontSize: H || {defaultFontSize: "100"},
                                lineHeight: I,
                                linePadding: J
                            })
                        } else {
                            var M = "", N = c.__children;
                            N.length && N.forEach(function (a) {
                                if (a.hasOwnProperty("span")) {
                                    var b = a.span.__children;
                                    b.forEach(function (a) {
                                        b.hasOwnProperty("metadata") || (a.hasOwnProperty("#text") ? M += a["#text"].replace(/[\r\n]+/gm, " ").trim() : "br"in a && (M += "\n"))
                                    })
                                } else M += a.hasOwnProperty("br") ? "\n" : a["#text"].replace(/[\r\n]+/gm, " ").trim()
                            }), v.push({start: h || f, end: i || g, data: M, type: "text"})
                        }
                    })
                }), v
            }

            function c() {
                D = /^([0-9][0-9]+):([0-5][0-9]):([0-5][0-9])|(60)(\.([0-9])+)?$/, H = {}, I = {}, J = {}, K = {
                    top: "85%;",
                    left: "5%;",
                    width: "90%;",
                    height: "10%;",
                    "align-items": "flex-start;",
                    overflow: "visible;",
                    "-ms-writing-mode": "lr-tb, horizontal-tb;;",
                    "-webkit-writing-mode": "horizontal-tb;",
                    "-moz-writing-mode": "horizontal-tb;",
                    "writing-mode": "horizontal-tb;"
                }, L = {
                    color: "rgb(255,255,255);",
                    direction: "ltr;",
                    "font-family": "monospace, sans-serif;",
                    "font-style": "normal;",
                    "line-height": "normal;",
                    "font-weight": "normal;",
                    "text-align": "start;",
                    "justify-content": "flex-start;",
                    "text-decoration": "none;",
                    "unicode-bidi": "normal;",
                    "white-space": "normal;",
                    width: "100%;"
                }, M = {
                    monospace: "font-family: monospace;",
                    sansSerif: "font-family: sans-serif;",
                    serif: "font-family: serif;",
                    monospaceSansSerif: "font-family: monospace, sans-serif;",
                    monospaceSerif: "font-family: monospace, serif;",
                    proportionalSansSerif: "font-family: Arial;",
                    proportionalSerif: "font-family: Times New Roman;",
                    "default": "font-family: monospace, sans-serif;"
                }, N = {
                    right: ["justify-content: flex-end;", "text-align: right;"],
                    start: ["justify-content: flex-start;", "text-align: start;"],
                    center: ["justify-content: center;", "text-align: center;"],
                    end: ["justify-content: flex-end;", "text-align: end;"],
                    left: ["justify-content: flex-start;", "text-align: left;"]
                }, O = {
                    start: "text-align: start;",
                    center: "text-align: center;",
                    end: "text-align: end;",
                    auto: ""
                }, P = {
                    wrap: "white-space: normal;",
                    noWrap: "white-space: nowrap;"
                }, Q = {
                    normal: "unicode-bidi: normal;",
                    embed: "unicode-bidi: embed;",
                    bidiOverride: "unicode-bidi: bidi-override;"
                }, R = {
                    before: "align-items: flex-start;",
                    center: "align-items: center;",
                    after: "align-items: flex-end;"
                }, S = {
                    lrtb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
                    rltb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;unicode-bidi: bidi-override;",
                    tbrl: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;",
                    tblr: "-webkit-writing-mode: vertical-lr;writing-mode: vertical-lr;-webkit-text-orientation: upright;text-orientation: upright;",
                    lr: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
                    rl: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;",
                    tb: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;"
                }
            }

            function d(a) {
                var b, c, d, e = D.test(a);
                if (!e)return NaN;
                if (b = a.split(":"), c = parseFloat(b[0]) * j + parseFloat(b[1]) * k + parseFloat(b[2]), b[3]) {
                    if (d = E.tt.frameRate, !d || isNaN(d))return NaN;
                    c += parseFloat(b[3]) / d
                }
                return c
            }

            function e() {
                var a = E.hasOwnProperty("tt"), b = a ? E.tt.hasOwnProperty("head") : !1, c = b ? E.tt.head.hasOwnProperty("layout") : !1, d = b ? E.tt.head.hasOwnProperty("styling") : !1, e = a ? E.tt.hasOwnProperty("body") : !1;
                return a && b && c && d && e
            }

            function f(a, b) {
                var c = Object.keys(a).filter(function (c) {
                    return ("xmlns" === c.split(":")[0] || "xmlns" === c.split(":")[1]) && a[c] === b
                }).map(function (a) {
                    return a.split(":")[2] || a.split(":")[1]
                });
                return 1 != c.length ? null : c[0]
            }

            function g(a, b) {
                for (var c in a)if (a.hasOwnProperty(c)) {
                    if (("object" == typeof a[c] || a[c]instanceof Object) && !Array.isArray(a[c]))g(a[c], b); else if (Array.isArray(a[c]))for (var d = 0; d < a[c].length; d++)g(a[c][d], b);
                    var e = c.slice(c.indexOf(b) + b.length + 1);
                    a[e] = a[c], delete a[c]
                }
            }

            function h(a) {
                return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }

            function l(a) {
                var b = a.slice(1), c = b.match(/.{2}/g), d = parseFloat(parseInt(parseInt(c[3], 16) / 255 * 1e3, 10) / 1e3), e = c.slice(0, 3).map(function (a) {
                    return parseInt(a, 16)
                });
                return "rgba(" + e.join(",") + "," + d + ");"
            }

            function m(a, b) {
                for (var c = 0; c < b.length; c++)if (b[c].indexOf(a) > -1)return !0;
                return !1
            }

            function n(a, b) {
                for (var c = 0; c < b.length; c++)if (b[c].indexOf(a) > -1)return b[c];
                return null
            }

            function o(a, b) {
                b.splice(b.indexOf(n(a, b)), 1)
            }

            function p(a, b) {
                for (var c = 0; c < a.length; c++)for (var d = 0; d < b.length; d++)a[c] && a[c].split(":")[0].indexOf(b[d].split(":")[0]) > -1 && a.splice(c, 1);
                return a.concat(b)
            }

            function q(a, b) {
                var c = [];
                for (var d in a)if (a.hasOwnProperty(d)) {
                    var e = d.replace("ebutts:", "");
                    e = e.replace("xml:", ""), e = e.replace("tts:", ""), e = h(e), a[e] = a[d], delete a[d]
                }
                if ("line-padding"in a) {
                    var f = parseFloat(a["line-padding"].slice(a["line-padding"].indexOf(":") + 1, a["line-padding"].indexOf("c")));
                    "id"in a && (J[a.id] = f);
                    var g = f * b[0] + "px;";
                    c.push("padding-left:" + g), c.push("padding-right:" + g)
                }
                if ("font-size"in a) {
                    var i = parseFloat(a["font-size"].slice(a["font-size"].indexOf(":") + 1, a["font-size"].indexOf("%")));
                    "id"in a && (H[a.id] = i);
                    var j = i / 100 * b[1] + "px;";
                    c.push("font-size:" + j)
                }
                if ("line-height"in a)if ("normal" === a["line-height"])c.push("line-height: normal;"); else {
                    var k = parseFloat(a["line-height"].slice(a["line-height"].indexOf(":") + 1, a["line-height"].indexOf("%")));
                    "id"in a && (I[a.id] = k);
                    var n = k / 100 * b[1] + "px;";
                    c.push("line-height:" + n)
                }
                "font-family"in a && (a["font-family"]in M ? c.push(M[a["font-family"]]) : c.push("font-family:" + a["font-family"] + ";")), "text-align"in a && a["text-align"]in N && (c.push(N[a["text-align"]][0]), c.push(N[a["text-align"]][1])), "multi-row-align"in a && (m("text-align", c) && "auto" != a["multi-row-align"] && o("text-align", c), a["multi-row-align"]in O && c.push(O[a["multi-row-align"]]));
                var p;
                return "background-color"in a && (a["background-color"].indexOf("#") > -1 && a["background-color"].length - 1 === 8 ? (p = l(a["background-color"]), c.push("background-color: " + p)) : c.push("background-color:" + a["background-color"] + ";")), "color"in a && (a.color.indexOf("#") > -1 && a.color.length - 1 === 8 ? (p = l(a.color), c.push("color: " + p)) : c.push("color:" + a.color + ";")), "wrap-option"in a && (a["wrap-option"]in P ? c.push(P[a["wrap-option"]]) : c.push("white-space:" + a["wrap-option"])), "unicode-bidi"in a && (a["unicode-bidi"]in Q ? c.push(Q[a["unicode-bidi"]]) : c.push("unicode-bidi:" + a["unicode-bidi"])), "font-style"in a && c.push("font-style:" + a["font-style"] + ";"), "font-weight"in a && c.push("font-weight:" + a["font-weight"] + ";"), "direction"in a && c.push("direction:" + a.direction + ";"), "text-decoration"in a && c.push("text-decoration:" + a["text-decoration"] + ";"), E.tt.hasOwnProperty("xml:space") && "preserve" === E.tt["xml:space"] && c.push("white-space: pre;"), c
            }

            function r(a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d["xml:id"] === b || d.id === b)return d
                }
                return null
            }

            function s(a, b) {
                var c = [], d = a.match(/\S+/g);
                return d.forEach(function (a) {
                    var d = r(F, a);
                    if (d) {
                        var e = q(JSON.parse(JSON.stringify(d)), b);
                        c = c.concat(e)
                    }
                }), c
            }

            function t(a, b) {
                var c = [];
                for (var d in a) {
                    var e = d.replace("tts:", "");
                    e = e.replace("xml:", ""), e = h(e), a[e] = a[d], e !== d && delete a[d]
                }
                if ("extent"in a) {
                    var f = a.extent.split(/\s/);
                    c.push("width: " + f[0] + ";"), c.push("height: " + f[1] + ";")
                }
                if ("origin"in a) {
                    var g = a.origin.split(/\s/);
                    c.push("left: " + g[0] + ";"), c.push("top: " + g[1] + ";")
                }
                if ("display-align"in a && c.push(R[a["display-align"]]), "writing-mode"in a && c.push(S[a["writing-mode"]]), "style"in a) {
                    var i = s(a.style, b);
                    c = c.concat(i)
                }
                return "padding"in a && c.push("padding:" + a.padding + ";"), "overflow"in a && c.push("overflow:" + a.overflow + ";"), "show-background"in a && c.push("show-background:" + a["show-background"] + ";"), "id"in a && c.push("regionID:" + a.id + ";"), c
            }

            function u(a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d["xml:id"] === b || d.id === b)return d
                }
                return null
            }

            function v(a, b) {
                var c = [], d = a.match(/\S+/g);
                return d.forEach(function (a) {
                    var d = u(G, a);
                    if (d) {
                        var e = t(JSON.parse(JSON.stringify(d)), b);
                        c = c.concat(e)
                    }
                }), c
            }

            function w() {
                var a = [32, 15];
                return E.tt.hasOwnProperty("ttp:cellResolution") ? E.tt["ttp:cellResolution"].split(" ").map(parseFloat) : a
            }

            function x(a, b) {
                for (var c = n("padding-left", b), d = n("padding-right", b), e = c.concat(" " + d), f = "", g = "", h = "", i = Array.prototype.slice.call(a.children), j = a.getElementsByClassName("lineBreak")[0], k = i.indexOf(j), l = []; -1 != k;)l.push(k), k = i.indexOf(j, k + 1);
                var m = "</span>", o = "<br>", p = '<span class="spanPadding" style="-webkit-box-decoration-break: clone; ';
                if (l.length)l.forEach(function (a, b) {
                    if (0 === b) {
                        for (var c = "", d = 0; a > d; d++)f += i[d].outerHTML, 0 === d && (c = e.concat(i[d].style.cssText));
                        f = p + c + '">' + f
                    }
                    for (var j = "", k = a + 1; k < i.length; k++)g += i[k].outerHTML, k === i.length - 1 && (j += e.concat(i[k].style.cssText));
                    g = p + j + '">' + g, f && g && b === l.length - 1 ? h += f + m + o + g + m : f && g && b !== l.length - 1 ? h += f + m + o + g + m + o : f && !g ? h += f + m : !f && g && b === l.length - 1 ? h += g + m : !f && g && b !== l.length - 1 && (h += g + m + o)
                }); else {
                    for (var q = "", r = 0; r < i.length; r++)q += i[r].style.cssText;
                    h = p + e + q + '">' + a.innerHTML + m
                }
                return h
            }

            function y(a, b) {
                var c = document.createElement("div");
                return a.forEach(function (a) {
                    if (!a.hasOwnProperty("metadata"))if (a.hasOwnProperty("span")) {
                        var d = a.span.__children, e = document.createElement("span");
                        if (a.span.hasOwnProperty("style")) {
                            var f = s(a.span.style, b);
                            e.className = "spanPadding " + a.span.style, e.style.cssText = f.join(" ")
                        }
                        d.forEach(function (a) {
                            if (!d.hasOwnProperty("metadata"))if (a.hasOwnProperty("#text")) {
                                var b = document.createTextNode(a["#text"]);
                                e.appendChild(b)
                            } else if ("br"in a) {
                                e.hasChildNodes() && c.appendChild(e);
                                var f = document.createElement("br");
                                f.className = "lineBreak", c.appendChild(f);
                                var g = document.createElement("span");
                                g.className = e.className, g.style.cssText = e.style.cssText, e = g
                            }
                        }), c.appendChild(e)
                    } else if (a.hasOwnProperty("br")) {
                        var g = document.createElement("br");
                        g.className = "lineBreak", c.appendChild(g)
                    } else if (a.hasOwnProperty("#text")) {
                        var h = document.createElement("span");
                        h.textContent = a["#text"], c.appendChild(h)
                    }
                }), c
            }

            function z(a, b, c) {
                var d, e, f = [], g = a.region, h = b.region;
                return h && (d = v(h, c)), g ? (e = f.concat(v(g, c)), f = d ? p(d, e) : e) : d && (f = d), B(f, K), f
            }

            function A(a, b) {
                var c, d, e, f = [], g = a.style, h = E.tt.body.style, i = E.tt.body.div.style, j = "";
                return h && (c = s(h, b), j = "paragraph " + h), i && (d = s(i, b), c ? (d = p(c, d), j += " " + i) : j = "paragraph " + i), g ? (e = s(g, b), c && d ? (f = p(d, e), j += " " + g) : c ? (f = p(c, e), j += " " + g) : d ? (f = p(d, e), j += " " + g) : (f = e, j = "paragraph " + g)) : c && !d ? f = c : !c && d && (f = d), B(f, L), [f, j]
            }

            function B(a, b) {
                for (var c in b)b.hasOwnProperty(c) && (m(c, a) || a.push(c + ":" + b[c]))
            }

            var C = void 0, D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0, K = void 0, L = void 0, M = void 0, N = void 0, O = void 0, P = void 0, Q = void 0, R = void 0, S = void 0, T = void 0;
            return C = {parse: b, setConfig: a}, c(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f), h = a("../../../externals/xml2json.js"), i = d(h), j = 3600, k = 60;
        e.__dashjs_factory_name = "TTMLParser", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../../externals/xml2json.js": 4, "../../core/FactoryMaker.js": 9}],
    132: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e() {
            function a() {
                k = /(?:\r\n|\r|\n)/gm, l = /-->/, m = /(^[\s]+|[\s]+$)/g, n = /\s\b/g
            }

            function b(a) {
                var b, e, g = [];
                a = a.split(k), b = a.length, e = -1;
                for (var i = 0; b > i; i++) {
                    var j = a[i];
                    if (j.length > 0 && "WEBVTT" !== j && j.match(l)) {
                        var n = d(j), o = n.cuePoints, p = n.styles, q = f(a, i + 1), r = c(o[0].replace(m, "")), s = c(o[1].replace(m, ""));
                        !isNaN(r) && !isNaN(s) && r >= e && s > r ? "" !== q ? (e = r, g.push({
                            start: r,
                            end: s,
                            data: q,
                            styles: p
                        })) : h("Skipping cue due to empty/malformed cue text") : h("Skipping cue due to incorrect cue timing")
                    }
                }
                return g
            }

            function c(a) {
                var b = a.split(":"), c = b.length - 1;
                return a = 60 * parseInt(b[c - 1], 10) + parseFloat(b[c]), 2 === c && (a += 3600 * parseInt(b[0], 10)), a
            }

            function d(a) {
                var b = a.split(l), c = b[1].split(n);
                return c.shift(), b[1] = c[0], c.shift(), {cuePoints: b, styles: e(c)}
            }

            function e(a) {
                var b = {};
                return a.forEach(function (a) {
                    if (a.split(/:/).length > 1) {
                        var c = a.split(/:/)[1];
                        c && -1 != c.search(/%/) && (c = parseInt(c.replace(/%/, ""), 10)), (a.match(/align/) || a.match(/A/)) && (b.align = c), (a.match(/line/) || a.match(/L/)) && (b.line = c), (a.match(/position/) || a.match(/P/)) && (b.position = c), (a.match(/size/) || a.match(/S/)) && (b.size = c)
                    }
                }), b
            }

            function f(a, b) {
                for (var c, d = b, e = "", f = ""; "" !== a[d] && d < a.length;)d++;
                if (c = d - b, c > 1)for (var g = 0; c > g; g++) {
                    if (f = a[b + g], f.match(l)) {
                        e = "";
                        break
                    }
                    e += f, g !== c - 1 && (e += "\n")
                } else f = a[b], f.match(l) || (e = f);
                return decodeURI(e)
            }

            var g = this.context, h = (0, i["default"])(g).getInstance().log, j = void 0, k = void 0, l = void 0, m = void 0, n = void 0;
            return j = {parse: b}, a(), j
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../core/FactoryMaker.js"), g = d(f), h = a("../../core/Debug.js"), i = d(h);
        e.__dashjs_factory_name = "VTTParser", c["default"] = g["default"].getSingletonFactory(e), b.exports = c["default"]
    }, {"../../core/Debug.js": 7, "../../core/FactoryMaker.js": 9}],
    133: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.mediaType = null, this.bitrate = null, this.qualityIndex = NaN
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    134: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.streamId = null, this.mediaInfo = null, this.segmentType = null, this.quality = NaN, this.index = NaN, this.bytes = null, this.start = NaN, this.end = NaN, this.duration = NaN
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    135: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f(a, b, c) {
            d(this, f), this.code = a || null, this.message = b || null, this.data = c || null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    136: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.action = f.ACTION_DOWNLOAD, this.startTime = NaN, this.mediaType = null, this.mediaInfo = null, this.type = null, this.duration = NaN, this.timescale = NaN, this.range = null, this.url = null, this.requestStartDate = null, this.firstByteDate = null, this.requestEndDate = null, this.quality = NaN, this.index = NaN, this.availabilityStartTime = null, this.availabilityEndTime = null, this.wallStartTime = null, this.bytesLoaded = NaN, this.bytesTotal = NaN, this.delayLoadingTime = NaN
        };
        e.ACTION_DOWNLOAD = "download", e.ACTION_COMPLETE = "complete", c["default"] = e, b.exports = c["default"]
    }, {}],
    137: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.offset = NaN, this.type = null, this.size = NaN, this.isComplete = !0
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    138: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.DVRWindowSize = NaN, this.loadedTime = null, this.availableFrom = null, this.minBufferTime = NaN, this.duration = NaN, this.isDynamic = !1, this.maxFragmentDuration = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    139: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.id = null, this.index = null, this.type = null, this.streamInfo = null, this.representationCount = 0, this.lang = null, this.viewpoint = null, this.accessibility = null, this.audioChannelConfiguration = null, this.roles = null, this.codec = null, this.mimeType = null, this.contentProtection = null, this.isText = !1, this.KID = null, this.bitrateList = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    140: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.TcpList = [], this.HttpList = [], this.RepSwitchList = [], this.BufferLevel = [], this.BufferState = [], this.PlayList = [], this.DroppedFrames = [], this.SchedulingInfo = [], this.DVRInfo = [], this.ManifestUpdate = [], this.RequestsQueue = null, this.DVBErrors = [], this.BolaState = []
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    141: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.id = null, this.index = null, this.start = NaN, this.duration = NaN, this.manifestInfo = null, this.isLast = !0
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    142: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.video = null, this.captionData = null, this.label = null, this.lang = null, this.defaultTrack = !1, this.kind = null, this.isFragmented = !1, this.isEmbedded = !1
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    143: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.id = null, this.quality = null, this.DVRWindow = null, this.fragmentDuration = null, this.mediaInfo = null, this.MSETimeOffset = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    144: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.t = null, this.xywh = null, this.track = null, this.id = null,
                this.s = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    145: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this._s = void 0
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    146: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.t = null, this.level = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    147: [function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {"default": a}
        }

        function e(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a("../../controllers/BufferController.js"), g = d(f), h = function i() {
            e(this, i), this.target = null, this.state = g["default"].BUFFER_EMPTY
        };
        c["default"] = h, b.exports = c["default"]
    }, {"../../controllers/BufferController.js": 43}],
    148: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.time = null, this.range = null, this.manifestInfo = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    149: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.time = null, this.droppedFrames = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    150: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.tcpid = null, this.type = null, this.url = null, this.actualurl = null, this.range = null, this.trequest = null, this.tresponse = null, this.responsecode = null, this.interval = null, this.trace = [], this._stream = null, this._tfinish = null, this._mediaduration = null, this._responseHeaders = null
        };
        e.Trace = function () {
            function a() {
                d(this, a), this.s = null, this.d = null, this.b = []
            }

            return a
        }(), e.MPD_TYPE = "MPD", e.XLINK_EXPANSION_TYPE = "XLinkExpansion", e.INIT_SEGMENT_TYPE = "InitializationSegment", e.INDEX_SEGMENT_TYPE = "IndexSegment", e.MEDIA_SEGMENT_TYPE = "MediaSegment", e.BITSTREAM_SWITCHING_SEGMENT_TYPE = "BitstreamSwitchingSegment", e.OTHER_TYPE = "other", c["default"] = e, b.exports = c["default"]
    }, {}],
    151: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.mediaType = null, this.type = null, this.requestTime = null, this.fetchTime = null, this.availabilityStartTime = null, this.presentationStartTime = 0, this.clientTimeOffset = 0, this.currentTime = null, this.buffered = null, this.latency = 0, this.streamInfo = [], this.trackInfo = []
        };
        e.StreamInfo = function () {
            function a() {
                d(this, a), this.id = null, this.index = null, this.start = null, this.duration = null
            }

            return a
        }(), e.TrackInfo = function () {
            function a() {
                d(this, a), this.id = null, this.index = null, this.mediaType = null, this.streamIndex = null, this.presentationTimeOffset = null, this.startNumber = null, this.fragmentInfoType = null
            }

            return a
        }(), c["default"] = e, b.exports = c["default"]
    }, {}],
    152: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.start = null, this.mstart = null, this.starttype = null, this.trace = []
        };
        e.Trace = function () {
            function a() {
                d(this, a), this.representationid = null, this.subreplevel = null, this.start = null, this.mstart = null, this.duration = null, this.playbackspeed = null, this.stopreason = null
            }

            return a
        }(), e.INITIAL_PLAYOUT_START_REASON = "initial_playout", e.SEEK_START_REASON = "seek", e.RESUME_FROM_PAUSE_START_REASON = "resume", e.METRICS_COLLECTION_START_REASON = "metrics_collection_start", e.Trace.REPRESENTATION_SWITCH_STOP_REASON = "representation_switch", e.Trace.REBUFFERING_REASON = "rebuffering", e.Trace.USER_REQUEST_STOP_REASON = "user_request", e.Trace.END_OF_PERIOD_STOP_REASON = "end_of_period", e.Trace.END_OF_CONTENT_STOP_REASON = "end_of_content", e.Trace.METRICS_COLLECTION_STOP_REASON = "metrics_collection_end", e.Trace.FAILURE_STOP_REASON = "failure", c["default"] = e, b.exports = c["default"]
    }, {}],
    153: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.t = null, this.mt = null, this.to = null, this.lto = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    154: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.loadingRequests = [], this.executedRequests = []
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    155: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.mediaType = null, this.t = null, this.type = null, this.startTime = null, this.availabilityStartTime = null, this.duration = null, this.quality = null, this.range = null, this.state = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}],
    156: [function (a, b, c) {
        "use strict";
        function d(a, b) {
            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function f() {
            d(this, f), this.tcpid = null, this.dest = null, this.topen = null, this.tclose = null, this.tconnect = null
        };
        c["default"] = e, b.exports = c["default"]
    }, {}]
}, {}, [5]);
//# sourceMappingURL=dash.all.min.js.map