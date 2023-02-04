function palindrome(str) {
  if (Array.isArray(str)) {
    console.log(str)
    str = str.join();
  }
  var newstr = str.replace(/[^a-z0-9]/gi, '').toUpperCase();
  var rev = newstr.split('').reverse().join('');
  console.log(newstr);
  if (newstr === rev) {
    return true;
  } else {
    return false;
  }
}