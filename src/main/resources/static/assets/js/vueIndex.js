/**
 * Created by winson on 17/7/16.
 */
// 自定义组件
// top bar 组件
Vue.component('header-top-bar', {
    props: {
        topBar: {
            type: Object,
            default: function () {
                return {
                    email: '123@example.com',
                    github: 'https://github.com'
                }
            }
        }
    },
    template:
        '<div class="top-bar container-fluid">'+
            '<div class="actions">'+
                '<a class="btn hidden-xs" :href="topBar.email"><i class="fa fa-paper-plane" aria-hidden="true"></i>邮件联系我</a>'+
            '</div>'+
            '<ul class="social list-inline">'+
                '<li><a :href="topBar.github" target="_blank"><i class="fa fa-github-alt" aria-hidden="true"></i></a></li>'+
            '</ul>'+
        '</div>'
});
// profile 组件
Vue.component('header-intro', {
    props: {
        myProfile: {
            type: Object,
            default: function () {
                return {
                    name: 'Winson',
                    title: 'Java Web Developer',
                    profile: 'my profile'
                }
            }
        }
    },
    template:
        '<div class="intro">'+
            '<div class="container text-center">'+
                '<h1 class="name">{{myProfile.name}}</h1>'+
                '<div class="title">{{myProfile.title}}</div>'+
                '<div class="profile"><p>{{myProfile.profile}}</p></p></div>'+
            '</div>'+
        '</div>'
});
// 联系信息组件
Vue.component('header-contact-info', {
    props: {
        contactInfo: {
            type: Object,
            default: function () {
                return {
                    email: '123@example.com',
                    website: 'winson.one@website.com',
                    phone: '13412345678'
                }
            }
        }
    },
    template:
        '<div class="contact-info">'+
            '<div class="container text-center">'+
                '<ul class="list-inline">'+
                    '<li class="email"><i class="fa fa-envelope"></i><a :href="contactInfo.email">{{contactInfo.website}}</a></li>'+
                    '<li><i class="fa fa-phone"></i> <a href="">{{contactInfo.phone}}</a></li>'+
                '</ul>'+
            '</div>'+
        '</div>'
});

// page-nav 组件
Vue.component('page-nav', {
   props: {
       pageNavs: {
           type: Array
       }
   },
   template:
       '<div class="page-nav-space-holder hidden-xs">'+
           '<div id="page-nav-wrapper" class="page-nav-wrapper text-center">'+
                '<div class="container">'+
                    '<ul id="page-nav" class="nav page-nav list-inline">'+
                        '<li v-for="nav in pageNavs"><a class="scrollto" :href="nav.href">{{nav.name}}</a></li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
       '</div>'
});

// 创建VUE实例
var app = new Vue({
    el: '#app',
    data: function () {
        return {
            topBar: {
                email: 'mailto:648181015@qq.com',
                github: 'https://github.com/WinsonOne'
            },
            myProfile: {
                name: 'Winson One',
                title: 'Java Web Developer',
                profile: '大二接触计算机编程,随后在专业课中选择了oracle数据库、java web开发、信息管理系统等专业课程。14年毕业后一直从事java web开发工作,开发工作中一般使用Spring Boot、MyBatis、Spring Data JPA、Thymeleaf、Vue等。自认为是一个技术宅,平时喜欢逛一些开源社区或者github学一些自己感兴趣的东西,立志成为一个全栈工程师。'
            },
            contactInfo: {
                email: 'mailto:648181015@qq.com',
                website: 'winson.one@website.com',
                phone: '1591 **2 ***2'
            },
            pageNavs: [
                {
                    href: '#experiences-section',
                    name: '工作经验'
                },
                {
                    href: '#eudcation-section',
                    name: '教育情况'
                },
                {
                    href: '#skills-section',
                    name: '开发技能'
                },
                {
                    href: '#portfolio-section',
                    name: '项目展示'
                }
            ]
        }
    }
});
