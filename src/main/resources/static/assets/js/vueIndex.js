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

// 工作经验
Vue.component('working-experience', {
    props: {
        experiences: {
            type: Array
        }
    },
    template: 
        '<section id="experiences-section" class="experiences-section section">'+
            '<h2 class="section-title">工作经验</h2>'+
            '<div class="timeline">'+
                '<div class="item" v-for="experience in experiences">'+
                    '<div class="work-place">'+
                        '<h3 class="place">{{experience.company}}</h3>'+
                        '<div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>{{experience.location}}</div>'+
                    '</div>'+
                    '<div class="job-meta">'+
                        '<div class="title">{{experience.title}}</div>'+
                        '<div class="time">{{experience.titme}}</div>'+
                    '</div>'+
                    '<div class="job-desc"><p>{{experience.desc}}</p></div>'+
                '</div>'+
            '</div>'+
        '</section>'
});

// 教育情况组件
Vue.component('education-section', {
   props: {
       education: {
           type: Object
       }
   },
   template: 
       '<section id="eudcation-section" class="education-section section">'+
           '<h2 class="section-title">教育情况</h2>'+
           '<div class="row">'+
                '<div class="item col-xs-12 col-sm-12">'+
                    '<div class="item-inner">'+
                        '<h3 class="degree">{{education.degree}}</h3>'+
                        '<div class="education-body">{{education.university}}</div>'+
                        '<div class="time">{{education.time}}</div>'+
                        '<div class="desc">{{education.desc}}</div>'+
                    '</div>'+
                '</div>'+
           '</div>'+
       '</section>' 
});

// 开发技能组件
Vue.component('top-skills', {
    props: {
        topSkills: {
            type: Array
        }
    },
    template:
        '<div class="top-skills">'+
            '<h3 class="subtitle">主要技能</h3>'+
            '<div class="row">'+
                '<div class="item col-xs-12 col-sm-4" v-for="skill in topSkills">'+
                    '<div class="item-inner">'+
                        '<div class="chart-easy-pie text-center">'+
                            '<div class="chart-theme-1 chart" :data-percent="skill.percent"><span>{{skill.percent}}</span>%</div>'+
                        '</div>'+
                        '<h4 class="skill-name">{{skill.name}}</h4>'+
                        '<div class="level">{{skill.level}}</div>'+
                        '<div class="desc">{{skill.desc}}</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
});

Vue.component('other-skills', {
   props: {
       otherSkills: {
           type: Array
       }
   },
   template:
       '<div class="other-skills">'+
           '<h3 class="subtitle">其他技能</h3>'+
           '<div class="misc-skills">'+
                '<template v-for="(skill, index) in otherSkills">'+
                    '<span class="skill-tag">{{skill.name}}</span>'+
                    '<br v-if="(index+1) % 5 === 0">'+
                '</template>'+
           '</div>'+
       '</div>'
});

Vue.component('skill-section', {
    props: {
      skills: {
          type: Object,
          default: function () {
              return {
                  topSkills: [],
                  otherSkills: []
              }
          }
      }
    },
    template: 
        '<section id="skills-section" class="skills-section section text-center">'+
            '<h2 class="section-title">开发技能</h2>'+
            '<top-skills :top-skills="skills.topSkills"></top-skills>'+
            '<other-skills :other-skills="skills.otherSkills"></other-skills>'+
        '</section>'
});

