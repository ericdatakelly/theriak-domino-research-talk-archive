/* Minimal sortable tables — click any <th> in a <table class="sortable"> */
(function () {
  'use strict';

  var ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
  var INTEGER  = /^\d+$/;

  function cellText(tr, col) {
    var td = tr.querySelectorAll('td')[col];
    return td ? td.textContent.trim() : '';
  }

  function colType(rows, col) {
    // Sample first non-empty cell to decide sort type
    for (var i = 0; i < rows.length; i++) {
      var v = cellText(rows[i], col);
      if (!v) continue;
      if (INTEGER.test(v))  return 'int';
      if (ISO_DATE.test(v)) return 'date';
      return 'str';
    }
    return 'str';
  }

  function sortTable(table, col, asc) {
    var tbody = table.querySelector('tbody');
    var rows  = Array.from(tbody.querySelectorAll('tr'));
    var type  = colType(rows, col);

    rows.sort(function (a, b) {
      var av = cellText(a, col);
      var bv = cellText(b, col);
      var result;
      if (type === 'int') {
        result = parseInt(av, 10) - parseInt(bv, 10);
      } else if (type === 'date') {
        // ISO dates sort correctly as strings
        result = av < bv ? -1 : av > bv ? 1 : 0;
      } else {
        result = av.toLowerCase().localeCompare(bv.toLowerCase());
      }
      return asc ? result : -result;
    });

    rows.forEach(function (r) { tbody.appendChild(r); });
  }

  function initTable(table) {
    var headers = table.querySelectorAll('thead th');
    headers.forEach(function (th, col) {
      th.style.cursor = 'pointer';
      th.dataset.sortAsc = 'true';
      th.addEventListener('click', function () {
        var asc = th.dataset.sortAsc === 'true';
        // Clear all indicators
        headers.forEach(function (h) { h.dataset.sortAsc = 'true'; h.classList.remove('sort-asc','sort-desc'); });
        th.dataset.sortAsc = String(!asc);
        th.classList.add(asc ? 'sort-asc' : 'sort-desc');
        sortTable(table, col, asc);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('table.sortable').forEach(initTable);
  });
}());
