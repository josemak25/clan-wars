import React, { Fragment } from "react";
import { Mask, G, Path } from "react-native-svg";

export const Avatar_12: React.FC<{ color: string }> = ({ color }) => (
  <Fragment>
    <Mask id="a" maskUnits="userSpaceOnUse">
      <Path
        fill="#fff"
        d="M378.672 189.325c0 104.552-84.76 189.31-189.306 189.31-104.56 0-189.307-84.758-189.307-189.31S84.806.017 189.366.017c104.546 0 189.306 84.756 189.306 189.308Z"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={color}
        d="M458.008 488.551H-28.304V-91.962h486.312v580.513Z"
      />
      <Path
        fill="#E8DDD3"
        d="M47.948 291.497S21.393 449.135 18.6 486.441c-2.806 37.306 50.968 11.109 67.256-34.214 16.317-45.322 32.831-86.524 32.831-86.524s-45.848-88.699-70.739-74.206ZM331.926 288.679s26.549 157.638 29.358 194.945c2.794 37.303-50.976 11.109-67.271-34.215-16.295-45.324-32.824-86.524-32.824-86.524s45.842-88.698 70.737-74.206Z"
      />
      <Path
        fill="#242730"
        d="M146.997 56.72s-11.971-7.406-23.386 4.615c-11.536 12.156 2.463 28.855 2.463 28.855s-15.11.737-19.526 19.156c-4.431 18.418 13.984 18.418 13.984 18.418s-13.909 33.522 14.044 26.156c27.952-7.369 110.834-9.948 110.834-9.948s7.375 5.895 15.111-1.473c7.735-7.366-6.264-27.627-6.264-27.627s10.184-2.947 8.607-16.577c-1.608-13.63-11.175-14.736-11.175-14.736s11.4-23.206-14.735-23.944c-.376-.37-1.112-17.312-17.679-19.155-16.597-1.842-20.022 9.825-20.022 9.825s-3.229-11.79-14.81-11.054c-11.581.738-15.561 15.662-15.561 15.662.886-4.168-19.106-14.489-21.885 1.828Z"
      />
      <Path
        fill="#FD9E7F"
        d="M223.408 309.159h-67.689c-2.866 0-5.537-1.157-7.061-3.07l-43.215-54.678c-3.108-3.884-.377-9.028 5.296-9.986l28.156-6.808a125.022 125.022 0 0 1 29.333-3.493h39.428c12.01 0 23.946 1.735 35.474 5.151l27.899 8.275c5.689.96 8.42 6.103 5.311 9.987l-45.885 51.552c-1.524 1.913-4.195 3.07-7.047 3.07Z"
      />
      <Path fill="#FD9E7F" d="M221.203 244.541h-63.257V189.81h63.257v54.731Z" />
      <Path
        fill="#FC8F6F"
        d="M189.575 236.044c-17.472 0-31.629-16.737-31.629-37.383 0-1.637.103-3.25.265-4.831 9.252 11.516 22.731 21.856 31.57 21.856 9.104 0 22.082-9.992 31.246-21.076.117 1.33.176 2.682.176 4.051 0 20.646-14.157 37.383-31.628 37.383Z"
      />
      <Path
        fill="#FD9E7F"
        d="M238.569 138.986c0 15.795-2.969 25.445-7.527 39.03-5.004 14.923-27.541 37.678-41.29 37.678-12.828 0-35.41-21.772-40.681-37.313-4.677-13.752-8.121-23.45-8.121-39.395 0-39.972 4.009-72.38 48.802-72.38 50.272 0 48.817 32.408 48.817 72.38Z"
      />
      <Path
        fill="#FD9E7F"
        d="M149.946 144.866c2.189 8.982-1.059 17.484-7.269 18.989-6.181 1.505-12.977-4.555-15.152-13.536-2.189-8.984 1.059-17.485 7.254-18.991 6.196-1.504 12.978 4.557 15.167 13.538ZM228.17 144.831c-2.179 8.96 1.074 17.445 7.268 18.951 6.195 1.504 12.986-4.539 15.165-13.5 2.179-8.962-1.09-17.445-7.269-18.951-6.209-1.505-12.985 4.539-15.164 13.5Z"
      />
      <Path
        fill="#E8DDD3"
        d="M144.05 301.499c0 26.864-21.787 48.642-48.635 48.642-26.877 0-48.65-21.778-48.65-48.642 0-26.862 21.773-48.639 48.65-48.639 26.848 0 48.635 21.777 48.635 48.639ZM333.825 301.493c0 26.865-21.776 48.641-48.642 48.641-26.866 0-48.643-21.776-48.643-48.641 0-26.861 21.777-48.64 48.643-48.64s48.642 21.779 48.642 48.64Z"
      />
      <Path
        fill="#7E9E9D"
        d="M137.235 235.019s15.747 45.914 52.532 47.986c36.785 2.072 58.292-44.068 58.292-44.068s22.402 7.56 27.267 10.116c4.865 2.557 15.141 311.489 15.141 311.489-54.881 25.337-137.121 22.652-195.049 0l12.762-315.994 29.055-9.529Z"
      />
      <Path
        fill="#F5ECE1"
        d="M75.366 367.446 29.208 901.307s96.927 43.814 192.672 31.748c7.213-88.406-16.554-300.348-13.834-468.312 1.788-109.946-58.677-194.076-58.204-233.026-.103.019-58.307 10.618-80.314 28.129-2.395 12.875 5.838 107.6 5.838 107.6Z"
      />
      <Path
        fill="#F5ECE1"
        d="m305.615 375.433 16.99 223.461 24.152 314s-77.246 45.279-143.873 45.279c-1.721.961-18.385-265.866-29.051-492.282-3.751-79.845 48.552-184.245 54.117-234.172.078.018 70.797 17.54 87.384 31.341-4.666 20.023-9.719 112.373-9.719 112.373Z"
      />
      <Path
        fill="#242730"
        d="M135.884 125.254s2.344 11.383 11.178 8.682c8.835-2.701 4.527-15.803 4.527-15.803s12.051-3.193 13.026-13.999c.975-10.804-1.659-12.552-1.659-12.552s6.302 6.415 17.858 1.01c11.527-5.4 8.951-17.436 8.951-17.436l-3.056-13.014s-30.448 6.139-36.576 11.541c-6.156 5.403-14.249 51.571-14.249 51.571Z"
      />
      <Path
        fill="#242730"
        d="M184.432 62.618s-10.915 24.324 5.146 35.377c16.047 11.051 41.101-15.719 34.224-24.804-6.863-9.087-39.37-10.573-39.37-10.573Z"
      />
      <Path
        fill="#242730"
        d="M213.717 76.142s-5.223 23.084 7.456 28.242c12.694 5.157 24.48-2.455 21.534-12.77-2.947-10.314-16.459-23.33-16.459-23.33l-12.531 7.858Z"
      />
      <Path
        fill="#242730"
        d="M229.944 97.75s-10.68 12.524-2.029 22.347c8.652 9.824 23.389-8.106 17.751-16.945-5.654-8.841-15.722-5.403-15.722-5.403Z"
      />
      <Path
        fill="#242730"
        d="M235.742 117.885s-9.469 7.612-4.326 13.997c5.159 6.385 11.76-4.175 11.76-4.175s-3.39-10.805-7.434-9.822Z"
      />
      <Path
        fill="#FC7B59"
        d="M141.902 158.375a.62.62 0 0 1-.612-.534c-2.323-15.908-9.063-16.067-9.162-16.067a.64.64 0 0 1-.627-.613.62.62 0 0 1 .598-.636h.043c.627 0 7.937.372 10.387 17.135a.631.631 0 0 1-.527.71l-.1.005ZM234.373 155.706l-.104-.011a.608.608 0 0 1-.506-.707c2.604-15.152 10.342-15.491 11.012-15.491h.044a.624.624 0 0 1 .595.626.617.617 0 0 1-.61.601h-.015c-.119 0-7.336.139-9.821 14.471a.596.596 0 0 1-.595.511Z"
      />
      <Path
        fill="#242730"
        d="M170.021 145.587c0 1.746-.922 3.162-2.061 3.162-1.168 0-2.091-1.416-2.091-3.162 0-1.747.923-3.161 2.091-3.161 1.139 0 2.061 1.414 2.061 3.161ZM212.532 145.585c0 1.747-.925 3.163-2.07 3.163-1.145 0-2.084-1.416-2.084-3.163 0-1.747.939-3.162 2.084-3.162s2.07 1.415 2.07 3.162ZM175.567 134.954s-8.507-1.202-11.994-1.207c-3.487-.004-8.97 6.199-8.97 6.199s8.84-1.284 12.732-1.65c3.877-.366 8.03-.162 9.505-.755 1.462-.595-.014-2.418-1.273-2.587ZM200.687 135.392s8.458-1.587 11.936-1.751c3.492-.162 9.254 5.784 9.254 5.784s-8.9-.88-12.805-1.067c-1.503-.075-3.051-.06-4.465-.046-2.24.022-4.141.046-5.055-.278-1.488-.526-.103-2.415 1.135-2.642Z"
      />
      <Path
        fill="#FD9475"
        d="M163.944 176.219c-3.359 0-6.069-2.727-6.069-6.087 0-1.488.533-2.851 1.413-3.909 2.278.231 4.729.311 7.295.311.721 0 1.456-.04 2.191-.118a6.067 6.067 0 0 1 1.269 3.716c0 3.36-2.739 6.087-6.099 6.087ZM214.144 176.214a6.085 6.085 0 0 1-4.756-9.875c.898.126 1.84.192 2.783.192 2.341 0 4.594-.069 6.685-.255a5.999 5.999 0 0 1 1.37 3.852 6.085 6.085 0 0 1-6.082 6.086Z"
      />
      <Path
        fill="#FC7B59"
        d="M189.301 172.005a5.93 5.93 0 0 1-2.083-.389.634.634 0 0 1-.365-.808c.102-.255.321-.408.569-.408a.8.8 0 0 1 .248.041c.539.21 1.107.311 1.631.311.904 0 1.735-.287 2.492-.844 1.356-1.045 2.099-2.861 1.924-4.74-.496-5.335-3.905-16.948-3.935-17.061a.622.622 0 0 1 .612-.806.55.55 0 0 1 .336.105c.233 2.426.947 4.812 2.083 7.032.918 3.604 1.909 7.86 2.157 10.613.219 2.307-.714 4.548-2.419 5.852a5.335 5.335 0 0 1-3.25 1.102Z"
      />
      <Path
        fill="#fff"
        d="m173.858 184.967 31.849.129s-12.104 13.013-31.849-.129Z"
      />
      <Path
        fill="#DD6145"
        d="m205.707 185.096-4.215-.016c-2.137 1.604-5.62 3.325-11.929 3.213-6.484-.115-10.787-2.107-12.529-3.313l-3.176-.013c17.652 21.652 31.849.129 31.849.129Z"
      />
      <Path
        fill="#FEBDA8"
        d="M168.778 166.413a6.094 6.094 0 0 0-9.489-.193c-5.388-.544-9.77-1.933-12.183-5.088 3.153-3.529 4.411-9.772 2.842-16.263-.918-3.792-2.665-7.06-4.826-9.461h14.508c-2.635 1.835-5.004 4.531-5.004 4.531s8.838-1.283 12.716-1.651c3.879-.365 8.039-.161 9.504-.753 1.052-.431.578-1.503-.236-2.127h24.012c-1.214.282-2.532 2.109-1.066 2.626.681.241 1.909.29 3.419.29.518 0 1.066-.006 1.629-.012.577-.004 1.169-.012 1.776-.012.888 0 1.806.014 2.695.058 3.893.188 12.805 1.067 12.805 1.067s-2.25-2.315-4.797-4.017h15.9c-2.162 2.393-3.894 5.649-4.811 9.422-1.644 6.724-.223 13.18 3.227 16.621-2.561 3.042-7.076 4.339-12.554 4.826a6.039 6.039 0 0 0-4.708-2.233 6.056 6.056 0 0 0-4.752 2.296c-7.313-.996-13.471-5.828-16.58-11.899-.903-3.54-1.762-6.45-1.821-6.689-.059-.145-.133-.265-.252-.343a18.85 18.85 0 0 1-.074-1.577h-2.575c0 9.802-8.453 19.416-19.305 20.581Zm41.688-23.988c-1.155 0-2.087 1.415-2.087 3.162 0 1.745.932 3.162 2.087 3.162 1.14 0 2.058-1.417 2.058-3.162 0-1.747-.918-3.162-2.058-3.162Zm-42.517 0c-1.154 0-2.072 1.415-2.072 3.162 0 1.745.918 3.162 2.072 3.162 1.155 0 2.073-1.417 2.073-3.162 0-1.747-.918-3.162-2.073-3.162Z"
      />
      <Path
        fill="#FEBDA8"
        d="M147.084 161.138c-1.301-1.7-2.016-3.917-2.016-6.791v-18.933h.043c2.159 2.4 3.905 5.67 4.82 9.461 1.573 6.491.315 12.735-2.847 16.263ZM231.4 161.45c-3.436-3.44-4.873-9.896-3.229-16.621.918-3.773 2.651-7.028 4.813-9.422h.696v15.392c.237 1.148 0 2.331 0 3.541 0 3.058-.829 5.37-2.28 7.11Z"
      />
      <Path
        fill="#6A6C73"
        d="M167.96 148.749c-1.168 0-2.091-1.416-2.091-3.162 0-1.747.923-3.161 2.091-3.161 1.139 0 2.061 1.414 2.061 3.161 0 1.746-.922 3.162-2.061 3.162ZM210.462 148.748c-1.145 0-2.084-1.416-2.084-3.163 0-1.747.939-3.162 2.084-3.162s2.07 1.415 2.07 3.162c0 1.747-.925 3.163-2.07 3.163ZM154.613 139.947s2.373-2.696 4.991-4.532h16.997c.81.625 1.288 1.697.232 2.126-1.461.593-5.627.389-9.504.755s-12.716 1.651-12.716 1.651ZM221.877 139.425s-8.9-.88-12.805-1.067a54.935 54.935 0 0 0-2.682-.057c-.619 0-1.208.005-1.783.011-.575.006-1.12.011-1.636.011-1.503 0-2.741-.048-3.419-.289-1.458-.517-.147-2.345 1.076-2.628h16.46c2.535 1.704 4.789 4.019 4.789 4.019Z"
      />
      <Path
        fill="#FEB6A1"
        d="M166.578 166.532c-2.551 0-5.015-.082-7.292-.311a6.12 6.12 0 0 1 4.669-2.178c1.96 0 3.704.928 4.828 2.369-.735.08-1.47.12-2.205.12ZM212.175 166.528c-.942 0-1.884-.064-2.782-.189a6.036 6.036 0 0 1 4.754-2.298c1.898 0 3.605.87 4.709 2.233-2.09.187-4.341.254-6.681.254Z"
      />
      <Path
        fill="#FDA58E"
        d="M192.798 154.447a19.58 19.58 0 0 1-2.082-7.033c.117.079.204.2.248.345.072.237.931 3.149 1.834 6.688Z"
      />
      <Path
        fill="#577575"
        d="M144.073 146.961h.998V135.41h-.998v11.551ZM233.649 146.962h1.007v-11.551h-1.007v11.551Z"
      />
      <Path
        fill="#CCBEB1"
        d="M201.8 950.239c-.619 0-1.149-.48-1.179-1.106-.235-3.92-23.562-392.46-25.742-437.566-.221-4.395-.442-8.671-.648-12.851-2.047-39.134-3.652-70.049 7.953-111.548 12.635-45.213 35.52-116.675 35.756-117.394.206-.623.869-.97 1.502-.769.619.202.957.869.751 1.495-.221.716-23.106 72.137-35.727 117.308-11.487 41.124-9.896 71.866-7.864 110.784.206 4.181.442 8.461.634 12.86 2.194 45.091 25.521 433.613 25.756 437.533.03.654-.456 1.227-1.119 1.254h-.073Z"
      />
      <Path
        fill="#CCBEB1"
        d="M186.347 376.617a1.17 1.17 0 0 1-.596-.166l-47.21-28.239 8.542-36.658-56.086-62.911a1.198 1.198 0 0 1 .087-1.678c.509-.439 1.235-.394 1.7.096l56.899 63.832-8.44 36.172 45.728 27.344a1.19 1.19 0 0 1-.624 2.208ZM174.409 442.012c-.288 0-.576-.103-.804-.317a1.177 1.177 0 0 1-.06-1.679l68.272-73.37-4.444-44.216 52.137-72.427a1.183 1.183 0 0 1 1.653-.269c.531.384.652 1.126.273 1.661l-51.606 71.69 4.459 44.392-.364.394-68.636 73.763a1.17 1.17 0 0 1-.88.378Z"
      />
    </G>
  </Fragment>
);
