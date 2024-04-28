import { createElement } from "../../lib/skeleton/index.js";
import rxjs, { effect, onClick } from "../../lib/rx.js";
import { loadCSS } from "../../helpers/loader.js";
import { qs } from "../../lib/dom.js";

export default function(render) {
    const $page = createElement(`
<div class="component_upload_queue hidden">
  <h2>CURRENT UPLOAD <div class="count_block">
      <span class="completed">24</span>
      <span class="grandTotal">24</span>
    </div>
    <img class="component_icon" draggable="false" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MS45NzYgNTEuOTc2Ij4KICA8cGF0aCBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjUzMzMzMjg1O3N0cm9rZS13aWR0aDoxLjQ1NjgxMTE5IiBkPSJtIDQxLjAwNTMxLDQwLjg0NDA2MiBjIC0xLjEzNzc2OCwxLjEzNzc2NSAtMi45ODIwODgsMS4xMzc3NjUgLTQuMTE5ODYxLDAgTCAyNi4wNjg2MjgsMzAuMDI3MjM0IDE0LjczNzU1MSw0MS4zNTgzMSBjIC0xLjEzNzc3MSwxLjEzNzc3MSAtMi45ODIwOTMsMS4xMzc3NzEgLTQuMTE5ODYxLDAgLTEuMTM3NzcyMiwtMS4xMzc3NjggLTEuMTM3NzcyMiwtMi45ODIwODggMCwtNC4xMTk4NjEgTCAyMS45NDg3NjYsMjUuOTA3MzcyIDExLjEzMTkzOCwxNS4wOTA1NTEgYyAtMS4xMzc3NjQ3LC0xLjEzNzc3MSAtMS4xMzc3NjQ3LC0yLjk4MzU1MyAwLC00LjExOTg2MSAxLjEzNzc3NCwtMS4xMzc3NzIxIDIuOTgyMDk4LC0xLjEzNzc3MjEgNC4xMTk4NjUsMCBMIDI2LjA2ODYyOCwyMS43ODc1MTIgMzYuMzY5NzM5LDExLjQ4NjM5OSBjIDEuMTM3NzY4LC0xLjEzNzc2OCAyLjk4MjA5MywtMS4xMzc3NjggNC4xMTk4NjIsMCAxLjEzNzc2NywxLjEzNzc2OSAxLjEzNzc2NywyLjk4MjA5NCAwLDQuMTE5ODYyIEwgMzAuMTg4NDg5LDI1LjkwNzM3MiA0MS4wMDUzMSwzNi43MjQxOTcgYyAxLjEzNzc3MSwxLjEzNzc2NyAxLjEzNzc3MSwyLjk4MjA5MSAwLDQuMTE5ODY1IHoiIC8+Cjwvc3ZnPgo=" alt="close">
  </h2>
  <h3>Done</h3>
  <div class="stats_content">
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/DEBIAN/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/DEBIAN/control</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/DEBIAN/md5sums</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/bin/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/applications/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/icons/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/doc/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/man/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/metainfo/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/applications/org.raspberrypi.rpi-imager.desktop</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/icons/hicolor/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/doc/rpi-imager/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/man/man1/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/metainfo/rpi-imager.metainfo.xml</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/icons/hicolor/128x128/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/doc/rpi-imager/changelog.gz</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/doc/rpi-imager/copyright</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/man/man1/rpi-imager.1.gz</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/icons/hicolor/128x128/apps/</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/share/icons/hicolor/128x128/apps/rpi-imager.png</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
    <div class="file_row done_color">
      <div class="file_path">rpi-imager/usr/bin/rpi-imager</div>
      <div class="file_state file_state_done">Done</div>
      <div class="file_control">
        <span></span>
      </div>
    </div>
  </div>
</div>
    `);
    render($page);

    effect(onClick(qs($page, "img[alt=\"close\"]")).pipe(
        rxjs.tap(() => $page.classList.add("hidden")),
    ));
}

export function init() {
    return loadCSS(import.meta.url, "./ctrl_upload_queue.css");
}
