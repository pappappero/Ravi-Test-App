$(document).ready(function() {
  // Block#: 2
  function on_Button_click() {
    try {
      // Block#: 3
      $('[obj-name= "Label"]').on('click', on_Label_Label_click);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: 4
  function on_Label_Label_click() {
    try {
      // Block#: 5
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", '4324');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name= "Label"]').on('click', on_Label_Label_click);
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 409022-253811-860002-882713
