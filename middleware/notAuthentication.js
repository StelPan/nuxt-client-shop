export default function ({ $auth, redirect }) {
  // Если пользователь не авторизован, то редирект на главную страницу\
  if (!$auth.loggedIn) {
    redirect('/')
  }
}
