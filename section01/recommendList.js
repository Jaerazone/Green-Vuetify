Vue.component('recommend-list', {
    props : ['recommend'],
    template : 
    `<div>
        <v-container>
            <!-- 12) 처음에는 빈값으로 있다가 -->
            <!-- 18) v-for을 사용한다, name -> recommend로 전부 바꿈 -->
            <!-- 19) v-card로하면 디자인이 출력되기에  v-card사용 , slide-x-transition 효과사용하려고함-->
            <v-card>
                <v-slide-x-transition group> 
                    <!-- 리스트 아이템을 이용한 추천코멘트 반복 -->
                    <!-- 20) 트랜지션을 사용하기 위해서는 반드시 키값이 있어야한다\
                            여러개라서 group을 사용함
                    -->
                    <v-list-item v-for = "r in recommend" :key="r">
                        <v-list-item-content>
                            <v-list-item-title>{{r}}를 추천합니다</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <!-- 리스트 아이템을 이용한 추천코멘트 반복 끝-->
                </v-slide-x-transition>
            </v-card>
        </v-container>
    </div>`
})