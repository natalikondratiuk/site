$(.'carousel').carousel({
	interval: 3000,
	wrap: false
})

$(#measure).on('show.bs.modal', function (event) {
	//let input = $(event.relatedTarget);
	event.preventDefault();
	let $this = $(this);
	let content = $this.data()
})
