# Web Components Collection

Este repositório contém dois Web Components desenvolvidos com ECMAScript, que podem ser utilizados em qualquer projeto web:

1. **Image Carousel**: Um carrossel de imagens automatizado com controles de play/pause e a capacidade de abrir links ao clicar nas imagens.
2. **Theme Toggle**: Um tema que permite ao usuário alternar entre os modos de tema Light e Dark.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
  - [Image Carousel](#image-carousel)
  - [Theme Toggle](#theme-toggle)
- [Estilo](#estilo)


## Instalação

Para utilizar os componentes, basta clonar o repositório e incluir os arquivos necessários em seu projeto.

```bash
    git clone https://github.com/paulabicca/web-components
```

## Uso

## Image Carousel

O ImageCarousel é um componente de carrossel de imagens que permite a rotação automática das imagens, com a opção de controle manual.

**Exemplo de Uso**

```bash
    <image-carousel>
        <div class="carousel-slide" style="background-image: url('image1.jpg);" data-url="https://example.com/page1"></div>
        <div class="carousel-slide" style="background-image: url('image2.jpg);" data-url="https://example.com/page2"></div>
        <div class="carousel-slide" style="background-image: url('image3.jpg);" data-url="https://example.com/page2"></div>
    </image-carousel>
```

## Theme Toggle

O ThemeToggle é um componente que permite alternar entre os temas Light e Dark em sua aplicação.

**Exemplo de Uso**

```bash
    <theme-toggle></theme-toggle>
```

## Estilo

Os estilos dos componentes estão separados em arquivos CSS. Certifique-se de incluir o CSS adequado em seu projeto.

- Image Carousel: css/carousel.css
- Theme Toggle: css/theme-toggle.css