// 项目作品组件
Vue.component('project-section', {
    props: {
        projects: {
            type: Array
        }
    },
    template:
        '<section id="portfolio-section" class="portfolio-section section">'+
            '<h2 class="section-title">项目展示</h2>'+
            '<ul id="filters" class="filters clearfix">'+
                '<li class="type active" data-filter="*">全部</li>'+
                '<li class="type" data-filter=".backend">参与项目</li>'+
                '<li class="type" data-filter=".frontend">个人作品</li>'+
            '</ul>'+
            '<div class="items-wrapper isotope row">'+
                '<div class="item col-md-3 col-xs-6" :class="{backend: project.isBackend, frontend: project.isFrontend}" v-for="project in projects">'+
                    ' <div class="item-inner">'+
                        '<figure class="figure">'+
                            '<img class="img-responsive" :src="project.imageUrl" alt="" />'+
                        '</figure>'+
                        '<div class="content text-left">'+
                            '<h3 class="sub-title"><a :href="project.link" target="_blank">{{project.title}}</a></h3>'+
                            '<div class="meta">{{project.meta}}</div>'+
                            '<div class="action"><a :href="project.action" target="_blank">{{project.actionName}}</a></div>'+
                        '</div>'+
                        '<a class="link-mask" :href="project.link" target="_blank"></a>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</section>'
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
            ],
            experiences: [
                {
                    company: '华软集团',
                    location: '广州',
                    title: '中级java开发工程师',
                    time: '2016 - 2017',
                    desc: '华软集团是一个做智能交通的公司,本人所在的部门只要是做粤通卡的空中充值业务。工作期间除了粤通卡充值系统的日常开发维护,比如报表功能开发、个人用户升级功能等。另外还参与了一些新系统的开发,如设备管理系统、湖南空中充值系统。'
                },
                {
                    company: '华南资讯',
                    location: '广州',
                    title: '初级java开发工程师',
                    time: '2014 - 2016',
                    desc: '这是毕业后的第一份工作,在此实习并转正工作了两年。这份工作让自己对软件开发有了更多的认识,主要的工作内容是开发一些信息管理系统。如大学生毕业报到系统、事业单位人事管理系统、专项资金管理系统等。一开始主要是开发为主,主要使用自定义标签完成前端界面。后台框架是Spring + JDBC或Mybatis,数据库是oracle,有时需要编写一些PLSQL。应用部署的服务器为WebLogic。第二年后开始接触设计工作,其中包括数据库设计、系统技术选型等工作。'
                }
            ],
            education: {
                degree: '工业工程',
                university: '华南农业大学',
                time: '2014 - 2010',
                desc: '华南农业大学是全国重点大学,广东省和农业部共建的“211工程”大学,广东省高水平大学重点建设高校。本专业是学校新开设的专业,归属于学校的信息学院,因此专业的课程不仅涉及机械、管理,还有计算机方面的知识。这与学院中的另外一个信息管理的专业比较相似,只是多了一些机械方面的课程。主要课程包括以下:电工与电子技术基础、高级语言程序设计、管理统计学、生产运作管理与ER、通信与计算机网络、运筹学、java面向对象程序设计、数据库原理与应用、web应用开发技术、管理信息系统等。'
            },
            skills: {
                topSkills: [
                    {
                        percent: '85',
                        name: 'Spring & SpringMVC',
                        level: '熟练掌握',
                        desc: '开发时使用Spring作为核心容器,无缝集成SpringMVC实现MVC三层模式的控制器层。'
                    },
                    {
                        percent: '80',
                        name: 'Spring Boot',
                        level: '掌握使用',
                        desc: 'Spring Boot框架简化了以往开发应用的框架集成,大大减少以往框架集成的配置文件。使用特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置,框架提供了各种快速集成的starter依赖。'
                    },
                    {
                        percent: '80',
                        name: 'Mybatis & JPA',
                        level: '掌握使用',
                        desc: '在数据库层操作常用Mybatis,不过对于一些简单的数据库层操作也会使用JPA,这样可以快速开发,少写一些简单的增删改查语句。另外JPA也可以执行标准SQL查询,也可完成复杂查询以及查询结果与对象的映射。'
                    }
                ],
                otherSkills: [
                    {
                        name: 'Maven'
                    },
                    {
                        name: 'Git'
                    },
                    {
                        name: 'SVN'
                    },
                    {
                        name: 'IDEA'
                    },
                    {
                        name: 'PowerDesign'
                    },
                    {
                        name: 'Thymeleaf'
                    },
                    {
                        name: 'Vue'
                    },
                    {
                        name: 'Element UI'
                    },
                    {
                        name: 'Easy UI'
                    },
                    {
                        name: 'Bootstrap'
                    }
                ]
            },
            projects: [
                {
                    isBackend: true,
                    isFrontend: false,
                    imageUrl: 'assets/images/portfolio/portfolio-1.png',
                    link: 'https://cz.96533.com/',
                    title: '粤通卡空中充值门户',
                    meta: 'Spring+Struts+Hibernate',
                    action: 'https://cz.96533.com/',
                    actionName: 'cz96533.com'
                },
                {
                    isBackend: false,
                    isFrontend: true,
                    imageUrl: 'assets/images/portfolio/portfolio-2.png',
                    link: 'https://git.oschina.net/winsonone/excel',
                    title: 'excel导出组件',
                    meta: 'Apache POI',
                    action: 'https://git.oschina.net/winsonone/excel',
                    actionName: 'View on Git'
                },
                {
                    isBackend: true,
                    isFrontend: false,
                    imageUrl: 'assets/images/portfolio/portfolio-3.png',
                    link: 'http://210.76.66.109:7006/gdweb/ggfw/web/pub/ggfwzyjs.do',
                    title: '专业技术人才管理系统',
                    meta: 'Spring+SpringMVC+Mybatis+WebService',
                    action: 'http://210.76.66.109:7006/gdweb/ggfw/web/pub/ggfwzyjs.do',
                    actionName: '职称管理系统'
                },
                {
                    isBackend: false,
                    isFrontend: true,
                    imageUrl: 'assets/images/portfolio/portfolio-4.png',
                    link: 'https://admin4blog.herokuapp.com/',
                    title: '个人博客后台',
                    meta: 'Node Express',
                    action: 'https://git.heroku.com/admin4blog.git',
                    actionName: 'View on Github'
                },
                {
                    isBackend: true,
                    isFrontend: false,
                    imageUrl: 'assets/images/portfolio/portfolio-5.png',
                    link: 'http://210.76.66.109:7006/gdweb/ggfw/web/pub/ggfwzxzj.do',
                    title: '专项资金管理系统',
                    meta: 'Spring+SpringMVC+Mybatis+WebService',
                    action: 'http://210.76.66.109:7006/gdweb/ggfw/web/pub/ggfwzxzj.do',
                    actionName: '网上申报系统'
                },
                {
                    isBackend: true,
                    isFrontend: false,
                    imageUrl: 'assets/images/portfolio/portfolio-6.png',
                    link: '#',
                    title: '对账结算系统',
                    meta: 'Spring Boot + Vue',
                    action: '#',
                    actionName: '对账结算'
                },
                {
                    isBackend: true,
                    isFrontend: false,
                    imageUrl: 'assets/images/portfolio/portfolio-7.png',
                    link: 'http://bd.gdrc.com/',
                    title: '高校毕业生报到',
                    meta: 'Spring+Jquery Easy UI',
                    action: 'http://bd.gdrc.com/',
                    actionName: '网上报到系统'
                },
                {
                    isBackend: false,
                    isFrontend: true,
                    imageUrl: 'assets/images/portfolio/portfolio-8.png',
                    link: 'https://winsonresume.herokuapp.com/index.html',
                    title: '个人简历',
                    meta: 'Spring Boot + Vue',
                    action: 'https://github.com/WinsonOne/resume',
                    actionName: 'View on Github'
                }
            ]
        }
    }
});
