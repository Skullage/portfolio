import { u as useNuxtApp, a as useRequestEvent, p as parseSize, _ as _export_sfc } from "../server.mjs";
import { computed, defineComponent, ref, h, mergeProps, useSSRContext, resolveComponent, resolveDirective, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { u as useHead } from "./composables-c7a1e9e8.js";
import "destr";
import { appendHeader } from "h3";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "ufo";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
import "vue-i18n";
const useImage = () => {
  return useNuxtApp().$img;
};
function prerenderStaticImages(src = "", srcset = "") {
  if (!process.env.prerender) {
    return;
  }
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
const baseImageProps = {
  src: { type: String, required: true },
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = _base.attrs.value;
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    if (process.env.prerender) {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const imgEl = ref();
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$1 = {
  name: "Modal",
  data() {
    return {
      show: false
    };
  },
  methods: {
    send() {
    },
    closeModal() {
      this.show = false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["fixed top-0 left-0 z-[1000] flex h-full w-full items-end justify-center duration-500 lg:items-center", [{ "-translate-y-full opacity-0": !$data.show }]]
  }, _attrs))}><div class="flex h-auto max-h-full w-full flex-col border bg-white dark:bg-dark dark:text-white lg:max-h-[80%] lg:w-1/2"><h3 class="modal-title mb-4 border-b py-8 text-center text-2xl">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
    _push(`Заголовок`);
  }, _push, _parent);
  _push(`</h3><div class="modal-content flex-1 overflow-y-auto px-4">`);
  ssrRenderSlot(_ctx.$slots, "body", {}, () => {
    _push(`Дефолтный контент модального окна`);
  }, _push, _parent);
  _push(`</div><div class="modal-footer relative bottom-0 left-0 flex flex-wrap justify-center gap-2 py-6 lg:gap-10">`);
  ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
  _push(`<button class="modal-footer__button rounded border border-red-600 px-4 py-2 hover:bg-red-600 hover:text-white">${ssrInterpolate(_ctx.$t("close"))}</button></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const index_vue_vue_type_style_index_0_scoped_bcc120ab_lang = "";
const _sfc_main = {
  components: {
    Modal,
    Icon
  },
  methods: {
    showModal(name) {
      this.$refs[name].show = true;
    },
    showProjectInfo(id) {
      this.$refs.projects[id].show = true;
    },
    getAnimDelay(index2) {
      return `transition-delay: ${this.baseAnimDelay + index2 * this.baseAnimDelay}ms`;
    },
    selectImage(index2, elemId) {
      let buf = this.projects[index2].images[0];
      this.projects[index2].images[0] = this.projects[index2].images[elemId + 1];
      this.projects[index2].images[elemId + 1] = buf;
    }
  },
  computed: {
    getProjectsImages() {
      let result = [];
      let buf = [];
      this.projects.forEach((el) => {
        buf = el.images.filter((item) => item != el.images[0]);
        result.push(buf);
      });
      return result;
    }
  },
  data() {
    return {
      hardSkills: [
        {
          title: "HTML",
          stars: 5,
          iconName: "skill-icons:html"
        },
        {
          title: "CSS",
          stars: 5,
          iconName: "skill-icons:css"
        },
        {
          title: "SCSS",
          stars: 5,
          iconName: "logos:sass"
        },
        {
          title: "JavaScript",
          stars: 3,
          iconName: "skill-icons:javascript"
        },
        {
          title: "Vue",
          stars: 5,
          iconName: "logos:vue"
        },
        {
          title: "Nuxt",
          stars: 5,
          iconName: "logos:nuxt-icon"
        },
        {
          title: "Git",
          stars: 3,
          iconName: "icon-park:github"
        },
        {
          title: "Gulp",
          stars: 5,
          iconName: "logos:gulp"
        },
        {
          title: "Tailwind CSS",
          stars: 5,
          iconName: "logos:tailwindcss-icon"
        },
        {
          title: "Bootstrap",
          stars: 5,
          iconName: "skill-icons:bootstrap"
        },
        {
          title: "Photoshop",
          stars: 3,
          iconName: "logos:adobe-photoshop"
        }
      ],
      softSkills: [
        this.$t("responsibility"),
        this.$t("attentiveness"),
        this.$t("sociability")
      ],
      baseAnimDelay: 200,
      projects: [
        {
          title: "Dart",
          desc: this.$t("projectDesc0"),
          stack: "HTML, CSS, JavaScript, Gulp",
          date: "2022",
          preview: "",
          href: "https://skullage.github.io/Dart/",
          images: [
            "dart/dart.png",
            "dart/dart2.png",
            "dart/dart3.png",
            "dart/dart4.png",
            "dart/dart5.png",
            "dart/dart6.png",
            "dart/dart7.png"
          ]
        },
        {
          title: "Delivery",
          desc: this.$t("projectDesc1"),
          stack: "HTML, CSS, JavaScript, Gulp",
          date: "2022",
          preview: "",
          href: "https://skullage.github.io/Delivery/",
          images: [
            "delivery/delivery.png",
            "delivery/delivery2.png",
            "delivery/delivery3.png",
            "delivery/delivery4.png",
            "delivery/delivery5.png",
            "delivery/delivery6.png",
            "delivery/delivery7.png"
          ]
        },
        {
          title: "Le Corte",
          desc: this.$t("projectDesc2"),
          stack: "HTML, CSS, JavaScript, Gulp",
          date: "2022",
          preview: "",
          href: "https://skullage.github.io/LeCorte/",
          images: [
            "lecorte/lecorte.png",
            "lecorte/lecorte2.png",
            "lecorte/lecorte3.png",
            "lecorte/lecorte4.png",
            "lecorte/lecorte5.png"
          ]
        },
        {
          title: "Porten",
          desc: this.$t("projectDesc3"),
          stack: "HTML, CSS, JavaScript, Gulp",
          date: "2022",
          preview: "",
          href: "https://skullage.github.io/Porten/",
          images: [
            "porten/porten.png",
            "porten/porten2.png",
            "porten/porten3.png",
            "porten/porten4.png",
            "porten/porten5.png",
            "porten/porten6.png"
          ]
        },
        {
          title: "Saka",
          desc: this.$t("projectDesc4"),
          stack: "HTML, CSS, JavaScript, Gulp",
          date: "2022",
          preview: "",
          href: "https://skullage.github.io/Saka/",
          images: [
            "saka/saka.png",
            "saka/saka2.png",
            "saka/saka3.png",
            "saka/saka4.png",
            "saka/saka5.png",
            "saka/saka6.png",
            "saka/saka7.png",
            "saka/saka8.png"
          ]
        },
        {
          title: "PW Companion",
          desc: this.$t("projectDesc5"),
          stack: "HTML, CSS, JavaScript, VueJS 3, Bootstrap 5",
          date: "2022",
          preview: "",
          href: "https://pw-companion.vercel.app",
          images: [
            "pw_companion/pw_companion.png",
            "pw_companion/pw_companion2.png",
            "pw_companion/pw_companion3.png",
            "pw_companion/pw_companion4.png"
          ]
        }
      ]
    };
  },
  watch: {
    "$i18n.locale"(newVal, oldVal) {
      this.softSkills = [
        this.$t("responsibility"),
        this.$t("attentiveness"),
        this.$t("sociability")
      ];
      for (let i = 0; i < this.projects.length; i++) {
        this.projects[i].desc = this.$t("projectDesc" + i);
      }
    }
  },
  created() {
    this.projects.forEach((el) => {
      el.preview = el.images[0];
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_nuxt_img = __nuxt_component_0;
  const _component_modal = resolveComponent("modal");
  const _directive_intersection = resolveDirective("intersection");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "scrollbar" }, _attrs))} data-v-bcc120ab><div class="container mx-auto px-4" data-v-bcc120ab><section${ssrRenderAttrs(mergeProps({
    class: "section hello mb-20 flex flex-wrap gap-10 overflow-hidden md:min-h-screen md:items-center md:justify-around",
    id: "about"
  }, ssrGetDirectiveProps(_ctx, _directive_intersection)))} data-v-bcc120ab><div class="hello__text slide-right max-lg:order-1" data-v-bcc120ab><div class="about mb-8" data-v-bcc120ab><h2 class="mb-3 text-3xl font-bold dark:text-white" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("greeting"))}</h2><p class="dark:text-white" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("prof"))}</p></div><div class="contacts mb-10" data-v-bcc120ab><div class="contacts__phone mb-1 flex gap-x-3" data-v-bcc120ab><h5 class="contacts__title w-24 flex-initial font-bold uppercase dark:text-white" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("phone"))}</h5><a href="tel:79279348061" class="text-gray-500 underline" data-v-bcc120ab>+79279348061</a></div><div class="contacts__email mb-1 flex gap-x-3" data-v-bcc120ab><h5 class="contacts__title w-24 flex-initial font-bold uppercase dark:text-white" data-v-bcc120ab> E-mail </h5><a href="mailto:dogonadze1999@mail.ru" class="text-gray-500 underline" data-v-bcc120ab>dogonadze1999@mail.ru</a></div><div class="contacts__social social flex items-center gap-x-3" data-v-bcc120ab><h5 class="contacts__title w-24 flex-initial font-bold uppercase dark:text-white" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("social"))}</h5><ul class="contacts__social-list social__list flex gap-2" data-v-bcc120ab><li class="social__item" data-v-bcc120ab><a href="http://vk.com/skullage" class="social__link" data-v-bcc120ab>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "cib:vk",
    width: "32",
    height: "32",
    class: "rounded-full text-sky-700 duration-500 hover:text-black dark:bg-white dark:hover:bg-black dark:hover:text-white"
  }, null, _parent));
  _push(`</a></li><li class="social__item" data-v-bcc120ab><a href="https://t.me/skullage" class="social__link" data-v-bcc120ab>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "simple-icons:telegram",
    width: "32",
    height: "32",
    class: "rounded-full text-sky-600 duration-500 hover:text-black dark:bg-white dark:hover:bg-black dark:hover:text-white"
  }, null, _parent));
  _push(`</a></li><li class="social__item" data-v-bcc120ab><a href="https://github.com/skullage" class="social__link" data-v-bcc120ab>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "carbon:logo-github",
    width: "32",
    height: "32",
    class: "rounded-full bg-white text-black invert duration-500 hover:invert-0"
  }, null, _parent));
  _push(`</a></li></ul></div></div><div class="flex gap-5" data-v-bcc120ab>`);
  {
    _push(`<!---->`);
  }
  _push(`<a class="rounded border border-gray-200 bg-transparent px-3 py-3.5 text-center text-black duration-500 hover:bg-dark hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black" href="/files/Summary.pdf" target="_blank" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("downloadCV"))}</a></div></div><div class="hello__photo-wrapper slide-left" data-v-bcc120ab>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/img/myPhoto.png",
    alt: "Мое фото",
    class: "h-full rounded",
    format: "webp"
  }, null, _parent));
  _push(`</div></section><section${ssrRenderAttrs(mergeProps({
    class: "section skills mb-20 flex flex-col justify-center overflow-hidden dark:text-white md:min-h-screen",
    id: "skills"
  }, ssrGetDirectiveProps(_ctx, _directive_intersection)))} data-v-bcc120ab><h2 class="mb-6 text-center text-3xl font-bold" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("skills"))}</h2><div class="flex flex-wrap gap-10" data-v-bcc120ab><div class="soft-skills flex-1 text-center" data-v-bcc120ab><h3 class="soft-skills__title fade-in mb-4 text-2xl font-bold" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("softSkills"))}</h3><ul class="soft-skills__list" data-v-bcc120ab><!--[-->`);
  ssrRenderList($data.softSkills, (item, index2) => {
    _push(`<li class="soft-skills__item slide-right" style="${ssrRenderStyle($options.getAnimDelay(index2))}" data-v-bcc120ab>${ssrInterpolate(item)}</li>`);
  });
  _push(`<!--]--></ul></div><div class="hard-skills flex-1 text-center" data-v-bcc120ab><h3 class="hard-skills__title fade-in font-bol mb-4 text-2xl" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("hardSkills"))}</h3><ul class="hard-skills__list" data-v-bcc120ab><!--[-->`);
  ssrRenderList($data.hardSkills, (item, index2) => {
    _push(`<li class="hard-skills__item slide-left mb-2 flex items-center justify-center gap-3 last:mb-0" style="${ssrRenderStyle($options.getAnimDelay(index2))}" data-v-bcc120ab>`);
    {
      _push(`<!---->`);
    }
    _push(`<span class="flex-1 text-right" data-v-bcc120ab>${ssrInterpolate(item.title)}</span><div class="hard-skills__icon-wrapper flex-1" data-v-bcc120ab><div class="w-12 rounded-full bg-white" data-v-bcc120ab>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: item.iconName,
      width: "48",
      height: "48",
      class: "p-2.5"
    }, null, _parent));
    _push(`</div></div></li>`);
  });
  _push(`<!--]--></ul></div></div></section>`);
  {
    _push(`<!---->`);
  }
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section portfolio mb-20 flex flex-col justify-center overflow-hidden dark:text-white md:min-h-screen",
    id: "projects"
  }, ssrGetDirectiveProps(_ctx, _directive_intersection)))} data-v-bcc120ab><h2 class="mb-10 text-center text-3xl font-bold" data-v-bcc120ab>${ssrInterpolate(_ctx.$t("myProjects"))}</h2><div class="mx-auto grid gap-y-16 gap-x-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-v-bcc120ab><!--[-->`);
  ssrRenderList($data.projects, (item, index2) => {
    _push(`<div class="portfolio__card card slide-right cursor-pointer border p-4" data-v-bcc120ab><div class="card__image-wrapper overflow-hidden" data-v-bcc120ab>`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      src: `/img/portfolio/${item.preview}`,
      alt: `Превью ${item.title}`,
      class: "card__image mb-4 duration-500 hover:scale-125",
      format: "webp"
    }, null, _parent));
    _push(`</div><h3 class="card__title text-2xl font-bold" data-v-bcc120ab>${ssrInterpolate(item.title)}</h3><p class="card__date text-lg" data-v-bcc120ab>${ssrInterpolate(item.date)}</p></div>`);
  });
  _push(`<!--]--></div></section>`);
  {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($data.projects, (item, index2) => {
    _push(ssrRenderComponent(_component_modal, {
      key: index2,
      ref_for: true,
      ref: "projects"
    }, {
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<h3 class="modal-title" data-v-bcc120ab${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
        } else {
          return [
            createVNode("h3", { class: "modal-title" }, toDisplayString(item.title), 1)
          ];
        }
      }),
      body: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="mb-10" data-v-bcc120ab${_scopeId}>${ssrInterpolate(item.desc)}</p><p class="mb-2" data-v-bcc120ab${_scopeId}><span class="modal__span-title float-left block font-bold uppercase" data-v-bcc120ab${_scopeId}>${ssrInterpolate(_ctx.$t("stack"))}</span><span data-v-bcc120ab${_scopeId}>${ssrInterpolate(item.stack)}</span></p><p class="mb-10" data-v-bcc120ab${_scopeId}><span class="modal__span-title float-left block font-bold uppercase" data-v-bcc120ab${_scopeId}>${ssrInterpolate(_ctx.$t("date"))}</span><span data-v-bcc120ab${_scopeId}>${ssrInterpolate(item.date)}</span></p><div class="modal__grid-gallery gallery mb-10 grid grid-flow-row grid-cols-2 grid-rows-[1fr_auto] items-center gap-6 md:grid-cols-4" data-v-bcc120ab${_scopeId}><div class="col-span-2 flex h-96 items-center justify-center md:col-span-4" data-v-bcc120ab${_scopeId}>`);
          _push2(ssrRenderComponent(_component_nuxt_img, {
            src: `/img/portfolio/${item.images[0]}`,
            alt: `Изображение ${item.title}`,
            class: "h-full object-contain",
            format: "webp"
          }, null, _parent2, _scopeId));
          _push2(`</div><!--[-->`);
          ssrRenderList($options.getProjectsImages[index2], (el, id) => {
            _push2(`<div class="flex h-full cursor-pointer items-center justify-center overflow-hidden border p-2" data-v-bcc120ab${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: `/img/portfolio/${el}`,
              class: "gallery__img max-h-full",
              alt: `Изображение ${item.title} № ${id + 2}`,
              format: "webp"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            createVNode("p", { class: "mb-10" }, toDisplayString(item.desc), 1),
            createVNode("p", { class: "mb-2" }, [
              createVNode("span", { class: "modal__span-title float-left block font-bold uppercase" }, toDisplayString(_ctx.$t("stack")), 1),
              createVNode("span", null, toDisplayString(item.stack), 1)
            ]),
            createVNode("p", { class: "mb-10" }, [
              createVNode("span", { class: "modal__span-title float-left block font-bold uppercase" }, toDisplayString(_ctx.$t("date")), 1),
              createVNode("span", null, toDisplayString(item.date), 1)
            ]),
            createVNode("div", { class: "modal__grid-gallery gallery mb-10 grid grid-flow-row grid-cols-2 grid-rows-[1fr_auto] items-center gap-6 md:grid-cols-4" }, [
              createVNode("div", { class: "col-span-2 flex h-96 items-center justify-center md:col-span-4" }, [
                createVNode(_component_nuxt_img, {
                  src: `/img/portfolio/${item.images[0]}`,
                  alt: `Изображение ${item.title}`,
                  class: "h-full object-contain",
                  format: "webp"
                }, null, 8, ["src", "alt"])
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList($options.getProjectsImages[index2], (el, id) => {
                return openBlock(), createBlock("div", {
                  key: id,
                  onClick: ($event) => $options.selectImage(index2, id),
                  class: "flex h-full cursor-pointer items-center justify-center overflow-hidden border p-2"
                }, [
                  createVNode(_component_nuxt_img, {
                    src: `/img/portfolio/${el}`,
                    class: "gallery__img max-h-full",
                    alt: `Изображение ${item.title} № ${id + 2}`,
                    format: "webp"
                  }, null, 8, ["src", "alt"])
                ], 8, ["onClick"]);
              }), 128))
            ])
          ];
        }
      }),
      footer: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a class="modal-footer__button cursor-pointer rounded border border-indigo-600 px-4 py-2 hover:bg-indigo-600 hover:text-white"${ssrRenderAttr("href", item.href)} target="_blank" data-v-bcc120ab${_scopeId}>${ssrInterpolate(_ctx.$t("demo"))}</a>`);
        } else {
          return [
            createVNode("a", {
              class: "modal-footer__button cursor-pointer rounded border border-indigo-600 px-4 py-2 hover:bg-indigo-600 hover:text-white",
              href: item.href,
              target: "_blank"
            }, toDisplayString(_ctx.$t("demo")), 9, ["href"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bcc120ab"]]);
export {
  index as default
};
//# sourceMappingURL=index-4091d712.js.map
