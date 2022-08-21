import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["showResponse"];
  startTime = 0;

  connect() {
    document.addEventListener(
      "turbo:before-stream-render",
      this.totalResponseTime
    );
  }

  disconnect() {
    document.removeEventListener(
      "turbo:before-stream-render",
      this.totalResponseTime
    );
  }

  totalResponseTime = () => {
    this.showResponseTarget.textContent = `Network ping time ${
      Date.now() - this.startTime
    }ms`;
  };

  responseStart() {
    this.startTime = Date.now();
  }
}
