import Operation from "trix/core/utilities/operation"

export default class FileVerificationOperation extends Operation
  constructor: (file) ->
    super(arguments...)
    @file = file

  perform: (callback) ->
    reader = new FileReader

    reader.onerror = ->
      callback(false)

    reader.onload = =>
      reader.onerror = null
      try reader.abort()
      callback(true, @file)

    reader.readAsArrayBuffer(@file)