document.addEventListener('DOMContentLoaded', () => {
 const h = document.querySelector('#health');
 if (!h) return;
 fetch('/api/health')
 .then((r) => r.json())
 .then((d) => { h.textContent = d.ok ? 'online' : 'offline'; })
 .catch(() => { h.textContent = 'offline'; });
});