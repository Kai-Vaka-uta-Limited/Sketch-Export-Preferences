var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@skpm/dialog/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* let's try to match the API from Electron's Dialog
(https://github.com/electron/electron/blob/master/docs/api/dialog.md) */

module.exports = {
  showOpenDialog: __webpack_require__(/*! ./open-dialog */ "./node_modules/@skpm/dialog/lib/open-dialog.js").openDialog,
  showOpenDialogSync: __webpack_require__(/*! ./open-dialog */ "./node_modules/@skpm/dialog/lib/open-dialog.js").openDialogSync,
  showSaveDialog: __webpack_require__(/*! ./save-dialog */ "./node_modules/@skpm/dialog/lib/save-dialog.js").saveDialog,
  showSaveDialogSync: __webpack_require__(/*! ./save-dialog */ "./node_modules/@skpm/dialog/lib/save-dialog.js").saveDialogSync,
  showMessageBox: __webpack_require__(/*! ./message-box */ "./node_modules/@skpm/dialog/lib/message-box.js").messageBox,
  showMessageBoxSync: __webpack_require__(/*! ./message-box */ "./node_modules/@skpm/dialog/lib/message-box.js").messageBoxSync,
  // showErrorBox: require('./error-box'),
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/message-box.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/message-box.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/dialog/lib/utils.js")

var typeMap = {
  none: 0,
  info: 1,
  error: 2,
  question: 1,
  warning: 2,
}

function setupOptions(document, options) {
  if (
    !document ||
    (typeof document.isKindOfClass !== 'function' && !document.sketchObject)
  ) {
    options = document
    document = undefined
  } else if (document.sketchObject) {
    document = document.sketchObject
  }
  if (!options) {
    options = {}
  }

  var dialog = NSAlert.alloc().init()

  if (options.type) {
    dialog.alertStyle = typeMap[options.type] || 0
  }

  if (options.buttons && options.buttons.length) {
    options.buttons.forEach(function addButton(button) {
      dialog.addButtonWithTitle(
        options.normalizeAccessKeys ? button.replace(/&/g, '') : button
      )
      // TODO: add keyboard shortcut if options.normalizeAccessKeys
    })
  }

  if (typeof options.defaultId !== 'undefined') {
    var buttons = dialog.buttons()
    if (options.defaultId < buttons.length) {
      // Focus the button at defaultId if the user opted to do so.
      // The first button added gets set as the default selected.
      // So remove that default, and make the requested button the default.
      buttons[0].setKeyEquivalent('')
      buttons[options.defaultId].setKeyEquivalent('\r')
    }
  }

  if (options.title) {
    // not shown on macOS
  }

  if (options.message) {
    dialog.messageText = options.message
  }

  if (options.detail) {
    dialog.informativeText = options.detail
  }

  if (options.checkboxLabel) {
    dialog.showsSuppressionButton = true
    dialog.suppressionButton().title = options.checkboxLabel

    if (typeof options.checkboxChecked !== 'undefined') {
      dialog.suppressionButton().state = options.checkboxChecked
        ? NSOnState
        : NSOffState
    }
  }

  if (options.icon) {
    if (typeof options.icon === 'string') {
      options.icon = NSImage.alloc().initWithContentsOfFile(options.icon)
    }
    dialog.icon = options.icon
  } else if (
    typeof __command !== 'undefined' &&
    __command.pluginBundle() &&
    __command.pluginBundle().icon()
  ) {
    dialog.icon = __command.pluginBundle().icon()
  } else {
    var icon = NSImage.imageNamed('plugins')
    if (icon) {
      dialog.icon = icon
    }
  }

  return {
    document: document,
    options: options,
    dialog: dialog,
  }
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowmessageboxbrowserwindow-options
module.exports.messageBox = function messageBox(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialog(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return {
        response:
          setup.options.buttons && setup.options.buttons.length
            ? Number(returnCode) - 1000
            : Number(returnCode),
        checkboxChecked: _dialog.suppressionButton().state() == NSOnState,
      }
    },
    setup.document
  )
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowmessageboxsyncbrowserwindow-options
module.exports.messageBoxSync = function messageBoxSync(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialogSync(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return setup.options.buttons && setup.options.buttons.length
        ? Number(returnCode) - 1000
        : Number(returnCode)
    },
    setup.document
  )
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/open-dialog.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/open-dialog.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/dialog/lib/utils.js")

function setupOptions(document, options) {
  if (
    !document ||
    (typeof document.isKindOfClass !== 'function' && !document.sketchObject)
  ) {
    options = document
    document = undefined
  }
  if (!options) {
    options = {}
  }

  var dialog = NSOpenPanel.openPanel()

  if (options.title) {
    dialog.title = options.title
  }

  if (options.defaultPath) {
    dialog.setDirectoryURL(utils.getURL(options.defaultPath))
  }

  if (options.buttonLabel) {
    dialog.prompt = options.buttonLabel
  }

  if (options.filters && options.filters.length) {
    var exts = []
    options.filters.forEach(function setFilter(filter) {
      filter.extensions.forEach(function setExtension(ext) {
        exts.push(ext)
      })
    })

    dialog.allowedFileTypes = exts
  }

  var hasProperty =
    Array.isArray(options.properties) && options.properties.length > 0
  dialog.canChooseFiles =
    hasProperty && options.properties.indexOf('openFile') !== -1
  dialog.canChooseDirectories =
    hasProperty && options.properties.indexOf('openDirectory') !== -1
  dialog.allowsMultipleSelection =
    hasProperty && options.properties.indexOf('multiSelections') !== -1
  dialog.showsHiddenFiles =
    hasProperty && options.properties.indexOf('showHiddenFiles') !== -1
  dialog.canCreateDirectories =
    hasProperty && options.properties.indexOf('createDirectory') !== -1
  dialog.resolvesAliases =
    !hasProperty || options.properties.indexOf('noResolveAliases') === -1
  dialog.treatsFilePackagesAsDirectories =
    hasProperty && options.properties.indexOf('treatPackageAsDirectory') !== -1

  if (options.message) {
    dialog.message = options.message
  }

  return {
    document: document,
    options: options,
    dialog: dialog,
  }
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowopendialogbrowserwindow-options
module.exports.openDialog = function openDialog(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialog(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      if (returnCode != NSOKButton) {
        return {
          canceled: true,
          filePaths: [],
        }
      }
      var result = []
      var urls = _dialog.URLs()
      for (var k = 0; k < urls.length; k += 1) {
        result.push(String(urls[k].path()))
      }
      return {
        canceled: false,
        filePaths: result,
      }
    },
    setup.document
  )
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowopendialogsyncbrowserwindow-options
module.exports.openDialogSync = function openDialogSync(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialogSync(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      if (returnCode != NSOKButton) {
        return []
      }
      var result = []
      var urls = _dialog.URLs()
      for (var k = 0; k < urls.length; k += 1) {
        result.push(String(urls[k].path()))
      }
      return result
    },
    setup.document
  )
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/save-dialog.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/save-dialog.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/dialog/lib/utils.js")

function setupOptions(document, options) {
  if (
    !document ||
    (typeof document.isKindOfClass !== 'function' && !document.sketchObject)
  ) {
    options = document
    document = undefined
  }
  if (!options) {
    options = {}
  }

  var dialog = NSSavePanel.savePanel()

  if (options.title) {
    dialog.title = options.title
  }

  if (options.defaultPath) {
    // that's a path
    dialog.setDirectoryURL(utils.getURL(options.defaultPath))

    if (
      options.defaultPath[0] === '.' ||
      options.defaultPath[0] === '~' ||
      options.defaultPath[0] === '/'
    ) {
      var parts = options.defaultPath.split('/')
      if (parts.length > 1 && parts[parts.length - 1]) {
        dialog.setNameFieldStringValue(parts[parts.length - 1])
      }
    } else {
      dialog.setNameFieldStringValue(options.defaultPath)
    }
  }

  if (options.buttonLabel) {
    dialog.prompt = options.buttonLabel
  }

  if (options.filters && options.filters.length) {
    var exts = []
    options.filters.forEach(function setFilter(filter) {
      filter.extensions.forEach(function setExtension(ext) {
        exts.push(ext)
      })
    })

    dialog.allowedFileTypes = exts
  }

  if (options.message) {
    dialog.message = options.message
  }

  if (options.nameFieldLabel) {
    dialog.nameFieldLabel = options.nameFieldLabel
  }

  if (options.showsTagField) {
    dialog.showsTagField = options.showsTagField
  }

  return {
    document: document,
    options: options,
    dialog: dialog,
  }
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowsavedialogbrowserwindow-options
module.exports.saveDialog = function saveDialog(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialog(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return {
        canceled: returnCode != NSOKButton,
        filePath:
          returnCode == NSOKButton ? String(_dialog.URL().path()) : undefined,
      }
    },
    setup.document
  )
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowsavedialogsyncbrowserwindow-options
module.exports.saveDialogSync = function saveDialogSync(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialogSync(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return returnCode == NSOKButton ? String(_dialog.URL().path()) : undefined
    },
    setup.document
  )
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/utils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {module.exports.getURL = function getURL(path) {
  return NSURL.URLWithString(
    String(
      NSString.stringWithString(path).stringByExpandingTildeInPath()
    ).replace(/ /g, '%20')
  )
}

module.exports.runDialog = function runDialog(dialog, getResult, document) {
  if (!document) {
    var returnCode = dialog.runModal()
    return Promise.resolve(getResult(dialog, returnCode))
  }

  var fiber = coscript.createFiber()

  var window = (document.sketchObject || document).documentWindow()

  return new Promise(function p(resolve, reject) {
    dialog.beginSheetModalForWindow_completionHandler(
      window,
      __mocha__.createBlock_function('v16@?0q8', function onCompletion(
        _returnCode
      ) {
        try {
          resolve(getResult(dialog, _returnCode))
        } catch (err) {
          reject(err)
        }
        NSApp.endSheet(dialog)
        if (fiber) {
          fiber.cleanup()
        } else {
          coscript.shouldKeepAround = false
        }
      })
    )
  })
}

module.exports.runDialogSync = function runDialog(dialog, getResult, document) {
  var returnCode

  if (!document) {
    returnCode = dialog.runModal()
    return getResult(dialog, returnCode)
  }

  var window = (document.sketchObject || document).documentWindow()

  dialog.beginSheetModalForWindow_completionHandler(
    window,
    __mocha__.createBlock_function('v16@?0q8', function onCompletion(
      _returnCode
    ) {
      NSApp.stopModalWithCode(_returnCode)
    })
  )

  returnCode = NSApp.runModalForWindow(window)
  NSApp.endSheet(dialog)
  return getResult(dialog, returnCode)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/promise/index.js */ "./node_modules/@skpm/promise/index.js")))

/***/ }),

/***/ "./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: async. Should probably be done with NSFileHandle and some notifications
// TODO: file descriptor. Needs to be done with NSFileHandle
var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer;
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/fs/utils.js");
var parseStat = utils.parseStat;
var fsError = utils.fsError;
var fsErrorForPath = utils.fsErrorForPath;
var encodingFromOptions = utils.encodingFromOptions;
var NOT_IMPLEMENTED = utils.NOT_IMPLEMENTED;

module.exports.constants = {
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1
};

module.exports.access = NOT_IMPLEMENTED("access");

module.exports.accessSync = function(path, mode) {
  mode = mode | 0;
  var fileManager = NSFileManager.defaultManager();

  switch (mode) {
    case 0:
      canAccess = module.exports.existsSync(path);
      break;
    case 1:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 2:
      canAccess = Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 3:
      canAccess =
        Boolean(Number(fileManager.isExecutableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 4:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path)));
      break;
    case 5:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 6:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 7:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
  }

  if (!canAccess) {
    throw new Error("Can't access " + String(path));
  }
};

module.exports.appendFile = NOT_IMPLEMENTED("appendFile");

module.exports.appendFileSync = function(file, data, options) {
  if (!module.exports.existsSync(file)) {
    return module.exports.writeFileSync(file, data, options);
  }

  var handle = NSFileHandle.fileHandleForWritingAtPath(file);
  handle.seekToEndOfFile();

  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  handle.writeData(nsdata);
};

module.exports.chmod = NOT_IMPLEMENTED("chmod");

module.exports.chmodSync = function(path, mode) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFilePosixPermissions: mode
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.chown = NOT_IMPLEMENTED("chown");
module.exports.chownSync = NOT_IMPLEMENTED("chownSync");

module.exports.close = NOT_IMPLEMENTED("close");
module.exports.closeSync = NOT_IMPLEMENTED("closeSync");

module.exports.copyFile = NOT_IMPLEMENTED("copyFile");

module.exports.copyFileSync = function(path, dest, flags) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.copyItemAtPath_toPath_error(path, dest, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.createReadStream = NOT_IMPLEMENTED("createReadStream");
module.exports.createWriteStream = NOT_IMPLEMENTED("createWriteStream");

module.exports.exists = NOT_IMPLEMENTED("exists");

module.exports.existsSync = function(path) {
  var fileManager = NSFileManager.defaultManager();
  return Boolean(Number(fileManager.fileExistsAtPath(path)));
};

module.exports.fchmod = NOT_IMPLEMENTED("fchmod");
module.exports.fchmodSync = NOT_IMPLEMENTED("fchmodSync");
module.exports.fchown = NOT_IMPLEMENTED("fchown");
module.exports.fchownSync = NOT_IMPLEMENTED("fchownSync");
module.exports.fdatasync = NOT_IMPLEMENTED("fdatasync");
module.exports.fdatasyncSync = NOT_IMPLEMENTED("fdatasyncSync");
module.exports.fstat = NOT_IMPLEMENTED("fstat");
module.exports.fstatSync = NOT_IMPLEMENTED("fstatSync");
module.exports.fsync = NOT_IMPLEMENTED("fsync");
module.exports.fsyncSync = NOT_IMPLEMENTED("fsyncSync");
module.exports.ftruncate = NOT_IMPLEMENTED("ftruncate");
module.exports.ftruncateSync = NOT_IMPLEMENTED("ftruncateSync");
module.exports.futimes = NOT_IMPLEMENTED("futimes");
module.exports.futimesSync = NOT_IMPLEMENTED("futimesSync");

module.exports.lchmod = NOT_IMPLEMENTED("lchmod");
module.exports.lchmodSync = NOT_IMPLEMENTED("lchmodSync");
module.exports.lchown = NOT_IMPLEMENTED("lchown");
module.exports.lchownSync = NOT_IMPLEMENTED("lchownSync");

module.exports.link = NOT_IMPLEMENTED("link");

module.exports.linkSync = function(existingPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.linkItemAtPath_toPath_error(existingPath, newPath, err);

  if (err.value() !== null) {
    throw fsErrorForPath(existingPath, undefined, err.value());
  }
};

module.exports.lstat = NOT_IMPLEMENTED("lstat");

module.exports.lstatSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.attributesOfItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return parseStat(result);
};

module.exports.mkdir = NOT_IMPLEMENTED("mkdir");

module.exports.mkdirSync = function(path, options) {
  var mode = 0o777;
  var recursive = false;
  if (options && options.mode) {
    mode = options.mode;
  }
  if (options && options.recursive) {
    recursive = options.recursive;
  }
  if (typeof options === "number") {
    mode = options;
  }
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(
    path,
    recursive,
    {
      NSFilePosixPermissions: mode
    },
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.mkdtemp = NOT_IMPLEMENTED("mkdtemp");

module.exports.mkdtempSync = function(path) {
  function makeid() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  var tempPath = path + makeid();
  module.exports.mkdirSync(tempPath);
  return tempPath;
};

module.exports.open = NOT_IMPLEMENTED("open");
module.exports.openSync = NOT_IMPLEMENTED("openSync");

module.exports.read = NOT_IMPLEMENTED("read");

module.exports.readdir = NOT_IMPLEMENTED("readdir");

module.exports.readdirSync = function(path, options) {
  var encoding = encodingFromOptions(options, "utf8");
  var fileManager = NSFileManager.defaultManager();
  var paths = fileManager.subpathsAtPath(path);
  var arr = [];
  for (var i = 0; i < paths.length; i++) {
    var pathName = paths[i];
    arr.push(encoding === "buffer" ? Buffer.from(pathName) : String(pathName));
  }
  return arr;
};

module.exports.readFile = NOT_IMPLEMENTED("readFile");

module.exports.readFileSync = function(path, options) {
  var encoding = encodingFromOptions(options, "buffer");
  var fileManager = NSFileManager.defaultManager();
  var data = fileManager.contentsAtPath(path);
  if (!data) {
    throw fsErrorForPath(path, false);
  }

  var buffer = Buffer.from(data);

  if (encoding === "buffer") {
    return buffer;
  } else if (encoding === "NSData") {
    return buffer.toNSData();
  } else {
    return buffer.toString(encoding);
  }
};

module.exports.readlink = NOT_IMPLEMENTED("readlink");

module.exports.readlinkSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.destinationOfSymbolicLinkAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return String(result);
};

module.exports.readSync = NOT_IMPLEMENTED("readSync");

module.exports.realpath = NOT_IMPLEMENTED("realpath");
module.exports.realpath.native = NOT_IMPLEMENTED("realpath.native");

module.exports.realpathSync = function(path) {
  return String(NSString.stringWithString(path).stringByResolvingSymlinksInPath());
};

module.exports.realpathSync.native = NOT_IMPLEMENTED("realpathSync.native");

module.exports.rename = NOT_IMPLEMENTED("rename");

module.exports.renameSync = function(oldPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.moveItemAtPath_toPath_error(oldPath, newPath, err);

  var error = err.value();

  if (error !== null) {
    // if there is already a file, we need to overwrite it
    if (
      String(error.domain()) === "NSCocoaErrorDomain" &&
      Number(error.code()) === 516
    ) {
      var err2 = MOPointer.alloc().init();
      fileManager.replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(
        NSURL.fileURLWithPath(newPath),
        NSURL.fileURLWithPath(oldPath),
        null,
        NSFileManagerItemReplacementUsingNewMetadataOnly,
        null,
        err2
      );
      if (err2.value() !== null) {
        throw fsErrorForPath(oldPath, undefined, err2.value());
      }
    } else {
      throw fsErrorForPath(oldPath, undefined, error);
    }
  }
};

module.exports.rmdir = NOT_IMPLEMENTED("rmdir");

module.exports.rmdirSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (!isDirectory) {
    throw fsError("ENOTDIR", {
      path: path,
      syscall: "rmdir"
    });
  }
  fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, true, err.value(), "rmdir");
  }
};

