import {
  Chip,
  Tooltip,
} from "@material-tailwind/react";

function formatNumber(number, decPlaces) {
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number += abbrev[i];

      break;
    }
  }

  return number;
}


export default function Stars() {
  const [stars, setStars] = React.useState(0);

  React.useEffect(() => {
    const stars = fetch(
      "https://api.github.com/repos/davidjbradshaw/iframe-resizer"
    )
      .then((response) => response.json())
      .then((data) => setStars(formatNumber(data.stargazers_count, 1)));
  }, []);

  return (
    <Tooltip content="Help with a star" placement="bottom" offset={-2.5}>
      <a
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 p-1.5 text-primary"
        href="https://github.com/davidjbradshaw/iframe-resizer?ref=iframe-resizer.com"
      >
        <Chip
          value={<span className="-ml-2 text-blue-gray-900">{stars}</span>}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="text-blue-gray-900"
              className="!ml-0 mt-[2.5px] h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          }
          className="items-center gap-2 border !border-blue-gray-100 bg-white py-1 !pr-2 text-xs text-blue-gray-900"
        />
        <i className="fab fa-github text-xl leading-none opacity-80" />
      </a>
    </Tooltip>
  );
}
