const tasks = [
	{ title: "Comprar comida para o gato", type: "Urgente" },
	{ title: "Consertar Computador", type: "Importante" },
	{ title: "Beber água", type: "Normal" },
	{ title: "Enviar relatório trimestral", type: "Importante" },
	{ title: "Fazer exercícios físicos", type: "Normal" },
	{ title: "Agendar consulta médica", type: "Urgente" },
	{ title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
	{ title: "Limpar a despensa", type: "Importante" },
	{ title: "Pagar a conta de energia", type: "Urgente" },
	{ title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(bd) {
	const elementTask = document.querySelector(".tasks__list");
	elementTask.innerHTML = "";

	bd.forEach((element, index) => {
		const task = createTaskItem(element.title, element.type, index);

		elementTask.appendChild(task);
	});
}

function createTaskItem(title, type, id) {
	const task = document.createElement("li");
	const containerTask = document.createElement("div");
	const typeTask = document.createElement("span");
	const titleTask = document.createElement("p");
	const buttonTask = document.createElement("button");

	titleTask.innerText = title;

	task.classList.add("task__item");
	containerTask.classList.add("task-info__container");

	typeTask.classList.add("task-type");

	if (type == "Urgente" || type == "urgente") {
		typeTask.classList.add("span-urgent");
	}
	if (type == "Importante" || type == "importante") {
		typeTask.classList.add("span-important");
	}
	if (type == "Normal" || type == "normal") {
		typeTask.classList.add("span-normal");
	}

	buttonTask.classList.add("task__button--remove-task");

	containerTask.append(typeTask, titleTask);
	task.append(containerTask, buttonTask);

	buttonTask.addEventListener("click", function (event) {
		tasks.splice(id, 1);
		renderElements(tasks);
	});

	return task;
}

renderElements(tasks);

function createElement() {
	const form = document.querySelector(".form__container");

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		const title = document.getElementById("input_title");
		const type = document.querySelector("select");

		if (title.value == "" || type.value == "") {
		} else {
			tasks.push({ title: title.value, type: type.value });
		}

		renderElements(tasks);
		form.reset();
	});
}

createElement();