module.exports.stat = NOT_IMPLEMENTED("stat");

// the only difference with lstat is that we resolve symlinks
//
// > lstat() is identical to stat(), except that if pathname is a symbolic
// > link, then it returns information about the link itself, not the file
// > that it refers to.
// http://man7.org/linux/man-pages/man2/lstat.2.html
module.exports.statSync = function(path) {
  return module.exports.lstatSync(module.exports.realpathSync(path));
};

module.exports.symlink = NOT_IMPLEMENTED("symlink");

module.exports.symlinkSync = function(target, path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.createSymbolicLinkAtPath_withDestinationPath_error(
    path,
    target,
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.truncate = NOT_IMPLEMENTED("truncate");

module.exports.truncateSync = function(path, len) {
  var hFile = NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);
  hFile.truncateFileAtOffset(len || 0);
  hFile.closeFile();
};

module.exports.unlink = NOT_IMPLEMENTED("unlink");

module.exports.unlinkSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (isDirectory) {
    throw fsError("EPERM", {
      path: path,
      syscall: "unlink"
    });
  }
  var result = fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.unwatchFile = NOT_IMPLEMENTED("unwatchFile");

module.exports.utimes = NOT_IMPLEMENTED("utimes");

module.exports.utimesSync = function(path, aTime, mTime) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFileModificationDate: aTime
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.watch = NOT_IMPLEMENTED("watch");
module.exports.watchFile = NOT_IMPLEMENTED("watchFile");

module.exports.write = NOT_IMPLEMENTED("write");

module.exports.writeFile = NOT_IMPLEMENTED("writeFile");

module.exports.writeFileSync = function(path, data, options) {
  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  nsdata.writeToFile_atomically(path, true);
};

module.exports.writeSync = NOT_IMPLEMENTED("writeSync");


/***/ }),

