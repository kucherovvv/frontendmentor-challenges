const DELAY_MS = 60;
const ANIM_DURATION_MS = 250;
document.querySelector('#markAllAsRead').addEventListener('click', () => {
    document.querySelectorAll('.notification_unread').forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('notification_mark-as-read-animating');
            el.style.animationDuration = `${ANIM_DURATION_MS}ms`;
        }, i * DELAY_MS);
        setTimeout(() => {
            el.style.animationDuration = '';
            el.classList.remove('notification_unread', 'notification_mark-as-read-animating');
            document.querySelector('#unreadCount').textContent = String(document.querySelectorAll('.notification_unread').length);
        }, i * DELAY_MS + ANIM_DURATION_MS);
    });
});
