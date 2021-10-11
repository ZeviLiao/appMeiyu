//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HtmlViewer from './HtmlViewer';
import Line from './Line';


// create a component
const MediaInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>P1:音乐老师关键职能</Text>
            <Text style={styles.desc}>通過智能選擇，您可以快速調整對象之間的間距，通過選擇對象創建統一的網格以及在網格佈局內重新排列對象。思考收件箱界面，新聞源和畫廊的網格佈局。通過智能選擇，您可以快速調整對象之間的間距，通過選擇對象創建統一的網格以及在網格佈局內重新排列對象。思考</Text>
            <Line />
            <Text style={styles.title}>詳情</Text>
            <Text style={styles.desc}>通過智能選擇，您可以快速調整對象之間的間距，通過選擇對象創建統一的網格以及在網格佈局內重新排列對象。思考收件箱界面，新聞源和畫廊的網格佈局。通過智能選擇，您可以快速調整對象之間的間距，通過選擇對象創建統一的網格以及在網格佈局內重新排列對象。思考收件箱界面，新聞源和畫廊的網格佈局。</Text>
            <View style={{ marginVertical: 15 }}>
                <HtmlViewer>
                    <Text style={{ fontSize: 20, padding: 20 }}>
                        this is test content.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur repellat id repudiandae earum dolore omnis ullam alias. Cum obcaecati, ducimus fuga adipisci nesciunt alias, quaerat fugiat, dignissimos qui veritatis possimus quia. Quasi atque corporis optio nam ullam vel debitis sint, illo sequi placeat ratione aut eum labore cum enim quam similique laboriosam. Eligendi itaque officia incidunt quasi vel, voluptatem, suscipit cum laboriosam, similique vero illo autem. Voluptatem molestias optio doloremque repellendus, velit inventore totam illo eos qui eum fugiat accusamus sequi, cumque pariatur corrupti iusto suscipit culpa quo enim tempore tenetur, possimus quas provident. Quidem est numquam mollitia at inventore harum totam soluta facere dignissimos tenetur porro, in quaerat autem voluptatibus consequatur quas nihil aliquid! Laborum sed reprehenderit dicta doloremque officia quis ullam voluptatem dolores omnis assumenda, earum et dolorum vero veniam odit officiis obcaecati odio perspiciatis deleniti nulla maiores commodi, libero ipsa! Accusamus quod labore suscipit nobis esse quia ipsum mollitia ex, velit officiis molestiae repellat quibusdam hic quas saepe alias eveniet sapiente quisquam, fugiat dignissimos, reiciendis non quo! Ex quidem vitae eaque sed quod? Repellat ipsum similique fuga distinctio autem et quas unde pariatur ipsa, culpa delectus ipsam. Veniam, corrupti! Excepturi, adipisci! Deleniti, tempora quasi? Et accusamus doloremque quae deserunt reprehenderit, error totam ut impedit quia facere cumque quas a ullam odio, nihil consequuntur repudiandae dicta id itaque nisi officia ipsam perspiciatis odit porro. Nobis eveniet aliquam asperiores illum recusandae ipsum porro! Quisquam accusamus error quaerat aliquid sint velit incidunt beatae voluptate similique? Ad vero recusandae animi quos consequuntur atque, voluptas libero molestias quidem possimus! Optio ut eaque id totam ullam illum officiis quasi enim, itaque minima tempora odit quis reiciendis accusantium odio in veritatis voluptatibus cumque atque ipsa unde omnis temporibus repudiandae! Ea, repudiandae repellat! Magni commodi incidunt dolor similique mollitia distinctio nihil provident tempore fuga?
                    </Text>
                </HtmlViewer>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
    },
    desc: {
        fontSize: 15,
    },
});

//make this component available to the app
export default MediaInfo;
