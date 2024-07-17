import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#334B35]">
        <div className="pt-[90px] pb-[50px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex">
              <div className="basis-[480px] me-[171px]">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="198"
                    height="31"
                    viewBox="0 0 198 31"
                    fill="none"
                  >
                    <path
                      d="M18.5449 16.6992C18.5449 17.6074 18.4277 18.4082 18.1934 19.1016C17.9688 19.7949 17.6465 20.3955 17.2266 20.9033C16.8164 21.4111 16.3281 21.8359 15.7617 22.1777C15.1953 22.5195 14.5752 22.793 13.9014 22.998C13.2373 23.2031 12.5293 23.3496 11.7773 23.4375C11.0352 23.5254 10.2783 23.5693 9.50684 23.5693C8.49121 23.5693 7.55371 23.4912 6.69434 23.335C5.83496 23.1885 5.02441 22.9541 4.2627 22.6318C3.51074 22.2998 2.7832 21.875 2.08008 21.3574C1.38672 20.8398 0.693359 20.21 0 19.4678L2.98828 16.4355C3.26172 17.1094 3.6377 17.7344 4.11621 18.3105C4.59473 18.877 5.11719 19.3652 5.68359 19.7754C6.25977 20.1855 6.85547 20.5078 7.4707 20.7422C8.08594 20.9766 8.66699 21.0938 9.21387 21.0938C9.8584 21.0938 10.4639 21.0498 11.0303 20.9619C11.5967 20.8643 12.0898 20.708 12.5098 20.4932C12.9297 20.2783 13.2568 19.9951 13.4912 19.6436C13.7354 19.2822 13.8574 18.833 13.8574 18.2959C13.8574 17.8857 13.7646 17.5342 13.5791 17.2412C13.3936 16.9482 13.1494 16.6992 12.8467 16.4941C12.5537 16.2793 12.2168 16.0986 11.8359 15.9521C11.4551 15.8057 11.0645 15.6836 10.6641 15.5859C10.2734 15.4785 9.8877 15.3857 9.50684 15.3076C9.12598 15.2197 8.78906 15.1318 8.49609 15.0439C7.91992 14.8779 7.31934 14.7021 6.69434 14.5166C6.06934 14.3213 5.4541 14.1016 4.84863 13.8574C4.24316 13.6133 3.66699 13.335 3.12012 13.0225C2.58301 12.7002 2.10938 12.3242 1.69922 11.8945C1.28906 11.4551 0.961914 10.9521 0.717773 10.3857C0.473633 9.80957 0.351562 9.15039 0.351562 8.4082C0.351562 7.51953 0.458984 6.7334 0.673828 6.0498C0.898438 5.35645 1.21094 4.75586 1.61133 4.24805C2.01172 3.74023 2.48535 3.31543 3.03223 2.97363C3.5791 2.62207 4.17969 2.34375 4.83398 2.13867C5.48828 1.92383 6.18164 1.77246 6.91406 1.68457C7.65625 1.58691 8.41309 1.53809 9.18457 1.53809C10.2393 1.53809 11.1963 1.63574 12.0557 1.83105C12.9248 2.02637 13.7256 2.30469 14.458 2.66602C15.1904 3.02734 15.8594 3.46191 16.4648 3.96973C17.0801 4.46777 17.6562 5.02441 18.1934 5.63965L15.2051 8.67188C14.9707 7.96875 14.6436 7.33398 14.2236 6.76758C13.8135 6.20117 13.3545 5.71777 12.8467 5.31738C12.3389 4.90723 11.8066 4.59473 11.25 4.37988C10.6934 4.15527 10.1562 4.04297 9.63867 4.04297C8.96484 4.04297 8.34473 4.0918 7.77832 4.18945C7.21191 4.27734 6.72363 4.42871 6.31348 4.64355C5.91309 4.84863 5.60059 5.13184 5.37598 5.49316C5.15137 5.84473 5.03906 6.28418 5.03906 6.81152C5.03906 7.23145 5.12207 7.58789 5.28809 7.88086C5.4541 8.17383 5.67383 8.42285 5.94727 8.62793C6.23047 8.83301 6.54785 9.00391 6.89941 9.14062C7.25098 9.26758 7.6123 9.37988 7.9834 9.47754C8.36426 9.5752 8.73535 9.66309 9.09668 9.74121C9.46777 9.80957 9.80469 9.8877 10.1074 9.97559C10.6934 10.1416 11.3086 10.3174 11.9531 10.5029C12.5977 10.6885 13.2324 10.9082 13.8574 11.1621C14.4824 11.4062 15.0781 11.6895 15.6445 12.0117C16.2109 12.334 16.709 12.7197 17.1387 13.1689C17.5684 13.6084 17.9102 14.1211 18.1641 14.707C18.418 15.2832 18.5449 15.9473 18.5449 16.6992Z"
                      fill="white"
                    />
                    <path
                      d="M47.7979 13.2715C47.7979 14.4336 47.6611 15.6445 47.3877 16.9043C47.1143 18.1641 46.7285 19.3945 46.2305 20.5957C45.7422 21.7871 45.1514 22.915 44.458 23.9795C43.7646 25.0439 42.9932 25.9668 42.1436 26.748L40.2832 25.7373C40.5664 25.2295 40.8252 24.6582 41.0596 24.0234C41.2939 23.3887 41.5088 22.7197 41.7041 22.0166C41.8994 21.3135 42.0703 20.5908 42.2168 19.8486C42.3633 19.1064 42.4854 18.3691 42.583 17.6367C42.6904 16.8945 42.7686 16.1768 42.8174 15.4834C42.8662 14.79 42.8906 14.1406 42.8906 13.5352C42.8906 13.1934 42.8809 12.8223 42.8613 12.4219C42.8418 12.0215 42.7979 11.6211 42.7295 11.2207C42.6709 10.8203 42.5781 10.4395 42.4512 10.0781C42.3242 9.70703 42.1484 9.37988 41.9238 9.09668C41.709 8.80371 41.4355 8.57422 41.1035 8.4082C40.7812 8.23242 40.3906 8.14453 39.9316 8.14453C39.4824 8.14453 39.0967 8.2666 38.7744 8.51074C38.4619 8.74512 38.1934 9.05273 37.9688 9.43359C37.7441 9.81445 37.5635 10.2441 37.4268 10.7227C37.2998 11.2012 37.2021 11.6846 37.1338 12.1729C37.0654 12.6514 37.0166 13.1104 36.9873 13.5498C36.9678 13.9893 36.958 14.3604 36.958 14.6631V23.1445H32.0215V15.2637C32.0215 14.9219 32.0264 14.5117 32.0361 14.0332C32.0459 13.5449 32.0312 13.0371 31.9922 12.5098C31.9629 11.9824 31.8994 11.46 31.8018 10.9424C31.7139 10.415 31.5674 9.94629 31.3623 9.53613C31.167 9.12598 30.8984 8.79395 30.5566 8.54004C30.2148 8.27637 29.7852 8.14453 29.2676 8.14453C28.8281 8.14453 28.457 8.2666 28.1543 8.51074C27.8613 8.75488 27.6123 9.07227 27.4072 9.46289C27.2119 9.84375 27.0557 10.2783 26.9385 10.7666C26.8311 11.2451 26.748 11.7285 26.6895 12.2168C26.6406 12.6953 26.6113 13.1543 26.6016 13.5938C26.5918 14.0234 26.5869 14.3799 26.5869 14.6631V23.1445H21.6211V6.22559H23.5254L25.3418 10.166C25.752 8.79883 26.3965 7.73438 27.2754 6.97266C28.1641 6.20117 29.3408 5.81543 30.8057 5.81543C32.124 5.81543 33.2178 6.08887 34.0869 6.63574C34.9561 7.18262 35.6396 8.07129 36.1377 9.30176C36.4209 8.76465 36.7334 8.28125 37.0752 7.85156C37.4268 7.42188 37.8125 7.05566 38.2324 6.75293C38.6621 6.4502 39.1357 6.2207 39.6533 6.06445C40.1709 5.89844 40.7422 5.81543 41.3672 5.81543C42.5195 5.81543 43.501 6.00586 44.3115 6.38672C45.1318 6.75781 45.8008 7.27539 46.3184 7.93945C46.8359 8.60352 47.2119 9.39453 47.4463 10.3125C47.6807 11.2207 47.7979 12.207 47.7979 13.2715Z"
                      fill="white"
                    />
                    <path
                      d="M68.1299 23.1445H63.1787V21.123C62.5928 21.9238 61.8848 22.5195 61.0547 22.9102C60.2344 23.291 59.3311 23.4814 58.3447 23.4814C57.0557 23.4814 55.9033 23.252 54.8877 22.793C53.8721 22.334 53.0127 21.709 52.3096 20.918C51.6064 20.1172 51.0693 19.1797 50.6982 18.1055C50.3271 17.0312 50.1416 15.8789 50.1416 14.6484C50.1416 13.418 50.3271 12.2656 50.6982 11.1914C51.0693 10.1172 51.6064 9.18457 52.3096 8.39355C53.0127 7.59277 53.8721 6.96289 54.8877 6.50391C55.9033 6.04492 57.0557 5.81543 58.3447 5.81543C58.999 5.81543 59.6191 5.91309 60.2051 6.1084C60.8008 6.30371 61.3428 6.58203 61.8311 6.94336C62.3291 7.29492 62.7637 7.72461 63.1348 8.23242C63.5156 8.73047 63.8135 9.28711 64.0283 9.90234L66.2256 6.22559H68.1299V23.1445ZM63.1494 14.6484C63.1494 14.209 63.125 13.7451 63.0762 13.2568C63.0371 12.7686 62.9639 12.2852 62.8564 11.8066C62.749 11.3281 62.5977 10.874 62.4023 10.4443C62.2168 10.0049 61.9727 9.61914 61.6699 9.28711C61.377 8.94531 61.0205 8.67676 60.6006 8.48145C60.1807 8.28613 59.6924 8.18848 59.1357 8.18848C58.5791 8.18848 58.0957 8.29102 57.6855 8.49609C57.2754 8.69141 56.9238 8.95996 56.6309 9.30176C56.3379 9.63379 56.0938 10.0195 55.8984 10.459C55.7129 10.8984 55.5664 11.3574 55.459 11.8359C55.3516 12.3145 55.2734 12.7979 55.2246 13.2861C55.1855 13.7646 55.166 14.2188 55.166 14.6484C55.166 15.0781 55.1855 15.5371 55.2246 16.0254C55.2734 16.5137 55.3516 16.9971 55.459 17.4756C55.5664 17.9541 55.7129 18.4131 55.8984 18.8525C56.0938 19.292 56.3379 19.6826 56.6309 20.0244C56.9238 20.3564 57.2754 20.625 57.6855 20.8301C58.0957 21.0254 58.5791 21.123 59.1357 21.123C59.6436 21.123 60.0928 21.0205 60.4834 20.8154C60.8838 20.6006 61.2305 20.3174 61.5234 19.9658C61.8262 19.6143 62.0801 19.2139 62.2852 18.7646C62.4902 18.3154 62.6562 17.8516 62.7832 17.373C62.9102 16.8945 63.0029 16.4209 63.0615 15.9521C63.1201 15.4736 63.1494 15.0391 63.1494 14.6484Z"
                      fill="white"
                    />
                    <path
                      d="M86.6602 7.71973L83.877 12.334C83.7598 11.9434 83.6084 11.5039 83.4229 11.0156C83.2373 10.5273 83.0078 10.0732 82.7344 9.65332C82.4609 9.22363 82.1338 8.86719 81.7529 8.58398C81.3721 8.29102 80.9326 8.14453 80.4346 8.14453C79.9756 8.14453 79.5752 8.26172 79.2334 8.49609C78.9014 8.73047 78.6182 9.03809 78.3838 9.41895C78.1494 9.79004 77.9541 10.2148 77.7979 10.6934C77.6514 11.1621 77.5342 11.6406 77.4463 12.1289C77.3682 12.6074 77.3145 13.0713 77.2852 13.5205C77.2559 13.96 77.2412 14.3408 77.2412 14.6631V23.1445H72.2754V6.22559H74.1797L76.1865 10.166C76.46 9.53125 76.7725 8.9502 77.124 8.42285C77.4756 7.88574 77.8809 7.42676 78.3398 7.0459C78.7988 6.65527 79.3164 6.35254 79.8926 6.1377C80.4785 5.92285 81.1377 5.81543 81.8701 5.81543C82.251 5.81543 82.6758 5.84961 83.1445 5.91797C83.6133 5.97656 84.0723 6.08398 84.5215 6.24023C84.9707 6.38672 85.3857 6.58203 85.7666 6.82617C86.1475 7.07031 86.4453 7.36816 86.6602 7.71973Z"
                      fill="white"
                    />
                    <path
                      d="M95.1123 23.1445H90.1465V8.18848H87.0703V6.22559H90.1465V0H95.1123V6.22559H100.239V8.18848H95.1123V23.1445Z"
                      fill="white"
                    />
                    <path
                      d="M131.44 13.0518V13.3301C131.421 14.1504 131.333 15 131.177 15.8789C131.03 16.7578 130.82 17.6367 130.547 18.5156C130.273 19.3945 129.946 20.2637 129.565 21.123C129.185 21.9824 128.755 22.8027 128.276 23.584C127.808 24.375 127.3 25.1123 126.753 25.7959C126.206 26.4893 125.63 27.0996 125.024 27.627L122.842 26.3672C123.184 25.791 123.491 25.1611 123.765 24.4775C124.048 23.8037 124.302 23.0957 124.526 22.3535C124.751 21.6113 124.941 20.8496 125.098 20.0684C125.264 19.2871 125.4 18.5107 125.508 17.7393C125.615 16.9678 125.693 16.2109 125.742 15.4688C125.801 14.7168 125.83 14.0039 125.83 13.3301C125.83 12.8027 125.825 12.207 125.815 11.543C125.815 10.8691 125.776 10.1855 125.698 9.49219C125.63 8.79883 125.513 8.125 125.347 7.4707C125.181 6.80664 124.932 6.21582 124.6 5.69824C124.277 5.18066 123.857 4.76562 123.34 4.45312C122.832 4.14062 122.197 3.98438 121.436 3.98438C120.762 3.98438 120.181 4.10156 119.692 4.33594C119.214 4.56055 118.804 4.86816 118.462 5.25879C118.13 5.63965 117.861 6.08398 117.656 6.5918C117.461 7.09961 117.305 7.63672 117.188 8.20312C117.08 8.75977 117.007 9.32617 116.968 9.90234C116.938 10.4688 116.924 11.0059 116.924 11.5137V15.6006H123.237V18.0176H116.924V23.1445H111.108V12.4219C111.108 10.8887 111.353 9.46289 111.841 8.14453C112.329 6.82617 113.018 5.68359 113.906 4.7168C114.805 3.74023 115.879 2.97852 117.129 2.43164C118.389 1.875 119.79 1.59668 121.333 1.59668C122.378 1.59668 123.354 1.74805 124.263 2.05078C125.181 2.34375 126.016 2.75391 126.768 3.28125C127.52 3.79883 128.188 4.41895 128.774 5.1416C129.37 5.85449 129.863 6.63574 130.254 7.48535C130.654 8.33496 130.957 9.2334 131.162 10.1807C131.367 11.1279 131.46 12.085 131.44 13.0518Z"
                      fill="white"
                    />
                    <path
                      d="M151.802 21.1084C151.802 22.4561 151.602 23.7256 151.201 24.917C150.801 26.1084 150.22 27.1484 149.458 28.0371C148.696 28.9355 147.759 29.6436 146.646 30.1611C145.542 30.6885 144.282 30.9521 142.866 30.9521C142.085 30.9521 141.294 30.8643 140.493 30.6885C139.702 30.5127 138.95 30.2393 138.237 29.8682C137.534 29.5068 136.899 29.043 136.333 28.4766C135.776 27.9199 135.337 27.2607 135.015 26.499L137.153 25.6934C137.339 26.1719 137.578 26.6113 137.871 27.0117C138.174 27.4121 138.521 27.7539 138.911 28.0371C139.302 28.3301 139.731 28.5547 140.2 28.7109C140.669 28.877 141.162 28.96 141.68 28.96C142.656 28.96 143.472 28.7598 144.126 28.3594C144.79 27.959 145.322 27.4365 145.723 26.792C146.123 26.1475 146.411 25.415 146.587 24.5947C146.763 23.7842 146.851 22.959 146.851 22.1191V21.123C146.265 21.9238 145.557 22.5195 144.727 22.9102C143.906 23.291 143.003 23.4814 142.017 23.4814C140.728 23.4814 139.575 23.252 138.56 22.793C137.544 22.334 136.685 21.709 135.981 20.918C135.278 20.1172 134.741 19.1797 134.37 18.1055C133.999 17.0312 133.813 15.8789 133.813 14.6484C133.813 13.418 133.999 12.2656 134.37 11.1914C134.741 10.1172 135.278 9.18457 135.981 8.39355C136.685 7.59277 137.544 6.96289 138.56 6.50391C139.575 6.04492 140.728 5.81543 142.017 5.81543C142.671 5.81543 143.291 5.91309 143.877 6.1084C144.473 6.30371 145.015 6.58203 145.503 6.94336C146.001 7.29492 146.436 7.72461 146.807 8.23242C147.188 8.73047 147.485 9.28711 147.7 9.90234L149.897 6.22559H151.802V21.1084ZM146.821 14.6484C146.821 14.209 146.797 13.7451 146.748 13.2568C146.709 12.7686 146.636 12.2852 146.528 11.8066C146.421 11.3281 146.27 10.874 146.074 10.4443C145.889 10.0049 145.645 9.61914 145.342 9.28711C145.049 8.94531 144.692 8.67676 144.272 8.48145C143.853 8.28613 143.364 8.18848 142.808 8.18848C142.251 8.18848 141.768 8.29102 141.357 8.49609C140.947 8.69141 140.596 8.95996 140.303 9.30176C140.01 9.63379 139.766 10.0195 139.57 10.459C139.385 10.8984 139.238 11.3574 139.131 11.8359C139.023 12.3145 138.945 12.7979 138.896 13.2861C138.857 13.7646 138.838 14.2188 138.838 14.6484C138.838 15.0781 138.857 15.5371 138.896 16.0254C138.945 16.5137 139.023 16.9971 139.131 17.4756C139.238 17.9541 139.385 18.4131 139.57 18.8525C139.766 19.292 140.01 19.6826 140.303 20.0244C140.596 20.3564 140.947 20.625 141.357 20.8301C141.768 21.0254 142.251 21.123 142.808 21.123C143.315 21.123 143.765 21.0205 144.155 20.8154C144.556 20.6006 144.902 20.3174 145.195 19.9658C145.498 19.6143 145.752 19.2139 145.957 18.7646C146.162 18.3154 146.328 17.8516 146.455 17.373C146.582 16.8945 146.675 16.4209 146.733 15.9521C146.792 15.4736 146.821 15.0391 146.821 14.6484Z"
                      fill="white"
                    />
                    <path
                      d="M170.332 7.71973L167.549 12.334C167.432 11.9434 167.28 11.5039 167.095 11.0156C166.909 10.5273 166.68 10.0732 166.406 9.65332C166.133 9.22363 165.806 8.86719 165.425 8.58398C165.044 8.29102 164.604 8.14453 164.106 8.14453C163.647 8.14453 163.247 8.26172 162.905 8.49609C162.573 8.73047 162.29 9.03809 162.056 9.41895C161.821 9.79004 161.626 10.2148 161.47 10.6934C161.323 11.1621 161.206 11.6406 161.118 12.1289C161.04 12.6074 160.986 13.0713 160.957 13.5205C160.928 13.96 160.913 14.3408 160.913 14.6631V23.1445H155.947V6.22559H157.852L159.858 10.166C160.132 9.53125 160.444 8.9502 160.796 8.42285C161.147 7.88574 161.553 7.42676 162.012 7.0459C162.471 6.65527 162.988 6.35254 163.564 6.1377C164.15 5.92285 164.81 5.81543 165.542 5.81543C165.923 5.81543 166.348 5.84961 166.816 5.91797C167.285 5.97656 167.744 6.08398 168.193 6.24023C168.643 6.38672 169.058 6.58203 169.438 6.82617C169.819 7.07031 170.117 7.36816 170.332 7.71973Z"
                      fill="white"
                    />
                    <path
                      d="M189.844 14.6484C189.844 15.5273 189.727 16.3525 189.492 17.124C189.258 17.8955 188.931 18.6084 188.511 19.2627C188.101 19.917 187.603 20.5078 187.017 21.0352C186.431 21.5527 185.786 21.9922 185.083 22.3535C184.39 22.7148 183.643 22.9932 182.842 23.1885C182.051 23.3838 181.235 23.4814 180.396 23.4814C179.556 23.4814 178.74 23.3838 177.949 23.1885C177.158 22.9932 176.411 22.7148 175.708 22.3535C175.015 21.9922 174.375 21.5527 173.789 21.0352C173.203 20.5078 172.7 19.917 172.28 19.2627C171.87 18.6084 171.548 17.8955 171.313 17.124C171.079 16.3428 170.962 15.5176 170.962 14.6484C170.962 13.7793 171.079 12.959 171.313 12.1875C171.548 11.4062 171.87 10.6885 172.28 10.0342C172.7 9.37988 173.203 8.79395 173.789 8.27637C174.375 7.74902 175.015 7.30469 175.708 6.94336C176.411 6.58203 177.158 6.30371 177.949 6.1084C178.74 5.91309 179.556 5.81543 180.396 5.81543C181.235 5.81543 182.051 5.91309 182.842 6.1084C183.643 6.30371 184.39 6.58203 185.083 6.94336C185.786 7.30469 186.431 7.74902 187.017 8.27637C187.603 8.79395 188.101 9.37988 188.511 10.0342C188.931 10.6885 189.258 11.4062 189.492 12.1875C189.727 12.959 189.844 13.7793 189.844 14.6484ZM184.805 14.6484C184.805 14.1797 184.775 13.6865 184.717 13.1689C184.668 12.6416 184.58 12.1289 184.453 11.6309C184.326 11.123 184.15 10.6396 183.926 10.1807C183.711 9.71191 183.442 9.30664 183.12 8.96484C182.798 8.61328 182.412 8.33496 181.963 8.12988C181.514 7.91504 180.991 7.80762 180.396 7.80762C179.829 7.80762 179.326 7.91504 178.887 8.12988C178.447 8.34473 178.062 8.63281 177.729 8.99414C177.407 9.3457 177.134 9.75586 176.909 10.2246C176.694 10.6934 176.519 11.1816 176.382 11.6895C176.245 12.1875 176.147 12.6953 176.089 13.2129C176.03 13.7207 176.001 14.1992 176.001 14.6484C176.001 15.0977 176.03 15.5811 176.089 16.0986C176.147 16.6064 176.245 17.1143 176.382 17.6221C176.519 18.1299 176.694 18.6182 176.909 19.0869C177.134 19.5459 177.407 19.9561 177.729 20.3174C178.062 20.6689 178.447 20.9521 178.887 21.167C179.326 21.3818 179.829 21.4893 180.396 21.4893C180.981 21.4893 181.499 21.3867 181.948 21.1816C182.397 20.9668 182.783 20.6836 183.105 20.332C183.438 19.9805 183.711 19.5752 183.926 19.1162C184.141 18.6572 184.312 18.1738 184.438 17.666C184.575 17.1582 184.668 16.6455 184.717 16.1279C184.775 15.6104 184.805 15.1172 184.805 14.6484Z"
                      fill="white"
                    />
                    <path
                      d="M197.461 20.9473C197.461 21.3184 197.393 21.6699 197.256 22.002C197.119 22.3242 196.929 22.6074 196.685 22.8516C196.44 23.0859 196.157 23.2715 195.835 23.4082C195.513 23.5547 195.166 23.6279 194.795 23.6279C194.424 23.6279 194.077 23.5547 193.755 23.4082C193.433 23.2715 193.149 23.0859 192.905 22.8516C192.661 22.6074 192.471 22.3242 192.334 22.002C192.197 21.6699 192.129 21.3184 192.129 20.9473C192.129 20.5859 192.197 20.2441 192.334 19.9219C192.471 19.5898 192.661 19.3066 192.905 19.0723C193.149 18.8281 193.433 18.6377 193.755 18.501C194.077 18.3545 194.424 18.2812 194.795 18.2812C195.166 18.2812 195.513 18.3545 195.835 18.501C196.157 18.6377 196.44 18.8281 196.685 19.0723C196.929 19.3066 197.119 19.5898 197.256 19.9219C197.393 20.2441 197.461 20.5859 197.461 20.9473Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <div className="mt-[25px]">
                  <p className="text-base font-normal leading-[25px] text-white font-century-gothic">
                    Lorem ipsum dolor sit amet, adipiscing elit. In hac
                    habitasse platea dictumst. Duis porta,quam ut finibus
                    ultrices.
                  </p>
                </div>
                <div className="h-px w-full bg-white my-[34px]" />
                <div className="flex gap-[30px]">
                  <Link href="/" className="no-underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="#F7C35F"
                    >
                      <path d="M14 14.4521H16.5L17.5 10.4521H14V8.45215C14 7.42215 14 6.45215 16 6.45215H17.5V3.09215C17.174 3.04915 15.943 2.95215 14.643 2.95215C11.928 2.95215 10 4.60915 10 7.65215V10.4521H7V14.4521H10V22.9521H14V14.4521Z" />
                    </svg>
                  </Link>
                  <Link href="/" className="no-underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="#F7C35F"
                    >
                      <path d="M22.46 6.95215C21.69 7.30215 20.86 7.53215 20 7.64215C20.88 7.11215 21.56 6.27215 21.88 5.26215C21.05 5.76215 20.13 6.11215 19.16 6.31215C18.37 5.45215 17.26 4.95215 16 4.95215C13.65 4.95215 11.73 6.87215 11.73 9.24215C11.73 9.58215 11.77 9.91215 11.84 10.2221C8.28 10.0421 5.11 8.33215 3 5.74215C2.63 6.37215 2.42 7.11215 2.42 7.89215C2.42 9.38215 3.17 10.7021 4.33 11.4521C3.62 11.4521 2.96 11.2521 2.38 10.9521V10.9821C2.38 13.0621 3.86 14.8021 5.82 15.1921C5.19073 15.3644 4.5301 15.3883 3.89 15.2621C4.16161 16.1146 4.69354 16.8606 5.41102 17.3951C6.1285 17.9296 6.99545 18.2258 7.89 18.2421C6.37363 19.4426 4.494 20.0915 2.56 20.0821C2.22 20.0821 1.88 20.0621 1.54 20.0221C3.44 21.2421 5.7 21.9521 8.12 21.9521C16 21.9521 20.33 15.4121 20.33 9.74215C20.33 9.55215 20.33 9.37215 20.32 9.18215C21.16 8.58215 21.88 7.82215 22.46 6.95215Z" />
                    </svg>
                  </Link>
                  <Link href="/" className="no-underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="#F7C35F"
                    >
                      <path d="M10 15.9521L15.19 12.9521L10 9.95215V15.9521ZM21.56 8.12215C21.69 8.59215 21.78 9.22215 21.84 10.0221C21.91 10.8221 21.94 11.5121 21.94 12.1121L22 12.9521C22 15.1421 21.84 16.7521 21.56 17.7821C21.31 18.6821 20.73 19.2621 19.83 19.5121C19.36 19.6421 18.5 19.7321 17.18 19.7921C15.88 19.8621 14.69 19.8921 13.59 19.8921L12 19.9521C7.81 19.9521 5.2 19.7921 4.17 19.5121C3.27 19.2621 2.69 18.6821 2.44 17.7821C2.31 17.3121 2.22 16.6821 2.16 15.8821C2.09 15.0821 2.06 14.3921 2.06 13.7921L2 12.9521C2 10.7621 2.16 9.15215 2.44 8.12215C2.69 7.22215 3.27 6.64215 4.17 6.39215C4.64 6.26215 5.5 6.17215 6.82 6.11215C8.12 6.04215 9.31 6.01215 10.41 6.01215L12 5.95215C16.19 5.95215 18.8 6.11215 19.83 6.39215C20.73 6.64215 21.31 7.22215 21.56 8.12215Z" />
                    </svg>
                  </Link>
                  <Link href="/" className="no-underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="#F7C35F"
                    >
                      <path d="M12 9.70215C11.138 9.70215 10.3114 10.0446 9.7019 10.6541C9.09241 11.2635 8.75 12.0902 8.75 12.9521C8.75 13.8141 9.09241 14.6408 9.7019 15.2502C10.3114 15.8597 11.138 16.2021 12 16.2021C12.862 16.2021 13.6886 15.8597 14.2981 15.2502C14.9076 14.6408 15.25 13.8141 15.25 12.9521C15.25 12.0902 14.9076 11.2635 14.2981 10.6541C13.6886 10.0446 12.862 9.70215 12 9.70215Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.77 4.03409C10.246 3.64879 13.754 3.64879 17.23 4.03409C19.129 4.24609 20.66 5.74109 20.883 7.64709C21.2952 11.1717 21.2952 14.7324 20.883 18.2571C20.66 20.1631 19.129 21.6581 17.231 21.8711C13.7547 22.2565 10.2464 22.2565 6.77 21.8711C4.871 21.6581 3.34 20.1631 3.117 18.2581C2.70473 14.7331 2.70473 11.1721 3.117 7.64709C3.34 5.74109 4.871 4.24609 6.77 4.03409ZM17 6.95209C16.7348 6.95209 16.4804 7.05745 16.2929 7.24499C16.1054 7.43252 16 7.68688 16 7.95209C16 8.21731 16.1054 8.47166 16.2929 8.6592C16.4804 8.84673 16.7348 8.95209 17 8.95209C17.2652 8.95209 17.5196 8.84673 17.7071 8.6592C17.8946 8.47166 18 8.21731 18 7.95209C18 7.68688 17.8946 7.43252 17.7071 7.24499C17.5196 7.05745 17.2652 6.95209 17 6.95209ZM7.25 12.9521C7.25 11.6923 7.75045 10.4841 8.64125 9.59333C9.53204 8.70254 10.7402 8.20209 12 8.20209C13.2598 8.20209 14.468 8.70254 15.3588 9.59333C16.2496 10.4841 16.75 11.6923 16.75 12.9521C16.75 14.2119 16.2496 15.4201 15.3588 16.3108C14.468 17.2016 13.2598 17.7021 12 17.7021C10.7402 17.7021 9.53204 17.2016 8.64125 16.3108C7.75045 15.4201 7.25 14.2119 7.25 12.9521Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <ul className="me-[100px]">
                <li>
                  <h6 className="text-white font-livvic text-[22px] font-semibold">
                    Useful Links
                  </h6>
                  <ul className="mt-[30px]">
                    <li className="mt-5">
                      <Link
                        href="/"
                        className="no-underline font-century-gothic text-[15px] text-white font-normal"
                      >
                        <div>New Projects</div>
                      </Link>
                    </li>
                    <li className="mt-5">
                      <Link
                        href="/"
                        className="no-underline font-century-gothic text-[15px] text-white font-normal"
                      >
                        <div>Our Services</div>
                      </Link>
                    </li>
                    <li className="mt-5">
                      <Link
                        href="/"
                        className="no-underline font-century-gothic text-[15px] text-white font-normal"
                      >
                        <div>Testimonials</div>
                      </Link>
                    </li>
                    <li className="mt-5">
                      <Link
                        href="/"
                        className="no-underline font-century-gothic text-[15px] text-white font-normal"
                      >
                        <div>About us</div>
                      </Link>
                    </li>
                    <li className="mt-5">
                      <Link
                        href="/"
                        className="no-underline font-century-gothic text-[15px] text-white font-normal"
                      >
                        <div>Contact Us</div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="basis-[315px]">
                <div className="cols-span-1">
                  <h6 className="text-white font-livvic text-[22px] font-semibold">
                    Newsletter
                  </h6>
                  <div className="mt-[25px]">
                    <p className="text-base font-normal leading-[25px] text-white font-century-gothic">
                      Subscribe to our weekly Newsletter and receive updates via
                      email..
                    </p>
                  </div>
                  <div className="relative mt-6">
                    <input
                      className="rounded-[50px] bg-[#263C28] w-full h-[55px] py-[19px] ps-5 text-white text-sm font-century-gothic focus:outline-none"
                      type="email"
                      placeholder="enter your email"
                    />
                    <button
                      type="button"
                      className="absolute right-[5px] top-[5px] rounded-full h-[45px] w-[45px] bg-[#F7C35F]"
                    >
                      GO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-px w-full mt-[100px] mb-[50px]" />
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between">
              <div className="text-[15px] text-white font-century-gothic font-normal">
                Copyright ©Smart Agro. All Right Reserved.
              </div>
              <div className="flex gap-[25px]">
                <Link
                  href="/"
                  className="text-[15px] text-white font-normal font-century-gothic"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/"
                  className="text-[15px] text-white font-normal font-century-gothic"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default function Page() {
  return (
    <div>
      <Footer />
    </div>
  );
}
