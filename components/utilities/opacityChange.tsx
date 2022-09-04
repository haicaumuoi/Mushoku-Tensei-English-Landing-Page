export default function opacityChange(
  argument1: string,
  argument2: string,
  argument3: string,
  argument4: string,
  argument5: string
) {
  document.getElementById(argument1)?.classList.remove('opacity-40');
  document.getElementById(argument2)?.classList.add('opacity-40');
  document.getElementById(argument3)?.classList.add('opacity-40');
  document.getElementById(argument4)?.classList.add('opacity-40');
  document.getElementById(argument5)?.classList.add('opacity-40');
}
