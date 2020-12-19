function loop(value, test, update, body) {
    if (test(value)) {
	body(value);
	loop(update(value), test, update, body);
    }
}
