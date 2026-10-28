const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const shouldTransition = (link) => {
  if (link.target || link.hasAttribute("download")) return false;
  try {
    const url = new URL(link.href, window.location.href);
    return url.origin === window.location.origin
      && url.pathname !== window.location.pathname
      && url.pathname.endsWith(".html");
  } catch {
    return false;
  }
};

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest?.("a[href]");
  if (!link || !shouldTransition(link)) return;

  event.preventDefault();
  if (document.body.classList.contains("is-leaving")) return;
  document.body.classList.add("is-leaving");
  window.setTimeout(() => {
    window.location.href = link.href;
  }, reducedMotion ? 0 : 160);
});

window.addEventListener("pageshow", () => {
  document.body.classList.remove("is-leaving");
});

document.querySelectorAll("[data-demo]").forEach((demo) => {
  const runButton = demo.querySelector("[data-demo-run]");
  const resetButton = demo.querySelector("[data-demo-reset]");
  const status = demo.querySelector("[data-demo-status]");
  const steps = [...demo.querySelectorAll("[data-demo-step]")];
  const output = demo.querySelector("[data-demo-output]");
  let timer = null;

  const reset = () => {
    if (timer) clearTimeout(timer);
    timer = null;
    steps.forEach((step) => step.classList.remove("is-active", "is-done"));
    output.hidden = true;
    runButton.disabled = false;
    runButton.textContent = "运行流程演示";
    status.textContent = "准备就绪 · 不会发起网络请求";
  };

  const play = () => {
    reset();
    runButton.disabled = true;
    runButton.textContent = "正在演示…";
    let index = 0;

    const advance = () => {
      if (index >= steps.length) {
        steps.forEach((step) => {
          step.classList.remove("is-active");
          step.classList.add("is-done");
        });
        output.hidden = false;
        status.textContent = "演示完成 · 已生成官方示例输出";
        runButton.disabled = false;
        runButton.textContent = "再次运行";
        return;
      }

      steps.forEach((step, stepIndex) => {
        step.classList.toggle("is-active", stepIndex === index);
        step.classList.toggle("is-done", stepIndex < index);
      });
      status.textContent = steps[index].dataset.status;
      index += 1;
      timer = setTimeout(advance, reducedMotion ? 0 : 650);
    };

    advance();
  };

  runButton.addEventListener("click", play);
  resetButton.addEventListener("click", reset);
  reset();
});
