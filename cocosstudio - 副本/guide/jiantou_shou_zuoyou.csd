<GameFile>
  <PropertyGroup Name="jiantou_shou_zuoyou" Type="Node" ID="5b09d7c4-2e17-40c3-b847-61f03507cdb8" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000" ActivedAnimationName="animation0">
        <Timeline ActionTag="686611629" Property="Position">
          <PointFrame FrameIndex="0" X="60.0000" Y="-118.0000">
            <EasingData Type="6" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="-60.0000" Y="-118.0000">
            <EasingData Type="6" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="60.0000" Y="-118.0000">
            <EasingData Type="6" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="686611629" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="8.0000" Y="7.9947">
            <EasingData Type="6" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="-60.0000" Y="-60.0053">
            <EasingData Type="6" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="8.0000" Y="7.9947">
            <EasingData Type="6" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="animation0" StartIndex="0" EndIndex="60">
          <RenderColor A="255" R="224" G="255" B="255" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="110" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="Manager" ActionTag="-151450022" Tag="111" IconVisible="True" ctype="SingleNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <Children>
              <AbstractNodeData Name="shou_3" ActionTag="686611629" Tag="114" RotationSkewX="-50.3289" RotationSkewY="-50.3342" IconVisible="False" LeftMargin="-81.2313" RightMargin="-48.7687" TopMargin="-7.5188" BottomMargin="-140.4812" ctype="SpriteObjectData">
                <Size X="130.0000" Y="148.0000" />
                <AnchorPoint ScaleX="0.2946" ScaleY="0.1519" />
                <Position X="-42.9333" Y="-118.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="guide/shou.png" Plist="" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>