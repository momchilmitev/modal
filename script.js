'use strict';

// DOM elements
let $modal = document.querySelector('.modal');
let $overlay = document.querySelector('.overlay');
let $openBtn = document.querySelector('.open');
let $closeBtn = document.querySelector('.close');

$openBtn.addEventListener('click', openModal);
$closeBtn.addEventListener('click', closeModal);
$overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !$modal.classList.contains('hidden')) {
    closeModal();
  }
});

function openModal() {
  $modal.classList.remove('hidden');
  $overlay.classList.remove('hidden');
}

function closeModal() {
  $modal.classList.add('hidden');
  $overlay.classList.add('hidden');
}
