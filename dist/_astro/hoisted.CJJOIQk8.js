import"./hoisted.DN8xFvYr.js";const r=document.getElementById("data"),s=([t,e])=>`
      <tr>
        <th class="astro-462sifux">${t}</th>
        <td class="astro-462sifux">${e}</td>
      </tr>`,a=([t,e])=>(delete e.x,delete e.y,`<tr>
        <th class="astro-462sifux">${t}</th>
        <td>
          <table class="astro-462sifux">${Object.entries(e).map(s).join(`
`)}</table>
        </td>
      </tr>`);window.iFrameResizer={onReady:()=>{const t=r.replaceChildren?e=>{r.replaceChildren(),r.innerHTML=Object.entries(e).map(a).join(`
`)}:e=>{r.firstChild.remove(),r.innerHTML=Object.entries(e).map(a).join(`
`)};parentIframe.getParentProps(t)}};