/***/ "./node_modules/@skpm/fs/utils.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/utils.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.parseStat = function parseStat(result) {
  return {
    dev: String(result.NSFileDeviceIdentifier),
    // ino: 48064969, The file system specific "Inode" number for the file.
    mode: result.NSFileType | result.NSFilePosixPermissions,
    nlink: Number(result.NSFileReferenceCount),
    uid: String(result.NSFileOwnerAccountID),
    gid: String(result.NSFileGroupOwnerAccountID),
    // rdev: 0, A numeric device identifier if the file is considered "special".
    size: Number(result.NSFileSize),
    // blksize: 4096, The file system block size for i/o operations.
    // blocks: 8, The number of blocks allocated for this file.
    atimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    mtimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    ctimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    birthtimeMs:
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000,
    atime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ), // the 0.5 comes from the node source. Not sure why it's added but in doubt...
    mtime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    ctime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    birthtime: new Date(
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    isBlockDevice: function() {
      return result.NSFileType === NSFileTypeBlockSpecial;
    },
    isCharacterDevice: function() {
      return result.NSFileType === NSFileTypeCharacterSpecial;
    },
    isDirectory: function() {
      return result.NSFileType === NSFileTypeDirectory;
    },
    isFIFO: function() {
      return false;
    },
    isFile: function() {
      return result.NSFileType === NSFileTypeRegular;
    },
    isSocket: function() {
      return result.NSFileType === NSFileTypeSocket;
    },
    isSymbolicLink: function() {
      return result.NSFileType === NSFileTypeSymbolicLink;
    }
  };
};

