import React, { Fragment } from "react";
import { Mask, G, Path } from "react-native-svg";

export const Avatar_1: React.FC<{ color: string }> = ({ color }) => (
  <Fragment>
    <Mask id="a" maskUnits="userSpaceOnUse">
      <Path
        fill="#fff"
        d="M380.217 190.49c0 104.734-84.901 189.631-189.633 189.631C85.852 380.121.95 295.224.95 190.49.95 85.757 85.852.85 190.584.85c104.732 0 189.633 84.907 189.633 189.64Z"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill={color} d="M-44 465.045h492.089V-56.869H-44v521.914Z" />
      <Path
        fill="#38373D"
        d="m140.444 173.344-15.083 96.133 145.675 5.12-13.243-118.427-117.349 17.174Z"
      />
      <Path
        fill="#FD9E7F"
        d="m231.468 279.357-33.659 19.693-32.686-19.613-.08-68.867 66.345-.08.08 68.867Z"
      />
      <Path
        fill="#383337"
        d="m231.424 240.69-.023-18.853c.176-.253.352-.52.527-.773.284 2.733.428 5.56.432 8.453.004 3.973-.317 7.707-.936 11.173Zm-66.357-8.813c-.006-.32-.01-.653-.01-.987 0-.4.003-.8.007-1.2l.003 2.187Z"
      />
      <Path
        fill="#FD9373"
        d="M198.741 270.797c-16.066 0-33.209-13.586-33.674-38.92l-.003-2.187a90.75 90.75 0 0 1 .069-2.466c8.882 11.706 20.336 21.293 32.094 21.293 11.98 0 24.681-12.666 34.174-26.68l.023 18.853c-3.423 19.134-15.935 30.094-32.651 30.107h-.032Z"
      />
      <Path
        fill="#E8E8E8"
        d="M296.368 292.89c-10.531-6.72-23.692-9.626-24.397-9.706l-35.196-15.547a7.124 7.124 0 0 1-4.867-6.787l.023-7.386c-.216-.107.025-7.827.025-7.827s-27.707 33.187-66.872 7.453l-.024 7.334a7.117 7.117 0 0 1-4.909 6.746l-35.856 15.614s-13.802 1.867-24.799 8.813c0 0 10.668 27.68 9.623 42.64-.828 11.853-11.115 32.094-12.955 53.638-1.604 18.777 8.541 36.694 25.685 44.519 1.422.648 2.28.95 2.28.95s11.084 81.418-3.856 110.332c-.006 1.996 155.355 2.505 155.338 2.473-16.635-29.096-10.111-79.439-5.274-115.904.004-.035 18.688-11.461 25.14-27.561 8.763-24.035-7.813-52.9-8.764-67.874-.916-14.44 9.715-41.893 9.655-41.92Z"
      />
      <Path
        fill="#E99441"
        d="M112.024 262.264s4.987-15.893 16.223-16.627c.198-.733 9.068-22.613 35.872-11.227 5.282 2.014 44.537 19.08 67.304 6.267 22.768-12.813 30.214 17.467 30.214 17.467S201.768 394.992 193.8 400.509c-7.967 5.518-92.737-123.192-81.776-138.245Z"
      />
      <Path
        fill="#CE7C38"
        d="M212.112 329.384c-15.811-36.574-37.832-57.107-53.521-67.894-17.003-11.693-30.444-14.773-30.579-14.8l.468-2.106c.56.12 13.905 3.173 31.237 15.053 15.955 10.947 38.34 31.787 54.379 68.894l-1.984.853Z"
      />
      <Path
        fill="#38373D"
        d="M193.804 395.894s-65.557-112.377-87.169-141.204c-21.613-28.813-23.054 15.854-23.054 15.854s-6.483 4.32-18.01 10.08c-11.526 5.773 0 18.733 0 18.733s-34.537 85.195-5 191.095c1.44 12.246-42.04 105.945-13.01 322.558 2.161 0 89.086-12.232 133.152 14.776 3.127 2.146-5.894-59.889 12.836-64.212 18.73-4.321 3.463 61.82 3.463 61.82s79.639-13.825 157.443-12.384c21.197-90.208-1.4-284.593-31.775-338.009-6.484 2.883 11.603-137.457-6.407-182.844 0-7.2.72-18.013-20.172-21.613-.72 2.16 8.646-33.134-13.688-36.027-22.332-2.88-40.342 52.6-54.03 64.84-13.688 12.253-46.827 66.28-34.579 96.537Z"
      />
      <Path
        fill="#38373D"
        d="M85.022 274.144s-40.342 3.6-71.32 71.32c-30.977 67.721-18.73 92.934-18.73 92.934s-25.215 36.742-18.01 113.105c-1.442 1.441-25.935 44.665-17.29 90.77-2.162-1.44.858 98.236 27.513 145.783 0 .721 46.688-10.975 84.87-8.092 22.333-4.323 56.192-332.92 56.192-332.92l-43.225-172.9ZM302.521 272.424s40.343 3.613 71.32 71.32c30.978 67.724 18.731 92.939 18.731 92.939s25.215 36.74 18.011 113.104c1.441 1.44 25.934 44.664 17.289 90.77 2.161-1.441 6.548 106.207-20.108 153.753 0 .72-45.432-16.861-83.613-13.978-22.332-4.323-64.854-335.005-64.854-335.005l43.224-172.903Z"
      />
      <Path
        fill="#C9B9B3"
        d="m194.269 763.576-1.441-.002.255-367.405L84.486 274.624l1.073-.96L194.524 395.62v.276l-.255 367.68Z"
      />
      <Path
        fill="#C9B9B3"
        d="m194.445 396.223-1.284-.655 46.932-92.131.167-.106 55.76-35.214.769 1.227-55.592 35.107-46.752 91.772Z"
      />
      <Path
        fill="#FD9E7F"
        d="M251.073 150.064c.022 18.946-.862 28.986-6.114 45.306-5.77 17.92-27.754 53.147-47.732 53.147-20.994 0-41.023-30.56-47.156-49.2-5.428-16.507-4.704-27.347-4.726-46.493-.056-47.974 14.312-77.107 51.472-77.107 45.687 0 54.2 26.36 54.256 74.347Z"
      />
      <Path
        fill="#FD9475"
        d="M222.029 203.264h-.081c-3.813-.04-6.869-3.173-6.825-6.987a6.904 6.904 0 0 1 6.904-6.826h.08c3.814.04 6.87 3.173 6.826 6.986a6.906 6.906 0 0 1-6.904 6.827ZM170.308 201.957h-.081c-3.814-.04-6.87-3.173-6.826-6.987a6.905 6.905 0 0 1 6.903-6.826h.081c3.815.04 6.871 3.173 6.827 6.986a6.906 6.906 0 0 1-6.904 6.827Z"
      />
      <Path
        fill="#242730"
        d="M217.607 174.477c.022 1.68.936 3.027 2.04 3.014 1.102-.014 1.98-1.387 1.956-3.067-.022-1.68-.935-3.027-2.039-3.013-1.103.013-1.98 1.386-1.957 3.066ZM171.807 172.704c.022 1.68.936 3.027 2.038 3.013 1.104-.013 1.98-1.386 1.958-3.066-.023-1.68-.935-3.027-2.039-3.014-1.104.014-1.98 1.387-1.957 3.067Z"
      />
      <Path
        fill="#FC805F"
        d="M197.681 201.571c-1.748 0-5.305-.414-6.126-4.134-.712-3.213 4.198-18.466 5.282-21.52a.719.719 0 0 1 .904-.427c.367.134.56.534.43.907-2.447 6.88-5.727 18.627-5.19 20.707.727 2.813 2.888 3.013 4.502 3.013.134 0 .266 0 .392-.013h.348c.225 0 .426.013.596.027a.71.71 0 0 1-.022 1.413l-.146-.013h-.022c-.049 0-.16.013-.32.026-.164 0-.377.014-.628.014Z"
      />
      <Path
        fill="#352734"
        d="M208.272 156.624s-1.997 1.08-1.599 2.813c.402 1.747 5.803 1.24 9.831 1.24 4.805 0 9.223 1 11.992 1.84 2.768.854 4.209.387 1.209-2.213-3-2.613-4.74-3.72-11.269-4.653-5.861-.854-8.411.133-10.164.973ZM183.98 155.717s2.065 1.12 1.608 2.84c-.46 1.747-6.097 1.16-10.311 1.094-5.025-.08-9.669.853-12.584 1.653-2.914.813-4.412.32-1.214-2.24 3.197-2.56 5.042-3.64 11.893-4.48 6.149-.747 8.793.28 10.608 1.133Z"
      />
      <Path
        fill="#DB6252"
        d="M210.604 218.29a26.787 26.787 0 0 0-2.207-.786h.007s-6.916-2.174-9.092-2.36c-2.176-.187-3.091.786-3.091.786s-.722-.866-1.81-.946c-1.088-.094-10.374 1.853-11.624 3.173.004 0 12.422 16.093 27.77.173l.047-.04Z"
      />
      <Path
        fill="#38373D"
        d="M197.036 108.011s-4.409 16.773-20.243 25.813-20.48 10.893-21.886 21.013c-1.408 10.107-9.375 8.934-12.879 7.72-10.291-3.546-8.112-30.346-5.963-46.52 2.15-16.186 23.364-44.6 41.216-47 13.587-1.84 23.23 4.707 24.49 14.413 1.26 9.707-4.111 17.027-4.735 24.561Z"
      />
      <Path
        fill="#38373D"
        d="M271.092 136.85c1.02-16.733-14.015-52.08-29.916-59.546l-.04-.04c-11.989-8.16-42.905-11.547-49.643-5.347-6.737 6.2-2.264 23.027-2.264 23.027s-4.853 15.8 11.768 24.76c16.622 8.946 25.606 4.786 26.711 20.24 1.104 15.44 12.664 27.2 21.812 27.44 10.456 3.186 6.184 1.92 6.184 1.92 12.109.253 14.829-23.267 15.388-32.454Z"
      />
      <Path
        fill="#FD9E7F"
        d="M245.032 172.411c-2.913 7.933-3.116 18.64 1.327 20.266 4.442 1.627 11.848-6.426 14.761-14.36 2.915-7.946 1.676-15.693-2.767-17.333-4.442-1.627-10.406 3.48-13.321 11.427ZM151.693 170.824c2.074 8.2 1.162 18.866-3.426 20.026-4.588 1.16-11.115-7.626-13.188-15.826-2.074-8.187-.035-15.774 4.553-16.934 4.588-1.16 9.988 4.534 12.061 12.734Z"
      />
    </G>
  </Fragment>
);
