<GameFile>
  <PropertyGroup Name="vsTicket" Type="Layer" ID="aaf6989e-5f95-49c8-895a-064c6af65994" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="120" Speed="1.0000" ActivedAnimationName="animation0">
        <Timeline ActionTag="665207510" Property="Position">
          <PointFrame FrameIndex="0" X="360.0000" Y="640.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="120" X="360.0000" Y="640.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="665207510" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="120" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="665207510" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="120" X="180.0000" Y="180.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="animation0" StartIndex="0" EndIndex="120">
          <RenderColor A="255" R="60" G="179" B="113" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" Tag="120" ctype="GameLayerObjectData">
        <Size X="1334.0000" Y="750.0000" />
        <Children>
          <AbstractNodeData Name="touch" ActionTag="930513212" Tag="143" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="229" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="1334.0000" Y="750.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="667.0000" Y="375.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <SingleColor A="255" R="4" G="15" B="50" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="light" ActionTag="665207510" Tag="144" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="193.0000" RightMargin="193.0000" TopMargin="-152.0000" BottomMargin="-152.0000" LeftEage="312" RightEage="312" TopEage="347" BottomEage="347" Scale9OriginX="312" Scale9OriginY="347" Scale9Width="432" Scale9Height="360" ctype="ImageViewObjectData">
            <Size X="948.0000" Y="1054.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="667.0000" Y="375.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="0.7106" Y="1.4053" />
            <FileData Type="Normal" Path="vsTicket/light.png" Plist="" />
          </AbstractNodeData>
          <AbstractNodeData Name="bg" ActionTag="-1234574069" Tag="145" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="347.5000" RightMargin="347.5000" TopMargin="-44.0000" BottomMargin="-44.0000" TouchEnable="True" LeftEage="312" RightEage="312" TopEage="347" BottomEage="347" Scale9OriginX="312" Scale9OriginY="347" Scale9Width="15" Scale9Height="144" ctype="ImageViewObjectData">
            <Size X="639.0000" Y="838.0000" />
            <Children>
              <AbstractNodeData Name="btn_lq" ActionTag="2092631457" Tag="146" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="89.5000" RightMargin="89.5000" TopMargin="594.0000" BottomMargin="96.0000" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="430" Scale9Height="126" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="460.0000" Y="148.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="319.5000" Y="170.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2029" />
                <PreSize X="0.7199" Y="0.1766" />
                <TextColor A="255" R="65" G="65" B="70" />
                <NormalFileData Type="Normal" Path="vsTicket/btn_lq.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="tip" ActionTag="-1359989415" Tag="793" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="228.5000" RightMargin="228.5000" TopMargin="218.4995" BottomMargin="556.5005" FontSize="45" LabelText="恭喜获得" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="182.0000" Y="63.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="319.5000" Y="588.0005" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="143" G="82" B="58" />
                <PrePosition X="0.5000" Y="0.7017" />
                <PreSize X="0.2848" Y="0.0752" />
                <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="count" ActionTag="1896458498" Tag="147" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="240.0000" RightMargin="240.0000" TopMargin="278.0000" BottomMargin="420.0000" FontSize="100" LabelText="￥0" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="159.0000" Y="140.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="319.5000" Y="490.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="244" G="43" B="55" />
                <PrePosition X="0.5000" Y="0.5847" />
                <PreSize X="0.2488" Y="0.1671" />
                <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="num_tip" ActionTag="-1825606311" Tag="9" IconVisible="False" LeftMargin="64.0000" RightMargin="63.0000" TopMargin="763.0000" BottomMargin="33.0000" FontSize="30" LabelText="再完成      场后即可再次领取惊喜红包" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="512.0000" Y="42.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="54.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="240" B="206" />
                <PrePosition X="0.5008" Y="0.0644" />
                <PreSize X="0.8013" Y="0.0501" />
                <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="num" ActionTag="797272326" Tag="785" IconVisible="False" LeftMargin="172.0000" RightMargin="441.0000" TopMargin="756.0000" BottomMargin="26.0000" FontSize="40" LabelText="3" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="26.0000" Y="56.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="185.0000" Y="54.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="250" B="116" />
                <PrePosition X="0.2895" Y="0.0644" />
                <PreSize X="0.0407" Y="0.0668" />
                <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="667.0000" Y="375.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="0.4790" Y="1.1173" />
            <FileData Type="Normal" Path="vsTicket/bg.png" Plist="" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>