var ERRORS = {
  EPERM: {
    message: "operation not permitted",
    errno: -1
  },
  ENOENT: {
    message: "no such file or directory",
    errno: -2
  },
  EACCES: {
    message: "permission denied",
    errno: -13
  },
  ENOTDIR: {
    message: "not a directory",
    errno: -20
  },
  EISDIR: {
    message: "illegal operation on a directory",
    errno: -21
  }
};

function fsError(code, options) {
  var error = new Error(
    code +
      ": " +
      ERRORS[code].message +
      ", " +
      (options.syscall || "") +
      (options.path ? " '" + options.path + "'" : "")
  );

  Object.keys(options).forEach(function(k) {
    error[k] = options[k];
  });

  error.code = code;
  error.errno = ERRORS[code].errno;

  return error;
}

module.exports.fsError = fsError;

module.exports.fsErrorForPath = function fsErrorForPath(
  path,
  shouldBeDir,
  err,
  syscall
) {
  var fileManager = NSFileManager.defaultManager();
  var doesExist = fileManager.fileExistsAtPath(path);
  if (!doesExist) {
    return fsError("ENOENT", {
      path: path,
      syscall: syscall || "open"
    });
  }
  var isReadable = fileManager.isReadableFileAtPath(path);
  if (!isReadable) {
    return fsError("EACCES", {
      path: path,
      syscall: syscall || "open"
    });
  }
  if (typeof shouldBeDir !== "undefined") {
    var isDirectory = module.exports.lstatSync(path).isDirectory();
    if (isDirectory && !shouldBeDir) {
      return fsError("EISDIR", {
        path: path,
        syscall: syscall || "read"
      });
    } else if (!isDirectory && shouldBeDir) {
      return fsError("ENOTDIR", {
        path: path,
        syscall: syscall || "read"
      });
    }
  }
  return new Error(err || "Unknown error while manipulating " + path);
};

