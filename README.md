# TSX not working in Storybook 7

Running `vite` will result in a simple page that shows `Making sure TSX is working!`.

Running `storybook dev` will yield App component with three stories. All work, except the **Jsx Template** story which will render blank and give the following warning in the console.

```
Navigated to http://localhost:61760/?path=/story/app--string-template
chunk-PUVLCKJJ.js:127 Download the React DevTools for a better development experience: https://fb.me/react-devtools
VM614 chunk-O2NYJP7E.js:1671 [Vue warn]: invalid template option:  {__v_isVNode: true, __v_skip: true, type: 'div', props: null, key: null, …}
  at <Anonymous>
  at <Anonymous>
  at <App>
warn2 @ VM614 chunk-O2NYJP7E.js:1671
compileToFunction @ VM614 chunk-O2NYJP7E.js:15785
finishComponentSetup @ VM614 chunk-O2NYJP7E.js:8944
setupStatefulComponent @ VM614 chunk-O2NYJP7E.js:8882
setupComponent @ VM614 chunk-O2NYJP7E.js:8814
mountComponent @ VM614 chunk-O2NYJP7E.js:7219
processComponent @ VM614 chunk-O2NYJP7E.js:7185
patch @ VM614 chunk-O2NYJP7E.js:6658
componentUpdateFn @ VM614 chunk-O2NYJP7E.js:7328
run @ VM614 chunk-O2NYJP7E.js:645
instance.update @ VM614 chunk-O2NYJP7E.js:7434
setupRenderEffect @ VM614 chunk-O2NYJP7E.js:7442
mountComponent @ VM614 chunk-O2NYJP7E.js:7232
processComponent @ VM614 chunk-O2NYJP7E.js:7185
patch @ VM614 chunk-O2NYJP7E.js:6658
componentUpdateFn @ VM614 chunk-O2NYJP7E.js:7328
run @ VM614 chunk-O2NYJP7E.js:645
instance.update @ VM614 chunk-O2NYJP7E.js:7434
setupRenderEffect @ VM614 chunk-O2NYJP7E.js:7442
mountComponent @ VM614 chunk-O2NYJP7E.js:7232
processComponent @ VM614 chunk-O2NYJP7E.js:7185
patch @ VM614 chunk-O2NYJP7E.js:6658
render2 @ VM614 chunk-O2NYJP7E.js:7952
mount @ VM614 chunk-O2NYJP7E.js:5437
app.mount @ VM614 chunk-O2NYJP7E.js:10759
renderToCanvas @ VM588 chunk-B5WXLXF3.js:77
(anonymous) @ VM549 runtime.js:94
(anonymous) @ VM549 runtime.js:74
runPhase @ VM549 runtime.js:74
render @ VM549 runtime.js:74
await in render (async)
renderToElement @ VM549 runtime.js:74
renderSelection @ VM549 runtime.js:94
await in renderSelection (async)
onSetCurrentStory @ VM549 runtime.js:94
await in onSetCurrentStory (async)
(anonymous) @ VM549 runtime.js:4
handleEvent @ VM549 runtime.js:4
(anonymous) @ VM549 runtime.js:4
handler @ VM549 runtime.js:7
handleEvent @ VM549 runtime.js:7
postMessage (async)
(anonymous) @ runtime.js:1
send @ runtime.js:1
handler @ chunk-7WJTWQYG.js:39
emit @ chunk-7WJTWQYG.js:39
emit @ chunk-7WJTWQYG.js:39
(anonymous) @ chunk-7WJTWQYG.js:387
commitHookEffectListMount @ chunk-PUVLCKJJ.js:75
commitPassiveHookEffects @ chunk-PUVLCKJJ.js:88
callCallback2 @ chunk-PUVLCKJJ.js:2
invokeGuardedCallbackDev @ chunk-PUVLCKJJ.js:2
invokeGuardedCallback @ chunk-PUVLCKJJ.js:2
flushPassiveEffectsImpl @ chunk-PUVLCKJJ.js:90
unstable_runWithPriority @ chunk-PUVLCKJJ.js:1
runWithPriority$1 @ chunk-PUVLCKJJ.js:9
flushPassiveEffects @ chunk-PUVLCKJJ.js:90
performSyncWorkOnRoot @ chunk-PUVLCKJJ.js:90
(anonymous) @ chunk-PUVLCKJJ.js:9
unstable_runWithPriority @ chunk-PUVLCKJJ.js:1
runWithPriority$1 @ chunk-PUVLCKJJ.js:9
flushSyncCallbackQueueImpl @ chunk-PUVLCKJJ.js:9
flushSyncCallbackQueue @ chunk-PUVLCKJJ.js:9
discreteUpdates$1 @ chunk-PUVLCKJJ.js:90
discreteUpdates @ chunk-PUVLCKJJ.js:2
dispatchDiscreteEvent @ chunk-PUVLCKJJ.js:8
Show 26 more frames
Navigated to http://localhost:61760/?path=/story/app--jsx-template
chunk-PUVLCKJJ.js:127 Download the React DevTools for a better development experience: https://fb.me/react-devtools
runtime.js:94 [Vue warn]: invalid template option:  {__v_isVNode: true, __v_skip: true, type: 'div', props: null, key: null, …}
  at <Anonymous>
  at <Anonymous>
  at <App>
warn2 @ runtime-core.esm-bundler.js:41
compileToFunction @ vue.esm-bundler.js:22
finishComponentSetup @ runtime-core.esm-bundler.js:7327
setupStatefulComponent @ runtime-core.esm-bundler.js:7265
setupComponent @ runtime-core.esm-bundler.js:7197
mountComponent @ runtime-core.esm-bundler.js:5599
processComponent @ runtime-core.esm-bundler.js:5565
patch @ runtime-core.esm-bundler.js:5040
componentUpdateFn @ runtime-core.esm-bundler.js:5708
run @ reactivity.esm-bundler.js:178
instance.update @ runtime-core.esm-bundler.js:5814
setupRenderEffect @ runtime-core.esm-bundler.js:5822
mountComponent @ runtime-core.esm-bundler.js:5612
processComponent @ runtime-core.esm-bundler.js:5565
patch @ runtime-core.esm-bundler.js:5040
componentUpdateFn @ runtime-core.esm-bundler.js:5708
run @ reactivity.esm-bundler.js:178
instance.update @ runtime-core.esm-bundler.js:5814
setupRenderEffect @ runtime-core.esm-bundler.js:5822
mountComponent @ runtime-core.esm-bundler.js:5612
processComponent @ runtime-core.esm-bundler.js:5565
patch @ runtime-core.esm-bundler.js:5040
render2 @ runtime-core.esm-bundler.js:6332
mount @ runtime-core.esm-bundler.js:3824
app.mount @ runtime-dom.esm-bundler.js:1431
renderToCanvas @ chunk-KSYMO6G6.mjs:4
(anonymous) @ runtime.js:94
(anonymous) @ runtime.js:74
runPhase @ runtime.js:74
render @ runtime.js:74
await in render (async)
renderToElement @ runtime.js:74
renderSelection @ runtime.js:94
await in renderSelection (async)
selectSpecifiedStory @ runtime.js:94
(anonymous) @ runtime.js:85
(anonymous) @ runtime.js:4
_runResolutions @ runtime.js:4
then @ runtime.js:4
initializeWithStoryIndex @ runtime.js:85
(anonymous) @ runtime.js:80
Promise.then (async)
initializeWithProjectAnnotations @ runtime.js:80
(anonymous) @ runtime.js:74
(anonymous) @ runtime.js:4
_runResolutions @ runtime.js:4
_setResolved @ runtime.js:4
_continueWith @ runtime.js:4
(anonymous) @ runtime.js:4
_runResolutions @ runtime.js:4
_setResolved @ runtime.js:4
_continueWith @ runtime.js:4
_handleUserFunctionResult @ runtime.js:4
(anonymous) @ runtime.js:4
_runResolutions @ runtime.js:4
_setResolved @ runtime.js:4
_continueWith @ runtime.js:4
(anonymous) @ runtime.js:4
Promise.then (async)
_chainPromiseData @ runtime.js:4
_handleUserFunctionResult @ runtime.js:4
(anonymous) @ runtime.js:4
_runResolutions @ runtime.js:4
then @ runtime.js:4
getProjectAnnotationsOrRenderError @ runtime.js:74
initialize @ runtime.js:74
(anonymous) @ vite-app.js:24
Show 26 more frames
```
