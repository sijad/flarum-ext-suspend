import Notification from 'flarum/components/Notification';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';

export default class UserSuspendedNotification extends Notification {
  icon() {
    return 'ban';
  }

  href() {
    return app.route.user(this.props.notification.subject());
  }

  content() {
    const notification = this.props.notification;
    const actor = notification.sender();
    const suspendUntil = notification.content();
    const timeReadable = moment(suspendUntil.date).from(notification.time(), true);

    return app.translator.transChoice('flarum-suspend.forum.notifications.user_suspended_text', {
      actor,
      timeReadable,
    });
  }
}