module.exports.encodingFromOptions = function encodingFromOptions(
  options,
  defaultValue
) {
  return options && options.encoding
    ? String(options.encoding)
    : options
    ? String(options)
    : defaultValue;
};

module.exports.NOT_IMPLEMENTED = function NOT_IMPLEMENTED(name) {
  return function() {
    throw new Error(
      "fs." +
        name +
        " is not implemented yet. If you feel like implementing it, any contribution will be gladly accepted on https://github.com/skpm/fs"
    );
  };
};


/***/ }),

/***/ "./node_modules/@skpm/promise/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@skpm/promise/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* from https://github.com/taylorhakes/promise-polyfill */

function promiseFinally(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

function noop() {}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError("Promises must be constructed via new");
  if (typeof fn !== "function") throw new TypeError("not a function");
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (
      newValue &&
      (typeof newValue === "object" || typeof newValue === "function")
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === "function") {
        doResolve(then.bind(newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value, self);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) {
          Promise._multipleResolvesFn("resolve", self, value);
          return;
        }
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) {
          Promise._multipleResolvesFn("reject", self, reason);
          return;
        }
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) {
      Promise._multipleResolvesFn("reject", self, ex);
      return;
    }
    done = true;
    reject(self, ex);
  }
}

Promise.prototype["catch"] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype["finally"] = promiseFinally;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Promise.all accepts an array"));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === "object" || typeof val === "function")) {
          var then = val.then;
          if (typeof then === "function") {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === "object" && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Promise.race accepts an array"));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn = setImmediate;

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err, promise) {
  if (
    typeof process !== "undefined" &&
    process.listenerCount &&
    (process.listenerCount("unhandledRejection") ||
      process.listenerCount("uncaughtException"))
  ) {
    process.emit("unhandledRejection", err, promise);
    process.emit("uncaughtException", err, "unhandledRejection");
  } else if (typeof console !== "undefined" && console) {
    console.warn("Possible Unhandled Promise Rejection:", err);
  }
};

