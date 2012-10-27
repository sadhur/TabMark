/**
 * Created by IntelliJ IDEA.
 * User: sadhur
 * Date: 2012/10/27
 * Time: 上午 5:34
 * To change this template use File | Settings | File Templates.
 */

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', { 'width': 400,   'height': 500 });
});