Promise._multipleResolvesFn = function _multipleResolvesFn(
  type,
  promise,
  value
) {
  if (typeof process !== "undefined" && process.emit) {
    process.emit("multipleResolves", type, promise, value);
  }
};

module.exports = Promise;


/***/ }),

/***/ "./src/export.js":
/*!***********************!*\
  !*** ./src/export.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skpm_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skpm/dialog */ "./node_modules/@skpm/dialog/lib/index.js");
/* harmony import */ var _skpm_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skpm_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _skpm_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skpm/fs */ "./node_modules/@skpm/fs/index.js");
/* harmony import */ var _skpm_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_skpm_fs__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var exportPresets = MSPersistentAssetCollection.sharedGlobalAssets().exportPresets();
  var document = sketch_dom__WEBPACK_IMPORTED_MODULE_1___default.a.getSelectedDocument();

  if (exportPresets.length === 0) {
    sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].message('No export preferences.');
    return;
  }

  var data = {
    "presets": [],
    "author": String(NSFullUserName())
  };
  exportPresets.forEach(function (preset) {
    var p = {};
    p.class = String(preset.class());
    p.name = String(preset.name());
    p.shouldApplyAutomatically = preset.shouldApplyAutomatically();
    p.exportFormats = [];
    preset.exportFormats().forEach(function (exportFormat) {
      var f = {};
      f.class = String(exportFormat.class());
      f.absoluteSize = exportFormat.absoluteSize();
      f.fileFormat = String(exportFormat.fileFormat());
      f.name = String(exportFormat.name());
      f.namingScheme = exportFormat.namingScheme();
      f.scale = exportFormat.scale();
      f.visibleScaleType = exportFormat.visibleScaleType();
      p.exportFormats.push(f);
    });
    data.presets.push(p);
  });
  _skpm_dialog__WEBPACK_IMPORTED_MODULE_2___default.a.showSaveDialog(document, {
    filters: [{
      name: 'JSON',
      extensions: ['json']
    }]
  }).then(function (result) {
    var filepath = result.filePath;

    try {
      Object(_skpm_fs__WEBPACK_IMPORTED_MODULE_3__["writeFileSync"])(filepath, JSON.stringify(data));
      sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].message("\u2705 Export preferences saved to ".concat(filepath));
    } catch (e) {
      sketch__WEBPACK_IMPORTED_MODULE_0__["UI"].message("⚠️ Export preferences failed to be saved. Please try again.");
      console.log("writefilesync didn't work");
      console.error(e);
    }
  }, function (error) {// Most likely the user canceled the save
  });
});

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__export.js.map